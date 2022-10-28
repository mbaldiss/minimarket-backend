import * as dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Usuario } from "../models/index.js";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new Strategy(jwtOptions, async (payload, next) => {
    const usuario = await Usuario.findOne({
      where: { dni: payload.dni },
    });
    if (usuario) {
      next(null, usuario);
    } else {
      next(null, false);
    }
  })
);

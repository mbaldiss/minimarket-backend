import express from "express";
import passport from "passport";

import {
  registrarUsuarioMiddleware,
  loginUsuarioMiddleware,
} from "../middlewares/auth-middleware.js";

export const authRouter = express.Router();

// POST /registrar usuario
authRouter.post("/registrar", registrarUsuarioMiddleware);

// POST /login
authRouter.post("/login", loginUsuarioMiddleware);

authRouter.get(
  "/perfil",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bcrypt from "bcryptjs";
import { Usuario } from "../models/index.js";
import jwt from "jsonwebtoken";
import passport from "passport";

export const authRouter = express.Router();

// POST /registrar usuario
authRouter.post("/registrar", async (req, res) => {
  const passwordHashed = await bcrypt.hash(req.body.contraseña, 8);
  const usuario = await Usuario.findOne({ where: { dni: req.body.dni } });
  if(usuario){
    res.send("Usuario ya existe");
    return;
  }
  const nuevaCuenta = await Usuario.create({
    dni: req.body.dni,
    contraseña: passwordHashed,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    fecha_nacimiento: req.body.fecha_nacimiento,
    fecha_ingreso: req.body.fecha_ingreso,
  });
  res.send("Usuario creado con exito");
});

// POST /login
authRouter.post("/login", async (req, res) => {
  const usuario = await Usuario.findOne({ where: { dni: req.body.dni } });
  if (!usuario) {
    res.send("DNI o contraseña inválida");
    return;
  }
  const contraseñaCompared = await bcrypt.compare(
    req.body.contraseña,
    usuario.contraseña
  );
  if (!contraseñaCompared) {
    res.send("DNI o contraseña inválida");
    return;
  }

  const payload = {
    dni: usuario.dni,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });
  res.json({
    dni: usuario.dni,
    token: token,
  });
});

authRouter.get(
  "/perfil",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

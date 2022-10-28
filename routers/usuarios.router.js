import express from "express";
// import { Persona, Cuenta } from "../models/index.js";
// import { Usuario } from "../models/index.js";
import { usuariosMiddleware } from "../middlewares/usuarios-middleware.js";

export const usuariosRouter = express.Router();

// GET / todos los usuarios
usuariosRouter.get("/", usuariosMiddleware);

// GET / un usuario por dni
usuariosRouter.get("/:dni", async (req, res) => {
  const usuario = await Usuario.findOne({ where: { dni: req.params.dni } });
  res.send(usuario);
});

import express from "express";
// import { Persona, Cuenta } from "../models/index.js";
import { Usuario } from "../models/index.js";

export const usuariosRouter = express.Router();

// GET /
usuariosRouter.get("/", async (req, res) => {
  // const usuarios = await Usuario.findAll({ include: Persona });
  const usuarios = await Usuario.findAll();
  res.send(usuarios);
});

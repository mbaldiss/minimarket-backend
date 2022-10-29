import express from "express";
// import { Persona, Cuenta } from "../models/index.js";
// import { Usuario } from "../models/index.js";
import { todosLosUsuariosMiddleware, usuarioPorDniMiddleware } from "../middlewares/usuarios-middleware.js";

export const usuariosRouter = express.Router();

// GET / todos los usuarios
usuariosRouter.get("/", todosLosUsuariosMiddleware);

// GET / un usuario por dni
usuariosRouter.get("/:dni", usuarioPorDniMiddleware);

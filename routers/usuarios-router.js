import express from "express";
import {
  todosLosUsuariosMiddleware,
  usuarioPorDniMiddleware,
  putModificarUsuarioMiddleware,
} from "../middlewares/usuarios-middleware.js";

export const usuariosRouter = express.Router();

// GET / todos los usuarios
usuariosRouter.get("/", todosLosUsuariosMiddleware);

// GET / un usuario por dni
usuariosRouter.get("/:dni", usuarioPorDniMiddleware);

// PUT / un usuario por dni
usuariosRouter.put("/", putModificarUsuarioMiddleware);

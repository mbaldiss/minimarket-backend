import express from "express";
import { agregarRol } from "../middlewares/rol-middleware.js";

export const rolRouter = express.Router();

// POST / agregar rol a usuario
rolRouter.post("/", agregarRol);





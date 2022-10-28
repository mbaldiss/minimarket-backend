import express from "express";
import { Persona, Cuenta, Tarea, Materia } from "../models/index.js";

export const personasRouter = express.Router();

// GET /
personasRouter.get("/", async (req, res) => {
  const personas = await Persona.findAll({ include: [Cuenta, Tarea, Materia] });
  res.send(personas);
});

import express from "express";
import { Persona, Tarea } from "../models/index.js";

export const tareasRouter = express.Router();

// GET /
tareasRouter.get("/", async (req, res) => {
  const tareas = await Tarea.findAll({ include: Persona });
  res.send(tareas);
});

// GET /:id
tareasRouter.get("/:id", async (req, res) => {
  const tarea = await Tarea.findByPk(req.params.id);
  res.send(tarea);
});

// POST /
tareasRouter.post("/", async (req, res) => {
  const nuevaTarea = await Tarea.create({
    descripcion: req.body.descripcion,
    lista: req.body.lista,
  });
  res.send(nuevaTarea);
});

// PUT /:id
tareasRouter.put("/:id", async (req, res) => {
  await Tarea.update(
    { descripcion: req.body.descripcion, lista: req.body.lista },
    { where: { id: req.params.id } }
  );
  res.send("ok");
});

// DELETE /:id
tareasRouter.delete("/:id", async (req, res) => {
  await Tarea.destroy({ where: { id: req.params.id } });
  res.send("ok");
});

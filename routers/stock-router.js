import express from "express";
import {
  postCantidadProductoMiddleware,
  putCantidadProductoMiddleware,
} from "../middlewares/stock-middleware.js";

export const stockRouter = express.Router();

// POST / agregar cantidad de producto
stockRouter.post("/", postCantidadProductoMiddleware);

// PUT / modificar cantidad de producto dependiendo del lugar
stockRouter.put("/", putCantidadProductoMiddleware);

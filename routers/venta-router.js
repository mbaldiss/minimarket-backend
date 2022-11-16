import express from "express";
import {
  postVentaMiddleware
} from "../middlewares/venta-middleware.js";

export const ventaRouter = express.Router();

// POST / procesar venta
ventaRouter.post("/", postVentaMiddleware);

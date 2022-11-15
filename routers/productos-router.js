import express from "express";
import {
  getTodosLosProductosMiddleware,
  postProductoMiddleware,
  postBuscarProductoMiddleware,
  deleteBorrarProductoMiddleware,
  putModificarProductoMiddleware,
} from "../middlewares/productos-middleware.js";

export const productosRouter = express.Router();

// GET / todos los productos
productosRouter.get("/", getTodosLosProductosMiddleware);

// POST / 
productosRouter.post("/", postProductoMiddleware);

// POST / buscar producto por codigo de barra
productosRouter.post("/buscar", postBuscarProductoMiddleware);

// DELETE / borrar producto por codigo de barra
productosRouter.delete("/", deleteBorrarProductoMiddleware);

// PUT / modificar producto por codigo de barra
productosRouter.put("/", putModificarProductoMiddleware);

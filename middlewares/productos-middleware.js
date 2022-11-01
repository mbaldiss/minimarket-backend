import {
  getTodosLosProductosController,
  postProductoController,
  postBuscarProductoController,
  deleteBorrarProductoController,
  putModificarProductoController,
} from "../controllers/productos-controller.js";

export const getTodosLosProductosMiddleware = async (req, res) => {
  try {
    await getTodosLosProductosController(req, res);
  } catch (error) {}
};

export const postProductoMiddleware = async (req, res) => {
  try {
    await postProductoController(req, res);
  } catch (error) {}
};

export const postBuscarProductoMiddleware = async (req, res) => {
  try {
    await postBuscarProductoController(req, res);
  } catch (error) {}
};

export const deleteBorrarProductoMiddleware = async (req, res) => {
  try {
    await deleteBorrarProductoController(req, res);
  } catch (error) {}
};

export const putModificarProductoMiddleware = async (req, res) => {
  try {
    await putModificarProductoController(req, res);
  } catch (error) {}
};

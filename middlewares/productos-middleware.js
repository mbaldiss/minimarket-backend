import {
  getTodosLosProductosController,
  postProductoController,
  postBuscarProductoController,
  deleteBorrarProductoController,
  putModificarProductoController,
  postCheckProductoController,
} from "../controllers/productos-controller.js";

export const getTodosLosProductosMiddleware = async (req, res) => {
  try {
    await getTodosLosProductosController(req, res);
  } catch (error) {}
};

export const postProductoMiddleware = async (req, res) => {
  try {
    const producto = await postCheckProductoController(req.body.codigo_barra);
    producto
      ? res.status(404).send("Codigo de barra existente")
      : await postProductoController(req, res);
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

import {
  postVentaController,
} from "../controllers/venta-controller.js";

export const postVentaMiddleware = async (req, res) => {
  try {
    await postVentaController(req, res);
  } catch (error) {}
};

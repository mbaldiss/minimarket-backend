import {
  postCantidadProductoController,
  buscarProducto,
  buscarStock,
  putCantidadProductoController,
} from "../controllers/stock-controller.js";

export const postCantidadProductoMiddleware = async (req, res) => {
  try {
    const producto = (await buscarProducto(req.body.codigo_barra))
      ? await buscarProducto(req.body.codigo_barra)
      : res.send("Producto inexistente");
    const stock = producto.id ? await buscarStock(producto.id) : false;

    stock
      ? await postCantidadProductoController(
          req,
          res,
          "update",
          stock,
          producto
        )
      : await postCantidadProductoController(
          req,
          res,
          "create",
          stock,
          producto
        );
  } catch (error) {}
};

export const putCantidadProductoMiddleware = async (req, res) => {
  try {
    const producto = (await buscarProducto(req.body.codigo_barra))
      ? await buscarProducto(req.body.codigo_barra)
      : res.send("Producto inexistente");

    const stock = producto.id
      ? (await buscarStock(producto.id, req.body.origen))
        ? await buscarStock(producto.id, req.body.origen)
        : res.send("No hay stock")
      : res.send("No hay stock");

    stock.cantidad >= req.body.cantidad
      ? await putCantidadProductoController(req, res, stock, producto)
      : res.send("La cantidad solicitada supera a la existente");
  } catch (error) {}
};

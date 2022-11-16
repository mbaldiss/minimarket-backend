import { Producto_Stock } from "../models/index.js";
import { buscarProducto, buscarStock } from "./stock-controller.js";


export const postVentaController = async (req, res) => {
  try {

    for(let i = 0; i < req.body.length; i++){
      const producto = await buscarProducto(req.body[i].codigo_barra);
      const stock = await buscarStock(producto.id, 2);
      Producto_Stock.update(
        {
          cantidad: stock.cantidad - 1,
        },
        {
          where: { id_stock: 2, id_producto: producto.id },
        }
      )
    }

    return res.status(200).send("Venta procesada correctamente");
  } catch (error) {
    res.send(error.message);
  }
};

import { Producto, Producto_Stock } from "../models/index.js";

export const postCantidadProductoController = async (
  req,
  res,
  type,
  stock,
  producto
) => {
  try {
    switch (type) {
      case "update":
        await Producto_Stock.update(
          {
            cantidad: stock.cantidad + req.body.cantidad,
          },
          {
            where: { id: stock.id },
          }
        );
        break;
      case "create":
        await Producto_Stock.create({
          productoId: producto.id,
          stockId: 1,
          cantidad: req.body.cantidad,
        });
        break;
    }
    return res.send("Stock agregado correctamente");
  } catch (error) {
    res.send(error.message);
  }
};

export const buscarProducto = async (codigo_barra) => {
  try {
    const producto = await Producto.findOne({
      where: { codigo_barra: codigo_barra },
    });

    return producto;
  } catch (error) {}
};

export const buscarStock = async (id_producto, id_stock = 1) => {
  try {
    const stock = await Producto_Stock.findOne({
      where: { id_producto: id_producto, id_stock: id_stock },
    });

    return stock;
  } catch (error) {}
};

export const putCantidadProductoController = async (
  req,
  res,
  stock,
  producto
) => {
  try {
    const stockDestino = await buscarStock(producto.id, req.body.destino);

    if (stockDestino) {
      await Producto_Stock.update(
        {
          cantidad: stockDestino.cantidad + req.body.cantidad,
        },
        {
          where: { id_stock: req.body.destino, id_producto: producto.id },
        }
      );
      await Producto_Stock.update(
        {
          cantidad: stock.cantidad - req.body.cantidad,
        },
        {
          where: { id_stock: req.body.origen, id_producto: producto.id },
        }
      );
    } else {
      await Producto_Stock.create({
        productoId: producto.id,
        stockId: req.body.destino,
        cantidad: req.body.cantidad,
      });
      await Producto_Stock.update(
        {
          cantidad: stock.cantidad - req.body.cantidad,
        },
        {
          where: { id_stock: req.body.origen, id_producto: producto.id },
        }
      );
    }

    return res.send("Stock modificado correctamente");
  } catch (error) {
    res.send(error.message);
  }
};

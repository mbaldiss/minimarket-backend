import { Producto, Producto_Stock } from "../models/index.js";

export const postProductoController = async (req, res) => {
  try {
    await Producto.create({
      nombre: req.body.nombre,
      precio_compra: req.body.precio_compra,
      precio_venta: req.body.precio_venta,
      codigo_barra: req.body.codigo_barra,
    });
    return res.send("Producto creado con exito");
  } catch (error) {
    console.error("No se pudo crear el producto:", error);
    return res.status(404).send("No se pudo crear el producto");
  }
};

export const getTodosLosProductosController = async (req, res) => {
  try {
    let productos = await Producto.findAll();
    let stock = await Producto_Stock.findAll();

    productos = productos.map((producto) => {
      const deposito = stock.find((s) => {
        if (s.productoId === producto.id && s.stockId === 1) {
          return s.cantidad;
        }
      });
      const salon = stock.find((s) => {
        if (s.productoId === producto.id && s.stockId === 2) {
          return s.cantidad;
        }
      });
      return {
        ...producto.dataValues,
        deposito:
          deposito !== undefined
            ? deposito.cantidad !== undefined
              ? deposito.cantidad
              : 0
            : 0,
        salon:
          salon !== undefined
            ? salon.cantidad !== undefined
              ? salon.cantidad
              : 0
            : 0,
        total:
          (deposito !== undefined
            ? deposito.cantidad !== undefined
              ? deposito.cantidad
              : 0
            : 0) +
          (salon !== undefined
            ? salon.cantidad !== undefined
              ? salon.cantidad
              : 0
            : 0),
      };
    });

    return res.send(productos);
  } catch (error) {
    console.log(error);
  }
};

export const postBuscarProductoController = async (req, res) => {
  try {
    const producto = await Producto.findOne({
      where: { codigo_barra: req.body.codigo_barra },
    });
    
    producto ? res.send(producto) : res.send("Producto inexistente");
  } catch (error) {
    console.log(error);
  }
};

export const postCheckProductoController = async (codigo_barra) => {
  try {
    const producto = await Producto.findOne({
      where: { codigo_barra: codigo_barra },
    });
    return producto;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBorrarProductoController = async (req, res) => {
  try {
    const producto = await Producto.destroy({
      where: { codigo_barra: req.body.codigo_barra },
    });

    producto
      ? res.send("Producto borrado correctamente")
      : res.send("Producto inexistente");
  } catch (error) {
    console.log(error);
  }
};

export const putModificarProductoController = async (req, res) => {
  try {
    const body = req.body;

    const producto = await Producto.update(
      { ...body },
      {
        where: {
          codigo_barra: body.codigo_barra,
        },
      }
    );

    producto[0]
      ? res.send("Producto modificado correctamente")
      : (await Producto.findOne({
          where: { codigo_barra: req.body.codigo_barra },
        }))
      ? res.send("Producto modificado correctamente")
      : res.send("Producto inexistente");
  } catch (error) {
    console.log(error);
  }
};

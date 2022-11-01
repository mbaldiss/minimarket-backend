import { Producto } from "../models/producto-model.js";

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
    const productos = await Producto.findAll();
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
    return res.send(producto);
  } catch (error) {
    console.log(error);
  }
};

export const deleteBorrarProductoController = async (req, res) => {
  try {
    await Producto.destroy({
      where: { codigo_barra: req.body.codigo_barra },
    });
    return res.send("Producto borrado correctamente");
  } catch (error) {
    console.log(error);
  }
};

export const putModificarProductoController = async (req, res) => {
  try {
    const body = req.body;

    await Producto.update(
      { ...body },
      {
        where: {
          codigo_barra: body.codigo_barra,
        },
      }
    );
    return res.send("Producto modificado correctamente: ");
  } catch (error) {
    console.log(error);
  }
};

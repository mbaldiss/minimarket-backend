import { Usuario } from "../models/usuario-model.js";

export const usuariosController = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.send(usuarios);
  } catch (error) {}
};

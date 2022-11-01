import { Usuario } from "../models/usuario-model.js";

export const todosLosUsuariosController = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.send(usuarios);
  } catch (error) {}
};

export const usuarioPorDniController = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ where: { dni: req.params.dni } });
    res.send(usuario);
  } catch (error) {}
};

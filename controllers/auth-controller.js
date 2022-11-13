import * as dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcryptjs";
import { Usuario, Usuario_Rol } from "../models/index.js";

export const registrarUsuarioController = async (req, res) => {
  try {
    const passwordHashed = await bcrypt.hash(req.body.contraseña, 8);

    await Usuario.create({
      dni: req.body.dni,
      contraseña: passwordHashed,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fecha_nacimiento: req.body.fecha_nacimiento,
      fecha_ingreso: req.body.fecha_ingreso,
    });
    return res.send("Usuario creado con exito");
  } catch (error) {
    console.log(error);
  }
};

export const buscarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ where: { dni: req.body.dni } });
    if (usuario) {
      return usuario;
    } else {
      return res.status(404).send("Usuario inexistente");
    }
  } catch (error) {}
};

export const buscarRoles = async (id) => {
  try {
    const roles = await Usuario_Rol.findAll({ where: { id_usuario: id } });

    return roles;
  } catch (error) {}
};

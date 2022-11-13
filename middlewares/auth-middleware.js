import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {
  registrarUsuarioController,
  buscarUsuario,
  buscarRoles,
} from "../controllers/auth-controller.js";

export const registrarUsuarioMiddleware = async (req, res) => {
  try {
    const usuario = await buscarUsuario(req.body.dni);
    console.log(usuario);
    if (usuario) {
      return res.status(404).send("Usuario ya existe");
    }
    await registrarUsuarioController(req, res);
  } catch (error) {}
};

export const loginUsuarioMiddleware = async (req, res) => {
  try {
    const usuario = await buscarUsuario(req, res);
    const roles = await buscarRoles(usuario.id);

    const contraseñaCompared = await bcrypt.compare(
      req.body.contraseña,
      usuario.contraseña
    );
    if (!contraseñaCompared) {
      return res.status(403).send("Contraseña incorrecta");
    }

    const payload = {
      dni: usuario.dni,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    return res.json({
      dni: usuario.dni,
      nombre: usuario.nombre,
      token,
      roles,
    });
  } catch (error) {}
};

import { Usuario_Rol } from "../models/index.js";
import { buscarUsuario } from "./auth-controller.js";

export const agregarRolController = async (req, res) => {
  try {
    const usuario = await buscarUsuario(req, res);

    await Usuario_Rol.create({
      usuarioId: usuario.id,
      rolId: req.body.rol,
    });
    return res.send("Rol creado con exito");
  } catch (error) {
    console.log(error);
  }
};

import { Usuario_Rol } from "../models/index.js";
import { buscarUsuario } from "./auth-controller.js";

export const agregarRolController = async (req, res) => {
  try {
    const usuario = await buscarUsuario(req.body.dni);

    await Usuario_Rol.create({
      id_usuario: usuario.id,
      id_rol: req.body.rol,
  });
    return res.send("Rol creado con exito");
  } catch (error) {
    
  }
};

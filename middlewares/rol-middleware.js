import {
  agregarRolController
} from "../controllers/rol-controller.js";
import { buscarRoles, buscarUsuario } from "../controllers/auth-controller.js"

export const agregarRol = async (req, res) => {
  try {
    const usuario = await buscarUsuario(req.body.dni);
    let roles = await buscarRoles(usuario.id);

    roles = roles.filter((rol) => req.body.rol === rol.rolId ? true : false);
    roles.length === 0 ? await agregarRolController(req, res) : res.send("Rol ya existente para este usuario");
  } catch (error) {}
};

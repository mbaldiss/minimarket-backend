import { agregarRolController } from "../controllers/rol-controller.js";
import { buscarRoles, buscarUsuario } from "../controllers/auth-controller.js";

export const agregarRol = async (req, res) => {
  try {
    const usuario = await buscarUsuario(req, res);
    let roles = usuario
      ? await buscarRoles(usuario.id)
      : res.send("Usuario inexistente");

    roles = roles.filter((rol) => req.body.rol === rol.rolId);
    roles.length === 0
      ? await agregarRolController(req, res)
      : res.send("Rol ya existente para este usuario");
  } catch (error) {
    console.log(error);
  }
};

import { usuariosController } from "../controllers/usuarios-controller.js";

export const usuariosMiddleware = async (req, res) => {
    try {
        const usuarios = await usuariosController(req, res);
        res.send(usuarios);
    } catch (error) {

    }
  };

import { todosLosUsuariosController, usuarioPorDniController } from "../controllers/usuarios-controller.js";

export const todosLosUsuariosMiddleware = async (req, res) => {
    try {
        await todosLosUsuariosController(req, res);
        
    } catch (error) {

    }
  };

export const usuarioPorDniMiddleware = async (req, res) => {
    try {
        await usuarioPorDniController(req, res);

    } catch (error) {

    }
};

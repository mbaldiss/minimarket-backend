import {
  agregarRolController
} from "../controllers/rol-controller.js";

export const agregarRol = async (req, res) => {
  try {
    await agregarRolController(req, res);
  } catch (error) {}
};

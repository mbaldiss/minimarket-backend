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

export const PutModificarUsuarioController = async (req, res) => {
  try {
    const body = req.body;
    const usuario = await Usuario.update(
      { ...body },
      {
        where: {
          dni: body.dni,
        },
      }
    );
    usuario[0]
      ? res.send("Usuario modificado correctamente")
      : (await Usuario.findOne({
          where: { dni: req.body.dni },
        }))
      ? res.send("Usuario modificado correctamente")
      : res.send("Usuario inexistente");
  } catch (error) {
    console.log(error);
  }
};

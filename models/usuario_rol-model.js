import { db } from "../utils/config.js";
import { DataTypes } from "sequelize";
import { Usuario, Rol } from "./index.js"

export const Usuario_Rol = db.define(
  "usuario_rol",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    usuarioId: {
      field: "id_usuario",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Usuario, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    rolId: {
      field: "id_rol",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Rol, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  
  {
    name: { singular: "usuario_rol", plural: "usuarios_roles" },
    tableName: "usuario_rol",
    timestamps: false,
  }
);

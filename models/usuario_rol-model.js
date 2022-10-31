import { db } from "../utils/config.js";
import { DataTypes } from "sequelize";

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
    id_usuario: {
      field: "id_usuario",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "usuario", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    id_rol: {
      field: "id_rol",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "rol", key: "id" },
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

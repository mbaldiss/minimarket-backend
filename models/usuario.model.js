import { db } from "../db.js";
import { DataTypes } from "sequelize";
// import { Persona } from "./persona.model.js";

// Definir modelo de cuenta
export const Usuario = db.define(
  "usuario",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: false,
      primaryKey: true,
    },
    dni: {
      field: "dni",
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    nombre: { field: "nombre", allowNull: false, type: DataTypes.TEXT },
    apellido: {
      field: "apellido",
      allowNull: false,
      type: DataTypes.TEXT,
    },
    fecha_nacimiento: {
      field: "fecha_nacimiento",
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    fecha_ingreso: {
      field: "fecha_ingreso",
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    contraseña: {
      field: "contraseña",
      allowNull: false,
      type: DataTypes.STRING(150),
    },
  },
  {
    name: { singular: "usuario", plural: "usuarios" },
    tableName: "usuarios",
    timestamps: false,
  }
);

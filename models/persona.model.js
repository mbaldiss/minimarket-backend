import { db } from "../db.js";
import { DataTypes } from "sequelize";

// Definir modelo de persona
export const Persona = db.define(
  "persona",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    apellido: { field: "apellido", type: DataTypes.STRING(50) },
    nombre: { field: "nombre", type: DataTypes.STRING(50) },
  },
  { tableName: "personas", timestamps: false }
);

import { db } from "../db.js";
import { DataTypes } from "sequelize";

// Definir modelo de materias
export const Materia = db.define(
  "materia",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { field: "nombre", type: DataTypes.STRING(50) },
  },
  {
    name: { singular: "materia", plural: "materias" },
    tableName: "materias",
    timestamps: false,
  }
);

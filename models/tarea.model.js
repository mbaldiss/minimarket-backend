import { db } from "../db.js";
import { DataTypes } from "sequelize";
import { Persona } from "./persona.model.js";

// Definir modelo de tarea
export const Tarea = db.define(
  "tarea",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: { field: "descripcion", type: DataTypes.STRING(100) },
    lista: { field: "lista", type: DataTypes.BOOLEAN },
    personaId: {
      field: "persona_id",
      type: DataTypes.INTEGER,
      references: { model: Persona, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
  },
  { tableName: "tareas", timestamps: false }
);

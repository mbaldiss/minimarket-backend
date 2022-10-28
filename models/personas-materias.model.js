import { db } from "../db.js";
import { DataTypes } from "sequelize";

// Definir modelo de personas_materias
export const PersonasMaterias = db.define(
  "personas_materias",
  {
    personaId: {
      field: "persona_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: { model: "persona", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    materiaId: {
      field: "materia_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: { model: "materia", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
  },
  { tableName: "personas_materias", timestamps: false }
);

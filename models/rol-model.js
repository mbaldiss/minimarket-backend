import { db } from "../utils/config.js";
import { DataTypes } from "sequelize";

export const Rol = db.define(
  "rol",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: { field: "descripcion", allowNull: false, type: DataTypes.TEXT },
  },
  {
    name: { singular: "rol", plural: "roles" },
    tableName: "roles",
    timestamps: false,
  }
);

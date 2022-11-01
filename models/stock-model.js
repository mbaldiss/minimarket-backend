import { db } from "../utils/config.js";
import { DataTypes } from "sequelize";

export const Stock = db.define(
  "stock",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    lugar: { field: "lugar", allowNull: false, type: DataTypes.TEXT },
  },
  {
    name: { singular: "stock", plural: "stocks" },
    tableName: "stock",
    timestamps: false,
  }
);

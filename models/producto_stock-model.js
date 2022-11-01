import { db } from "../utils/config.js";
import { DataTypes } from "sequelize";
import { Producto, Stock } from "./index.js";

export const Producto_Stock = db.define(
  "producto_stock",
  {
    id: {
      field: "id",
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productoId: {
      field: "id_producto",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Producto, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    stockId: {
      field: "id_stock",
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Stock, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    cantidad: {
      field: "cantidad",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    name: { singular: "producto_stock", plural: "productos_stocks" },
    tableName: "producto_stock",
    timestamps: false,
  }
);

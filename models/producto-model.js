import { db } from "../utils/config.js";
import { DataTypes } from "sequelize";

export const Producto = db.define(
  "producto",
  {
    id: {
      field: "id",
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: { field: "nombre", allowNull: false, type: DataTypes.TEXT },
    precio_compra: {
      field: "precio_compra",
      allowNull: true,
      type: DataTypes.FLOAT,
    },
    precio_venta: {
      field: "precio_venta",
      allowNull: true,
      type: DataTypes.FLOAT,
    },
    codigo_barra: {
      field: "codigo_barra",
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    name: { singular: "producto", plural: "productos" },
    tableName: "productos",
    timestamps: false,
  }
);

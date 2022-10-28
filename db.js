import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

// Configurar Base de datos
export const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    dialect: "mysql",
  }
);

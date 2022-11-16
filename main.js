import express from "express";
import { db } from "./utils/config.js";
import { authRouter } from "./routers/auth-router.js";
import { usuariosRouter } from "./routers/usuarios-router.js";
import { rolRouter } from "./routers/rol-router.js";
import { productosRouter } from "./routers/productos-router.js";
import { stockRouter } from "./routers/stock-router.js";
import { ventaRouter } from "./routers/venta-router.js";
import cors from "cors";
import {
  unknownEndpoint,
  errorHandler,
  requestLogger,
} from "./middlewares/main-middleware.js";

const app = express();

import "./auth/auth.js";

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use("/usuarios", usuariosRouter);
app.use("/auth", authRouter);
app.use("/rol", rolRouter);
app.use("/productos", productosRouter);
app.use("/stock", stockRouter);
app.use("/venta", ventaRouter);

app.get("/", (req, res) => {
  res.send("API del Minimarket");
});

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(4000, async () => {
  try {
    await db.authenticate();
    console.log("Conexion a base de datos exitosa");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
  console.log("API en funcionamiento");
});

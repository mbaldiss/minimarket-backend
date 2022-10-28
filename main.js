import express from "express";
import { db } from "./utils/config.js";
import { authRouter } from "./routers/auth.router.js";
import { usuariosRouter } from "./routers/usuarios.router.js";
// import { personasRouter } from "./routers/personas.router.js";
// import { tareasRouter } from "./routers/tareas.router.js";
import cors from "cors";

// Configurar Express
const app = express();

import "./auth/auth.js";

app.use(cors());
app.use(express.json());

// Routers
// app.use("/tareas", tareasRouter);
// app.use("/personas", personasRouter);
app.use("/usuarios", usuariosRouter);
app.use("/auth", authRouter);

// Mensaje de bienvenida
app.get("/", (req, res) => {
  res.send("API del Minimarket");
});

// Ejecutar API
app.listen(4000, async () => {
  try {
    await db.authenticate();
    console.log("Conexion a base de datos exitosa");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
  console.log("API en funcionamiento");
});

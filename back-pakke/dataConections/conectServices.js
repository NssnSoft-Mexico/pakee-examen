const express = require("express");
const { Pool } = require('pg');

// Crear un nuevo router de Express
const router = express.Router();

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "admin",
    database: "inventario"
});

pool
  .connect()
  .then((client) => {
    console.log("Conexión exitosa a la base de datos");
    client.release(); // Liberar el cliente después de probar la conexión
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err.message);
  });

module.exports = pool;
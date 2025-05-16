// app.js

const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Crear conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',       // Tu contraseña
  database: 'c21100487' // Tu base de datos
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Ruta para consultar todos los clientes
app.get('/clientes', (req, res) => {
  const sql = 'SELECT * FROM Clientes';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send('Error en la consulta');
    }
    res.json(results);
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});

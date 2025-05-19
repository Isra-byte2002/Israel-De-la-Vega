const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',      
  database: 'c21100487'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

app.get('/clientes', (req, res) => {
  const sql = 'SELECT * FROM Clientes';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send('Error en la consulta');
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});

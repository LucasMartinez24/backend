const mysql = require('mysql');

const db = mysql.createConnection({
  host: '172.24.0.5',
  user: 'root',
  password: '1234',
  database: 'prueba'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
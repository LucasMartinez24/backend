const express = require('express');
const bodyParser = require('body-parser');
const productosRoutes = require('./routes/productoRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas para productos
app.use('/api', productosRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
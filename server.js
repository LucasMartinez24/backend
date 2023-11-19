const express = require('express');
const bodyParser = require('body-parser');
const productosRoutes = require('./routes/productoRoutes');
const cors = require('cors');
const app = express();
const port = 3000;
const corsOptions = {
  origin: 'http://localhost:4200',// Reemplaza con la URL de tu aplicación Angular
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas para productos
app.use('/api', productosRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
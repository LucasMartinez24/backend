const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productoController');

// Rutas para productos
router.get('/productos', productosController.getTodosLosProductos);
router.post('/productos', productosController.agregarProducto);
router.get('/productos/:id', productosController.getProducto);
router.put('/productos/:id', productosController.actualizarProducto);
router.delete('/productos/:id', productosController.borrarProducto);

module.exports = router;
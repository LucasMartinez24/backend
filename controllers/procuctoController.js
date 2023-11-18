const db = require('../database');

// Obtener todos los productos
exports.getTodosLosProductos = (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

// Agregar un nuevo producto
exports.agregarProducto = (req, res) => {
  const nuevoProducto = req.body;
  db.query('INSERT INTO productos SET ?', nuevoProducto, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Producto agregado correctamente');
  });
};

// Obtener un producto por ID
exports.getProducto = (req, res) => {
  const productId = req.params.id;
  db.query('SELECT * FROM productos WHERE id = ?', productId, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result[0]);
  });
};

// Actualizar un producto por ID
exports.actualizarProducto = (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  db.query('UPDATE productos SET ? WHERE id = ?', [updatedProduct, productId], (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Producto actualizado correctamente');
  });
};

// Borrar un producto por ID
exports.borrarProducto = (req, res) => {
  const productId = req.params.id;
  db.query('DELETE FROM productos WHERE id = ?', productId, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Producto eliminado correctamente');
  });
};
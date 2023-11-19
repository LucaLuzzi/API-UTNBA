const express = require('express')
const ProductoController = require('../controllers/productoController')

const router = express.Router()

// Ruta para obtener productos por nombre
router.get('/productos/search', ProductoController.searchByName)

// Ruta para obtener todos los productos
router.get('/productos', ProductoController.getAllProducts)

// Ruta para obtener un producto por ID
router.get('/productos/:id', ProductoController.getProductById)

// Ruta para crear un nuevo producto
router.post('/productos/create', ProductoController.createNewProduct)

// Ruta para actualizar un producto
router.put('/productos/update/:id', ProductoController.updateProduct)

// Ruta para eliminar un producto
router.delete('/productos/delete/:id', ProductoController.deleteProduct)

module.exports = router
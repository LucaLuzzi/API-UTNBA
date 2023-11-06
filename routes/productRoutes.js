const express = require('express')
const ProductoController = require('../controllers/productoController')

const router = express.Router()

// Ruta para obtener todos los productos
router.get('/productos', ProductoController.getAllProducts)

// Ruta para obtener un producto por ID
router.get('/productos/:id', ProductoController.getProductById)

module.exports = router
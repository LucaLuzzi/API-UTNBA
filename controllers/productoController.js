const productModel = require('../models/productoModel')

class ProductoController {

  async getAllProducts(req, res) {
    const productos = await productModel.getAllProducts()
    res.status(200).json(productos)
  }

  async getProductById(req, res) {
    const productoId = req.params.id
    const producto = await productModel.getProductById(productoId)

    // Verifica si el producto existe
    if (!producto) {
      res.status(500).json({ error: 'Producto no encontado'})
      return
    }

    res.status(200).json(producto)
  }
}

module.exports = new ProductoController()
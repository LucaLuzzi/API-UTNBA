const productModel = require('../models/productoModel')

class ProductoController {

  async getAllProducts(req, res) {
    const productos = await productModel.getAllProducts()

    // Verifica si los productos existen
    if (!productos) {
      res.status(500).json({ OK: false, error: 'Productos no encontados'})
      return
    }

    res.status(200).json({ OK: true, productos })
  }

  async getProductById(req, res) {
    const id = req.params.id
    const producto = await productModel.getProductById(id)

    // Verifica si el producto existe
    if (!producto) {
      res.status(500).json({ OK: false, error: 'Producto no encontado'})
      return
    }

    res.status(200).json({ OK: true, producto })
  }

  async createNewProduct(req, res) {
    const product = req.body
    const newProduct = await productModel.createNewProduct(product)

    // Verifica si el producto se creo con exito
    if (!newProduct) {
      res.status(500).json({ OK: false, error: 'Producto no creado'})
      return
    }
  
    res.status(200).json({ OK: true, id: newProduct })
  }

  async updateProduct(req, res) {
    const id = req.params.id
    const product = req.body
    const updatedProduct = await productModel.updateProduct(id, product)

    // Verifica si el producto se actualizo con exito
    if (!updatedProduct) {
      res.status(500).json({ OK: false, error: 'Producto no actualizado'})
      return
    } 

    res.status(200).json({ OK: true, id: id})
  }

  async deleteProduct(req, res) {
    const id = req.params.id
    const deletedProduct = await productModel.deleteProduct(id)

    // Verifica si el producto se elimino con exito
    if (!deletedProduct) {
      res.status(500).json({ OK: false, error: 'Producto no eliminado'})
      return
    }     

    res.status(200).json({ OK: true, id: id})    
  }

  async searchByName(req, res) {
    const name = req.query.name
    const products = await productModel.searchByName(name)

    // Verifica si los productos existen
    if (!products) {
      res.status(500).json({ OK: false, error: 'Productos no encontrados'})
      return
    }    
    
    res.status(200).json({ OK: true, products})    
  }
}

module.exports = new ProductoController()
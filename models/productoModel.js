const mysql = require('mysql2/promise')
const dbconfig = require('../config/database')

class ProductModel {

  async getAllProducts() {
    try {
      const connection = await mysql.createConnection(dbconfig)
      const [rows] = await connection.execute('SELECT * FROM productos;')
      connection.end()
      return rows
    } catch (error) {
      console.error(error)
    }
  }

  async getProductById(id) {
    try {
      const connection = await mysql.createConnection(dbconfig)
      const [rows] = await connection.execute('SELECT * FROM productos WHERE id = ?;', [id])
      connection.end()
      return rows[0]
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new ProductModel()
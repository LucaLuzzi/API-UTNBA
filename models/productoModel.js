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
      throw new Error("Get all products failed")
    }
  }

  async getProductById(id) {
    try {
      const connection = await mysql.createConnection(dbconfig)
      const [rows] = await connection.execute('SELECT * FROM productos WHERE id = ?;', [id])
      connection.end()

      return rows[0]
    } catch (error) {
      throw new Error("Get product by id failed")
    }
  }

  async createNewProduct(product) {
    try {
      const { nombre, precio, descripcion, stock } = product

      const connection = await mysql.createConnection(dbconfig)
      const [result] = await connection.execute('INSERT INTO PRODUCTOS (nombre, precio, descripcion, stock) VALUES (?, ?, ?, ?);', [nombre, precio, descripcion, stock])
      const newProductId = result.insertId
      connection.end()

      return newProductId
    } catch (error) {
      throw new Error("Create new product failed")
    }
  }

  async updateProduct(id, product) {
    try {
      const { nombre, precio, descripcion, stock } = product

      const connection = await mysql.createConnection(dbconfig)
      const [result] = await connection.execute('UPDATE PRODUCTOS SET nombre = ?, precio = ?, descripcion = ?, stock = ? WHERE id = ?;', [nombre, precio, descripcion, stock, id])
      const rowsAffected = result.affectedRows
      connection.end()

      return rowsAffected > 0;
    } catch (error) {
      throw new Error("Update product failed")
    }
  }

  async deleteProduct(id) {
    try {
      const connection = await mysql.createConnection(dbconfig)
      const [result] = await connection.execute('DELETE FROM PRODUCTOS WHERE id = ?;', [id])
      const rowsAffected = result.affectedRows
      connection.end()

      return rowsAffected > 0
    } catch (error) {
      throw new Error("Delete product failed")
    }
  }

  async searchByName(name) {
    try {
      const connection = await mysql.createConnection(dbconfig);
      const [rows] = await connection.execute('SELECT * FROM PRODUCTOS WHERE nombre LIKE ?;', [`%${name}%`]);
      connection.end();

      return rows;
    } catch (error) {
      throw new Error("Get products by name failed")
    }
  }
}

module.exports = new ProductModel()
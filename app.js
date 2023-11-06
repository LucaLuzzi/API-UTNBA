const express = require('express')
const app = express()
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')

dotenv.config()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Rutas
app.use('/', productRoutes)
app.get('/', (req,res) => {
   res.send('<h1>Hola mundo</h1>')
})


app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`)
})

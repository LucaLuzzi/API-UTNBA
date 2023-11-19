const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')

dotenv.config()
const PORT = process.env.PORT || 3000

app.use(cors())
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

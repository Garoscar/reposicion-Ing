const express = require('express')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

require('./database')
require('dotenv').config()

const app = express()

// Middlewares
app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Guardar temporalmente la imagen
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req, file, cb) => {
        const date = new Date()
        cb(null, date.getTime() + path.extname(file.originalname))
    },
})

// Utilizando el middleware de multer
app.use(multer({storage}).single('image'));

app.use('/api/usuario', require('../routes/usuario'))

module.exports = app

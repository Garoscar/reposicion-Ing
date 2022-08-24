// Conectarse a la base de datos de mongoDB usando mongoose
const mongoose = require('mongoose')
require('dotenv').config()

const URI = process.env.MONGO_URI

const main = async () => {
    try {
        await mongoose.connect(URI)
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log('Conexion Fallo', error)
    }
}
main()

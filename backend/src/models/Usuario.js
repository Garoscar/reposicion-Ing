const { Schema, model } = require('mongoose')

const registro = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    dni: {
        type: String,
        required: true,
    },
    fechaNacimiento: {
        type: Date,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
})

module.exports = model('registros', registro)

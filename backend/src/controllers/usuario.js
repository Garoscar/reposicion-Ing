const { v2 } = require('cloudinary')
const cloudinary = v2
const { request, response } = require('express')
const { enviarCorreo } = require('../helpers/enviarCorreo')
const Registro = require('../models/Usuario')

cloudinary.config({
    cloud_name: 'dwze7fq4u',
    api_key: '727758864851128',
    api_secret: 'FFe7eb8gy6uieFvE853ZxhQExts',
})

const nuevoRegistro = async (req = request, res = response) => {
    try {
        const body = req.body
        console.log(req.body.correo)
        await enviarCorreo(req.body.correo)
        const registro = new Registro(body)
        await registro.save()
        res.send(registro)
    } catch (error) {
        res.status(500).json({
            msg: 'Error al crear el registro',
        })
    }
}

const allRegistros = async (req = request, res = response) => {
    try {
        const registros = await Registro.find()
        res.send(registros)
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener los registros',
        })
    }
}

const subirImagen = async (req = request, res = response) => {
    try {
        const pathImg = req.file.path // Guardar los datos de la imagen
        const { url } = await cloudinary.uploader.upload(pathImg) // subir la imagen a cloudanary
        res.status(201).json(url) // retornando url de la imagen
    } catch (error) {
        res.status(500).json({ msg: 'No se pudo guardar la imagen' })
        console.log(error)
    }
}

module.exports = {
    nuevoRegistro,
    allRegistros,
    subirImagen,
}

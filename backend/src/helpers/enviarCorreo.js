const nodemailer = require('nodemailer')
require('dotenv').config()

const enviarCorreo = async (correo) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.CORREO,
            pass: process.env.PASSWORD_CORREO,
        },
    })

    const mailOptions = {
        from: process.env.CORREO,
        to: correo,
        subject: 'Registro exitoso',
        text: 'Gracias por registrarte',
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}

module.exports = {
    enviarCorreo,
}

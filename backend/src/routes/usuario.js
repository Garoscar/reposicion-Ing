const { Router } = require('express')
const { allRegistros, nuevoRegistro, subirImagen } = require('../controllers/usuario')

const router = Router()

router.post('/', nuevoRegistro)
router.post('/imagen', subirImagen)
router.get('/', allRegistros)

module.exports = router

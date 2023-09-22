const express = require('express')
const ControllerCalculadora = require('./controllers/calculadora.js')

const controller = new ControllerCalculadora()
const router = express.Router()
router.post('/api/calculadora', controller.Calculadora)

module.exports = router
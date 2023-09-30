const express = require('express')
const ControllerCalculadora = require('../controllers/calculadora.js')

const controller = new ControllerCalculadora()

const router = express.Router()
router.post('/api/somar', controller.Somar)
router.post('/api/subtrair', controller.Subtrair)
router.post('/api/multiplicar', controller.Multiplicar)
router.post('/api/dividir', controller.Dividir)

module.exports = router
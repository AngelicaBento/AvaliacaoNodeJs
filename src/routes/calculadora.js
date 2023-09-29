const express = require('express')
const ControllerCalculadora = require('../controllers/calculadora.js')

const controller = new ControllerCalculadora()

const router = express.Router()
router.post('/api/somar', controller.Somar)
router.post('/api/subtrair', controller.Subtrair)
//add outras rotas

module.exports = router
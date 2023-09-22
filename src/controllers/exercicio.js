const ServicoCalculadora = require("./services/calculadora.js")

const servico = new ServicoCalculadora()

class ControllerCalculadora {
    Calculadora(req, res){
        try {
            const result = servico.Calculadora(req.body.num1, req.body.num2, req.body.operacao)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
}

module.exports = ControllerCalculadora
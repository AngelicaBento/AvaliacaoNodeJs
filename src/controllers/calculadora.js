const ServicoCalculadora = require("../services/calculadora.js")

const servico = new ServicoCalculadora()

class ControllerCalculadora {
    Somar(req, res){
        try {
            const result = servico.Somar(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    Subtrair(req, res){
        try {
            const result = servico.Subtrair(req.body.num1, req.body.num2)
            res.status(200).json({
                message: `resultado: ${result}`
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Deu ruim" })
        }
    }
    //add outras funções
}

module.exports = ControllerCalculadora
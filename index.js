const express = require("express");
const router = require('./exercicios/calculadora.js')

const app = express();
app.use(express.json());
const port = 3000;

  app.post("/api/exercicios/calculadora", (req, res) => {
    try {
      const result = calculadora(req.body.num1, req.body.num2, req.body.operacao);
      res.status(200).json({
        message: `resultado: ${result}`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Deu ruim!" });
    }
  });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
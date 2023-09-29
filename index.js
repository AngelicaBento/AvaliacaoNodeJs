const express = require("express");
const router = require('./exercicios/calculadora.js')

const app = express();
app.use(express.json());
const port = 3000;

// add rota

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
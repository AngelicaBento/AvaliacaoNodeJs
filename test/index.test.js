const { describe, expect, it } = require('@jest/globals');
const ServicoCalculadora = require('../src/services/calculadora.js')

describe('Testes da prova', () => {
const servico = new ServicoCalculadora();

// Testes da SOMA

it('Soma de dois números', () => {
    const result = servico.Somar(1,2)

expect(result).toBe(3);
})

it('Soma de dois números', () => {
    const result = servico.Somar(1,5)

    expect(result).toBe(-1)
})

it("Subtração de dois numeros", () => {
    const result = servico.Subtrair(8.2, 2.2);
    expect(result).toBe(6.2);
  });

  it("Subtração de dois numeros", () => {
    const result = servico.Subtrair(1, -2);
    expect(result).toBe(-1);
  });

  it("Multiplicação de dois numeros", () => {
    const result = servico.Multiplicar(50, 2);
    expect(result).toBe(100);
  });

  it("Multiplicação de dois numeros", () => {
    const result = servico.Multiplicar(2.5, 3.8);
    expect(result).toBe(10);
  });

  it("Divisão de dois numeros", () => {
    const result = servico.Dividir(150, 2.5);
    expect(result).toBe(60);
  });

  it("Divisão de dois numeros", () => {
    const result = servico.Dividir(15, 5);
    expect(result).toBe(1);
  });

})
function calculadora(num1, operacao, num2) {
    if (operacao == "+") {
        return Somar(num1, num2)
    } else if (operacao == "-") {
        return Subtrair(num1, num2)
    } else if (operacao == "*") {
        return Multiplicar(num1, num2)
    } else if (operacao == "/") {
        return Dividir(num1, num2)
    } else {
        throw new Error("Operação inválida")
    }
}

module.exports = { calculadora }



/*Somar(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Favor informar números")
    }
    const resultado = num1 + num2

    return resultado;
}

Subtrair(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Favor informar números")
    }
    const resultado = num1 - num2

    return resultado;
}

Multiplicar(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Favor informar números")
    }
    const resultado = num1 * num2

    return resultado;
}

Dividir(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Favor informar números")
    }
    const resultado = num1 / num2

    return resultado;
}*/
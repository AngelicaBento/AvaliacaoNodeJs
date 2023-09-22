class ServicoCalculadora {
    Somar(num1, num2) {
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
    }
} 

module.exports = ServicoCalculadora
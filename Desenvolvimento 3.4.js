//programa que funciona como calculadora simples das 4 operações fundamentais

const prompt = require("prompt-sync")();

function digitaValor(){
    let numero1 = NaN;
    let numero2 = NaN;

    while (isNaN(numero1)){
        numero1 = parseInt(prompt("Digite o primeiro número?    "));
        numero1 = numero1/1;
    } 
    while (isNaN(numero2)){
        numero2 = parseInt(prompt("Digite o segundo número?    "));
        numero2 = numero2/1;
    } 
    let array = [numero1, numero2];
    return array;
}

const calculo = (operador, valores = digitaValor()) => eval(`${valores[0]}${operador}${valores[1]}`);

function calculadora(op){
    let resultado = calculo(op);
    return resultado
    
}

operacao = prompt("Digite qual operador aritmética deseja fazer: +   -  /  *    ");
console.log(`O resultado final é ${calculadora(operacao)}`)

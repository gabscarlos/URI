var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var peca1 = lines.shift().split(" ")
var peca2 = lines.shift().split(" ")

var identificadorPeca1 = peca1.shift()
var quantidadePeca1 = peca1.shift()
var valorUnitarioPeca1 = peca1.shift()
var valorTotalPeca1 = quantidadePeca1 * valorUnitarioPeca1

var identificadorPeca2 = peca2.shift()
var quantidadePeca2 = peca2.shift()
var valorUnitarioPeca2 = peca2.shift()
var valorTotalPeca2 = quantidadePeca2 * valorUnitarioPeca2

var totalPagar = valorTotalPeca1 + valorTotalPeca2


console.log("VALOR A PAGAR: R$ " + totalPagar.toFixed(2))
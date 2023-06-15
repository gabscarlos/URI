var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(" ")

var dadoA = parseFloat(dados.shift())
var dadoB = parseFloat(lines.shift())
var dadoC = parseFloat(lines.shift())
var dadoD = parseFloat(lines.shift())
var dadoE = parseFloat(lines.shift())
var dadoF = parseFloat(lines.shift())

var numeros = []

numeros[0] = dadoA
numeros[1] = dadoB
numeros[2] = dadoC
numeros[3] = dadoD
numeros[4] = dadoE
numeros[5] = dadoF

var positivos = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        positivos++
    }
}

console.log(`${positivos} valores positivos`)
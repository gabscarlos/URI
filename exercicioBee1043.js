var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(" ")

var dadoA = parseFloat(dados.shift())
var dadoB = parseFloat(dados.shift())
var dadoC = parseFloat(dados.shift())

let perimetro = dadoA + dadoB + dadoC
let area = ((dadoA + dadoB) * dadoC) / 2

if (dadoA + dadoB > dadoC && dadoA + dadoC > dadoB && dadoB + dadoC > dadoA) {
    console.log('Perimetro =', perimetro.toFixed(1))
} else {
    console.log('Area =', area.toFixed(1))
}





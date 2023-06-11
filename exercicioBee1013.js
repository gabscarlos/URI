var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(" ")

var dadoA = parseFloat(dados.shift())
var dadoB = parseFloat(dados.shift())
var dadoC = parseFloat(dados.shift())

var maiorAB = (dadoA + dadoB + Math.abs(dadoA - dadoB)) / 2
var maiorXC = (dadoC + maiorAB + Math.abs(dadoC - maiorAB)) / 2



console.log(maiorXC + ' eh o maior')
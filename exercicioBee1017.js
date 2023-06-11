var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var tempoViagem = parseInt(lines.shift())
var velocidadeMedia = parseInt(lines.shift())
var distanciaPercorrida = tempoViagem * velocidadeMedia
var quantidadeCombustivel = distanciaPercorrida / 12


console.log(quantidadeCombustivel.toFixed(3))
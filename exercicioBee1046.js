var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(" ")

var horaInicial = parseFloat(dados.shift())
var horaFinal = parseFloat(dados.shift())

var duracao = 0

if (horaInicial < horaFinal) {
    duracao = horaFinal - horaInicial
} else {
    duracao = 24 - horaInicial + horaFinal
}

console.log('O JOGO DUROU ' + duracao + ' HORA(S)')

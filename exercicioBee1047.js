var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(" ")

var horaInicial = parseFloat(dados.shift())
var minutoInicial = parseFloat(dados.shift())
var horaFinal = parseFloat(dados.shift())
var minutoFinal = parseFloat(dados.shift())

var duracaoHora = 0

if (horaInicial < horaFinal) {
    duracaoHora = horaFinal - horaInicial
} else {
    duracaoHora = 24 - horaInicial + horaFinal
}

var duracaoMinuto = 0

if (minutoInicial < minutoFinal) {
    duracaoMinuto = minutoFinal - minutoInicial
} else {
    duracaoMinuto = 60 - minutoInicial + minutoFinal
    duracaoHora--
}

if (duracaoMinuto === 60) {
    duracaoHora++
    duracaoMinuto = 0
}

if (duracaoHora === 24 && duracaoMinuto > 0) {
    duracaoHora = 0
}

console.log(`O JOGO DUROU ${duracaoHora} HORA(S) E ${duracaoMinuto} MINUTO(S)`)

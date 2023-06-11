var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n")

var numeros = lines.shift().split(" ")

var N1 = parseFloat(numeros.shift())
var N2 = parseFloat(numeros.shift())
var N3 = parseFloat(numeros.shift())
var N4 = parseFloat(numeros.shift())

var notaExame = parseFloat(lines.shift())

var peso1 = 2
var peso2 = 3
var peso3 = 4
var peso4 = 1

var media = [(N1 * peso1) + (N2 * peso2) + (N3 * peso3) + (N4 * peso4)] / [(peso1 + peso2 + peso3 + peso4)]

var mediaFinal = (media + notaExame) / 2

console.log("Media: " + media.toFixed(1))

if (media >= 7.0) {
    console.log("Aluno aprovado.")
} 
else if (media < 5.0) {
    console.log("Aluno reprovado.")
}
else if (media >= 5.0 && media <= 6.9) {
    console.log("Aluno em exame.")
}
if (mediaFinal >= 5.0 && mediaFinal <= 6.9) {
    console.log("Nota do exame: " + notaExame.toFixed(1))
}
if (mediaFinal >= 5.0) {
    console.log("Aluno aprovado.")
}
if (mediaFinal <= 4.9) {
    console.log("Aluno reprovado.")
}
if (mediaFinal >= 5.0) {
    console.log("Media final: " + mediaFinal.toFixed(1))
}



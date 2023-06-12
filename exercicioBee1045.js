var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(" ")

var dadoA = parseFloat(dados.shift())
var dadoB = parseFloat(dados.shift())
var dadoC = parseFloat(dados.shift())

if (dadoA < dadoB) {
    [dadoA, dadoB] = [dadoB, dadoA];
}
if (dadoA < dadoC) {
    [dadoA, dadoC] = [dadoC, dadoA];
}
if (dadoB < dadoC) {
    [dadoB, dadoC] = [dadoC, dadoB];
}


if (dadoA >= (dadoB + dadoC)) {
    console.log('NAO FORMA TRIANGULO')
} 
else if (dadoA * dadoA === dadoB * dadoB + dadoC * dadoC) {
    console.log('TRIANGULO RETANGULO')
} 
else if (dadoA * dadoA > dadoB * dadoB + dadoC * dadoC) {
    console.log('TRIANGULO OBTUSANGULO')
} 
else if (dadoA * dadoA < dadoB * dadoB + dadoC * dadoC) {
    console.log('TRIANGULO ACUTANGULO')
} 
if (dadoA === dadoB && dadoB === dadoC) {
    console.log('TRIANGULO EQUILATERO')
} 
else if (dadoA === dadoB || dadoB === dadoC || dadoA === dadoC) {
    console.log('TRIANGULO ISOSCELES')
}




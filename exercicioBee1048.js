var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(input)
let aumento = 0
let novoSalario = 0
let porcentagem = 0

if (salario <= 400.00) {
    aumento = salario * 0.15
    porcentagem = 15
} else if (salario >= 400.01 && salario <= 800.00) {
    aumento = salario * 0.12
    porcentagem = 12
} else if (salario >=800.01 && salario <= 1200.00) {
    aumento = salario * 0.10
    porcentagem = 10
} else if (salario >= 1200.01 && salario <= 2000.00) {
    aumento = salario * 0.07
    porcentagem = 7
} else {
    aumento = salario * 0.04
    porcentagem = 4
}

novoSalario = aumento + salario

console.log('Novo salario:', novoSalario.toFixed(2))
console.log('Reajuste ganho:', aumento.toFixed(2))
console.log('Em percentual:', porcentagem, '%')
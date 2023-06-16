var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(" ")

var entrada = parseInt(dados.shift())

let count = 0;
let currentNumber = entrada;

while (count < 6) {
    if (currentNumber % 2 !== 0) {
        console.log(currentNumber);
        count++;
    }
    currentNumber++;
}

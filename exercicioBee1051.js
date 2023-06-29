var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(" ")

var salario = parseFloat(dados.shift())


let imposto;

if (salario <= 2000) {
  imposto = 0;
} else if (salario <= 3000) {
  imposto = (salario - 2000) * 0.08;
} else if (salario <= 4500) {
  imposto = 1000 * 0.08 + (salario - 3000) * 0.18;
} else {
  imposto = 1000 * 0.08 + 1500 * 0.18 + (salario - 4500) * 0.28;
}

if (imposto === 0) {
  console.log("Isento");
} else {
  console.log("R$ " + imposto.toFixed(2));
}

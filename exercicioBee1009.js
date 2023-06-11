var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var nomeFuncionario = String(lines.shift())
var salarioFixo = parseFloat(lines.shift())
var totalVendas = parseFloat(lines.shift())

var porcentagemVendas = totalVendas * 0.15
var total = salarioFixo + porcentagemVendas


console.log("TOTAL = R$ " + total.toFixed(2))
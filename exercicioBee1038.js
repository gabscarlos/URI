var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var codigo = lines.shift().split(" ")
var quantidade = lines.shift().split(" ")

console.log(quantidade)
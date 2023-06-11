var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split("\n")

var A = parseFloat(valores.shift())
var B = parseFloat(valores.shift())
var pesoA = 3.5
var pesoB = 7.5

var media = [(A * pesoA) + (B * pesoB)] / [(pesoA + pesoB)]

console.log("MEDIA = " + media.toFixed(5))
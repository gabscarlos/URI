var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n")

var A = parseFloat(lines.shift())
var B = parseFloat(lines.shift())
var C = parseFloat(lines.shift())
var pesoA = 2.0
var pesoB = 3.0
var pesoC = 5.0

var media = [(A * pesoA) + (B * pesoB) + (C * pesoC)] / [(pesoA + pesoB + pesoC)]

console.log("MEDIA = " + media.toFixed(1))
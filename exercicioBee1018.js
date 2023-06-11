var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var dados = lines.shift().split(" ")

var dadoA = parseFloat(dados.shift())
var dadoB = parseFloat(dados.shift())
var dadoC = parseFloat(dados.shift())

let pi = 3.14159

var areaTriangulo = dadoA * dadoC / 2
var areaCirculo = pi * dadoC ** 2
var aMaisB = dadoA + dadoB
var areaTrapezio = aMaisB * dadoC / 2
var areaQuadrado = dadoB ** 2
var areaRetangulo = dadoA * dadoB




console.log(
'TRIANGULO: ' + areaTriangulo.toFixed(3)+'\n'+
'CIRCULO: ' + areaCirculo.toFixed(3)+'\n'+
'TRAPEZIO: ' + areaTrapezio.toFixed(3)+'\n'+
'QUADRADO: ' + areaQuadrado.toFixed(3)+'\n'+
'RETANGULO: ' + areaRetangulo.toFixed(3)
)

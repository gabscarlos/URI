var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n")

var entrada1 = lines[0].trim(); /* trim() para remover quaisquer espaços em branco no início e no fim da entrada */
var entrada2 = lines[1].trim();
var entrada3 = lines[2].trim();

if (entrada1 === 'vertebrado') {
    if (entrada2 === 'ave') {
        if (entrada3 === 'carnivoro') {
            console.log('aguia')
        } else {
            console.log('pomba')
        }
    } else if (entrada2 === 'mamifero') {
        if (entrada3 === 'onivoro') {
            console.log('homem')
        } else {
            console.log('vaca')
        }
    }
} else if (entrada1 === 'invertebrado') {
    if (entrada2 === 'inseto') {
        if (entrada3 === 'hematofago') {
            console.log('pulga')
        } else {
            console.log('lagarta')
        }
    } else if (entrada2 === 'anelideo') {
        if (entrada3 === 'hematofago') {
            console.log('sanguessuga')
        } else {
            console.log('minhoca')
        }
    }
}




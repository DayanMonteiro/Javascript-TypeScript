// \n - quebra de linha
(function(){
    'use strict';

var regex = /\d/g;
var name = 'Da123yan';
var result;

while(result = regex.exec(name) !== null) {
    console.log('Resultado:\n', result);
    /*
    Resultado:
 true
Resultado:
 true
Resultado:
 true
 */
// usar o \t - tab para espaçamento
console.log('Resultado:\t\t', result);
/*
Resultado:		 true
Resultado:		 true
Resultado:		 true
*/
}

}());
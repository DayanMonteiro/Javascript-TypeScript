/*
construtor de expressão regular RegExp() - O construtor RegExp cria um objeto de expressão regular para realizar uma correspondência de texto com um padrão.
*/

var strg1 = 'Olá desevolvedores';
var pattern1 = new RegExp('^Ol');
// usando o RegExp para realizar um teste 
console.log(pattern1.test(strg1)); /* true - retornou verdadeiro pq passei um test se a strg1 iniciava com Ol, como são os 2 primeiros caractres da frase ele retornou true */

//ex 2
var pattern2 = new RegExp('^Ola');
// usando o RegExp para realizar um teste 
console.log(pattern2.test(strg1)); // false - retornou falso porque não foi passada a acentuação na letra a (á)

//ex 2
var pattern3 = new RegExp('^Olá');
// usando o RegExp para realizar um teste 
console.log(pattern3.test(strg1)); // true - passando com acentuação correta ele retorna verdadeiro

// ex 3 - verificando o final da string
var pattern4 = new RegExp('es');
// usando o RegExp para realizar um teste 
console.log(pattern4.test(strg1)); // true pois desenvolvedores acaba com es

// ex 4 anlisando mais de uma informação
var strg2 = 'Olá oi desenvolvedores';
var pattern5 = new RegExp('Olá (oi|tchau) desenvolvedores');
console.log(
    '===',
    // .test - é um teste da regex que testa se é verdeiro ou falso
    pattern5.test('Olá mundo'),
    pattern5.test('Olá oi desensolvedores'),
    pattern5.test('Olá tchau desenvolvedores'),
    pattern5.test('Olá opa desenvolvedores')
); // === false false true false

// ex 5 se passar ^ no inicio e no fim da frase eu travo as opções buscando se iniciam e terminam conforme passadas, vejamos:
var strg3 = 'Olá oi desenvolvedores';
var pattern6 = new RegExp('^Olá (oi|tchau) desenvolvedores$');
console.log(
    '===',
 
    pattern6.test('Olá mundo'),
    pattern6.test('Olá oi desenvolvedores'),
    pattern6.test('Olá tchau desenvolvedores'),
    pattern6.test('Olá opa desenvolvedores')
); // === false true true false


// método .exec(string)
           // \d - vai buscar por números
(function(){
    'use strict';

var regex = /\d/g;
var name = 'Da123yan';
var result;

console.log(regex); // /\d/
console.log(name);// Da123yan

// cada vez que eu passar o exec ele contará mais uma passagem
console.log(regex.exec(name)); // [ '1', index: 2, input: 'Da123yan', groups: undefined ]
console.log(regex.exec(name)); // [ '2', index: 3, input: 'Da123yan', groups: undefined ]
console.log(regex.exec(name)); // [ '3', index: 4, input: 'Da123yan', groups: undefined ]




}());


// regex + while

var regex1 = /\d/g;
var name1 = 'Da12345yan';
var result1;

// enquanto result for diferente de null
while( result1 = regex1.exec(name1) !== null) {
    console.log(result1)
};
/*
retorna true 5 vezes porque como o \d esta capturando numeros e ele capturou 5 numeros ele retornar true 5x

true
true
true
true
true

*/


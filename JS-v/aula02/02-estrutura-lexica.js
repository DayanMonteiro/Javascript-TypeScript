/* estrutura léxica é um conjuto de regras que irá definir qual modo iremos usar para escrever nessa linguagem.

Na ciência da computação, análise léxica, lexing ou tokenização é o processo de converter uma sequência de caracteres (como em um programa de computador ou página da web) em uma sequência de tokens (strings com um significado atribuído e, portanto, identificado).*/


var animal = 'cachorro';
var Animal = 'macaco';

console.log(animal); // cachorro
console.log(Animal);// macaco
// ou seja a linguagem diferencia letras maúscilas de minuscilas, pois a js é uma linguam case sensitivity, como prova vejamos abaixo:

console.log(animal !== Animal); //true se perguntamos se animal é diferente de Animal ele retorna verdadeiro

/* literais:
- true
- false
- null
- string*/
console.log({a: 1}); // retorna a mesma coisa {a: 1} porque é algo literal
console.log([1, 2]); // [ 1, 2 ]
console.log('10'); // 10 retorna o number
console.log('leão'); // leão retorna a string
console.log(1.2); // 1.2 

// identificadores podem iniciar com _ ou $, letras de a ate z minusculas ou maisculas, e no meio ou fim do nome numeros de 0 a 9 são usados para identificar uma variável ou uma função.

// palavras reservadas, como são muitas deixarei o link para minha consulta https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar










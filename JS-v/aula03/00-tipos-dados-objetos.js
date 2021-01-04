/* Tipos Primitivos
- Number
- String 
- Boolean
- Null e Undefined

Todos os outros dados são objetos.
Objetos são um conjunto de propriedades. */

// { propridade: 'valor'}
var objeto = {propriedade: 'valor', propriedade2: 10, propriedade3: true};
console.log(objeto); // { propriedade: 'valor', propriedade2: 10, propriedade3: true }

// acessando partes do objeto
console.log(objeto.propriedade); // valor
console.log(objeto.propriedade1); // undefined
console.log(objeto.propriedade2); // 10


var pessoa = {nome: 'Dayan', idade: 33, peso: 85, altura: 1.75 };
console.log(pessoa); // { nome: 'Dayan', idade: 33, peso: 85, altura: 1.75 }
// acessando partes do objeto
console.log(pessoa.nome); // Dayan
console.log(pessoa.idade);// 33
console.log(pessoa.peso);// 85
console.log(pessoa.altura);// 1.75

var carro = {cor: 'vermelho', motor: 2.0, portas: 4 };
console.log(carro); // { cor: 'vermelho', motor: 2, portas: 4 }
// acessando partes do objeto
console.log(carro.cor); // vermelho
console.log(carro.motor); // 2.0
console.log(carro.portas); // 4

var myvar = function() {
    return 'variável myvar';
}
console.log(myvar); // [Function: myvar]
console.log(myvar()); // variável myvar


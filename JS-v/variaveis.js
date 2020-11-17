var x = 0;
console.log(x); //0

var nomeQualquer = 10;
console.log(nomeQualquer); // 10

var y = "Hello world"
console.log(y);

var pessoa = {
    altura: 1.85,
    peso: 90
}
console.log(pessoa); // { altura: 1.85, peso: 90 }
console.log(pessoa.altura);// 1.85
console.log(pessoa.peso); // 90

pessoa.altura = 1.90; // subscrevi pessoa
console.log(pessoa.altura); // 1.90

pessoa.peso = 75;
console.log(pessoa.peso); // 75

// arrays

var numeros = [];
console.log(numeros); // []

var numeros = [1, 2, 3, 4, 5];
console.log(numeros);
/*
[ 1, 
2, 
3, 
4, 
5 ] */

var numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1
console.log(numeros[1]); // 2
console.log(numeros[2]); // 3
console.log(numeros[3]); // 4
console.log(numeros[4]); // 5

pessoa['altura'];
console.log(pessoa.altura); // 1.90


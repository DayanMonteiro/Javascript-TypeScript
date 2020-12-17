/*
Primitivos (imutáveis) -  string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function
*/

// ex00     12345
let nome = 'Dayan';
 console.log(nome[0], 'de', nome); // D de Dayan
 
 // ex 01 fazendo cópia
 let a = 'A';
 let b = a;
 console.log(a, b); // A A

 // auterando valor
 a = 'Outra coisa';
 console.log(a, b); // Outra coisa A

// ex 02
let c = [1, 2, 3];
let d = c;
console.log(c, d); /*
[ 1, 2, 3 ] [ 1, 2, 3 ]
nesse caso tanto c quanto d apontam para o mesmo local do dado na memória 
*/

c.push(4);
console.log(c, d); /*
[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]
ao incluir o 4 em c alterei tbm em d
*/

// porém se altero d tbm afeto c
d.pop();
console.log(c, d); // [ 1, 2, 3 ] [ 1, 2, 3 ]


// ex 03

let e = [5, 6, 7];
let f = [...e];
let g = f;

console.log(e, f);

e.push(4);
console.log(e, f);
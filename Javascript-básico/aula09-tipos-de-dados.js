// DADOS PRIMITIVOS
//string, number, undefined, null, boolean, symbol(veremos adiante)

const nome = 'Dayan'; // string
const nome1 = "Dayan"; // string
const nome2 = `Dayan`; // string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; // undefined = não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo = não aponta para local nenhum na memória

const aprovado = false; // boolean = true, false (lógico)


// verificando tipo

console.log(typeof nome, nome);
/* string Dayan */
console.log(typeof aprovado, aprovado);
/* boolean false */

const a = [1, 2];
const b = a;

console.log(a, b);
//[ 1, 2 ] [ 1, 2 ]

b.push(3);
console.log(a, b);
// [ 1, 2, 3 ] [ 1, 2, 3 ]


let c = 2;
const d = c;
console.log(c, d);
// 2 2

c = 3;
console.log(c, d);
// 3 2






// Math 

// Math.floor - arredonda pra baixo
let num1 = 9.54578;
let num2 = Math.floor(num1);
console.log(num2); // 9

// Math.ceil - arredonda pra cima
let num3 = Math.ceil(num1);
console.log(num3); // 10

// Math.round - arredonda para o numero mais proximo seja pra baixo ou pra cima
let num4 = Math.round(num1);
console.log(num4); // 10 ele arredondou para 10 porque 9.54 o cinco esta pra mais da metade, se fosse por ex: 9.49 ele arredondaria para 9, se fosse 9.50 que é a metade ele ja arredondaria pra cima retornando 10.
/***************************************** */

// Math.max - encontrando o maior numero dentro de uma sequencia numérica
console.log(Math.max(1,2,3,4, -200, 150, 2020, -3520, 40, 10,0150, 15000)); // 15000
// Math.min - encontrando o menor numero dentro de uma sequencia numérica
console.log(Math.min(1,2,3,4, -200, 150, 2020, -3520, 40, 10,0150, 15000)); // -3520

//Math.random() - gera automáticamente numeros aleatórios entre 0 e 1 vejamos:
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
/*
0.8785990313748406
0.4892974881963845
0.5923119830127401
*/
/* posso querer aprimorar a buscar por um numero aleatório, vejamos quetenho 2 formas para isso, na primeira irei gerar com várias casas decimais, na segunda em numero inteiro
*/

const aleatorio1 = Math.random() * (100 - 1) + 1;
console.log(aleatorio1); // gerará numeros de 1.0000000000001 ate 100.00000000000

const aleatorio2 = Math.round(Math.random() * (100 - 1) + 1);
console.log(aleatorio2); // resultados aleatórios entre 1 e 100


// Math.pow() elevar
console.log(Math.pow(2, 10)); //  2 elevado a 10 = 1024
// porém existe uma forma mais simples para esse tipo de calculo, que seria
console.log(2 ** 10); // 1024

/* outros exemplos

https://www.w3schools.com/js/js_math.asp

*/

// raiz quadrada
let num5 = 9;
console.log(num5 ** (1/2)); // 3
// outra opção
console.log(num5 ** 0.5); // 3

// em JS podemos dividir por 0
console.log(100 / 0);
// ele retorna Infinity porém não da erro





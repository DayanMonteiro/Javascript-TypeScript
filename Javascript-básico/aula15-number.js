// método toString
let num1 = 1; // number
let num2 = 2.5;// number
let num3 = 1500;

/* se ao inves de somar eu quiser que um numero assuma o valor de uma string para concatenar ao inves de somar? o comando toString() irá fazer essa conversão, vejamos: */
console.log(num1.toString() + num2); // ele não fará o number virar uma string permamenetemene no programa, apenas nesse momento é uma conversão temporária, retornando o resultado = 12.5 que não é uma soma e sim a junção de 1 com o 2.5 ficando 12.5
console.log(typeof num1); // o typeof nos retorna mostrando que ele continua sendo um number, confirmando que ssa conversão foi temporária

// caso eu queira alterar de forma PERMANENTE o num1 para uma string
num1 = num1.toString();
console.log(typeof num1); // string


// versão binária
console.log(num3.toString(2)); // 10111011100



/******************************************/

let num4 = 15.52145789652125514;
let num5 = 7;
let num6 = 10.25;

// toFixed - arredondar número
console.log(num4.toFixed(2)); // o (2) significa que quero arredondar para 2 casas decimais, posso usar para quantas casas decimais eu quiser apenas alterando o numero dentro do ( ) //  15.52

// isInteder( ) - descobrir se um numero retornado da base de dados é inteiro
console.log(Number.isInteger(num4)); // false
console.log(Number.isInteger(num5)); // true

//isNaN - retornar true em erro
let temp = num6 * "Olá";
console.log(Number.isNaN(temp)); // true

// Padrão - IEEE 754-2008
let num7 = 0.7;
let num8 = 0.1;

console.log(num7 + num8);
// 0.7999999999999999

/* podemos observar que ele não nos retornar o que esperávamos que seria 0.8 /
para isso posso converter os numeros 
*/
let resultado = num7 + num8
resultado = ((num7 * 100) + (num8 * 100)) / 100;
console.log(resultado); // 0.8

/*****************************************/



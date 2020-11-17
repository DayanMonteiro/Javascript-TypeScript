/*** OPERADORES ARITMÉTICOS
  + Adição / Concatenação
  - Subtração
  / Divisão
  * Multiplicação
  ** Potenciação
  % Resto da divisão
 */

 const num1 = "5";
 const num2 = 10;
 const num3 = 5;
 const num4 = 2;
 const num5 = 3;
 console.log(num1 + num2) // concatenação
 //510
 console.log(num2 + num3) // adição
// 15

console.log(num2 - num3) // subtração
// 5

console.log(num2 / num3) // divisão
// 2

console.log(num2 * num3) // multiplicação
// 50

console.log(num4 ** num2) // potenciação
// 1024

console.log(num2 % num5) // Resto da divisão
// 1 é o resto da divisão de 10 / 3 = 3  resta 1

// precedencia
console.log((num3 + num2) * num4);
// num3 = 5 + num2 = 10 primeiro ele somou pq coloquei entrei () depois multiplicou * num4 = 2 / resultado 30

/*******************************************************************************/

// incremento = ++ ou decremento = --

let contador = 1;
contador++; // 2
contador++;// 3
++contador;//4 obs tambem posso usar o ++ antes do contador funciona da mesma maneira
console.log(contador);
//aprimorando

let contador02 = 10;
console.log(++contador02); // retona 11

let contador03 = 10;
console.log(contador03++); // retona 10, porque ele contou pra depois incrementar montando assim se faz necessario mais uma linha para exibir 11 ficando:
console.log(contador03); // 11
/* temos então essas maneiras para aplicar o incremento ou decremento antes (pré-incremento) ou depois (pós-incremento) do contador */

let contadordec = 10;
console.log(--contadordec); // 9

// incrementando e decrementando mais de 1 valor:


let contador04 = 1;
contador04 += 1;
contador04 += 1;
contador04 += 1;
contador04 += 1;
console.log(contador); // 4


// multiplicação
let contador05 = 2;
contador05 *= 2; 
console.log(contador05); // 4

let contador06 = 2;
contador06 *= 2; 
contador06 *= 2; 
contador06 *= 2; 
console.log(contador06); // 16

// potenciação

let contador07 = 2;
contador07 **= 10;
console.log(contador07); //1024

// NaN - Not a Number
const num6 = 10;
const num7 = 'Dayan';
console.log(num6 * num7); // NaN significa que algum dado não funcionou e exibe esse erro / porém em alguns casos ele funcionará ex:
const num8 = 10;
const num9 = '5';
console.log(num8 * num9); /* 50 nesse caso ele não vai ler o '5' como string e realizará o cálculo pois converterá a string para um number, porém se eu tivesse uma letra antes, ex num9 = 'A5' o programa já exibiria NaN---
temos outra observação isso pq se trava de uma conta de *, agora se fosse um + ele juntaria o 10 a 5 como se fosse uma string ficando então de resultado 105*/

// outras formas de converter é acrescentar um ParseInt(inteiros) ParseFloat(numeros decimais) e Number(que converterá de acordo com o numero), vejamos:

const num10 = 10;
const num11 = parseInt('5');
console.log(num10 + num11); // 15
/* A função parseInt converte seu primeiro argumento para uma string, analisa, e retorna um INTEIRO ou NaN . ... Se a string de entrada começa com "0x" ou "0X", a base é 16 (hexadecimal) e o restante da string é analisado.*/

// conforme explicado acima o parseInt converte para um numero inteiro se eu tiver um numero de ponto flutuante usarei o comando parseFloat vejamos:
const num12 = 10;
const num13 = parseFloat(5.7);
console.log(num12 + num13); // 15.7
// Number

const num14 = 10;
const num15 = Number(5.7);
const num16 = Number('5');
console.log(num14 + num15);// 15.7
console.log(num14 + num16);// 15







/*************************************************************************************/


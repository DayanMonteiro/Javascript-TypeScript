// operadores unarios + e -

console.log(3 + 3 ); // 6

console.log(+3); // 3 ele converte o valor após o + em number ou em NaN

console.log(+'3'); // 3 ou seja, ele também converteu a string em number

console.log(+'Dayan'); // NaN retorna que não é um número

// o + tambem pode ser usado para concatenar ou seja unir, vejamos:
console.log('Day' + 'an'); // Dayan

console.log('3' + '3'); // 33 ele n somou mas concatenou pq eram strings

console.log(3 + '3'); // 33 tambem retorna 33 concatenando, porque sempre que somar um number e uma string o js ele entende como concatenação.

// unário - age da mesma forma, porem ele inverte o valor
var x = 3;
console.log(-x); /* -3 ou seja, ele pegou o 3 positivo e o converteu em -3, porém ele não altera permanente a variavel, chamando a variavel x no exemplo a abaixo, vemos que ele retornar seu valor original 3 */
console.log(x); // 3

console.log(-'3'); // -3  ele converte a string para number porem inverte o sinal para negativo


// operadorer unário de incremento

console.log(x++); 3 // aqui ele vai alterar o valor de x somando + 1
console.log(x); // 4 ao pesquisar o novo valor de x agora ele vale 4 pegando o 1 que foi acrescentado no exemplo acima

// tambem podemos usar como pré-incremento e convertera da mesma forma adicionando + 1, vejamos:
console.log(++x); // 5 porque agora o x ja valia 4 conforme ex anterior

// unario de decremento age da mesma forma

console.log(x--); // 5
console.log(x); // 4 agora retirou um valendo 4
// usando como pré-incremento
console.log(--x); // 3 retornamos ao valor inicial da variável




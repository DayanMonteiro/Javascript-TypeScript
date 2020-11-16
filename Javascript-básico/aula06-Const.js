// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não podemos começar uma constante com um número
// Não podem conter espaçõs ou traços, devemos usar camelCase
// as constantes são case-sensitive, ou seja, elas diferenciam letras maiusculas de minusculas
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'Dayan';
console.log(nome);

// ex01 atribuir o valor de uns const para outra

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
// a let eu posso alterar o valor, diferente das const
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

/* 
Dayan
50
100
155 perceba q ele alterou o valor do resultado triplicado e perdemos a primeira
*/

// ex 02 - tipagem
console.log(typeof nome);
console.log(typeof primeiroNumero);
/* 
string = retorna que nome é uma string
number = retona que primeiroNumero é um number
*/

// ex03 - CONCATENAR - junção, se eu declarar agora um numero porém como string e o concatenar com um segundo ele juntará os dois, vejamos o exemplo.

const numero1 = '5';
const numero2 = 10;

console.log(numero1 + numero2);
/* 510 = ou seja ele enxerga 5 como string e junta a 5(string) com o 10 (number) resultando em 510, ou seja não é uma soma numerica, mas sim uma soma dos 2 elementos fundidos */ 








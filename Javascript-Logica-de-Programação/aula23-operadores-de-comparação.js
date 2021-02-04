/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (=) atribuição chega valor
=== iguldade estrita (checa valor e tipo)
!= diferente
!== diferente estrito (checa valor e tipo)
*/

const comp = 10 > 5;
console.log(comp); // true


const comp1 = 10 >= 5;
console.log(comp1); // true

const comp2 = 10 >= 10; 
console.log(comp2); /* true retornar true porque 10 não é maior 
que 10, porém é igual a 10, ou seja sempre que uma das opções 
forem verdadeira, ele retornará verdadeiro.*/

const comp3 = 10 >= 11; 
console.log(comp3); // false

const comp4 = 10 < 11; 
console.log(comp4); // true

const comp5 = 10 <= 11; 
console.log(comp5); // true

const comp6 = 10 <= 11; 
console.log(comp6); // true


const num1 = 10;
const num2 = 11;
const comp7 = num1 < num2;
console.log(comp7); // true

const num3 = 10;
const num4 = 10;
const comp8 = num3 == num4;
console.log(comp8); // true

/* porém poucas vezes usamos ==  e usamos mais o === devido fato
que a linguagem não fará distinção vejamos o exemplo onde um dos 
10 não será numero e sim uma sting.*/
const num5 = 10;
const num6 = '10';
const comp9 = num5 == num6;
console.log(comp9); /* true, retorna true mas sabemos
que não é verdadeiro porque o "10" do num6 é na verdade uma string
*/

// Agora vejamos esse comportamento sando === 
const num7 = 10;
const num8 = '10';
const comp10 = num7 === num8;
console.log(comp10); /* retorna false, porque com === ele reconhece
que o num8 é na verdade uma string e não um number por essa razão é
mais recomendável que usemos o === iguldade estrita (checa valor e tipo)
*/

const num9 = 10;
const num10 = 10;
const comp11 = num9 != num10;
console.log(comp11); // false, pq os valos nao sçao diferentes

const num11 = 10;
const num12 = 9;
const comp12 = num11 != num12;
console.log(comp12); // true 10 é diferente de 9

const num13 = 10;
const num14 = 10;
const comp13 = num13 !== num14;
console.log(comp13); // false pq os 2 numeros são iguais

const num15 = 10;
const num16 = '10';
const comp14 = num15 !== num16;
console.log(comp14); // true
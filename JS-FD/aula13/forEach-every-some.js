// forEach - funciona +ou- como uma estrutura de repetição,, mas a realiza de forma mais funcional
var arr = [1, 2,3, 4, 5, 6, 7];
arr.forEach(function(item, index, array) {
    console.log(item, index, array)
});
/*
item 1 que esta no indice 0 e exibe o array
1 0 [ 1, 2, 3, 4, 5, 6, 7 ]

item 2 que esta no indice 1 e exibe o array
2 1 [ 1, 2, 3, 4, 5, 6, 7 ]

item 2 que esta no indice 2 e exibe o array
3 2 [ 1, 2, 3, 4, 5, 6, 7 ]

item 4 que esta no indice 3 e exibe o array
4 3 [ 1, 2, 3, 4, 5, 6, 7 ]

item 5 que esta no indice 4 e exibe o array
5 4 [ 1, 2, 3, 4, 5, 6, 7 ]

item 6 que esta no indice 5 e exibe o array
6 5 [ 1, 2, 3, 4, 5, 6, 7 ]

item 7 que esta no indice 6 e exibe o array
7 6 [ 1, 2, 3, 4, 5, 6, 7 ]
*/

// podemos capturar a informação que nos interessar ex apenas o item
var arrEx02 = [1, 2,3, 4, 5, 6, 7];
arrEx02.forEach(function(item) {
    console.log(item)
});
/*
1
2
3
4
5
6
7
*/

// somando os indices do array
var arrEx03 = [1, 2,3, 4, 5, 6, 7];
var sum = 0;
arrEx03.forEach(function(item) {
    sum += item;
});
console.log(sum); // 28

// metodo every - aplica uma função na qual o retorno dessa função baseada no parametro ou indice do array ele retorna true ou false se acordo com o que for passado para ele

var arrEx4 = [1, 2, 3, 4, 5, 6, 7];
var every = arrEx4.every(function(item) {
    return item < 5; // se todos os itens forem menor que 5 ele retorna true se não retorna false
});
console.log(every);  // false

var arrEx5 = [1, 2, 3, 4, 5, 6, 7];
var every = arrEx5.every(function(item) {
    return item < 8; 
});
console.log(every); // true

// método some - faz basica a mesma verificação que o metodo every, a diferença que com ele podemos verificar apenas alguns dos elementos 
var arrEx6 = [1, 2, 3, 4, 5, 6, 7];
var some = arrEx6.some(function(item) {
    return item % 2 === 0; 
});
console.log(some); // true 
// como um dos itens foi verdadeiro ele retornou true, diferente do every onde todos os itens tem que ser verdadeiros pra ele retornar true 
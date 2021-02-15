// metodo map - o map percorre todo o array e retorna um novo array com os novos itens passados no método, e não modifica o array principal
var arr00 = [1, 2, 3, 4, 5];
var map = arr00.map(function(item, index, array) {
    return item;
});
console.log(arr00, map); /* [ 1, 2, 3, 4, 5 ] 
esse segundo é um clone dos itens que o map realizou [ 1, 2, 3, 4, 5 ] */

// podemos modificar os itens gerados pelo map, por exemplor pegar todos os itens e somar 1 a cada item
var arr01 = [1, 2, 3, 4, 5];
var map01 = arr01.map(function(item, index, array) {
    return item + 1;
});
console.log(arr01, map01); /*
[ 1, 2, 3, 4, 5 ] array original
[ 2, 3, 4, 5, 6 ] retornou todos itens com 1 somado a todos eles
*/

var arr02 = [1, 2, 3, 4, 5];
var map02 = arr02.map(function(item, index, array) {
    return {index: index, item: item};
});
console.log(arr02, map02);
/*
[ 1, 2, 3, 4, 5 ] 
[
  { index: 0, item: 1 },
  { index: 1, item: 2 },
  { index: 2, item: 3 },
  { index: 3, item: 4 },
  { index: 4, item: 5 }
]
*/

// metodo filter - faz basicamento o mesmo que o map, porém ele filtra itens especificos

var arr03 = [1, 2, 3, 4, 5];
var filter = arr03.filter(function(item, index, array) {
    return item > 2;
});
console.log(filter); // [ 3, 4, 5 ] veja que ele filtrou o array e retornou apenas os itens que era maiores que 2 conforme foi solicitado no return

// map e filter juntos

var arr04 = [1, 2, 3, 4, 5];
var map04 = arr04.map(function(item) {
    // soma 10 em cada item
    return item + 10;
}).filter(function(item) {
   // retornar os itens que ao somar 10 ficaram maiores que 13
    return item > 13;
});
console.log(map04); // [ 14, 15 ]



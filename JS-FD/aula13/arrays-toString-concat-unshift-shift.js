// metodo toString

var arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr.length); // 3

arr.push(4)
console.log(arr); // [ 1, 2, 3, 4 ]

console.log(arr.toString()); // '1,2,3,4'
/* mesmo tendo convertido o arr em string
acima se invocamos o arr novamente ele não alterou o arr principal*/
console.log(arr); // [ 1, 2, 3, 4 ]


/* metodo join, também converte para string com a diferença que podemos passar parametros especificando qual tipo de separador */
console.log(arr.join('-')) // 1-2-3-4

/* metodo concat - faz mais ou menos o que o método push faz, a diferença é que
ele une alguma coisa ao array */
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arr.concat('mais um item')); // [ 1, 2, 3, 4, 'mais um item' ]
// se invocarmos o arr princial ele não o modifica
console.log(arr); // [ 1, 2, 3, 4 ]
// o push sim modifica o arra
console.log(arr.push('mais um item')); // [ 1, 2, 3, 4, 'mais um item' ]

// agora o item é permanente no arr
console.log(arr); // [ 1, 2, 3, 4, 'mais um item' ]
console.log(arr.concat(6)); // [ 1, 2, 3, 4, 'mais um item', 6 ]

// concatenou o 6, porém o array permance intacto
console.log(arr); // [ 1, 2, 3, 4, 'mais um item' ]

// é possivel  concatenar outro array 
console.log(arr.concat([6, 7, 8, 9, 10])); // [ 1, 2, 3, 4, 'mais um item', 6, 7, 8, 9, 10 ]

// concatenar mais de 1 array
console.log(arr.concat([6, 7, 8], [9, 10, 11, 12])); // [ 1, 2, 3, 4, 'mais um item', 6, 7, 8, 9, 10, 11, 12 ]

// metodo unshift - adiciona um item no inicio do array

console.log(arr.unshift(0)); // 6
console.log(arr); // [ 0, 1, 2, 3, 4, 'mais um item' ]


// método shift - remove o primeiro item do array
console.log(arr.shift()); // 0
console.log(arr); // [ 1, 2, 3, 4, 'mais um item' ]



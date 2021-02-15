// metodo slice - retorna um pedaço do array que selecionarmos, o slice não modifica o array principal

var arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.slice(1)); // [ 2, 3, 4, 5 ] retornou a partir do indice 1 ate o finaldo array

/* também podemos optar por passar 2 parametros, o primeiro parametro passado
determina o inicio e o segundo o fim da minha busca de retorno - obs ele rerta o 
segundo parametro -1, ou seja se passamos o paramentros 4 ele via retornar ate o 3 */
console.log(arr.slice(2 , 4)); // [ 3, 4 ] ele passou o parametro e o 3, não passou o quarto por ser o valor passado -1

// é possivel passar valores negativos, ex: se passa -2 ele vai retornar os 2 ultimos indices do array
console.log(arr.slice(-2)); // [ 4, 5 ]

// metodo splice - modifica o array principla e pode tanto adicionar quanto remover indices do array
console.log(arr.splice(3)); // [ 4, 5 ]
console.log(arr); // [ 1, 2, 3 ] agora ele removeu definitivamente a partir do indice 3 eliminando o 4 e o 5 do array principal

console.log(arr.push(4, 5, 6, 7));
console.log(arr);// [ 1, 2, 3, 4, 5, 6, 7 ]

// para remover item 2, 3 e 4
// a partir do indice 1 quero remover 3
console.log(arr.splice(1, 3)); //  [ 2, 3, 4 ]
console.log(arr); // [ 1, 5, 6, 7 ]

// add a partir do indice 1, eu passo 0 como segundo parametro representando que não é pra remover nenhum
console.log(arr.splice(1, 0, 'a')); // []
console.log(arr); // [ 1, 'a', 5, 6, 7 ]
console.log(arr.splice(2, 0, 'b', 'c', 'd')); // []
console.log(arr); // [ 1,   'a', 'b', 'c', 'd', 5,   6,   7 ]

// substituindo os itens 'a', 'b', 'c', 'd'
console.log(arr.splice(1, 4, 2, 3, 4)); // [ 'a', 'b', 'c', 'd' ]
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7 ]

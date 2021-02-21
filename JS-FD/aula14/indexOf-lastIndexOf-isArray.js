// indexOf procura se o valor existe no array
var arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3)); // 2 ele retorna 2 pq o numero 3 esta no indice 2 do array

// se o indice n existir ele retornará -1
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1.indexOf(6)); // -1

// aplicando com strings
var arr2 = ['D', 'a', 'y', 'a', 'n'];
console.log(arr2.indexOf('a')); // 1 ele n reconhece q eu tenho 2 a me retorna apenas o primeiro

/* como ja achei o primeiro a no indice 1, agora que sei onde ele esta posso procurar o proximo
passando para o metodo que quero procurar outro a apartir do indice 2 por ex*/
var arr3 = ['D', 'a', 'y', 'a', 'n'];
console.log(arr3.indexOf('a', 2)); // 3 me retornou q no indice 3 procurando apos o indice  2 tenho o outro a

// seu quiser que retorne alem das funções ja menscionadas true ou false
var arr4 = ['D', 'a', 'y', 'a', 'n'];
// basta passa outra especificação após o fechamento das ()
console.log(arr4.indexOf('a') > 0); // true pq o indce que contem o a no array esta acima de 0

var arr5 = ['D', 'a', 'y', 'a', 'n'];
console.log(arr5.indexOf('y') < 2); // false pq o indicu y é justamente o indice 2 então n esta antes do indice 2, se tivesse unsado <= seria teue


var arr5 = ['D', 'a', 'y', 'a', 'n'];
console.log(arr5.indexOf('y') === 2); // true 

// lastIndexOf - faz a mesma coisa porém do fim pro início do array
// a diferença é se n passar o segundo parametro ee começa a procurar do final do array
var arr6 = ['D', 'a', 'y', 'a', 'n'];
console.log(arr6.indexOf('n')); // 4

// Array.isArray() - verifica se é um array ou não retornando true ou false
var arr7 = [1, 2, 3, 4, 5];
console.log(Array.isArray(arr7)); // true

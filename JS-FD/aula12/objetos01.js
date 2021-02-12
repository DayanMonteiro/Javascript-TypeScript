
var obj = {x:1, y:2};
var obj2 = Object.create(obj);

obj.x = 2;


var obj3 = {};
console.log(obj3); 
obj3.i = 1;
obj3.j = 2;

var obj4 = Object.create(obj3);

for(var prop in obj3) {
    console.log(prop) 
}

var obj5 = {a: 1, b: 2};

for( var prop in obj2) {
    if(obj2.hasOwnProperty(prop)){
        console.log(prop); // x
    }
}

// aula objetos 01
// ex 00
obj3 = {};
obj2 = {x: 2};
obj = {x:1, y:2};
console.log(Object.keys(obj)); // [ 'x', 'y' ]
// propriedades de array, agora posso consultar os campos do array
console.log(Object.keys(obj).length); // 2

// verificar se o objeto é herança de outro
obj = {x:1, y:2};
obj2 = {x: 2};
obj3 = {};
console.log(obj.isPrototypeOf(obj2)); // false
console.log(obj2.isPrototypeOf(obj3)); // false

var obj4 = Object.create(obj3)
    console.log(obj3.isPrototypeOf(obj4)); // true

//ex 01 JSON.stringify(obj)
/*
A sigla JSON significa JavaScript Object Notation ou Notação de Objetos JavaScript,
Um JSON é um formato de transferência de dados muito usado em chamadas AJAX entre o navegador e um servidor. Você está interessado nos dados, apenas nos dados...

Um JSON tem algumas restrições:

não pode ter funções
não pode ter comentários
todo texto sempre tem aspas duplas
as propriedades sempre tem aspas duplas.
Portanto, um JSON é mais restrito que um objeto JavaScript.
*/
obj = {x:1, y:2};
console.log(JSON.stringify(obj)); // {"x":1,"y":2} converte o objeto string

obj = {x:1, y:2};
var str = JSON.stringify(obj);
console.log(str); //{"x":1,"y":2}
// para transformá-lo de novo em objeto
console.log(JSON.parse(str)); // { x: 1, y: 2 }

/* RESUMO JSON.stringfy transforma em string e JSON.parse converte a string de volta em objeto.*/

// ARRAYS

var arr = [];
arr[0] = 10;
console.log(arr); // [ 10 ]

arr[1] = 5;
console.log(arr); // [ 10, 5 ]

arr[2] = 'oito';
console.log(arr); // [ 10, 5, 'oito' ]

arr[10] = 'dez';
console.log(arr); // [ 10, 5, 'oito', <7 empty items>, 'dez' ]
/* ele cria os 11 espaços no array, e avisa q tem 7 espaços vazios no meio do caminho*/

// add elemento ao final do array
arr.push('treze')
console.log(arr); // [ 10, 5, 'oito', <7 empty items>, 'dez', 'treze' ]

// remover item no final do array
arr.pop()
console.log(arr); //[ 10, 5, 'oito', <7 empty items>, 'dez' ] - veja que removeu o treze

// novo array
arr1 = [];
arr1.push('arroz');
arr1.push('feijão');
arr1.push('macarrão');
console.log(arr1); // [ 'arroz', 'feijão', 'macarrão' ]

// removendo ultimo item
var last = arr1.pop();
// removendo ultimo item
console.log(arr1); // [ 'arroz', 'feijão' ]
// agora coloquei o item removido dentro da variavel last criada
console.log(last) // macarrão

console.log(arr1.length); // 2

arr1.push('lasanha');
console.log(arr1.length); // 3
console.log(arr1); //[ 'arroz', 'feijão', 'lasanha' ]


//  Symbols, cada symbol é unico

//ex 00
const uniqueId = Symbol('hello');

console.log(uniqueId); // Symbol(hello)

// ex 01 
const uniqueId2 = Symbol('hello');
const uniqueId3 = Symbol('hello');
console.log(uniqueId2 === uniqueId3); // false
/*
a prova de quem cada Symbol é unico podemos 
verificar que ele retorna false
*/


// ex 02 

const uniqueId1 = Symbol('secreto');

const obj1 = {
    [id]: 'secreto',
    __id: 'secreto'
};
console.log(obj1); // { __id: 'secreto', [Symbol(secreto)]: 'secreto' }


// ex 03

const arr = [1, 2, 3, 4]
const it = arr[Symbol.iterator]();
console.log(it.next());
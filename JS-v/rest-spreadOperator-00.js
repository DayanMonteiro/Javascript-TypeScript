// ex 00 jeito antigo
function sum(a, b) {
    var value = 0;

    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}
console.log(sum(5, 5, 2, 3)); // 15

//ex 01 com ES6 - rest operator ... ele pega todos os parametros de uma função e transforma em um array
function sum1(...args) {
console.log(args);
}
console.log(sum1(5, 5, 2, 3));
/* retorna um array
[ 5, 5, 2, 3 ]
undefined
*/

// ex 02 manipulando com metodos de array comum
function sum2(...args){
return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum2(5, 8, 10, 3)); // 26

// ex 03 rest operator com arrow function acessando a lista de array
const sum3 = (a, b, ...rest) => {
     console.log(a, b, rest)
};
console.log(sum3(7, 2, 10, 7)); // 7 2 [ 10, 7 ] O rest pega o restante dos argumentos não capturando os parametros que selecionamos no A e B.

/* ex 04 spread operator... pega todos os itens do array e transforma em parametros, pode ser utilizado em strings, arrays, obejects e objetos iteráveis */
// em strings
const str = 'Dayan Monteiro';

function logArgs(...args) {
    console.log(args);
}
logArgs(...str);
/*
[
  'D', 'a', 'y', 'a',
  'n', ' ', 'M', 'o',
  'n', 't', 'e', 'i',
  'r', 'o'
]
*/

// ex 05  srpead operator + parametros de função 
const str1 = "Dayan Monteiro";
const arr1 = [1, 2, 3, 4];

    function logArgs1() {
        console.log(arguments);
    }
logArgs1(...arr1); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

// ex 06 como parametros
const arr2 = [1, 2, 3, 4];

    function logArgs2(a, b, c) {
        console.log(a, b, c);
    }
logArgs2(...arr2); // 1 2 3

// ex 07 usando spread operator para construir arrays, combinando 2 arrays
const arr3 = [1, 2, 3, 4];
    function logArgs3(a, b, c) {
    console.log(a, b, c);
}
const arr4 = arr3.concat([5, 6, 7, 8]);

console.log(arr4);
/*
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
*/

// ex 08 outra opção pro array acima
const arr5 = [1, 2, 3, 4];
    function logArgs4(a, b, c) {
    console.log(a, b, c);
}
const arr6 = [...arr5, 5, 6, 7, 8];

console.log(arr6);
/*
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
*/


// ex 09 clone de array simples
const arr7 = [1, 2, 3, 4];
    function logArgs4(a, b, c) {
    console.log(a, b, c);
}
const arrClone = [...arr7];

console.log(arrClone); // [ 1, 2, 3, 4 ]

// ex 10 spread operator com objetos literais, eles so podem ser usados para construir novos objetos
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'juntando'
};
console.log(obj2); // { test: 123, test2: 'juntando' }

// ex 11 clone raso
const obj3 = {
    test: 123,
    subObj: {
        test: 123
    }
};

const obj4 = { ...obj3, subObj: { ...obj3.subObj }};

obj4.subObj.test = 456;

console.log(obj3); // { test: 123, subObj: { test: 123 } }

//
















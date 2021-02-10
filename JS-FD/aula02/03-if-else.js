var x = 3;
var y = 7;

if(x === 3) {
    y = 3;
}

console.log(y); // 3 mudou o valor do y para 3

var a = 3;
var b = 3;

if(a === b && a === 3){
    a = 5;
    b = 2;
};
console.log(a, b);// 5 e 2 
/* entrei em uma condicional if para verificar se x era = ao y e se x valia 3, como a opção era verdadeira em ambas ele executou a troca dos valores para a = 5 e b = 2.*/

if( a === 5 || y === 1) {
    a = 1
    b = 1
};
console.log(a, b); // 1 e 1 

if(a === 2) {
    a = 5;
    b = 5;
}
console.log(a, b);// 1 e 1, ele ignorou a alteração porque o a não era = 2 então ele permaceneu ambos valendo 1

if(a === 2) {
    b = 2;
} else {
    b = 10;
}
console.log(b); // 10 ele vale 10 pq o a não era igual a 2,então ele parte do if para o else e executa a opção declarada no else

// else if

var c = 1;
var d = 10;

if(c === 2) {
    d = 2;
} else if(d=== 3) {
    c = 3;
} else if(c === d) {
    c = 10;
    d = 100;
} else {
    c = 0;
    d = 0;
}
console.log(c, d);// 0 e 0 
/* operador vírgula - junta varias expressões em uma única expressão

var a, b = 2, c; // a virgula faz com que var tenha 3 expressões a A B e a C
function myFunc() {
    var x = 0;
    return(x += 1, x);
}
*/

function myFunc(){
    var a = 1, b = 2, c = 3;
    return [a, b, c];
}
console.log(myFunc()); // [ 1, 2, 3 ]


function myFunc1() {
    var x = 0;
    return(x += 1, x);
}
console.log(myFunc1()); // 1

function myFunc2() {
    var y = 0;
    return ++y;
}
console.log(myFunc2()); // 1 


// estrutura condicional switch

function myFunc4(x) {
    switch(x) {
        case 1:
console.log( 'x é 1');
        break;
        case 2:
console.log('x é 2');
        break;
        default:
console.log('x não é 1 nem 2');
    }
}
console.log(myFunc4()); // x não é 1 nem 2



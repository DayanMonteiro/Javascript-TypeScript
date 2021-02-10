/* podemos retornar funções a partir de outras funções

function adder(x) { // criei uma função adder
    return function(y){ // criei outra função dentro do retorno dessa função
        return x + y;
    };
}

// ex 02
function adder1(a) {
    function addOther1(b) {
        return a + b
    }
    return addOther1
}
*/
function adder(x) {
    return function(y) {
        return x + y;
    };
}
var add2 = adder(2);
console.log(add2(3)); // 5

console.log(adder(5)(8)); // 13


// IIFE - Immediately-invoked function expression  -- não ao pé da letra seria uma função auto executável


function sum() {
    return 1 + 2;
}
console.log(sum()); // 3

var sum2 = function() {
    return 3 + 2;
};
console.log(sum2()); // 5

var sum3 = function otherSum(){
    return 5 + 8; // 13 
};
console.log(sum3());
/*console.log(otherSum());  ReferenceError: otherSum is not defined 
a razão é que essa função existe dentro do escopo da sum3
*/

// IIFE - prendo a function dentro de () ela se torna uma expressão de função
(function(){
    console.log(1 + 2); // 3
})();
/*
a vantagem de usar uma expressão assim é que forçamos o escopo local
a executar algo que não necessita do escopo global
*/



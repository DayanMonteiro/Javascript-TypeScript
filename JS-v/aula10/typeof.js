/* testando tipos de valores com typeof
Utilizamos typeof somente para testar valores primitivos

typeof 10
"number"

typeof NaN
"number"

typeof 'Dayan'
"string"

typeof function(){}
"function"

typeof {}
"object"

typeof []
"object"
*/

// ex
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(10, 20));  // 30
console.log('Dayan', 33); // Dayan 33 - concatenou
console.log({}, []); // {} []


// ex
function subtract(num1, num2) {
    return num1 - num2;
}
console.log(subtract(10, 3)); // 7 
console.log(subtract('25', 3)); // NaN
console.log(subtract({}, [])); // NaN

// ex aplicando typeof
function subtract1(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 - num2;
    }
    return 'Entre com dois números';
}
console.log(subtract1(10, 3)); // 7 
console.log(subtract1('25', 3)); // Entre com dois números
console.log(subtract1({}, [])); // Entre com dois números


// ex
function subtract2(num1, num2) {
    if(num2 === null) {
        return 'Não entre com valores nulos!'
    }
    return num1 - num2;
}
console.log(subtract2(10, 5)); // 5
console.log(subtract2(null, 21)); // Não entre com valores nulos!
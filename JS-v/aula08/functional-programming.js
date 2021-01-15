/* funções são objetos de primeira classe - significa que as funções tem o mesmo tratamento que os objetos em js, ou seja, tudo que podemos fazer com objetos tambem conseguimos fazer com funções. 
Vejamos esse formato de programação funcional
*/
// obj
var car = {
    brand: 'Chevrolet',
    model: 'Silverado'
};
console.log(car); // { brand: 'Chevrolet', model: 'Silverado' }


// func literal
function sum(x, y) {
    return x + y
}
console.log(sum); // [Function: sum]


// atribuindo objetos a variáveis
var obj = {};

// atribuindo funções a variáveis
var func = function func(){};

function person() {
    return {
        name: 'Dayan',
        lastName: 'Monteiro'
    };
}
console.log(person()); // // atribuindo objetos a variáveis

// outra opção seria atribuir o objeto a uma variável
function person2() {
    var info =  {
        name: 'Dayan',
        lastName: 'Monteiro'
    };
    return info
}
console.log(person()); // { name: 'Dayan', lastName: 'Monteiro' }

// invocando as propriedades
console.log(person().name); // Dayan
console.log(person().lastName); // Monteiro
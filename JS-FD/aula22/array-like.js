// prototipo do objeto específico - Array.prototype - 

(function(){
    'use strict';

    // arguments é um array-like, perceba que ao utilizá-lo posso passar vários itens para ele,  o array-like tem um formato de array, pode ser usado como um array, mas não é um array de verdade
    function MyFunction() {
        console.log(arguments);
    }
    console.log(MyFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
    /*
    [Arguments] {
        '0': 1,
        '1': 2,
        '2': 3,
        '3': 4,
        '4': 5,
        '5': 6,
        '6': 7,
        '7': 8,
        '8': 9,
        '9': 10
    }
    atribuiu os 10 itens ao argumento
    */

    // ex 02 usando arguments dentro do for
    function nomeDaFuncao() {
        for(var i = 0; i < arguments.length; i++){
            console.log(arguments[i]);
        }
    }
    nomeDaFuncao(1, 2, 3, 4, 5);
    /*
    1
    2
    3
    4
    5
    */

    // ex 03 utilizando forEach
    function enganandoJs() {
        Array.prototype.forEach.call(arguments, function(item, index) {
            console.log(item)
        });
    }
    enganandoJs('engano ', 'o javascript ', 'chamando', 'a propriedade forEach ', 'de array prototype.');
    /*
    engano 
    o javascript 
    chamando
    a propriedade forEach 
    de array prototype.
    */

    // ex 04 utilizando reduce
    function usandoReduce() {
        // o arguments substitui o this e o reduce vai somar todos os itens do array
      var result =   Array.prototype.reduce.call(arguments, function(acumulated, actual, index) {
            return acumulated + actual;
        });

        console.log(result);
    }

    usandoReduce(10, 20, 30, 40, 50); // 150 - é a soma de todos os argumentos
}());
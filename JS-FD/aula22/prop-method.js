/* propriedades e métodos em funções
.name - propriedade que retorna o nome da função como uma string, e caso a função n tenha nome ela retorna como undefined

.length - propriedade que conta a quantidade de parametros que a função pode receber

.toString() - todos os objetos dentro de JS tem uma propriedade chamada toString e para cada tipo de objeto o toString funciona de uma forma diferente
*/
(function(){
    'use strict';
    
// ex .length
    function myFunction(a, b, c) {

    }
    console.log(myFunction.length); // 3 - ela retornou que existem 3 parametros sendo eles (a, b, c) dentro da função

//ex .toString() atuando em um array
    function myFunction1(a, b, c, d) {

    }
    var arr = [1, 2, 3, 4];

    console.log(arr.toString()); // 1,2,3,4 - nesse ex o array foi convertindo, todos os itens foram convertidos para string

// ex .toString() atuando em um objeto
    function myFunction1(a, b, c, d) {

    }
    var obj = {prop1: 1, prop2: 2};

    console.log(obj.toString()); // [object Object] -  [object - ele retorna no primeio paramentro convertido em uma string ---   Object no segundo parametro retornado o objeto dizendo que ele é do tipo objeto]

    //.toString invocando função
    console.log(myFunction1.toString()); /*
    function myFunction1(a, b, c, d) {

    }
    ele converte e retorna toda a função como string
    */

})();
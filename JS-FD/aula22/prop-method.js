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

    // .call() - ele invoca a função
    function myFunction2(a, b, c, d, e) {
        return 'Oi!';
    }
    var obj1 = {propriedade1: 1, propriedade2: 2};

    console.log(myFunction2.call()); // Oi! - ate aqui seria a mesmo coisa que invocar apenas o myFunction2, começa a ficar diferente quando invocamos com this

    // .call(this) - quando usado podemos passar quem será o this daquela função
    function myFunction3(a, b, c, d, e) {
       console.log(this.name);
    }
    // esse obj2 passa a ser o this referenciado em name
    var obj2 = {
            name: 'Dayan'
        };

    var obj3 = {
        name: 'Monteiro'
    };
    
    var obj4 = {
        name: 'Santos'
    };

     myFunction3.call(obj2); // Dayan -- sendo assim o call(this) permite passar por parametro quem será aquela função

    myFunction3.call(obj3); // Monteiro - o interessante é que posso passar vários objetos desde que os referencie como name consigo atribuir e invocar através do this vários deles

    myFunction3.call(obj4); // Santos - e assim segue com quantos mais objetos eu atribuir ao name referenciado pelo this

})();
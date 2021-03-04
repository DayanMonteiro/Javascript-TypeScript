(function(){
    'use strict';

    function myFunction(a, b, c, d) {
        console.log(this.name, a, b, c, d);
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


     myFunction.call(obj2, obj3, obj3) // não consigo juntar assim ele retorna apenas o primeiro objeto no caso retorna obj2 = Dayan

     // agora eu posso retornar um dos objetos, porém todos os argumentos
     myFunction.call(obj2, 'a', 'b', 'c', 'd'); // Dayan a b c d

     // poderia passar o que eu quisesse nos ardumentos
     myFunction.call(obj2, 'toca', 'violão', 'e', 'guitarra'); // Dayan toca violão e guitarra

     //  passando com objetos array e argumentos
     function myFunction1(a, b, c, d) {
         console.log(this.other, a, b, c, d);
     }

     var objf = {
         other: 'telecaster'
     }
     
     var arr = [1, 2, 3, 4];

     myFunction1.call(objf, arr); // telecaster [ 1, 2, 3 ] undefined undefined undefined - esses undefined são os argumentos que não passei

    // .apply() - com o método aplly() posso pegar os itens do array, no apply(o primeiro parametro vai representar o this, [arg1, arg2, etc...] ele vai quebrar cada item do array)
    myFunction1.apply(objf, arr);// telecaster 1 2 3 4

    // passando um array de itens
    myFunction1.apply(objf, ['Dayan', 'toca', 'guitarra', 'diariamente']); // telecaster Dayan toca guitarra diariamente

    
}());
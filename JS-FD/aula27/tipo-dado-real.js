
(function(){
    'use strict';
   
    
    // saber o tipo de dado real 
    //object.prototype.toString
    var arr = [1, 2, 3];
    console.log(Object.prototype.toString.call(arr)); // [object Array] - objeto do tipo array

    function myFunc(){};
    console.log(Object.prototype.toString.call(myFunc)); // [object Function] - objeto do função

    // verificando argumentos dentro de uma função
    function myFunc2(){
        console.log(Object.prototype.toString.call(arguments));
    }
    myFunc2(); // [object Arguments]

}());



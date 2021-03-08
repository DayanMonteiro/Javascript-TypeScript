(function(){
    'use strict';

    var $main = document.querySelector('.main');
    //hasAttribute(name) - passa o nome de um atribute e o método verifica se ele tem um atributo específico
    console.log($main.hasAttribute('class')); // true - ele retorna um booleano de true ou false

    console.log($main.hasAttribute('id')); // false

    console.log($main.hasAttribute('data-js')); // true

    /* hasAttributes(name) -- perceba que esse tem S no final, esse verifica se o elemento 
    tem qualquer tipo de atributo, se ele tiver algum atributo ja retorna true se não tiver nenhum retorna false */
    var $main = document.querySelector('.main-content');
    console.log($main.firstElementChild.hasAttributes()); // true
    

}());
(function(){
    'use strict';

    var $main = document.querySelector('.main');
    console.log($main.id); //  id-main
    // podemos mudar o nome do id
    console.log($main.id = 'modificado'); // id-modificado
  
    // para capturar classes usamos className pq class é uma palavra reservada
    console.log($main.className); // main

    // posso modificar o nome da classe para qualquer outro nome
    console.log($main.className = 'mudei');// mudei - agora a class main virou class mudei
    

    // método getAttribute(attr) - passamos o atributo que queremos como parametro, esse metodo sempre retorna string
    console.log($main.getAttribute('class')); // mudei

    console.log($main.getAttribute('data-js')); // main

    // se tentarmos somar os data-numbers ele n soma ele retorna concatenado pq passa como strings
    console.log($main.getAttribute('data-number1') + $main.getAttribute('data-number2')); // 12

    // para somar esses atributos é necessário converter eles para numero passando o + antes 
    console.log(+$main.getAttribute('data-number1') + +$main.getAttribute('data-number2')); // 3

    // setAttribute(attr, value) - podemos modificar ou adicionar atribuitos que não existem
}());

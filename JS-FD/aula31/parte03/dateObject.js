// Date Object = ex: var date = new Date()
(function(){
    'use strict';
   
    var months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    var year = 2021;
    var month = 3;
    var day = 17;
    var hour = 12;
    var min = 16;
    var sec = 0;
    var milleseconds = 0 ;
    var date = new Date(year, month, day, hour, min, sec, milleseconds);
    console.log(date);


   // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
   
   }());
   
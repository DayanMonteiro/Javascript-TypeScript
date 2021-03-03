
(function(win, doc){
    'use strict';

    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporizador;

   
    function timer(){
        console.log('timer', counter++);
        if(counter > 20)
            return;
        temporizador = setTimeout(timer, 1000);
    }
    timer();

    // ao clicar no mouse e essa função interrompe a contagem antes dela atingir as 20 repetições
    $button.addEventListener('click', function(){
        clearTimeout(temporizador);
    }, false);

}(window, document));
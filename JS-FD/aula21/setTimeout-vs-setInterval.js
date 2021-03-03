(function(win, doc){
    'use strict';

    var counter = 0;
    // setTimeout
    function timer(){
        console.log('timer', counter++);
        if(counter > 10)
            return;
        setTimeout(timer, 1000);
    }
    timer();

    //setInterval
    function timer1(){
        console.log('timer1', counter++);
    }
    setInterval(timer1, 1000);


    /* a diferença é quando executo o setTimeout no ex aplicado ele vai rodar as outras coisas que estiverem rodando
    e por fim vai rodar o setTimeout, se tiverem outras coisas ele vai rodar de novo e após 1s ele vai rodar o setTimeout de novo, 
    o setInterval a cada 1s vai colocar o timer pra rodar o loop mesmo que tenham outras coisas executando
    */

}(window, document));
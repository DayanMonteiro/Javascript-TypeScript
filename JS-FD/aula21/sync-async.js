/* sync - sincrona - o evento acontece um comando após o outro
async - assincrona - quando eventos aguardam uma ação do usuário
setTimeout() - ajuda na criação de alguns eventos assincronos, normalmente o setTimeout recebe 2 parametros uma função de callback(uma função de retorno) e um tempo de retorno
*/

(function(win, doc){
    'use strict';

    //ex 00
    console.log('inicio');
    setTimeout(function(){
        console.log('executou setTimeout')
    }, 1000);
    console.log('fim');
    /*
    inicio
    fim
    executou setTimeout

    Obs: primeiro ele executou inicio depois o fim pra depois o setTimeout pq ele enviou-o para o event loop e o retornou apenas 1s depois conforme foi passado no segundo parametro da função
*/

    // ex 01
    // setInterval() - não para de executar, ele programa para a cada x tempo ele rodar de novo a função
    console.log('inicio 2');
    setInterval(function(){
        console.log('executou setInterval')
    }, 1000);
    console.log('fim 2');
    /*
    inicio
    fim
    executou setInterval e segue a cada 1s repetindo e retornando a função
    */

    // ex 02 - passar uma função que a cada 1s ele some 1 ao timeout
    var counter = 0;
    // essa é uma função recursiva pois dentro dela eu chamo ela mesma
    function timer(){
        console.log('timer' + counter++);
        // se quiser parar essa função pra ela não rodar em loop infinito passo uma condição
        if(counter > 10)
            return;
       setTimeout(timer, 1000);
    }
    timer();



}(window, document));
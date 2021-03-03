(function(win, doc){
    'use strict';

/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.
Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
//1 - criei as variáveis necessárias e suas capturas na DOM
var $timer = doc.querySelector('[data-js="timer"]');
var $start = doc.querySelector('[data-js="start"]');
var $stop = doc.querySelector('[data-js="stop"]');
var $reset = doc.querySelector('[data-js="reset"]');
var interval;

/* $start.addEventListener('click', startTimer, false) eu passei a função startTimer para receber 
a função ao click do mouse, se eu passasse $start.addEventListener('click', startTimer() a função aqui dentro 
ela não iria atuar ao receber o click no mouse, por isso ela esta como referencia e a função vou criada a baixo 
e ela esta sendo referenciada em cima, false)*/
$start.addEventListener('click', startTimer, false);
// o racional para o stop é o mesmo do star
$stop.addEventListener('click', stopTimer, false);
// eventos para o reset
$reset.addEventListener('click',resetTimer, false);

    //start
    function startTimer(){
    /*$timer.value (aqui ele ainda é uma string) = +$(ao passar o + no inicio ele 
    converte a string em number)timer.value + 1; */
        $timer.value = +$timer.value + 1;
        interval = setTimeout(startTimer, 1000);
    }

    // stop
    function stopTimer(){
        clearTimeout(interval);
    }

    //reset
    function resetTimer() {
        $timer.value = 0;
        stopTimer();
    }

}(window, document));
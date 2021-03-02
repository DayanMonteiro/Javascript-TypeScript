// tag name - getElementsByName()

(function(win, doc){
    'use strict';

    // quando vamos nos referir a elementos no DOM iniciamos as variáveis com $
    var $inputs = doc.getElementsByTagName('input');
    // o que pode vir a ser um problema é que passando assim captura todos os inputs e em projeto grande isso pode trazer problemas
    console.log(doc.getElementsByTagName($inputs));

    // para resolver esses problemas podemos usar querySelector(seleciona apenas o primeiro dos elementos passados, ex se colocarsse input pegaria apenas o primeiro input que ele encontrasse na aplicação), se passasse querySelectorAll(capturo todos os inputs) para selecionar apenas o que queremos tratar

    var $input = document.querySelectorAll('.input');
    console.log($input);

   var $inputId = document.querySelector('#password');
   console.log($inputId);

}(window, document));
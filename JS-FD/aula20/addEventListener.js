// addEventListener

(function(win, doc){
    'use strict';

    
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');
    
    /*/ o botão receberá 3 eventos o primeiro ao ser clicado, 
    o segundo receberá uma função de callback 
    (Uma função callback é uma função passada a outra função como argumento, 
    que é então invocado dentro da função externa para completar algum tipo de rotina ou ação)

    */
    // por padrão a função recebe um evento passado dentro dela = function(event){}
    $button.addEventListener('click', function(event){
        // ele vai impedir que o evento realize o que ele faz por padrão que no ex seria enviar o formulário ao clicar no botão enviar
        event.preventDefault();
        console.log('Click no botão');
    }, false);

    $inputUsername.addEventListener('click', function(){
        alert('Clicou no input')
    }, false);
    
}(window, document));
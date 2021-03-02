(function(win, doc){
    'use strict';

    
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');

    
    $inputUsername.value = 'Dayan Monteiro';
    $inputPassword.value = 'minhasenha';


    console.log($inputUsername, $inputPassword);
   
    /* posso usar esses parametros como
    getter - obeter pegar o dado
    ex: $inputUsarName.value
        $inputPassword.value
    setter - setar atribuir algo
    ex: $inputUsarName.value = 'Dayan Monteiro';
        $inputPassword.value = 'minhasenha';
    */

    
}(window, document));
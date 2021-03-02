(function(win, doc){
    'use strict';

    
    var $inputUsarName = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');

    
    $inputUsarName.value = 'Dayan Monteiro';
    $inputPassword.value = 'minhasenha';


    console.log($inputUsarName, $inputPassword);
   
    /* posso usar esses parametros como
    getter - obeter pegar o dado
    ex: $inputUsarName.value
        $inputPassword.value
    setter - setar atribuir algo
    ex: $inputUsarName.value = 'Dayan Monteiro';
        $inputPassword.value = 'minhasenha';
    */

    // addEventListener()
}(window, document));
(function(){
    'use strict';

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $h1 = $mainHeader.firstElementChild;
    
   // removeChild - remove o filho passado por parametro - removendo h1
   $mainHeader.removeChild($h1);
   

}());

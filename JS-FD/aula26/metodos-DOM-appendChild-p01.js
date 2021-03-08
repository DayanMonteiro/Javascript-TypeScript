(function(){
    'use strict';

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content')
    var $mainHeader = document.querySelector('.main-header');
    
   // appendChild(child) - adiciona um filho a um elemento onde é passado esse elemento que será adicionado como filho

   // nesse ex o mainContente vai receber como filho o mainHeader
    $mainContent.appendChild($mainHeader);

}());
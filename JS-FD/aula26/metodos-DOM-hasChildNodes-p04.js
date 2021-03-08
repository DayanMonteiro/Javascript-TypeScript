(function(){
    'use strict';

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $h1 = $mainHeader.firstElementChild;
    
   // hasChildNodes - verifica se o elemento tem algum filho
   
    console.log($h1.hasChildNodes()); // true 
}());
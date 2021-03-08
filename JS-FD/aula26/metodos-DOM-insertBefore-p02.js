(function(){
    'use strict';

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $firstText = $mainContent.firstChild; 
   // insertBefore(node, beforeWhom) -  recebe 2 parametros o primeiro é o nó que será inserido e o segundo antes de quem esse nó será inserido
    $mainContent.insertBefore($mainHeader, $firstText);
}());
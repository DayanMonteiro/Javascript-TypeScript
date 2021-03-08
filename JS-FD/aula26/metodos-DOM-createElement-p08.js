(function(){
    'use strict';

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $cloneMainHeader = $mainHeader.cloneNode(true);
    var $mainFooter = document.querySelector('.main-footer');
    var $h1 = $mainHeader.firstElementChild;
    
    var newTextNode = document.createTextNode('novo P!');

     // document.createElement(tagName) - 
     var $newP = document.createElement('p');
     $newP.appendChild(newTextNode);

   
     $main.appendChild($newP); 
  
    
}());

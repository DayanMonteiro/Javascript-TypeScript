(function(){
    'use strict';

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $cloneMainHeader = $mainHeader.cloneNode(true);
    var $mainFooter = document.querySelector('.main-footer');
    var $h1 = $mainHeader.firstElementChild;
    var newTextNode = document.createTextNode('novo texto!');


     // documento.createTextNode(text) - é um metodo do documento que como o próprio nome diz ele cria um nó de texto que atribuirmos a uma váriável
     $main.appendChild(newTextNode); 

 
}());

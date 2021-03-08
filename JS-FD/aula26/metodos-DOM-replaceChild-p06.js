(function(){
    'use strict';

    var $main = document.querySelector('.main');
    var $mainContent = document.querySelector('.main-content');
    var $mainHeader = document.querySelector('.main-header');
    var $cloneMainHeader = $mainHeader.cloneNode(true);
    var $mainFooter = document.querySelector('.main-footer');
    var $h1 = $mainHeader.firstElementChild;
    
   // replaceChild(new, old) - o primeiro parametro será o novo filho e o segundo quem ele irá substituir, ele não exclui o elemento ele os troca de lugar
   $main.replaceChild($mainHeader, $mainFooter);

   // se for o caso de manter 2 mainHeader, basta clonarmos o mainHeader
   $main.replaceChild($cloneMainHeader, $mainFooter);

}());

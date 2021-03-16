// innerHTML parte 01
(function(){
 'use strict';

 var $div = document.querySelector('[data-js="main"]');
 console.log($div.innerHTML); // getter
// $div.innerHTML = '<h2>Título 2</h2>'; // setter
var $h2 = document.createElement('h2');
$h2.textContent = 'Título 2';
$div.appendChild($h2);

// passando por concatenação
$div.innerHTML += '<h3>Título 3</h3>';


}());

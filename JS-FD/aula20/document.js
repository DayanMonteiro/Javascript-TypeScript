(function(win, doc){
// document - representa o documento que no caso do ex é o html 
    'use strict';

    /* sempre que eu for capturar um elemento na DOM preciso passá-lo, 
    sendo assim apra capturar id usarei etElementById */
    console.log(doc.getElementById('my-link'));

    /* seguindo o mesmo racicício se for capturar class usarei getElementsByClassName
    ele cria uma "espécie de array" na verdade é um HTML colection 
    onde posso obter os elementos a partir da classe */
    console.log(doc.getElementsByClassName('my-class'));

    // obs: no id passamos Element pq temos apenas um id - ja na class como podemos ter várias usamos Elements(S) no final

    // capturando pela tag - getElementsByTagName
    console.log(doc.getElementsByTagName('a'));
    
}(window, document));
(function(){
    'use strict';

    /* ex 01
    var $div = document.querySelector('div');
    $div.style.width = '100px'; 
    $div.style.height = '100px'; 
    $div.style.backgroundColor= 'red';
    */

    /* ex 02
    $div.setAttribute('style', 'width: 100px; height: 100px; background: blue');
    */

    // ex 03
    var $div = document.querySelector('div');
    $div.addEventListener('click', function(){
        this.classList.toggle('blue');
    }, false);
    

}());
(function(){
    'use strict';
    // copiando arrays
    var arr = [1, 2, 3, 4, 5];
    // com o metodo slice eu faço uma cópia do array, porém cara uma ocupando um espaço dferente na memória
    var arr2 = arr.slice();
    console.log(arr, arr2, arr === arr2); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] false

    // vamos fazer uma cópia de todas as divs
    var $divs = document.querySelectorAll('div');
    var $divsCopy = Array.prototype.slice.call($divs);
    console.log($divs, $divsCopy, $divs === $divsCopy); /*
    NodeList(2) [div#id-main.main, div.entry]
    0: div#id-main.main
    1: div.entry
    length: 2
    __proto__: NodeList
    
    (2) [div#id-main.main, div.entry]
    0: div#id-main.main
    1: div.entry
    length: 2
    __proto__: Array(0))

    temos a duas divs e elas não são iguais, ou seja realizou uma cópia
    */

}());
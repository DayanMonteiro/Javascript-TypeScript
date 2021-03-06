(function(){

    /*
    // ex 00 - o click no link da div será herdado pelo click no a
    var $a = document.querySelector('[data-js="link"]');
    document.querySelector('[data-js="link"]').addEventListener('click', function(event) {
        alert('clicou na div');
    }, false);

    $a.addEventListener('click', function(event) {
        event.preventDefault();
        alert('clicou no a')
    }, false);
*/

    // ex 01 a mesma aplicação com um código diferente para a herança
    function on(element, event, callback) {
        document.querySelector(element).addEventListener(event, callback, false);
    }

    on('[data-js="link" ]', 'click', function(event) {
        event.preventDefault();
        alert('clicou no a');
    });

    on('[data-js="link" ]', 'click', function() {
        alert('clicou na div');
    });

    on('[data-js="span"]', 'click', function() {
        alert('clicou no span');
    });

}());
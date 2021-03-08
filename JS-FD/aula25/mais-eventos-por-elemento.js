(function(){

function on(element, event, callback) {
    // pelo fato do addEventListener ser um método podemos atribuir mais de um evento para o mesmo elemento
    document.querySelector(element).addEventListener(event, callback, false);
}

// ao clicar no primeiro evento em seguinda será disparado o segundo, porque os eventos são acumulativos
on('[data-js="link" ]', 'click', function(event) {
    event.preventDefault();
    alert('clicou no a');
});

on('[data-js="link" ]', 'click', function(event) {
    event.preventDefault();
    alert('novo evento de clique no a');
});


}());
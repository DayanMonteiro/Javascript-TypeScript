(function(){

    function on(element, event, callback) {
        // pelo fato do addEventListener ser um método podemos atribuir mais de um evento para o mesmo elemento
        document.querySelector(element).addEventListener(event, callback, false);
    }

    // além de adicionar eventos podemos remover eventos com removeEventListener
    function off(element, event, callback) {
    document.querySelector(element).removeEventListener(event, callback, false);
}
    
    function handleClick(event) {
        event.preventDefault();
        alert('clicou no a');
    }

    function handleClick2(event) {
        event.preventDefault();
        alert('novo evento de clique no a');
    }
    
        on('[data-js="link" ]', 'click', handleClick); 
        on('[data-js="link" ]', 'click', handleClick);
        off('[data-js="link" ]', 'click', handleClick2);
   
    }());



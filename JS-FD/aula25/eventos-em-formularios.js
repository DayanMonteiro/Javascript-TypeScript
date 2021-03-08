(function(){

    function on(element, event, callback) {

        document.querySelector(element).addEventListener(event, callback, false);
    }

    function off(element, event, callback) {
    document.querySelector(element).removeEventListener(event, callback, false);
}
    /*  ALGUNS EVENTOS
    // esse evento input vai mostrar cada valor digitado no input
     on('[data-js="input"]', 'input', function(event) {
        console.log(this.value);
         ex: se eu digitar meu nome ele retornará 
        D
        Da
        Day
        Daya
        Dayan
    }); 


    // evento keyup - mostra o que foi digita após a tecla ser precionada e soltada 
    on('[data-js="input"]', 'keyup', function(event) {
        console.log(this.value);
         ex: se eu digitar uma letra no caso a e manter ela precionada ele só irá me devolver a numero de letras após soltar o botão 
        eventos-em-formularios.js:26 aaaaaaaaaaaaaaaaaaaaaaaaaaa    
    });
*/
    // evento keydown - mostra o que foi digitado ao precionar não precisa soltar a tecla pra que seja capturada a tecla
    on('[data-js="input"]', 'keydown', function(event) {
        console.log(this.value);       
    }); 

    // o change vai mudar os valores atualizando o select
    on('[data-js="select"]', 'change', function(){
        // o valor do input será o valor selecionado no select
        document.querySelector('[data-js="input"]').value = this.value;
    });

    


    
}());
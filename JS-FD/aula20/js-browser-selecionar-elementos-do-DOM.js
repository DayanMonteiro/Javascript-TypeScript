(function(win){
    'user strict';

    //propriedade alert
   // window.alert('Mensagem'); tudo que for global não preciso passar o window pq o js ja entende que se trata de algo global
    alert('Mensagem');

    var obj = {
        prop1: {
            prop2: {prop3: 1}
        }
    }
    // with - (com) ainda funciona, mas esta sendo removido do javascript
    with(obj.prop1.prop2) {
        console.log(prop3);
    } // 1

    /* propriedade prompt - a mesma coisa pode ser passado window.prompt, 
    porem por ser global pode ser passado apenas o prompt
    o prompt gera uma pergunta na tela que lhe dá 2 opções |ok| e |cancelar| */
   // prompt('Mensagem?');

    // podemos utilizá-lo no if direcionando a resposta ok e cancelar
    if(prompt('Pergunta?')){
        console.log('resposta ok!')
    } else {
        console.log('resposta cancelar!')
    }

}(window));
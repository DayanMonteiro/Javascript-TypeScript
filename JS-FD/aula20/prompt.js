(function(){
    // relembrando --'use strict';--- melhorara a qualidade do código, pois chama exceções quando usamos variáveis não declaradas
    'use strict';

    // capturando resposta do usuário
    var name = prompt('Qual o seu nome?');
    if(name)
    console.log('O nome é ', name);
    else 
    console.log('Não respondeu :(')

}());
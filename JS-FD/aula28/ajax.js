/* AJAX - Asynchronous Javascript and XML
Assincrono é quando uma operação que demanda muito consumo recurso não bloqueia sua trade principal, pois essa ação acontece em uma trade secundária.

O que é AJAX e para que serve?
AJAX significa Asynchronous JavaScript e XML. Em poucas palavras, é o uso do objeto XMLHttpRequest para se comunicar com os scripts do lado do servidor. Ele pode enviar bem como receber informações em uma variedade de formatos, incluindo JSON, XML, HTML, e até mesmo arquivos de texto.
*/

/* window.XMLHttpRequest() - podemos instaciar esse objeto para fazer requisições AJAX
Temos 3 passos:
O primeiro passo é instanciar
ex: var ajax = new XMLHttpRequest();
O segundo é abrir uma uma conexão
ex: ajax.open(<protocol>, <url>);
O terceiro passo é enviar os para o servidor (se tiverem dados).
ex: ajax.send(<data>);
*/
(function(){
    'use strict';

    //instanciando a requisição
    var ajax = new XMLHttpRequest();
    // abrindo a requisição com o método get e como ainda não tem pra onde enviar usando a / passamos pra raiz do próprio localhost
    console.log(ajax.readyState); // 0 - não encontrado
    ajax.open('GET', '../aula28/data/data.json');
    // submeter, por ainda não ter pra onde enviar passamos null ou deixamos em branco
    console.log(ajax.readyState); // 1 - conexão aberta
    ajax.send();

    //INICIANTO MANIPULAÇÃO DOS DADOS
    // evento onreadystatechange - verifica se o estado dessa requisição mudou e respondo no evento
    ajax.onreadystatechange = function() {

    };

    /* outra forma de passar o evento seria com o addEventListener */
    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function(){
        if(isRequestOK()) {
            var data = JSON.parse(ajax.responseText);
            console.log('Requisição OK', data.message);
            // ajax.responseText traz a resposta da requisição em string caso queira consultar
        } 
         // ajax.readState - verifica o estado atual da requisição
        console.log('terminou requisição', ajax.readyState, ajax.status);
        /*
        terminou requisição 2
        terminou requisição 3
        terminou requisição 4
        */

        /* Esses numeros seguem um padrão
        Valor	Estado	           Descrição
        0	    Não encontrado	   Um cliente foi criado

        Valor	Estado	           Descrição
        1	    Conexão aberta	   O método open() foi chamado.

        Valor	Estado	                   Descrição
        2	    HEADERS foram recebidos	   O método send() foi chamado e os cabeçalhos e status estão disponíveis .

        Valor	Estado	                                   Descrição
        3	    LOADING carregando corpo da requisição	   Baixando e responseText contem os dados parciais.

        Valor	Estado	           Descrição
        4	    DONE Concluído	   Operação concluída.

        https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/readyState
        */
    }, false);

    /* HTTP STATUS - ajax.status
    os principais

    status	200: "OK"
    403: "Forbidden"
    404: "Page not found"
    500 Internal Server Error
    505 HTTP Version Not Supported

    lista completa de status
    https://www.w3schools.com/tags/ref_httpmessages.asp
    */
   function isRequestOK() {
       ajax.readyState === 4 && ajax.status === 200;
   }

}());
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
    ajax.open('GET', '/');
    // submeter, por ainda não ter pra onde enviar 
    ajax.send();







}());
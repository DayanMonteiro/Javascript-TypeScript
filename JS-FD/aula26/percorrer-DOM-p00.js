(function(){
    'user strict';

    // .parentNode - pega o nó que é pai do nó que esta sendo selecionado
    var $main = document.querySelector('.main'); // body
    // vai exibir no console quem o pai dessa classe main
    console.log($main.parentNode);

    // childNodes - traz todos os nós que são filhos do nó que esta sendo passado
    console.log($main.childNodes); /* NodeList(7) [text, header.main-header, text, section.main-content, text, footer.main-footer, text]

    ele retornou uma lista com 7 itens pq o childNodes entende cada enter como um nó, mesmo que ele retorne um text em branco
    NodeList(7) [text, header.main-header, text, section.main-content, text, footer.main-footer, text]
    0: text -- enter
    1: header.main-header
    2: text -- enter
    3: section.main-content
    4: text - enter
    5: footer.main-footer
    6: text - enter
    length: 7

    sendo assim desses 7 itens o que temos de class na dom são os itens 1, 3 e 5 do array-like
    */

    // firstChild - como o proprio nome ja diz retorna o primeiro filho
    console.log($main.firstChild); // #text - retornou o primeiro enter do array-like indice zero do exemplo acima

    // lastChild - como o proprio nome ja diz retorna o ultimo filho
    console.log($main.lastChild); // #text - retornou o ultimo enter do array-like indice 6 do exemplo acima

    // nextSibling - mostra quem é o irmão
    console.log($main.nextSibling); // <script src="percorrer-DOM.js"></script>

    // previousSibling - pega o irmão anterior
    console.log($main.previousSibling); // #text

}());
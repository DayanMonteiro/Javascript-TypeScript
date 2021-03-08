/* createDocumentFragment - cria um fragmento no documento, como se fosse um documento em branco
para poder manipular nós, ou incluí-los ao html, fica mais performático pq se trabalha esses nós fora da DOM
e quando for incluí-los pode-se fazer todos de uma vez
*/
(function(){

    var fragment = document.createDocumentFragment();
    // cria o elemento P(paragrafo)
    var childP = document.createElement('p');
    // cria o texto elemento de para o texto do paragrafo
    var textChildP = document.createTextNode('Texto da tag P! NOVO PARAGRAFO Suspendisse id sagittis neque, eget aliquam lacus. In nec placerat urna, in eleifend tellus. Nullam enim tellus, aliquam at hendrerit sed, condimentum vel neque. In ullamcorper cursus eros, nec hendrerit lacus vulputate sed. Fusce et mauris blandit, convallis felis eget, ultrices justo. ');

    // add o texto ao paragrafo
    childP.appendChild(textChildP);
    // add o p ao fragmento
    fragment.appendChild(childP);

    // pegou o fragmento e jogou ao body
    document.body.appendChild(fragment);
}());
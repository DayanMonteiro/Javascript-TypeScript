(function(doc){

    /* DOMContentLoaded -  carrega a pagina mesma que alguma parte ainda esteja sendo carregada,
     porque essa função só será chamada depois que a DOM tiver sido carregada */
    function afterDomContentLoaded() {
    
        var fragment = doc.createDocumentFragment();
        var childP = doc.createElement('p');
        var textChildP = doc.createTextNode('Texto da tag P! NOVO PARAGRAFO Suspendisse id sagittis neque, eget aliquam lacus. In nec placerat urna, in eleifend tellus. Nullam enim tellus, aliquam at hendrerit sed, condimentum vel neque. In ullamcorper cursus eros, nec hendrerit lacus vulputate sed. Fusce et mauris blandit, convallis felis eget, ultrices justo. ');
    
        childP.appendChild(textChildP);
        fragment.appendChild(childP);

        doc.body.appendChild(fragment);
    }

    // window load - espera carregar tudo que esta dentro do window para depois carregar esse documento
    function afterWindowLoad() {
        alert('AfterWindowLoad');
    }

    doc.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);
    window.addEventListener('load', afterWindowLoad, false);

 

}(document));
(function(){
    'user strict';


    var $main = document.querySelector('.main'); 
    // children - essa propriedade não é padronizada pelo orgão que padroniza a DOM, porém ela é suportada nos navegadores

    // vamos comparar o childNodes com o children
    console.log($main.childNodes); /*
    NodeList(7) [text, header.main-header, text, section.main-content, text, footer.main-footer, text]
    0: text
    1: header.main-header
    2: text
    3: section.main-content
    4: text
    5: footer.main-footer
    6: text
    length: 7
    __proto__: NodeList

    ---- o childNodes - traz ate as linhas de espaçamento como o enter, trás comentários  
    */
    console.log($main.children); /*
    HTMLCollection(3) [header.main-header, section.main-content, footer.main-footer]
    0: header.main-header
    1: section.main-content
    2: footer.main-footer
    length: 3
    __proto__: HTMLCollection

    --- ja o children trás apenas as classes capturadas ele resume o array-like do childNodes de 7 itens para os 4 itens principais, não contando espaçamento atraves do enter e nem os comentários
    */

    // firstElementChild - traz somento nós do elemento da DOM


    var $main = document.querySelector('.main-content');
    console.log($main.firstElementChild); /*
    <div class="entry">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat justo tortor, sit amet facilisis enim scelerisque non. Phasellus sed elit leo. Vivamus id lacinia elit. Curabitur pretium, lacus id dignissim euismod, quam lacus bibendum turpis, id mollis felis turpis non tellus. Maecenas rhoncus est blandit ligula lobortis, vel posuere ex rhoncus. Nulla ultricies magna at tempus pellentesque. Aliquam diam justo, venenatis sit amet rhoncus et, placerat sit amet arcu.  
                </p>
    </div>

    retornou toda a div que era o primeiro elemento filho do main-content
    */

    // lastElementChild - faz a mesma coisa porém pegando o ultimo elemento
    
    // nextElementSibling

       var $main = document.querySelector('.main');
       console.log($main.firstElementChild.nextElementSibling); /* retorna a section
    <section class="main-content">
    Texto1
        <!-- comentário -->
        <div class="entry">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat justo tortor, sit amet facilisis enim scelerisque non. Phasellus sed elit leo. Vivamus id lacinia elit. Curabitur pretium, lacus id dignissim euismod, quam lacus bibendum turpis, id mollis felis turpis non tellus. Maecenas rhoncus est blandit ligula lobortis, vel posuere ex rhoncus. Nulla ultricies magna at tempus pellentesque. Aliquam diam justo, venenatis sit amet rhoncus et, placerat sit amet arcu.  
            </p>
        </div>
        Texto2
     </section>
       */

     // previousElementSibling - funciona da mesma forma

     // childElementCount - diz a quantidade de filhos do elemento
     console.log($main.childElementCount); // 3
     // ele tem o mesmo efeito que o children.length
     console.log($main.children.length); // 3  

}());
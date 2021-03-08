(function(){
    'user strict';


    var $main = document.querySelector('.main'); 
    // nodetype - mostra  um numero com o tipo de nó que este representa
    console.log($main.nodeType); // 1 - que no é um elemento

    console.log($main.firstChild.nodeType); // 3  - que no caso é um texto
   
    /*
    tabela com o numero e sua descrição de filiação
     
    Node type	    Description                	 Children
1	Element	        Represents an element	     Element, Text, Comment, ProcessingInstruction, CDATASection,        EntityReference

    Node type	    Description                	 Children
2	Attr	        Represents an attribute	     Text, EntityReference

    Node type	    Description                	                              Children
3	Text	        Represents textual content in an element or attribute	  None

    Node type	    Description                	                                                           Children
4	CDATASection	Represents a CDATA section in a document (text that will NOT be parsed by a parser) 	None

    Node type	     Description                	     Children
5	EntityReference	 Represents an entity reference	     Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference

    Node type	    Description                Children
6	Entity	        Represents an entity	   Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference

    Node type	            Description                	          Children
7	ProcessingInstruction	Represents a processing instruction	  None

    Node type	    Description                	 Children
8	Comment	        Represents a comment	     None

    Node type	    Description                	                                      Children
9	Document	    Represents the entire document (the root-node of the DOM tree)	  Element, ProcessingInstruction, Comment, DocumentType

    Node type	    Description                	                                      Children
10	DocumentType	Provides an interface to the entities defined for the document	  None

    Node type	        Description                	 Children
11	DocumentFragment	Represents a "lightweight" Document object, which can hold a portion of a document	
Children
Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference

    Node type	   Description                	                    Children
12	Notation	   Represents a notation declared in the DTD	    None


https://www.w3schools.com/jsref/prop_node_nodetype.asp

*/
    
    // nodeVaue - é o conteudo textual dos elementos text e comment
    var $main = document.querySelector('.main-content');
    console.log($main.firstChild.nodeValue); //  Texto1

    console.log($main.childNodes); /* retorna a lista como todos os filhos
    NodeList(5) [text, comment, text, div.entry, text]
        0: text
        1: comment
        2: text
        3: div.entry
        4: text
        length: 5
        __proto__: NodeList
    */

      // pesquisando as strings do irmão do primeiro filho, encadeando propriedades
      console.log($main.firstChild.nextSibling.nodeValue);   // comentário

      // nodeName - retorna o nome do nó, conforme o próprio descreve
      console.log($main.firstChild.nextSibling.nodeName); // #comment - o tipo é um comentário

      console.log($main.firstChild.nodeName); // # text

      console.log($main.nodeName); // section

      /* site para pesquisar quais navegadores suportam essas features:
        https://caniuse.com/
      */
}());
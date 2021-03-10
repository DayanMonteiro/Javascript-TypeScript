
(function(){
    'use strict';


    var ajax = new XMLHttpRequest();
    ajax.open('GET', '../aula28/data/data.xml');
    ajax.send();

 
    console.log('Carregando...');
    var response = '';
    ajax.addEventListener('readystatechange', function(){
         if(isRequestOK()) {
        //     var data = JSON.parse(ajax.responseText);
        //     console.log('Requisição OK\n', JSON.parse(ajax.responseText).message);
        try {
             // disparar o erro
            //throw new Error('Mensagem de erro');
            // throw new SyntaxError('Mensagem de erro');
            response = JSON.parse(ajax.responseText);
           
            }
            catch(e) {
                //console.log(e);
                response = ajax.responseText;
            }
            console.log(response);
         } 
    }, false);

   function isRequestOK() {
      return ajax.readyState === 4 && ajax.status === 200;
   }

}());
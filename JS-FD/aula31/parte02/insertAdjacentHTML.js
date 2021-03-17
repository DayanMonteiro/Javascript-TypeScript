/* insertAdjacentHTML - te permite inserir elementos html assim como o innerhtml a diferença é que permite ser passado o posicionamento desse elemento
insertAdjacentHTML(pos, text)
beforebegin - afterbegin
beforeend - afterend
*/
(function(){
    'use strict';
   
    var $form = document.querySelector('[data-js="form"]');
    $form.insertAdjacentHTML('beforebegin', '<h1>Preencha o formulário</h1>');

    
    var $div = document.querySelector('[data-js="form"]');
    $div.insertAdjacentHTML('beforeend', '<p>Nullam fermentum est ut ex ultricies vestibulum. Sed fringilla semper risus ac feugiat. Cras quis massa dolor. Ut quis pharetra neque. Ut ac enim non purus dapibus finibus at vitae elit. Aliquam erat volutpat. Nulla vestibulum, elit at vestibulum egestas, magna nisl condimentum magna, et pharetra nisi lectus feugiat ante.</p>');
   
    // duplicando o formulário
    var $form = document.querySelector('[data-js="form"]');
    $form.insertAdjacentHTML('beforebegin', $form.outerHTML);
    console.dir($form);
   
   }());
   
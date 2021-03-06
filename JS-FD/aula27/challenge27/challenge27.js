(function(){
/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.
Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.
Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false
Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
function DOM(elements){
    this.element = document.querySelectorAll(elements);
  }
  
  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(eventType, callback, false);
    });
  };
  
  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(eventType, callback, false);
    });
  };
  
  DOM.prototype.get = function get() {
    return this.element;
  };

// Crie os seguintes métodos: forEach, map, filter, reduce, reduceRight, every e some.

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };
 
// para testar todos os métodos basta ir alterando aqui
  var $a = new DOM('[data-js="link"]');
  console.log($a);
  //$a.INSERIR AQUI TODOS OS NOMES DOS MÉTODOS PARA TESTE(function(item)
  $a.forEach(function(item){
    console.log(item.firstChild.nodeValue);
  });
  /*
   DOM {element: NodeList(3)}
  Link 1
  Link 2
  Link 3
  */

  var $a = new DOM('[data-js="link"]');
  console.log($a);
  var dataJs = $a.map(function(item){
    return item.getAttribute('data-js');
  });
  console.log(dataJs); // ["link", "link", "link"]


// Crie os seguintes métodos para verificação de tipo: isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
DOM.prototype.isArray = function isArray(parametro){
  return Object.prototype.toString.call(parametro) === '[object Array]';
};
console.log(DOM.prototype.isArray([1, 2, 3])); // true

DOM.prototype.isObject = function isObject(parametro){
  return Object.prototype.toString.call(parametro) === '[object Object]';
};

DOM.prototype.isFunction = function isFunction(parametro){
  return Object.prototype.toString.call(parametro) === '[object Function]';
};
console.log(DOM.prototype.isFunction(function(){})); // true

DOM.prototype.isNumber = function isNumber(parametro){
  return Object.prototype.toString.call(parametro) === '[object Number]';
};
console.log(DOM.prototype.isNumber(1)); // true

DOM.prototype.isString = function isString(parametro){
  return Object.prototype.toString.call(parametro) === '[object String]';
};

DOM.prototype.isBoolean = function isBoolean(parametro){
  return Object.prototype.toString.call(parametro) === '[object Boolean]';
};

DOM.prototype.isNull = function isNull(parametro){
  return Object.prototype.toString.call(parametro) === '[object Null]'
  || Object.prototype.toString.call(parametro) === '[object Undefined]';
};
console.log(DOM.prototype.isNull(null)); // true

  var $a = new DOM('[data-js="link"]');
  console.log($a);
  var dataJs = $a.reduce(function(acc, item, index){
    return acc + ' ' + item.getAttribute('data-js') + index; 
  }, 0);
  console.log(dataJs); // 0 link0 link1 link2

}());
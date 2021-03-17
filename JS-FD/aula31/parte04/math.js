
(function(){
    'use strict';
   
    // metodo pi para trabalhar com circunferencias etc..
   console.log(Math.PI); // 3.141592653589793
   
   // abs - - sempre retorna um valor positivo
   console.log(Math.abs(-10)); // 10 

   // ceil  - arredonda o valor sempre pra cima
   console.log(Math.ceil(10.2)); //11 

    // floor - arredonda o valor sempre pra baixo
   console.log(Math.floor(10.9)); // 10
   
   // round -  retorna o valor de um número arredondado para o inteiro mais proximo, ex: de .4 pra baixo ele arredonda pra baixo, de .5 em diante pra cima
   console.log(Math.round(10.3)); // 10
   console.log(Math.round(10.9)); // 11
   console.log(Math.round(10.5)); // 11
   console.log(Math.round(10.4)); // 10
   console.log(Math.round(10.599999)); // 11

   // sqrt - raiz quadrada
   console.log(Math.sqrt(9)); // 3
   console.log(Math.sqrt(5)); // 2.23606797749979


   // cbrt -  raiz cubica
   console.log(Math.cbrt(12)); // 2.2894284851066637
   console.log(Math.cbrt(30)); // 3.1072325059538586

   // max() - aceita quantos parametros forem necessários serem passados e retorna o maior valor dentre eles
   console.log(Math.max(12, 258, 35147, -100, 14, 12, -20)); // 35147

   // min() - aceita quantos parametros forem necessários serem passados e retorna o menor valor dentre eles
   console.log(Math.min(12, 258, 35147, -100, 14, 12, -20)); // -100

   // ex: com max e min
   var numbers = [12, 258, 35147, -100, 14, 12, -20];
   console.log(Math.max.apply(Math, numbers)); // 35147
   console.log(Math.min.apply(Math, numbers)); // -100

   // random - retorna um número pseudo-aleatório no intervalo de 0 a 1
   console.log(Math.random()); // ex 0.9542970128812873
   console.log(Math.random()); // ex 0.541830725571905
   console.log(Math.random()); // ex 0.41470900738822847

   // se quiser um numero de 0 ate um numero especifico, ex de 0 a 3, basta multiplicar pelo numero desejado
   console.log(Math.random() * 3 ); // ex 1.047049994717204
   console.log(Math.random() * 3 ); // ex 2.5205158200609556
   console.log(Math.random() * 3 ); // ex 1.4120448359671733
   console.log(Math.random() * 3 ); // ex 0.8285028594373649

   //ex se quiser fazer de 0 a 100 arredondando pra numero inteiro
   console.log(Math.floor(Math.random() * 101 )); // ex 25
   console.log(Math.floor(Math.random() * 101 )); // ex 57
   console.log(Math.floor(Math.random() * 101 )); // ex 95
   console.log(Math.floor(Math.random() * 101 )); // ex 62
   console.log(Math.floor(Math.random() * 101 )); // ex 99

   // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

   }());
   
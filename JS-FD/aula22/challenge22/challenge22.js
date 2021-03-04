 (function(){
    'use strickt';
 /*
  Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
  `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
  */
 var dayan = {
    name: 'Dayan',
    lastName: 'Monteiro'
 };

 var laryssa = {
    name: 'Laryssa',
    lastName: 'Fuentes'
 };
 
  /*
  Agora crie uma função chamada `getFullName` que retorne as propriedades
  `name` e `lastName` dos objetos acima, formando um nome completo.
  A função não deve receber nenhum parâmetro, mas as propriedades `name` e
  `lastName` devem ser dinâmicas.
  A mesma função deve servir para as duas pessoas (ou qualquer outra que for
  criada).
  Depois disso, invoque essa função, mostrando no console o nome completo das
  pessoas que foram criadas anteriormente, passando as pessoas acima como
  contexto da função. Use um console.log por pessoa.
  */
 console.log( 'O nome das pessoas é:' );
function getFullName() {
   return this.name + ' ' + this.lastName;
}

console.log(getFullName.call(dayan)); // Dayan Monteiro
console.log(getFullName.call(laryssa)); // Laryssa Fuentes

 /*
 Crie uma função chamada `sum`. Essa função pode receber uma lista de
 parâmetros variável, e deverá retornar a soma de todos eles.
 Não use estruturas de repetição para somar os argumentos.
 Na primeira linha, dentro da função, deixe um console.log para mostrar todos
 os parâmetros passados para essa função.
 */
 function sum() {
    // o arguments será o contexto do método reduce
    console.log(arguments);
    return Array.prototype.reduce.call(arguments, function(acumulated, actualItem){
       //+acumulated  +actualItem - esse + antes converte para numero
      return +acumulated + +actualItem;
      // outra opção para transformar em numeros seria usando Number
      // return Number(acumulated) + Number(actualItem);
      // também pode ser feito a conversão assim
      // return (+acumulated) + (+actualItem);
    });
 }

 /*
 Mostre no console que a função acima funciona, invocando-a em 3 console.log
 diferentes, com quantidades variáveis de parâmetros passados.
 */
 console.log( '\nSomar alguns números:' );
 console.log(sum(1, 2, 3));
 console.log(sum(10, 20, 30, 40));
 console.log(sum(100, 200, 300, 400, 500));
 /*
 Somar alguns números:
[Arguments] { '0': 1, '1': 2, '2': 3 }
6
[Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }
100
[Arguments] { '0': 100, '1': 200, '2': 300, '3': 400, '4': 500 }
1500
/*

 /*
 Declare uma variável chamada `userEntry`, que irá receber alguns valores
 entrados pelo usuário. Mostre para o usuário a seguinte frase:
 "Entre com alguns números que serão somados:"
 */
  var userEntry = prompt('Entre com alguns números que serão somados:');

 /*
 Mostre no console o valor entrado pelo usuário:
 */
console.log( '\nEntrada do usuário:' );
console.log(userEntry);
/*
Entrada do usuário:
(aqui por ex se digitar 1 2 3 4 será retornado os 4 numeros se digitar 10 retornará 10 numeros e assim por diante)
*/

 /*
 Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
 e remove tudo o que não for número, retornando um array somente com os números
 da string. Mostre a representação em string dessa função no console.
 */
 console.log( '\nFunção que limpa entrada do usuário (somente números):' );
function justNumbers(entry) {
   // /\D+/g' tudo que não for numero substituir por virgula / .split(',') - converteu em um array separando cada item por virgula ','
   return entry.replace(/\D+/g, ',').split(',');
}
console.log(justNumbers('52gsh7jajhjas25 3, 8'));
/*
Função que limpa entrada do usuário (somente números):

["52", "7", "25", "3", "8"]
*/

 /*
 Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
 atribuindo o resultado à uma variável `numbers`.
 */
 console.log( '\nEntrada do usuário limpa. Somente números:' );
var numbers = justNumbers(userEntry);
console.log(numbers);
/*
No ex de teste digiteijhsjihs69bjauhds85jhashujhas1549874klahsuas879456

me retornou ["", "69", "85", "1549874", "879456"]
*/

 /*
 Agora com o array de números, utilize a função `sum` para somar todos os
 números desse array e mostre o resultado no console.
 */
 console.log( '\nSomar números entrados pelo usuário:' );
 console.log(sum.apply(sum, numbers));
/*
no ex digitei 10jihasiuohs5874kjohasjhdsa87koahsdas15koahsdas63

["10", "5874", "87", "15", "63"]

6049
*/
}());
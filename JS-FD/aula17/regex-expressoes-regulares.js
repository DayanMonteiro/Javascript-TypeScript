
/* expressões regulares -são um tipo primitivo e servem basicamente para
manipular strings: substituir texto, pegar parte do texto, ou qualquer outra
coisa para manipular textos. a expressão regular fica entre duas barras / / 
*/
var regex = /m/;
console.log(regex); // /m/

var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet luctus enim. Curabitur vitae lacus tempor, commodo elit eu, faucibus ipsum. Integer egestas, mi eu interdum auctor, quam enim iaculis massa, eu viverra lorem ligula eu purus. Aliquam erat volutpat. Mauris ultricies sem ut purus iaculis rhoncus. Pellentesque porttitor, tortor eget bibendum porttitor, enim enim auctor. Libero, eu Luctus tortor lorem faucibus sapien. Suspendisse congue magna at vehicula maximus. Nulla mi dolor, vehicula vitae eleifend non, lobortis eu tellus. Etiam eget finibus metus. Morbi eget rhoncus sem, ac bibendum sem.";
console.log(texto.match(/e/g)); /*
como passeo o g após o //e/ o g busca todos os e no texto e me retorou todos os eles esse g é de global, então ele pegou globalmente em todo o texto todas as letras e
[
  'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'e'
]
*/


// vou passar agora a letra l porem querendo capturar tanto maisculas quanto monisculas para isso isarei 2 atributos o g de global e o i de ignore case
console.log(texto.match(/l/gi));
/*
[
  'L', 'l', 'l', 'l', 'l', 'l',
  'l', 'l', 'l', 'l', 'l', 'l',
  'l', 'l', 'l', 'l', 'L', 'L',
  'l', 'l', 'l', 'l', 'l', 'l',
  'l', 'l', 'l', 'l'
]
*/

// agora vejamos \w - caracteres alfanuméricos e \d - números (digits)
var texto2 = "Anberlin é uma banda americana de rock alternativo formada em Winter Haven, Flórida, em 2002, extinta em 2014 e reunida em 2018. Desde o início de 2007, a banda é formada pelo vocalista Stephen Christian, pelos guitarristas Joseph Milligan e Christian McAlhaney, pelo baixista Deon Rexroat e pelo baterista Nathan Young. Os membros do Anberlin formaram originalmente uma banda sob o nome de SaGoh 24/7 em 1998, lançando dois álbuns de estúdio antes da separação, com os membros tendo uma mudança na direção musical e no nome. Anberlin foi formada em 2002; depois de um ano de existência, eles assinaram com a gravadora semi-independente Tooth & Nail Records e lançaram o seu álbum de estreia, Blueprints for the Black Market. Em 2005, a banda lançou o seu segundo álbum, Never Take Friendship Personal.[1] O terceiro álbum da banda, Cities, foi lançado em 2007 e tornou-se o primeiro álbum a alcançar o top 20 da Billboard 200, vendendo 34.000 cópias na sua semana de estreia.";
console.log(texto2.match(/A/g)); // [ 'A', 'A', 'A', 'A' ] me troue todos os A maiuscilos do texto

// se eu quiser que me traga todas as letras
console.log(texto2.match(/\w/g)); 
/*
[
  'A', 'n', 'b', 'e', 'r', 'l', 'i', 'n', 'u', 'm', 'a', 'b',
  'a', 'n', 'd', 'a', 'a', 'm', 'e', 'r', 'i', 'c', 'a', 'n',
  'a', 'd', 'e', 'r', 'o', 'c', 'k', 'a', 'l', 't', 'e', 'r',
  'n', 'a', 't', 'i', 'v', 'o', 'f', 'o', 'r', 'm', 'a', 'd',
  'a', 'e', 'm', 'W', 'i', 'n', 't', 'e', 'r', 'H', 'a', 'v',
  'e', 'n', 'F', 'l', 'r', 'i', 'd', 'a', 'e', 'm', '2', '0',
  '0', '2', 'e', 'x', 't', 'i', 'n', 't', 'a', 'e', 'm', '2',
  '0', '1', '4', 'e', 'r', 'e', 'u', 'n', 'i', 'd', 'a', 'e',
  'm', '2', '0', '1',
  ... 662 more items
]

ele pegou cada letra e numero de todas as palavas do texto e me retornou um array com 762 itens
*/

// se eu quiser retornar o ano de formação da banda
console.log(texto2.match(/2002/));  // '2002'

// se eu passar algo que não esta no texto ele retorna nulo
console.log(texto2.match(/Dayan/)); // null

// para buscar todos os numeros no texto
console.log(texto2.match(/\d/g));
/*
[
  '2', '0', '0', '2', '2', '0', '1', '4',
  '2', '0', '1', '8', '2', '0', '0', '7',
  '2', '4', '7', '1', '9', '9', '8', '2',
  '0', '0', '2', '2', '0', '0', '5', '1',
  '2', '0', '0', '7', '2', '0', '2', '0',
  '0', '3', '4', '0', '0', '0'
]
*/

// se eu quiser retonar todos os numeros com sequencias de 4 numeros tipo os anos do texto
console.log(texto2.match(/\d\d\d\d/g));
/*
[
  '2002', '2014',
  '2018', '2007',
  '1998', '2002',
  '2005', '2007'
]
*/



// classes de caracteres ou listas -  posso querer por exemplo siladas de ou da passaria elas da seguinte forma
console.log(texto2.match(/de | da/g));
/*
[
  'de ', 'de ', 'de ',
  'de ', 'de ', ' da',
  'de ', 'de ', 'de ',
  ' da', ' da', 'de '
]
*/

// para pegar uma classe de caracteres passo os []
console.log(texto2.match(/[aeo]/g));
/*
perceba que ele retornou todas as letras a e o encontradas no texto, mais um detalhe 
eu n passei elas sepradamente [aeo] apesar de buscá-las separadamente 
nesse tipo de codido não passamos [a e o]
[
    'e', 'a', 'a', 'a', 'a', 'e', 'a', 'a', 'e', 'o', 'a', 'e',
    'a', 'o', 'o', 'a', 'a', 'e', 'e', 'a', 'e', 'a', 'e', 'e',
    'a', 'e', 'e', 'e', 'a', 'e', 'e', 'e', 'o', 'o', 'e', 'a',
    'a', 'a', 'o', 'a', 'a', 'e', 'o', 'o', 'a', 'a', 'e', 'e',
    'a', 'e', 'o', 'a', 'a', 'o', 'e', 'a', 'e', 'a', 'a', 'e',
    'e', 'o', 'a', 'a', 'e', 'o', 'e', 'o', 'a', 'e', 'e', 'o',
    'a', 'e', 'a', 'a', 'a', 'o', 'e', 'o', 'o', 'e', 'o', 'a',
    'a', 'o', 'a', 'e', 'e', 'a', 'a', 'a', 'o', 'o', 'o', 'e',
    'e', 'a', 'o', 'e',
    ... 140 more items
  ]
  */

// agrupamento de caracteres utilizo ()
console.log(texto2.match(/(de)|(ar)|(do)/g));
/*
[
    'de', 'de', 'de', 'ar', 'do',
    'ar', 'de', 'do', 'do', 'de',
    'ar', 'do', 'de', 'de', 'de',
    'ar', 'do', 'de', 'de', 'ar',
    'de', 'ar', 'do', 'do', 'ar',
    'ar', 'de', 'do', 'de'
  ]
 */ 


/* se for passado uma sequencia de caracteres ex: [0123456789] é uma lista 
ele vai buscar cada um individualmente, agora se passar /0123466789/ aí ele
procraria uma sequencia */
console.log(texto2.match(/[0123456789]/g));
/*
[
  '2', '0', '0', '2', '2', '0', '1', '4',
  '2', '0', '1', '8', '2', '0', '0', '7',
  '2', '4', '7', '1', '9', '9', '8', '2',
  '0', '0', '2', '2', '0', '0', '5', '1',
  '2', '0', '0', '7', '2', '0', '2', '0',
  '0', '3', '4', '0', '0', '0'
]
*/

// se eu quiser todos os caracteres mauisculos
console.log(texto2.match(/[A-Z]/g));
/*
[
  'A', 'W', 'H', 'F', 'D', 'S', 'C',
  'J', 'M', 'C', 'M', 'A', 'D', 'R',
  'N', 'Y', 'O', 'A', 'S', 'G', 'A',
  'T', 'N', 'R', 'B', 'B', 'M', 'E',
  'N', 'T', 'F', 'P', 'O', 'C', 'B'
]
*/

// se eu quiser todos os caracteres minusculos
console.log(texto2.match(/[a-z]/g));
/*
[
  'n', 'b', 'e', 'r', 'l', 'i', 'n', 'u', 'm', 'a', 'b', 'a',
  'n', 'd', 'a', 'a', 'm', 'e', 'r', 'i', 'c', 'a', 'n', 'a',
  'd', 'e', 'r', 'o', 'c', 'k', 'a', 'l', 't', 'e', 'r', 'n',
  'a', 't', 'i', 'v', 'o', 'f', 'o', 'r', 'm', 'a', 'd', 'a',
  'e', 'm', 'i', 'n', 't', 'e', 'r', 'a', 'v', 'e', 'n', 'l',
  'r', 'i', 'd', 'a', 'e', 'm', 'e', 'x', 't', 'i', 'n', 't',
  'a', 'e', 'm', 'e', 'r', 'e', 'u', 'n', 'i', 'd', 'a', 'e',
  'm', 'e', 's', 'd', 'e', 'o', 'i', 'n', 'c', 'i', 'o', 'd',
  'e', 'a', 'b', 'a',
  ... 581 more items
]
*/

// replace()

var texto3 = "Emery é uma banda cristã, iniciada em 2001 de estilo post-hardcore, que surgiu em Rock Hill, na Carolina do Sul. Atualmente a banda está em Seattle, Washington.";
console.log(texto3.replace(/e/, 'E'));/*só mudou o segundo E da palavra Emery

EmEry é uma banda cristã, iniciada em 2001 de estilo post-hardcore, que surgiu em Rock Hill, na Carolina do Sul. Atualmente a banda está em Seattle, Washington.
*/
// agora se passamos o g global vai modificar todas as letras do texto
console.log(texto3.replace(/a/g, 'A'));/*
Emery é umA bAndA cristã, iniciAdA em 2001 de estilo post-hArdcore, que surgiu em Rock Hill, nA CArolinA do Sul. AtuAlmente A bAndA está em SeAttle, WAshington.*/




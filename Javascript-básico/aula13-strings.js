/* sites de documentação do JavaScript 
https://www.w3schools.com/js/DEFAULT.asp 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript 
*/

/* se eu iniciar uma string com "aspas duplas" e precisar usar novamente "" em uma parte do textoneu tenho o recurso de escapar usando a barra invertida, conforme no modelo abaixo*/ 
let string = "Um \"texto\" que continua";
console.log(string); // Um "texto" que continua

// se eu quiser inserir uma barra invertida em meu texto eu uso \\ duas, ex:

let inserirBarra = "Inserindo \\ no texto";
console.log(inserirBarra); // Inserindo \ no texto

// é possivel pesquisar elementos em uma string como se ela fosse um array, vejamos:
let umaString = "Pegando";
console.log(umaString[2]); // g
// exibe o g porque assim como no array a contagem das strings começará com o primeiro elemento sendo 0, logo a palavra se caractezaria do seguinte modo [0=P, 1=e, 2=g, 3=a, 4=n, 5=d, 6=o]
// outra opção é usar p charAt, vejamos:
console.log(umaString.charAt(5)); // d

// função concat serve para concatenar assim como o sinal de +
let maisUmTexto = "outro texto pra exemplificar"
console.log(maisUmTexto.concat('', ' e seguir', ' ', 'com o curso')); // outro texto pra exemplificar e seguir com o curso
console.log(`${maisUmTexto} e seguir com o curso `);
//outro texto pra exemplificar e seguir com o curso 
console.log(maisUmTexto + ' e seguir com o curso');
//outro texto pra exemplificar e seguir com o curso

// pesquisando indice 
let indiceString = "Lá vem mais uma forma";
console.log(indiceString.indexOf('mais'));
// 7 // ou seia a palavra mais começa no indice 7

// temos tbm o indice que busca de trás pra frente
let indiceInverso = "Lá vem mais uma forma";
console.log(indiceInverso.lastIndexOf('f')); // 16

// expressão regular match(/[a-z]/g)) o g monta como se fosse um array na resposta
let outraFrase = "Um texto para captura";
console.log(outraFrase.match(/[a-z]/g));
/* [
  'm', 't', 'e', 'x', 't',
  'o', 'p', 'a', 'r', 'a',
  'c', 'a', 'p', 't', 'u',
  'r', 'a'
] 
retornou todas as letras minusculas 
*/
console.log(outraFrase.match(/[a-z]/));
/* [ 'm', index: 1, input: 'Um texto para captura', groups: undefined ]
veja que sem a letra g no final da função ele me retorna a primeira letra minuscula detro da frase e o index da sua localização*/
console.log(outraFrase.match(/t/));
/* [ 't', index: 3, input: 'Um texto para captura', groups: undefined ] - nesse caso ele retornou a letra t a sua localização que no index 3*/

// replace - substitui um dado por outro
console.log(outraFrase.replace('Um', 'Outro'));
/* Outro texto para captura
no caso ele trocou a palavra Um pela palavra Outro na frase*/
console.log(outraFrase.replace(/Um/, 'Outro'));
/* Outro texto para captura
usando as // de expressão regular também funciona da mesma forma*/ 

// vejamos outro exemplo
let oRato = "O rato roeu a roupa do rei de roma.";
console.log(oRato.replace(/r/, "g"));
/* O gato roeu a roupa do rei de roma. 
veja que substituiu o primeiro R da frase por um G, mudando a frase de o Rato, para o G */
console.log(oRato.replace(/r/g, "G")); /* O Gato Goeu a Goupa do Gei de Goma.
Usando a tag g na função eu troquei todas as letras R por letras G */

// length - descobrindo o tamanho da string
let quantasStrings = "Nada me faltará";
console.log(quantasStrings.length); 
/* 15 = a frase tem 15 caracteres */
console.log(quantasStrings.length - 5);
/* 10 = a frase q tinha 15 caracteres ele retirou 5 caracteres totalizando agora 10 caracteres */
console.log(quantasStrings.slice(8, 13));
/* falta = ou seja, me retornou a string 8 (onde inicia a captura de strings que eu quero) a 13 (onde termina a captura de strings que eu quero) picotando a palavra faltará em falta */
console.log(quantasStrings.slice(-5));
/* ltará = no caso ele me retornou as ultimas 5 strings da minha frase. */

// usando slice e length juntos
console.log(quantasStrings.slice(-5, quantasStrings.length - 2));
/* lta = ele pegou as ultimas 5 strings e ainda retirou as duas ultimas, ou seja retornando as 5 ultimas eu tinha ltará - 2 ultimas = lta. */

//posso abreviar o mesmo resultado acima omitindo o length, vejamos:
console.log(quantasStrings.slice(-5, - 2));
/* lta = veja temos o mesmo resultado com um código menor */

// podemos querer o mesmo resultado do slice acima
console.log(quantasStrings.substring(quantasStrings.length - 5, quantasStrings.length - 2));
/* lta  = obetemos o mesmo resultado porém com um código muito maior valendo mais a pena usar o slice */

// ao inves de usar as strings negativas com o sinal de menos (-), podemos usar o substring();
console.log(quantasStrings.substring(quantasStrings.length - 2));
// rá = me retornou as 2 ultimas strings da frase.

// se eu quiser dividir a frase por arrays com espaços, vejamos
let oSplitStrings = "Toda boa dádiva e todo dom perfeito vêm do alto, descendo do Pai das luzes, que não muda como sombras inconstantes."
console.log(oSplitStrings.split(' '));
/*
[
  'Toda',          'boa',
  'dádiva',        'e',
  'todo',          'dom',
  'perfeito',      'vêm',
  'do',            'alto,',
  'descendo',      'do',
  'Pai',           'das',
  'luzes,',        'que',
  'não',           'muda',
  'como',          'sombras',
  'inconstantes.'
]
*/
// se eu quiser omitir uma letra
let omitindoLetra = "O rato roeu a roupa do rei de Roma."
console.log(omitindoLetra.split('r'));
/* [ 'O ', 'ato ', 'oeu a ', 'oupa do ', 'ei de Roma.' ] veja que omitiu todos os r minúsculos */
console.log(omitindoLetra.split(' ', 3));
/* [ 'O', 'rato', 'roeu' ]
nesse caso ele pega as 3 primeiros resultados da minha frase, no caso as 3 primeiras palavras, se eu colocasso o nomero*/

// toUpperCase = colocar todas as letras em maiúsculas
let manipulandoTexto = "O rato roeu a roupa do rei de Roma."
console.log(manipulandoTexto.toUpperCase());
// O RATO ROEU A ROUPA DO REI DE ROMA.

// toLowerCase = colocar o texto em minusculas
console.log(manipulandoTexto.toLowerCase());
//o rato roeu a roupa do rei de roma.









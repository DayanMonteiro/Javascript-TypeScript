(function(){
  'use strict';  
/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Declare uma variável chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, com a frase:
- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F é a 1ª letra do meu nome."
- "e é a 2ª letra do meu nome."
E assim por diante, até a última.
*/
console.log( 'As letras do seu nome:' );
var name = 'Dayan';
/*diferente dos outros for dessa vez criei duas variáveis var i e var len ja no primeiro parametro
e passei no segundo < que o len que era o segundo parametro atribuiído, isso só da certo nesse caso 
pq essa variável n ficará substituindo o name, se fosse em outra situação não seria o indicado */
for(var i = 0, len =  name.length; i < len; i++) {
  // por ser um for, posso passar o console dentro se fosse uma function teria que ser fora da }
  console.log(name.charAt(i) + ' é a ' + (i + 1) + ' ª letra do meu nome.');
}
/*
As letras do seu nome:
D é a 1 ª letra do meu nome.
a é a 2 ª letra do meu nome.
y é a 3 ª letra do meu nome.
a é a 4 ª letra do meu nome.
n é a 5 ª letra do meu nome.
*/
/*
- Declare uma variável chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um traço).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
por um espaço.
- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
nome, então fique à vontade para usar as artimanhas que já viu até agora no
curso para fazer isso funcionar corretamente :)
- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/
console.log( '\nNome convertido à partir de um slug:' );
var fullName = 'dayan-monteiro-dos-santos';
var newFullName = ' ';
/*para separar as palavras pode ser usado o método split, como passei o ('-') 
sempre que metodo encontrar o '-' ele vai separar*/
var newFullName = fullName.split('-').map(function(name) {
  return name[0].toUpperCase() + name.slice(1);
}).join(''); 
/* [ 'dayan', 'monteiro', 'dos', 'santos' ] 
Parte 1 - do ´código passei o split, ele monta o array separando as palavras sempre que 
encontra o '-' passado nas strings, sempre que achar o '-' o split('-') criará uma separação
das palavras... esse seria o resultado final, como passei o map vejamos agora o que ele vai realizar.
Parte 2 -  como passei o map() ele passa por todos os itens do array sendo assim agora somando os dois métodos é possivel usar o map para deixar todas as primeiras letras maiusculas, quando é passado name[0] ele vai capiturar a primeira letra de cada palavra do array, se o código acasse aqui o retorno seria [ 'd', 'm', 'd', 's' ] 
Parte 3 - e agora pra transformar em maiuscula uso toUpperCase(), como ele só esta até o momento retornando a primeira letra e agora em maiusculas vou concatenar com + name ficaria assim [ 'Ddayan', 'Mmonteiro', 'Ddos', 'Ssantos' ], porem agora ficam duas letras iniciais uma maiscula e uma minuscula, 
Parte 4 - para resolver isso aplica-se o método slice(1) ou seja quero que pegue a partir do indice 1 ate o final da string, dessa forma o retorno fica [ 'Dayan', 'Monteiro', 'Dos', 'Santos' ]
Parte 5 - agora preciso juntar todas as palavras do array, para isso aplica-se o método join() retornando assim DayanMonteiroDosSantos - 
*/
console.log(fullName);
console.log(newFullName);
/*
Nome convertido à partir de um slug:
dayan-monteiro-dos-santos
DayanMonteiroDosSantos
*/


/*
- Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
ser um "e". No final, concatene com a frase: " são meus amigos.".
O resultado final deve ficar mais ou menos assim:
- "João, Maria, Roberto, Pedro e Marcos são meus amigos."
- Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
5 nomes foi somente uma sugestão ;)
*/
console.log( '\nMeus amigos:' );
var friends = ['Ruan', 'Daniel', 'Edelmo', 'Luiz', 'Antônio'];
console.log(friends); // [ 'Ruan', 'Daniel', 'Edelmo', 'Luiz', 'Antônio' ]

// para reduzir em uma unica string utiliza-se o reduce() separando por virgulas
var phrase = friends.reduce(function(acumulado, atual, index ) {
  // se for ultimo indice cola 'e' se n for coloca ',' 
  var separator = friends.length - 1 === index ? ' e ' : ',';
  return acumulado + separator + atual;
  // para inserir ao final dos nomes " são meus amigos." da pra utilizar o concat()
}).concat(' são meus amigos.');
console.log(phrase); // Ruan,Daniel,Edelmo,Luiz e Antônio são meus amigos.


/*
Usando o replace(), faça a string "Roberto" virar "Roberta".
Mostre o resultado no console.
*/
console.log( '\nEra "Roberto", agora é:' );
console.log('Roberto'.replace('to', 'ta')); // Roberta

/*
Mostre no console a parte "nando" da string "Fernando". Use o método que
faz a busca do final para o início da string.
*/
console.log( '\nParte de uma string:' );
console.log('Fernando'.slice('Fernando'.lastIndexOf('nando')));
/*
Parte de uma string:
nando
*/
// outra forma de fazer é usando o substring
console.log('Fernando'.substring(8, 3)); // nando

/*
Declare uma variável chamada `myName`, que receba o seu primeiro nome,
escrito de forma natural.
Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
e minúsculas.
- Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
de qualquer tamanho, escrito de qualquer forma.
Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
*/
console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
var myName = 'Dayan';
var myNewName = [];
for(var i = 0, len = myName.length; i < len; i++) {
  // intercalei entre minuscula e maiscula
  myNewName.push(i % 2 === 0 ? myName[i].toLowerCase() : myName[i].toUpperCase());
}
// para juntar as letras passei o join('') passei o '' em branco para simplesmete juntar as letras
console.log(myNewName.join('')); // dAyAn

}());
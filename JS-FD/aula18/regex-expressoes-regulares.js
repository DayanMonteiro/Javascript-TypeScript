/* Revisão:
[] - lista corresponde a um dos caracteres que estiverem dentro
() - grupo ou captura representada pelos () tanto para agrupar itens como para fazer captura de trexos especificos da expressão regular
\w - representa caracteres alfanuméricos [A-Za-z0-9_], ou seja de A a Z maiusculo, a a z minusculo, de 0 a 9 e o caractere _ underline
\d - digitos[0-9]
\s que representa os espaços em branco
\n - quebra de linha
\t - tabulação (tecla tab) obs: o \s também captura o \t como espaçamento
. - caractere ponto pega qualquer caractere(exceto quebra de linha)
*/

/*
Caracteres de negação
[^] - o match nega o match com as informações passadas
*/
var text = "We write a thousand pages, they're torn and on the floor. Headlights hammer the windows, we're locked behind these doors. And we are never leaving, this place is part of us. And all these scenes repeating are cold to the touch";

console.log(text.match(/[abc]/g));
/*
ele capturou todas as letras a b c contidas no texto
[
  'a', 'a', 'a', 'a', 'a',
  'a', 'c', 'b', 'a', 'a',
  'a', 'c', 'a', 'a', 'c',
  'a', 'a', 'c', 'c'
]
*/

console.log(text.match(/[^abc]/g));
/*
ele captura tudo que que não for abc ou seja ele nega essas letras e pegam as outras
[
  'W', 'e', ' ', 'w', 'r', 'i', 't', 'e', ' ', ' ', 't', 'h',
  'o', 'u', 's', 'n', 'd', ' ', 'p', 'g', 'e', 's', ',', ' ',
  't', 'h', 'e', 'y', "'", 'r', 'e', ' ', 't', 'o', 'r', 'n',
  ' ', 'n', 'd', ' ', 'o', 'n', ' ', 't', 'h', 'e', ' ', 'f',
  'l', 'o', 'o', 'r', '.', ' ', 'H', 'e', 'd', 'l', 'i', 'g',
  'h', 't', 's', ' ', 'h', 'm', 'm', 'e', 'r', ' ', 't', 'h',
  'e', ' ', 'w', 'i', 'n', 'd', 'o', 'w', 's', ',', ' ', 'w',
  'e', "'", 'r', 'e', ' ', 'l', 'o', 'k', 'e', 'd', ' ', 'e',
  'h', 'i', 'n', 'd',
  ... 107 more items
]
*/

// negação com o W maiusculo \w minusculo captura os alfanumericos o \W maisculo nega qualquer cacartere menos os alfanumericos, ex:

var text2 = 'Emery é uma banda cristã, iniciada em 2001 de estilo post-hardcore, que surgiu em Rock Hill, na Carolina do Sul. Atualmente a banda está em Seattle, Washington. A banda Emery foi formada 2001 em Rock Hill, South Carolina. Quando os integrantes se conheceram no colégio. Mas nessa época, todos possuiam bandas distintas, e somente quando terminaram o colégio que se uniram e formaram o Emery. Mas eles optaram por se mudar para Seattle, Washington na busca de um cenário musical melhor que o de sua cidade natal. A banda tinha quatro integrantes quando aconteceu essa mudança de cidade, sendo eles: Toby Morrell (Vocais, e guitarra), Devin Shelton (Bateria), Matt Carter (Guitarra, e teclado) e Joel "Chopper" Green (Baixo)';
console.log(text.match(/\W/g));
/*
[
  ' ', ' ', ' ', ' ', ',', ' ', "'", ' ',
  ' ', ' ', ' ', ' ', '.', ' ', ' ', ' ',
  ' ', ',', ' ', "'", ' ', ' ', ' ', ' ',
  '.', ' ', ' ', ' ', ' ', ' ', ',', ' ',
  ' ', ' ', ' ', ' ', ' ', '.', ' ', ' ',
  ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '
]
*/

// \D - assim como o \d pega os numericos o \D ele pega qualquer caractere menos os digitos
var text3 = 'Dallas John Green (nascido em 29 de setembro de 1980)[1] é um músico canadense que libera música sob o nome de City and Colour.[2] Ele também é conhecido por suas contribuições como o vocalista, guitarrista e compositor da banda post-hardcore Alexisonfire. Em 2005, ele estreou seu primeiro álbum completo, Sometimes, que obteve a certificação Platina em 2006. City and Colour começou a se apresentar em pequenos espaços íntimos enquanto Alexisonfire desapareceu por algum tempo.';
console.log(text3.match(/\D/g));
/*
[
  'D', 'a', 'l', 'l', 'a', 's', ' ', 'J', 'o', 'h', 'n', ' ',
  'G', 'r', 'e', 'e', 'n', ' ', '(', 'n', 'a', 's', 'c', 'i',
  'd', 'o', ' ', 'e', 'm', ' ', ' ', 'd', 'e', ' ', 's', 'e',
  't', 'e', 'm', 'b', 'r', 'o', ' ', 'd', 'e', ' ', ')', '[',
  ']', ' ', 'é', ' ', 'u', 'm', ' ', 'm', 'ú', 's', 'i', 'c',
  'o', ' ', 'c', 'a', 'n', 'a', 'd', 'e', 'n', 's', 'e', ' ',
  'q', 'u', 'e', ' ', 'l', 'i', 'b', 'e', 'r', 'a', ' ', 'm',
  'ú', 's', 'i', 'c', 'a', ' ', 's', 'o', 'b', ' ', 'o', ' ',
  'n', 'o', 'm', 'e',
  ... 363 more items
]
*/




//\S qualquer caractere menos espaço em branco
console.log(text3.match(/\S/g));
/*
[
  'D', 'a', 'l', 'l', 'a', 's', 'J', 'o', 'h', 'n', 'G', 'r',
  'e', 'e', 'n', '(', 'n', 'a', 's', 'c', 'i', 'd', 'o', 'e',
  'm', '2', '9', 'd', 'e', 's', 'e', 't', 'e', 'm', 'b', 'r',
  'o', 'd', 'e', '1', '9', '8', '0', ')', '[', '1', ']', 'é',
  'u', 'm', 'm', 'ú', 's', 'i', 'c', 'o', 'c', 'a', 'n', 'a',
  'd', 'e', 'n', 's', 'e', 'q', 'u', 'e', 'l', 'i', 'b', 'e',
  'r', 'a', 'm', 'ú', 's', 'i', 'c', 'a', 's', 'o', 'b', 'o',
  'n', 'o', 'm', 'e', 'd', 'e', 'C', 'i', 't', 'y', 'a', 'n',
  'd', 'C', 'o', 'l',
  ... 306 more items
]
*/


// repetidores de expressões regulares 
// intervalos {n,m} - item anterior ao menos {n} vezes e no máximo{m} vezes

/*  match(/\d - ou seja quero numeros {2 de dois ,4  a quarto digitos}/g de forma global)); */
console.log(text3.match(/\d{2,4}/g)); // [ '29', '1980', '2005', '2006' ] 

//{n,} intercalo aberto - item antrior n ou mais vezes, ou seja, que se passar \d{1,} - capturar todos o numeros q tenho pelo menos um digito e como esta em aberto ele também capttura qualquer numero com mais de um número, vejamos
var text4 = 'meu código foi cadastrado 27 de fevereiro de 2020 e meu código é 12345678910';
console.log(text4.match(/\d{1,}/g)); // [ '27', '2020', '12345678910' ]

// também podemos passar sem a virdulo daí ele só vai captirar os que tem exatamente o numero de itens passados ex:
console.log(text4.match(/\d{2}/g)); 
/*
ele agrupou eles em grupos de a cada 2 numeros até mesmo desmembrando os numeros com vários digitos
[
  '27', '20', '20',
  '12', '34', '56',
  '78', '91'
]
*/


// ? - opcional - zero a uma ocorrência do item anterior
// \d um numero \d seguido de outro numero ? porém é opicional
console.log(text4.match(/\d\d?/g));
/*
[
  '27', '20', '20',
  '12', '34', '56',
  '78', '91', '0'
]
*/

// + - representa uma ou mais ocorrências do item anteior
//ex: letra s seguida ou nao de outra letra s
console.log(text4.match(/s+/g)); // [ 's' ] ele capturou apenas o s dentro da palavra cadastro


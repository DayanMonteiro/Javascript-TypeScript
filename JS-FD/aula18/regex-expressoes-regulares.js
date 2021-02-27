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

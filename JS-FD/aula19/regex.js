/* OUTROS SÍMBOLOS
^ - inicio de string ---- o mesmo passado dentro de uma lista [^] faz negação, porém fora de uma lista ele funciona como caractere de inico em string

$ - fim de string 

m - flag m miltiline - ele vai capturar em mais de uma linha

? - repetição não que representa 1 ou 0 caracteres se usado após repetidores

?: - somente agrupamento sem capturar - ou seja ele encontra o que esta sendo buscado faz o agrupamento, mas ele não captura para retornar, obs ele só funciona dentro de () ficando (?:)

\1, \2 referência dentro da regex - 
*/

/* OUTROS MÉTODOS de string para regex

.match(regexp) - que recebe por parametro a regex

.replace(regexp, string) - podemos usar uma regex e como segundo parametro uma string ou uma função

.split(regex) - converte string para array
*/

// .split(regexp) - 
var cpf = '111.222.333-44';
console.log(cpf.split('.')); /* converteu em cada local onde encontrou o ponto '.' em um novo item no array
[ '111', '222', '333-44' ]
*/
// ex: por também conter o - podemos passar o split quebrando em todos os caracteres onde não forem numeros
console.log(cpf.split(/\D/)); // \D vai atuar em tudo que não for número [ '111', '222', '333', '44' ]

// .search(regexp) - busca na string
console.log(cpf.search(/\./)); /* 3 - retornou que possue o ponto no indice 3 dentro da string, 
ele retorna assim que encontra o primeiro item não adianta passa o /g 
porque ele não busca de forma global ele para no primeiro indice encontrado */

// se passarmos um caractere que n possui na string ele retorna -1 como se fosse um false
console.log(cpf.search(/\y/)); // -1





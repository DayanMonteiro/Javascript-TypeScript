(function(){
    'use strict';

/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
retorne esse CPF limpo (somente os números).
Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
eles! Use um console.log para cada CPF.
- "049-214 3421-1"
- "210.458.522-05"
- "735 500 794 - 22"
- "101.123-131x32"
*/
console.log( 'Limpando CPFs:' );
function cleanCPF(cpf) {
    // usando o \D representa não números
    return cpf.replace(/\D/g, '');
}
var cpfs = ["049-214 3421-1", 
"210.458.522-05", 
"735 500 794 - 22", 
"101.123-131x32"];
cpfs.forEach(function(cpf){
    console.log(cleanCPF(cpf));
});
/*
Limpando CPFs:
04921434211
21045852205
73550079422
10112313132
*/

/*
uma forma seria essa, mas não é a melhor maneira
console.log(cleanCPF('049-214 3421-1'));
console.log(cleanCPF('210.458.522-05'));
console.log(cleanCPF('735 500 794 - 22'));
console.log(cleanCPF('101.123-131x32'));
*/
/*
Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
Ex.: "999.999.999-99"
Mostre o resultado no console.
*/
console.log( '\nFormatando CPFs corretamente:' );
cpfs.forEach(function(cpf) {
    /*replace(/(\d\d\d)(\d\d\d)(\d\d\d)(\d\d)/) aqui estou passando 4 conjuntos de captura 
    onde nos 3 primeiros quero formar blocos com 3 numeros por isso a utlização de 3 \d, 
    ja no ultimo campo quero caputurar 2 numeros passando 2 \d
    '$1.$2.$3-$4' aqui é passando o que ficará entre os espaçamentos nos 3 primeiros seprados por . e no ultimo por traço gerando a forma padrão de inserir CFP 000.000.000.-00
    */
   console.log(cleanCPF(cpf).replace(/(\d\d\d)(\d\d\d)(\d\d\d)(\d\d)/, '$1.$2.$3-$4'));
/*
Formatando CPFs corretamente:
049.214.342-11
210.458.522-05
735.500.794-22
101.123.131-32
*/
// uma forma mais otimizada para passar o código seria \d{numero total que deseja capturar}, vejamos:
console.log(cleanCPF(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, function(regex, argumetos1, argumentos2, argumentos3, argumentos4){
    return argumetos1 + '.' + argumentos2 + '.' + argumentos3 + '-' + argumentos4;
}));
/*
Formatando CPFs corretamente:
049.214.342-11
210.458.522-05
735.500.794-22
101.123.131-32
*/
});
/*
Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
usando o mínimo de caracteres possíveis na regex.
Para garantir que a regex funciona, teste-a usando o método match. Se houver
o match, o método retorna um array com os matches. Caso contrário, ele
retornará null.
Mostre no console o resultado do match para a frase:
"Os meses de janeiro, junho e julho começam com a letra j."
O resultado deve ser:
["junho", "julho"]
*/
console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
console.log('Os meses de janeiro, junho e julho começam com a letra j.'.match(
    /junho|julho/g
)); // [ 'junho', 'julho' ]
// outra maneira é passando os parametros nl dentro do match pq são as unicas letras diferentes dentro do nome dos meses
console.log('Os meses de janeiro, junho e julho começam com a letra j.'.match(
    /ju[nl]ho/g
)); // [ 'junho', 'julho' ]
/*
Crie uma expressão regular que faça o match com a abertura de uma tag
HTML qualquer.
Ex.: "<div>", "<section>", "<blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><section><blockquote>Texto <img /></blockquote></section></div>"
O resultado deve ser:
["<div>", "<section>", "<blockquote>"]
*/
console.log( '\nMatch com a abertura de uma tag HTML:' );
console.log('<div><ul><li></li><li></li><li><span></span></li></ul></div>'.match(/<\w+>/g)); /*
(/<\w+>/g)); -tags que abram com < - o \w representa os caracteres de A-Z, a-z, 0-9 e o _ / passando o + significa que qualquer umdesses caractres na quantidade que for por isso o +, e por fim que seja fechadas com >
 [ '<div>', '<ul>', '<li>', '<li>', '<li>', '<span>' ]
 /*

/*
Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
com a abertura e fechamento da tag.
Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><ul><li></li><li></li><li><span></span></li></ul></div>"
O resultado deve ser:
["<li></li>", "<li></li>", "<span></span>"]
*/
console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
console.log('<div><ul><li></li><li></li><li><span></span></li></ul></div>'.match(/<\w+><\/\w+>/g));
/*
(/<\w+><\/\w+>/g)); casando \/\ com o escapamento para n casa com a / de fechamento de tag ex: <></(essa barra daria erro no código, então precisa escapá-la)div>

[ '<li></li>', '<li></li>', '<span></span>' ]
*/

/*
Vamos complicar um pouco agora :D
Crie uma expressão regular que faça o match com um texto existente dentro de
uma tag HTML. O texto deve ser capturado e substituído por:
'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'
Use a marcação abaixo para fazer o replace:
"<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
A marcação deve permanecer como está, somente o texto deve ser substituído.
No replace, utilize quebras de linha para deixar uma tag por linha.
O resultado deve ser esse:
<h1>O texto dentro da tag "h1" é "Título da página"</h1>
<p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
<footer>O texto dentro da tag "footer" é "Rodapé"</footer>
Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
https://regex101.com/#javascript e verifique se as capturas estão
corretas, para depois aplicar no código ;)
*/
console.log( '\nFazer replace dos textos das tags:' );
console.log('<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>'.replace(/<(\w+)>([^<]+)<\/\w+>/g,
 '<$1>O texto dentro da tag "$1" é "$2"</$2>\n'));
/*
Fazer replace dos textos das tags:
<h1>O texto dentro da tag "h1" é "Título da página"</Título da página>
<p>O texto dentro da tag "p" é "Este é um parágrafo"</Este é um parágrafo>
<footer>O texto dentro da tag "footer" é "Rodapé"</Rodapé>
*/

}());
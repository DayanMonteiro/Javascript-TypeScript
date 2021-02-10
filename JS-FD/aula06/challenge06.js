/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Carioca';
console.log(championship); // Campeonato Carioca

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Flamengo', 'Fluminense', 'Vasco', 'Bota Fogo', 'Voltaço'];

console.log( 'Times que estão participando do campeonato:', teams ); // Times que estão participando do campeonato: [ 'Flamengo', 'Fluminense', 'Vasco', 'Bota Fogo', 'Voltaço' ]

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(position) {
    if(position < 1 || position >5 ){
        return "Não temos a informação do time que está nessa posição.";
    }
    return 'O time que está em ' + position +'º lugar é o ' + teams[position -1] + '.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1)); // O time que está em 1º lugar é o Flamengo.
console.log(showTeamPosition(3)); // O time que está em 1º lugar é o Flamengo.
console.log(showTeamPosition(2)); // O time que está em 2º lugar é o Fluminense.
console.log(showTeamPosition(5)); // O time que está em 5º lugar é o Voltaço.
console.log(showTeamPosition(8)); // Não temos a informação do time que está nessa posição.


/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var num = 20;
while(num <= 30) {
    console.log(num++);
}
/*
20
21
22
23
24
25
26
27
28
29
30
*/

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(color) {
    var hexa;
    switch(color) {
        case 'red':
            hexa ='#e74c3c';
            break;
        case 'blue':
            hexa ='#3498db';
            break;
        case 'green':
            hexa ='#2ecc71';
            break;
        case 'black':
            hexa ='#1e272e';
            break;
        case 'white':
            hexa ='#ffffff';
            break;
        default:
            return 'Não temos o equivalente hexadecimal para ' + color + '.';
    }
    return 'O hexadecimal para a cor ' + color + ' é ' + hexa + '.';
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('red')); // O hexadecimal para a cor red é #e74c3c.
console.log(convertToHex('blue')); // O hexadecimal para a cor blue é #3498db.
console.log(convertToHex('green')); // O hexadecimal para a cor green é #2ecc71.
console.log(convertToHex('black')); // O hexadecimal para a cor black é #1e272e.
console.log(convertToHex('white')); // O hexadecimal para a cor white é #ffffff.
console.log(convertToHex('purple')); // Não temos o equivalente hexadecimal para purple.
console.log(convertToHex('cyan')); // Não temos o equivalente hexadecimal para cyan.
console.log(convertToHex('magenta')); // Não temos o equivalente hexadecimal para magenta.
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
// outra opção é usar p charArt, vejamos:
console.log

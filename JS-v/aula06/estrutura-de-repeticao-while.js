/* estrutura de repetição while (também conhecido como loop), o while avalia uma expressão, se essa expressão for true ele executa as linhas da expressão, se while retornar false, ele ignoras as linhas segue com a leitura do restante das minhas do código.
*/
var counter = 0;
while(counter < 10) {
    console.log(counter);
    counter++;
}
/*
0 
1
2
3
4
5
6
7
8
9
*/

// posso executar um contador descendente
var counterDes = 10;
while(counterDes === 0){
    console.log(counterDes--);
}
while(counterDes > 0){
    console.log(counterDes--);
}
/*
10
9
8
7
6
5
4
3
2
1
*/

// outra opção
var counterDes2 = 10;
while(counterDes2--) {
    console.log(counterDes2)
}
/*
9
8
7
6
5
4
3
2
1
0
*/

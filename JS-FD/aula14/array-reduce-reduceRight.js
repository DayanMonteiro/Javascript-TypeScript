// reduce - reduz todos os indices do array em um unico indice

var arr = [1, 2, 3, 4, 5];
var reduce = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
}, 0);
/*
o 0 passado ali foi pra representar o valor acumulado então o métod reduce irá atuar da seguinte maneira
1° vez que ele entrar vai pegar o valor de 0 + 1 (esse 1 é o primeiro indice co array)
1° - 0 + 1 =1
2° vez ele vai pegar o acumulado que agora é 1 e somar o proximo item do array
2° - 1 + 2 = 3
agora vai seguir o mesmo racicionio pegando o valor acumulado e somando o proximo valor do indicie
3° - 3 + 3 = 6
4° - 6 + 4 = 10
5° - 10 + 5 = 10
*/
console.log(reduce); // 15


// ex com string -  com string ele vai concatenar
var arr01 = ['D', 'a', 'y', 'a', 'n'];
var reduce01 = arr01.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
// aqui n passei o zero 0 então ele pega o primeiro indice do array e da continuidade no metodo
},);

console.log(reduce01); // Dayan

// reduce right - a diferenrça entre o reduce e que e faz da esquerda para a direita
var arr02 = ['D', 'a', 'y', 'a', 'n'];
var reduce02 = arr01.reduceRight(function(acumulado, atual, index, array) {
    return acumulado + atual;
},);

console.log(reduce02); // nayaD
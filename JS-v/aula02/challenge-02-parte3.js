/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeArgs(x, y, z) {
    if(x !== undefined && y === undefined && z === undefined) {
        return x;
    } else if(x !== undefined && y !== undefined && z === undefined) {
        return x + y;
    } else if(x !== undefined && y !== undefined && z !== undefined) {
        return (x + y) / z; 
    } else if (x === undefined && y === undefined && z === undefined) {
        return false;
    } else {
        return null;
    }
}
console.log(threeArgs()); // false
console.log(threeArgs(1)); // 1 
console.log(threeArgs(1, 2)); // 3
console.log(threeArgs(1, 2, 3)); // 1
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

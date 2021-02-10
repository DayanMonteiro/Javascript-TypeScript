// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(x, y) {
    return x + y;
}
//console.log(x, y); // undefined 

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var minhaSoma = soma(2, 5) + 5;
console.log(minhaSoma);// 12


// Qual o valor atualizado dessa variável.
//12
// Declare uma nova variável, sem valor.
var novaVar;
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

var novaVar;
function addValue() {
    novaVar = 25;
    return 'O valor da variável agora é ' + novaVar;
}

// Invoque a função criada acima?
console.log(addValue()); // O valor da variável agora é 25
// Qual o retorno da função? (Use comentários de bloco).
// O valor da variável agora é 25

/*

var numeros = [7, -5, 6, -3.4, 4.6, 12];

var numerosPositivos = function(item) {
    return item > 0;
}
var resultado = numeros.filter(numerosPositivos);

console.log(resultado.length + ' valores positivos'); // 4 valores positivos

///////////////////////////////////////////////////////////

let limit = parseInt(gets());
for (let i = 0; i < limit; i++) {
    let line = gets().split(" ");
    let X = parseInt(line[0]);
    let Y = parseInt(line[1]);
    if (Y == 0) {
        console.log("divisao impossivel");
    } else {
        let divisao = parseFloat(x * y).toFixed(1); // Digite aqui o calculo da divisao
        console.log(divisao);
    }
}  

//console.log(positivos);
*/



/////

var cont =1;
while (cont<=100) {
    var resto = cont%2;
    if (resto == 0) {
        mostra("Par " + cont);
    }
    cont = cont + 1;
}
console.log(Par);
   
/*exercício que o valor de A aponte para B, que o valor de B aponte para C e que o valor de C aponte para A */


let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA; /* criei uma variável temporária que recebe o valor de A, dessa forma consigo resolver o problema */
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

/* outra forma mais moderna de resolver o exercicio seria*/

let varD = 'A'; // B
let varE = 'B'; // C
let varF = 'C'; // A

[varD, varE, varF] = [varE, varF, varD]

console.log(varD, varE, varF);
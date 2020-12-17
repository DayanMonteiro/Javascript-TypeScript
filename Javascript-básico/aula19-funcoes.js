// ex 00
function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}
saudacao('Dayan'); /* passei um valor no caso uma string, agora ela é enviada para o o parametro nome que agora recebeu, Dayan */
// retorna - Bom dia Dayan!

// posso passar outros nomes
saudacao('Laryssa');
saudacao('Julio Cesar');
saudacao('Pietra');
/* retorno:
Bom dia Dayan!
Bom dia Laryssa!
Bom dia Julio Cesar!
Bom dia Pietra!
 
sendo assim o parametro recebeu todos os nomes passados para a variavel saudacao
*/

// ex 01
function cumprimento(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = cumprimento('Dayan')
console.log(variavel);
// retorna - Bom dia Dayan!
/* a variável recebeu o q função retornou o que foi passado a ela através do return + a string passada para parametro nome */

// ex 02 
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(20, 14));
console.log(soma(5, 73));
/* retorna:
4
34
78
*/

// ou
const resultado = soma(5, 2);
console.log(resultado); // retorna - 7

// ex 03 eu também posso unir strings, vejamos
function soma(x, y) {
    const palavras = x + y;
    return palavras;
}

const palavras = soma('Dayan', ' Monteiro');
console.log(palavras); // Dayan Monteiro
/* idepdendendo de estar como soma, ela de fato somou, no caso juntou as duas palavras.*/
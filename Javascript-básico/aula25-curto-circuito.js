/* Avaliando curto circuito utilizando
&& -> false && true -> false
|| -> */

console.log('Dayan Monteiro' && true && 'Laryssa'); 
/* nesse caso me retorna Laryssa, porque ele vai retornara ultima 
opção checada.*/

console.log('Dayan Monteiro' && true && NaN);
// pelo mesmo motivo retorna NaN

/*
Em Javascript tuoo pode ser avaliado em true e false
Falsy
*false
0
'' "" ``
null/ undefined
NaN
qualquer coisa diferente dessas acima o JS avalipará como true
*/

console.log('Dayan' && 'Laryssa'); // Laryssa

// agora perceba se eu passar um dos valores falses no meio

console.log('Dayan' && NaN && 'Laryssa');
// NaN

function falaOi () {
    return 'Oi';
}
const vaiExecutar = false;

console.log(vaiExecutar && falaOi());// false

// agora se eu passar um valor que não seja nenhum dos citados q sempre dão false ele executará a função
function falaOi2 () {
    return 'Oi';
}
const vaiExecutar2 = 'Dayan';

console.log(vaiExecutar2 && falaOi2());
// Oi 


/* agora vamos observar o || OR 
Lembrando que para o OR se um delas for verdadeira
ele retorna verdadeiro (true)*/

console.log(0 || false || null || 'Dayan Monteiro' ||  true);
/* retorna o primeiro valor verdadeiro que ele encontra no caso 
retornou Dayan Monteiro, mesmo que após o nome tivesse outra opção verdadeira
ele retorna a primeira opção */


/* se o usuário selecionar uma cor, será a cor que ele optou
se não escolher será utilizada a cor padrão*/
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); // preto

/*Agora se o usuário selecionar uma cor por ex escolherei vermelho
ja mudará o resultado da nossa função, vejamos:*/
const corUsuario1 = 'vermelho';
const corPadrao1 = corUsuario1 || 'preto';

console.log(corPadrao1); /* vermelho
como ele retorna o primeiro valor verdadeiro, nessa estrutura lógica
ele retornou o valor selecionado pelo usuário que foi a cor vermelha
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
/* retorna letra false letra c pois é uma string então ele
irá retornar o primeiro valor verdeiro */





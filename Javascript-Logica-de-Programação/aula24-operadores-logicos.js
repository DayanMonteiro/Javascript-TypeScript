/* 
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

console.log(true && true && true); // true 
/* se todas as expressões dorem verdadeiras no && ele retornar verdadeiro*/ 

const expressaoAnd = true && true && false && true;
console.log(expressaoAnd); //false rerorna falso pq nem todas as expressões eram iguais

/* se uma das expressões retornar verdadeiro
ele considera a expressão verdadeira, por isso nos
2 primeiros exemplos retornar true */
const expressaoOr = true || false;
console.log(expressaoOr); // true 

const expressaoOr1 = true || true;
console.log(expressaoOr1); // true 

/* se as 2 expressões retornarem falsas ele
retorna falso*/
const expressaoOr2 = false || false;
console.log(expressaoOr2); // false


// ex prativo

const usuario = 'Dayan';
const senha = '12345';

const vailogar = usuario === 'Dayan' && senha === '12345';
console.log(vailogar); // true

const vailogar1 = usuario === 'Dayan' && senha === '1234567';
console.log(vailogar1); // false pq a senha não corresponde


// porque esse tipo de aplicação não podemos usar o || ?
// por que se apenas uma das informações forem verdadeiras ele logaria o usuário, mesmo com senha errada, vejamos:

const usuario1 = 'Dayan';
const senha1 = '12345';

const vailogar2 = usuario === 'Dayan' || senha === '1234567';
console.log(vailogar2); // true

// temos tbm o ! NOT, ele inverte um valor, o que for false passa para true

console.log(!true); // false

// se eu negar 2 vezes ele volta a ser verdadeiro vejamos:
console.log(!!true); // true



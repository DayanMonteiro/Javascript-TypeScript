/* entre 0 e 11 - Bpm dia!
entre 12 e 17 - Boa tarde!
entre 18 e 23 - Boa noite!
*/

// if - pode ser usado sozinho
// sempre que utilizo a palavra else, preciso que antes tenha sido usado um if
// posso aplicar quantos else if forem necessários
// só posso ter um else por ultimo na checagem
// podemos utilizar funções curtas apenas com if else uma unica vez pra cada um


const hora = 30;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá!'); // se aparecer um horário errado que execeda as horas programadas, por exemplo se colocar 40h ele apenas dirá ola!
}


// se eu tiver grana eu saio se eu não tiver eu fico em casa
const tenhoGrana = true; // ou false

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}

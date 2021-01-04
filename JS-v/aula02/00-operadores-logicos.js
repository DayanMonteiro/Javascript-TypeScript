// operadores logicos combinam ou invertem valores booleanos

// operador and &&
var x = 3;
var y = 7;

console.log(x === 3); // true
console.log(y === 5); // false
console.log(y === '7'); // false, porque não é uma string e sim um number
console.log(y === 7); // true

// testando o && and
console.log( x === 3 && y === 7); // true
console.log( x === 3 && y === 4); // false, porque por mais que o x seja verdadeiro o operador && verifica as duas condições sem uma for falsa ele retorna falso


// operador lógico || or (ou) ele verifica se pelo menos um deles é verdadeiro 
console.log( x === 3 || y === 3); // true, porque uma das opções é verdaeira ou seja um ou outro é verdadeiro se uma das opções é verdadeiro ele retorna verdadeiro
console.log( x === 3 || y === 7); // true
console.log( x === 3 || y === 4); // true
console.log( x === 4 || y === 4); // false

// operadot ! not - ele inverte um valor vejamos:
console.log(x === 3); // true
console.log(! x ===3); // false, ou seja ele inverteu algo que era true em false
console.log(x != 3); // false x é != diferente de 3, ele retorna falso
console.log(x !== 3); // false x é !== diferente de 3 verificando também pelo tipo e tbm retorna false visto q ele inverte
console.log(x === '3'); // false porque perguntei pelo tipo no caso como coloquei como string ele retorna false
console.log(x != '3'); // false
console.log(x !== '3'); //true  porque ele é na verdade um number, mas como ele aqui inverte e n estou comparando o tipo ele retorna true
console.log(x == 3); // true
console.log(x == '3'); // true



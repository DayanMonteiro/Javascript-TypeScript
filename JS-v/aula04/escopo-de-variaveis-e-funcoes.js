/* escopo de variáveis -- escopo global e escopo local

uma variavel fora da function cria um escolo global, já a function cria um escopo local 

sempre que eu crio uma variavel no escopo global consigo acessá-la dentro de escopos locais.
*/

var myvar = 1;

function myFunction () {
    return myvar
}
console.log(myFunction()); // 1


function otherFunction() {
    var otherVar = true;
    return otherVar;
}
console.log(otherFunction()); // true

/* quando criamos uma variavel com var o js interpreta ela como uma variável no escopo local, quando criamos uma variavel sem o var ela fica no escolo global, vejamos: */

function newFunction() {
    newVar = 'variavel global';
    return newVar;
}
/* console.log(newVar);  retorna erro pq essa variavel não vou foi criada, porém se invoco newFunction vejamos o que acontece: */ 
console.log(newFunction()); // variavel global -- me retorna a string passada na variavel newVar

function letters(a, b, c) {
    return a;
}
console.log(letters(1)); // 1
console.log(letters(1, 2));// 1 só retorna 1 porque ele so retorna o a porque o b e o c n estão definidos


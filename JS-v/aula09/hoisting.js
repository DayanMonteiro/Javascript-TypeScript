/* hoisting - içamento ou elevação -
O que é Hoisting?
O que é o Hoisting? O Hoisting ocorre quando seu código Javascript é compilado : Basicamente, todas as declarações de variáveis são movidas para o topo de seu escopo local (se foram declaradas dentro de uma função, por exemplo) ou para o topo do escopo global (se foram declaradas fora de uma função)
*/

function myFunction ( ) {
    var number1 = 1;
    var number2 = 2;
   // var sum = undefined
   var sum = function sum() {
    return number1 + number2;
   }
}
console.log(myFunction()); // undefined

//function comentada 


function myFunction1(){
    console.log('Antes de criar', number1);
    var number1 = 10;
    console.log('Depois de declarar', number1);
}
console.log(myFunction1());
/*
Antes de criar undefined
Depois de declarar 10
undefined
*/

// o hoisting puxa as delrações das variavei para o topo da função a prova isso é evidente no exemplo a baixo onde teremos o mesmo resutado
function myFunction2() {
    console.log(sum()); // 3 --- mesmo ainda n tendo passado os valores ele me retorna 3 que o histing puxou os valores aqui pra cima
    function sum() {
        return 1 + 2;
    }
    console.log(sum()); // 3
}
console.log(myFunction2());
/*
3
3
undefined
*/

// outro ex:
function myFunction3() {
    console.log(number1); // undefined
    var number1 = 50;
    console.log(number1); // 50
    return ''; // valor em branco porque não passei nada
}
console.log(myFunction3());

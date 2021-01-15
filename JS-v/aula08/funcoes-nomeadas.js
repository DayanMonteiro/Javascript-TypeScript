var func = function () {
    return 'hi';
} 
console.log(func()); // hi
/*
console.log(func.name('')); // da erro porque não nomeiei a função, não possivel invocar uma função anonima
*/

// agora se nomear o nome eu consigo

var func1 = function func1() {}
console.log(func1.name); // func1
// agora ela retorna um nome pq dei um nome a função





    

// arguments diz respeito a um objeto tipo array (array-like object) correspondente aos argumentos passados para uma função. Use somente a variável arguments em vez disso.

(function() {
    function myFunction(argumento1, argumento2) {
        return arguments;
    }
    console.log(myFunction(1, 2)); // [Arguments] { '0': 1, '1': 2 }
}());
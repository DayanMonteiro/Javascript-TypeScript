// ex 01 hoisting de variavel

function fn() {
    console.log(text); /* undefined - ele retorna undefined pq a variável existe, mas ainda n foi definida*/

    var text = 'Exemplo'; 

    console.log(text); // vai retornar Exemplo
}
fn();

// ex 2 hoisting de função

function fn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}
fn();

/*

Hoisting de função
Hoisting de função

perceba que a função foi puxada como um todo retornando o valor duas vezes
*/
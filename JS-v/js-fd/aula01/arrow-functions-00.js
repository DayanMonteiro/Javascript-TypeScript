// ex 00
function log(value) {
    console.log(value)
}
log('test'); // test

// ex 01
var log1 = function(value) {
    console.log(value);
}
log('test'); // test

//ex 02
var sumOld = function(a, b) {
    return a + b
};
console.log(sumOld(5, 5)); // 10

// com surgimento do ES6 temos novas formas de escrever funções as Arrow Functions

// ex 03
var sum = (a, b) => a + b;
console.log(sum(2, 5)); // 7

// ex 04
var sumNew = (a, b) => {
    var x = 10;

    if (a, b) {

    }
    return a + b;
}
console.log(sumNew(10, 5)); // 15

// ex 05 obs se eu tiver apenas um argumento posso eliminar os () se tiver mais de um argumento os () são obrigatórios
var ApenasUmArgumento = a => a + 5;
console.log( ApenasUmArgumento(5 + 5)); // 15
/* OBS mesmo sendo um argumento se estiver em {} os parenteses voltam a ser obrigatórios ficando ({})
*/

// ex 06
var creaetObj = () => ({test: 123});
console.log(creaetObj()); // { test: 123 }

// ex 07  função construtura
function car() {
    this.foo = 'bar'
}
console.log(new car()); // car { foo: 'bar' }

// ex 08  passo o valor antes de passar a função
log('test');
function log(value) {
    console.log(value)
}; // test

// ex 09

var obj = {
    showContext: function showContext() {
        console.log(this);
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext(); // { showContext: [Function: showContext], log: [Function: log] }

// ex 10
var obj01 = {
    showContext1: function showContext1() {
        this.log('test');

        setTimeout(function(){ // setTimeout = ao tempo para executar 
            this.log('after 1000ms')
        }.bind(this),
         1000);
    },
    log: function log(value) {
        console.log(value);
    }
};
obj01.showContext1(); /* test
after 1000ms */

// esse mesmo caso em arraw function
var obj01 = {
    showContext1: function showContext1() {
        setTimeout(() => {
            this.log('after 1000ms')
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};
obj01.showContext1(); // after 1000ms
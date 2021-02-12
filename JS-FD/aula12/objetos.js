//Object.create cria um objeto herdando valores

// ex 01
var obj = {x:1, y:2};
var obj2 = Object.create(obj);

console.log(obj2); //{}

console.log(obj2.prototype); //undefined
console.log(obj2.x); // 1
console.log(obj2.y); // 2

obj.x = 2;
console.log(obj2.x); // 2

obj2.x = 'lalala';
console.log(obj2.x); // lalala
// alterando o obj2 não afeto o obj
console.log(obj.x); // 2

// ex 2
var obj3 = {};
console.log(obj3); // {}
obj3.i = 1;
obj3.j = 2;

var obj4 = Object.create(obj3);
// o objeto filho recebe os valores do objeto pai
console.log(obj4.i); // 1
console.log(obj4.j); // 2
console.log(obj4); // {}
// mesmo herdando os valores eles não o mesmo objeto vejamos:
console.log(obj3 === obj4); // false

// ex 3
for(var prop in obj3) {
    console.log(prop) // i j retornou as propriedades do obj3 que são o i e o j
}


// ex 4  hasOwnProperty() - verifica propriedades específicas do objeto, não propriedades herdadas
var obj5 = {a: 1, b: 2};
console.log(obj5.hasOwnProperty('a')); // true
console.log(obj5.hasOwnProperty('x')); //false

/* o obj4 herdou as propriedades do obj3
logo, o mesmo não tem as propriedades por ele mesmo e sim por herança, vejamos:*/
console.log(obj4.hasOwnProperty('i')); // false
/* veja apesar de ele nos exemplos acima ter o valor de i o valor é herdade então ao perguntar se o obj4 tem a propriedade i ele retorna falso*/


// ex 05
for( var prop in obj2) {
    if(obj2.hasOwnProperty(prop)){
        console.log(prop); // x
    }
}
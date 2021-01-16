// valores primitios não sao objetos
// tudo que tem propriedados e metodos são objetos

var name = 'Dayan';
console.log(name.length); // 5

// construtores criam novos objetos, para usar construtores usamos new

var name1 = new String('Dayan');
console.log(name1); // [String: 'Dayan']
console.log(name1.valueOf()); // Dayan


var age = new Number(33);
console.log(age);// [Number: 33]
console.log(age.valueOf()); //33


var myVar = String(10);
console.log(myVar); // '10' tranformou o number em string

var myVar1 = Number('15357');
console.log(myVar1); // 15357 transformou string m number

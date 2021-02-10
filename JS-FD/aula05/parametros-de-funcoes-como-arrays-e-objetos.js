var arr = [1, 2, 3];

function myFunction(arg) {
    return arg;
}

console.log(myFunction()); // undefined
console.log(myFunction(arr)); // [ 1, 2, 3 ]

function myFunction2(arg) {
    return arg[1];
}
console.log(myFunction2(arr)); // 2

// vejamos em um objeto

var obj = {
    propriedade: 'Dayan',
    curso: 'Javascript Ninja',
    ninja: true
}
console.log(obj); // { propriedade: 'Dayan', curso: 'Javascript Ninja', ninja: true }

function myFunction3(arg) {
    return arg;
}
console.log(myFunction3(obj)); // { propriedade: 'Dayan', curso: 'Javascript Ninja', ninja: true }

console.log(obj.propriedade); // Dayan
console.log(obj.curso); // Javascript Ninja
console.log(obj.ninja); // true

function myFunction4(arg) {
    return arg.curso
}
console.log(obj.curso); // Javascript Ninja


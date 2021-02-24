'dayan'.length
var day = new String('dayan');
console.log(day);
/*
String {"dayan"}
0: "d"
1: "a"
2: "y"
3: "a"
4: "n"
length: 5
*/


// charAt(index) - mostral qual o caractere no indice que for passado para ele
console.log('dayan'.charAt(0)); // d
// também funciona com notação de array
console.log('dayan'[0]); // d
console.log('dayan'[1]); // a
console.log('dayan'[2]); // y
console.log('dayan'[3]); // a
console.log('dayan'[4]); // n

// se passar um item q n existe ele retorna uma string em branco
console.log('dayan'[5]); // undefined



// ex 00
function multiply(a, b) {
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(multiply(5, 0)); // 0

// ex 01
function multiply(a, b) {
   if (typeof b === 'undefined') {
       b = 1;
   }
    return a * b;
}
console.log(multiply(5)); // 5

// ex 02

function multiply2(a, c = 2) {
    return a * c;
    }
 console.log(multiply2(5)); // 10

 // ex 03
 function multiply2(x = 3, y = 2) {
    return x * y;
    }
 console.log(multiply2(undefined, 5)); // 15

 // ex 04
 function multiply3(x, y = x) {
    return x * y;
    }
 console.log(multiply3(5)); // 25

 // ex 05 lazy evaluation
function randomNumber() {
    return Math.random() * 10;
}
 function multiply4(x, y = randomNumber()) {
    return x * y;
    }
 console.log(multiply4(5)); // 40.72421296909063

 // ex 06

 function randomNumber() {
     console.log('Generating a random number...');
    return Math.random() * 10;
}
 function multiply5(x, y = randomNumber()) {
    return x * y;
    }
 console.log(multiply5(5));
 console.log(multiply5(5));
 /*
 Generating a random number...
39.33799088223982
Generating a random number...
44.908080940738
*/
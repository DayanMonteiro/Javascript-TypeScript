// ex 00
var obj = {
    name: 'Dayan'
};

var { name } = obj;

console.log(name); // Dayan

// ex 01

var obj = {
    name: 'Dayan',
    props: {
        age: 33
    }
};

var {
    props: { age }
} = obj;

console.log(age); 
/* 
33
Dayan
*/

// ex 02
function sum(arr) {
    return arr[0] + arr[1];
}

console.log(sum([5, 5])); // 10

// de outra forma
function sum1([a, b] = []) {
    return a + b;
}
console.log(sum1([5, 5])); // 10

// ou ainda
function sum2([a, b] = [5, 5]) {
    return a + b;
}
console.log(sum2()); // 10










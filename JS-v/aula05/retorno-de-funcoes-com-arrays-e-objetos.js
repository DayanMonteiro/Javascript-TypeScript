function myFunction() {
    return 1;
}
console.log(myFunction()); // 1

function myFunctionString(){
    return 'string';
}
console.log(myFunctionString()); // string

function myFunctionBoolean() {
    return true;
}
console.log(myFunctionBoolean()); // true
// poderia criar uma false, null, undefined etc... 

function myFunArr() {
    return [1, 2, 3];
}
console.log(myFunArr()); // [ 1, 2, 3 ]

console.log(myFunArr()[0]); // 1
console.log(myFunArr()[1]); // 2
console.log(myFunArr()[2]); // 3
console.log(myFunArr()[4]); // undefined

function mistFunc() {
    return {
        prop1: 1,
        prop2: 'Dayan',
        prop3: function() {
            return 'prop3';
        }
    };
}
console.log(mistFunc()); // { prop1: 1, prop2: 'Dayan', prop3: [Function: prop3] }
console.log(mistFunc().prop1); // 1

var values = mistFunc();
console.log(values); // { prop1: 1, prop2: 'Dayan', prop3: [Function: prop3] }
console.log(values.prop2); // Dayan

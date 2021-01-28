// ex 00
var obj = {
    prop1: "Digital"
};
console.log(obj); // { prop1: 'Digital' }

// ex 01
var prop2 = "CPF"
var obj = {
    prop2: prop2
};
console.log(prop2); // CPF

//ex 02
var prop3 = "RG"
var obj2 = {
    prop3
};
console.log(obj2); // { prop3: 'RG' }

// ex 03
function method1() {
    console.log('method called');
}

var objM = {
    method1
};
objM.method1(); // method called

// ex 04
var objM2 = {
    sum: function sum(a, b) {
        return a + b;
    }
};
console.log(objM2.sum(1, 5)); // 6

// ex 05 a mesma função que a de cima porém com uma escrita mais clean
var objM3 = {
    sum(a, b) {
        return a + b;
    }
};
console.log(objM3.sum(1, 5)); // 6

// ex 05
var propName = 'test';
var obj3 = { };
obj3[propName] = 'prop value';
console.log(obj3); // { test: 'prop value' }

// ex 06
var propName = 'test';
var obj4 = { };

obj4[propName + 'concat'] = 'prop value';
console.log(obj4); // { testconcat: 'prop value' }

// ex 07 com ES6 posso fazer direto
var propName = 'test';
var obj5 = { 
    [propName + 'concat']: 'prop value'
};

console.log(obj5); //{ testconcat: 'prop value' }

// 

var obj = {
    sleep: function() {
      setTimeout(() => {
        console.log(this);
      }, 1000);
    }
  }
  
  obj.sleep();



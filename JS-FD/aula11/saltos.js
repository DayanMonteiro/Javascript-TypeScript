// um dos saltos é o return
function myFunction() {
    var number = 8;
    if(number === 10 ) {
        return true;
    } 
    var number2 = 33;
    var name = 'Dayan Monteiro';
    return  name + ' ' + number2;
}

console.log(myFunction()) 

// outro exemplo é o break

var number3 = 10;
switch(number3) {
    case 1:
        console.log('1');
    break;
    case 2:
        console.log('2');
    break;
    case 10:
        console.log('10');
    break;
    default:
        console.log('default');
}
console.log('fim do switch');

// break no for

for(var i = 0; i < 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}
console.log('fim do for');


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(var x = 0; x < arr.length; x++) {
    console.log(x);
}
console.log('fim do for');



var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(var y = 0; y < arr2.length; y++) {
    if(y === 5) {
        break;
    }
    console.log(y);
}
console.log('fim do for');

// continue
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(var z = 0; z < arr3.length; z++) {
    if(z % 2 !== 0) {
        continue;
    }
    console.log(z);
}
console.log('fim do for');
// passando funções por parametros 

var car = {
    color: 'black'
}

function getCarColor(mycar) {
    return mycar.color;
}
console.log(getCarColor(car)); // black


// 
function showOtherFunction(func) {
    return func();
}
function returnedFunction(){
    return 'Returned function';
}
console.log( showOtherFunction(returnedFunction)); // Returned function
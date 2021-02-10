function myFunction() {
    function sum(){
        return 1 + 2;
    }
    return sum();
}
console.log(myFunction()); // 3
/*
console.log(sum()); // não é possivel porque essa função só existe dentro do myFunction, para acessá-la ela teria q ter sido criada fora da função*/

function myFunction1() {
    var number1 = 1;
    var number2 = 2;
    function sum() {
        return number1 + number2;
    }
    return sum()
}
console.log(myFunction1()); // 3

// outro ex:

function myFunction2() {
    function sum() {
        return number1 + number2;
    }
    var number1 = 1;
    var number2 = 2;
    return sum()
}
console.log(myFunction2()); // 3

// outro ex:
function myFunction3() {
    var number1 = 1;
    var number2 = 2;
    return sum();
    function sum() {
        return number1 + number2;
    }
}
console.log(myFunction3()); // 3

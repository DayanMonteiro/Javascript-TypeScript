var numeros = [1, 2, 3, 4, 5, 6, 7, 8];

var numerosPares = function(item) {

     var pares = [ ];

item.forEach(number =>   
      
      var result = number % 2;

      If(result === 0){
          pares.push(result)
      }
)

return "Numeros pares sao: " + pares;

}

console.log(numerosPares(numeros));
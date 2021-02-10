for( var i = 0; i < 10; i++) {
    console.log(i);
}
/*
0
1
2
3
4
5
6
7
8
9
*/

var car = {
    brand: 'VW',
    model: 'Gol',
    year: 2013
};

console.log(car);  // { brand: 'VW', model: 'Gol', year: 2013 }

for( var prop in car ) {
    console.log(prop);
}
/*
consigo recuperar as propriedades do carro
brand
model
year
*/

// com o in posso acessar propriedades vejamos:
console.log('year in car?', 'year' in car); //year in car? true 

console.log('door in car?', 'door' in car); // door in car? false -- retornou false pq nao criei essa propeidade

for( var prop1 in car ) {
    console.log(car [prop1]);
}
/*
posso acessar as propeidades as passando com se fosse um array e obtê-las
VW
Gol
2013
*/
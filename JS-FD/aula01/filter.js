const pets = [ {
    name: 'Thor',
    type: 'dog' ,
    age: 10,

}, {

    name: 'Opa' ,
    type: 'cat',
    age: 2,

}, {
    name: 'Blublu',
    type: 'fish' ,
    age: 1,

}
]


const eMenorQueCinco = (numero) => {
    return numero <5
}

const newPets = pets.filter(({ age }) => eMenorQueCinco(age))

console.log(pets)
console.log(newPets)
/*
[
  { name: 'Thor', type: 'dog', age: 10 },
  { name: 'Opa', type: 'cat', age: 2 },
  { name: 'Blublu', type: 'fish', age: 1 }
]
[
  { name: 'Opa', type: 'cat', age: 2 },
  { name: 'Blublu', type: 'fish', age: 1 }
]

*/




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

const newPets = pets.filter((pet) => {
    return pet.age < 5
})

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




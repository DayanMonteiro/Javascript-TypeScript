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
}, {
    
    name: 'Branquelo',
    type: 'cat' ,
    age: 8,
}, {
    
    name: 'Tobias',
    type: 'dog' ,
    age: 6,
}, {
    
    name: 'Gironda',
    type: 'fish' ,
    age: 2,
}, {
    
    name: 'Oponga',
    type: 'horse' ,
    age: 1,
}
]

/* MAP vai retornar um novo array com a mesma quantidade 
de elementos do array inicial */ 

const petNames = pets.map((pet) => {
    return pet.name
})

console.log(petNames)

/* [ 'Thor', 'Opa', 'Blublu', 'Branquelo', 'Tobias', 'Gironda', 'Oponga' ] */

const petTypes = pets.map((pet) => {
    return pet.type
})

console.log(petTypes)

/*
[
  'dog',   'cat',
  'fish',  'cat',
  'dog',   'fish',
  'horse'
]
*/
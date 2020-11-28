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

/* FOREACH não vai retornar um novo array  */ 

const forEachPetNames = []

pets.forEach((pet) => {
    forEachPetNames.push(pet.name)
})

console.log(forEachPetNames)

/* [ 'Thor', 'Opa', 'Blublu', 'Branquelo', 'Tobias', 'Gironda', 'Oponga' ] */

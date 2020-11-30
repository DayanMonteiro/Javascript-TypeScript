const pets = [ {
    name: 'Thor',
    type: 'dog' ,
    age: 10,
    weigth: 18, 

}, {

    name: 'Opa' ,
    type: 'cat',
    age: 2,
    weigth: 18, 
}, {

    name: 'Blublu',
    type: 'fish' ,
    age: 1,
    weigth: 0.02, 
}, {
    
    name: 'Branquelo',
    type: 'cat' ,
    age: 8,
    weigth: 4, 
}, {
    
    name: 'Tobias',
    type: 'dog' ,
    age: 6,
    weigth: 10, 
}, {
    
    name: 'Gironda',
    type: 'fish' ,
    age: 2,
    weigth: 0.01, 
}, {
    
    name: 'Oponga',
    type: 'horse' ,
    age: 1,
    weigth: 380, 
}
]

// somar somente o peso dos cachorros

const totalPetWeitght = pets.reduce((total, pet) => {
    if(pet.type !== 'dog') return total

    return total + pet.weigth
}, 0)

console.log(totalPetWeitght) 

// 28  



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

/*O reduce reduz varios valores em apenas um, no exemplo pegaremos
o peso de todos os animais juntos */

const totalWeitght = pets.reduce((total, pet) => {
    return total + pet.weigth
}, 0)

console.log(totalWeitght) // 430.03



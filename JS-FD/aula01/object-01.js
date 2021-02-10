let user =  {
    name: 'Dayan'
};
console.log(user);

// alterando a propriedade de um objeto

user.name = 'Outro nome 1';
console.log(user);

user['name'] = 'Outro nome 2';
console.log(user);


const prop = 'name';
user[prop] = 'Outro nome 3';

//console.log(user);



// criando uma propriedade
user.lastName = 'Monteiro dos Santos';


console.log(user);
// deletando uma propriedade
delete user.name;
console.log(user);

/*
{ name: 'Dayan' }
{ name: 'Outro nome 1' }
{ name: 'Outro nome 2' }
{ name: 'Outro nome 3', lastName: 'Monteiro dos Santos' }
{ lastName: 'Monteiro dos Santos' }
*/
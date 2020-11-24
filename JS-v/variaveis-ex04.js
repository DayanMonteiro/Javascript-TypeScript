const persons = ['Dayan', 'Laryssa', 'Pietra'];

// adicionando itens
persons.push('Danilo');
// removendo itens
persons.shift();

persons[1] = 'Daniel';

console.log(`\nArray após as laterações: `, persons);

// Array após as laterações:  [ 'Laryssa', 'Daniel', 'Danilo' ]

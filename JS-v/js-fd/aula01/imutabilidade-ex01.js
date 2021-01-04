const user = {
    name: 'Dayan',
    lastName: 'Monteiro dos Santos'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
console.log(user);

/*
console.log(userWithFullName);
ele retorna um novo objeto
{
  name: 'Dayan',
  lastName: 'Monteiro dos Santos',
  fullName: 'Dayan Monteiro dos Santos'
}

////////////////////////////////////////
console.log(user);
{ name: 'Dayan', lastName: 'Monteiro dos Santos' }

*/ 
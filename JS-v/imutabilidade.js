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

console.log(getUserWithFullName);
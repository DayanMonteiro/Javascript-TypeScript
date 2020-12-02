const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

    users.on('User logged', data => {
        console.log(data);
    });

users.userLogged( {user: 'Dayan Monteiro'}); // { user: 'Dayan Monteiro' }
users.userLogged( {user: 'Laryssa Viana'}); // { user: 'Laryssa Viana' }
import users from './users';

export const login = (username, password) => {
    const user = users[username];

    if(user && user.password === password){
        return console.log('User logged in as: ', user.name);
    }

    return console.log('Invalid username and/or password');
}
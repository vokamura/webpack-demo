import users from './users';
import $ from 'jquery';

export const login = (username, password) => {
    const user = users[username];

    if(user && user.password === password){
        return 'User logged in as: ' + user.name;
    }

    return 'Invalid username and/or password';
}

export const addToDom = (type, text, className = 'red') => {
    const element = $(`<${type}>`, { 
        text,
        class: className
    });

    $('#root').append(element);
};

export const addImg = (src, className = 'imgSize') => {
    const image = $('<img>', { 
        src,
        class: className
     });

    $('#root').append(image);
}
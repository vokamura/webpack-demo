import $ from 'jquery';
import './style.css';
// import pic from './deathlyhallows.png';

$('#login').click( () => {
    console.log('Button Clicked');

    import('./helpers').then( resp => {
        console.log('Import Resp: ', resp);

        const { login, addToDom } = resp;

        const result1 = login('Lightning', 'asdf');

        const result2 = login('Random', 'password');

        addToDom('h1', result1, 'blue');
        addToDom('h1', result2, 'purple');
    });
});

$('#load-image').click( () => {
    // console.log('Load image clicked');

    import('./helpers').then( resp => {
        const { addImg } = resp;

        import('./deathlyhallows.png').then( src => {
            addImg(src.default); 
        });
    });
});


// MEILLEUR DES METHODES DE GESTION D'EVENEMENT SANS ON!
//ALLER CHERCHER DES INFOS SUR L'EVENEMENT
// let a = document.querySelector('a');
// let button = document.querySelector('button');

// a.addEventListener('click',  (e) => {
//    console.log(e);
// });

let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', () => {
    if (confirm ('Etes-vous sur?')) {
        location.href = "http://believemy.com";
    }
});


button.addEventListener ('mouseover', () => {
    document.body.style.backgroundColor = 'pink';
});

function backgroundWhite(){
    document.body.style.backgroundColor = 'white';
}

button.addEventListener ('mouseout', backgroundWhite);

button.addEventListener ('mouseout', () => {
    document.body.style.fontFamily = ('Arial');
});


button.removeEventListener('mouseout', backgroundWhite);
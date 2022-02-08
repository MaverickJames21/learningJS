// CHANGER LE STYLE DE NOTRE ELEMENT

// 1ere method
let header = document.querySelector('header');
header.style.backgroundColor = "yellow";

// 2eme method plus direct
document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.textAlign ='center';

// 3eme methode directement utiliser une CLASSE
document.querySelector('header').className = 'ma_class';

// -------
// POUR TABLEAU SIMPLE ET 2D

// JOIN SELECTION TOUT LE TABLEAU EN CHAINE DE CARACTERE
// TABLEAU 1D
let tableau1D =['un','deux','trois','quatre','cinque'];
// console.log(tableau1D.join(' / '));

// TABLEAU 2D
let tableau2D = [
    // sépare les deux tableaux
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
// console.log(tableau2D.join('/ '));

// -------

// FUNCTION SPLICE
// let monTableau = ['un','deux','trois','quatre','cinque'];
// monTableau.splice(0, 3);
// console.log(monTableau);

let monTableau = ['un','deux','trois','quatre','cinque'];
monTableau.splice(3, 1, 'hello', 'by');
// console.log(monTableau);



let monTableau2 = [
    // sépare les deux tableaux
    ['jim', 'tom', 'robin'],
    ['carrey', 'hanks', 'williams']
];
monTableau2.splice(2,0, ['20 ans', '30 ans', '40 ans', '23 ans']);
console.log(monTableau2.join(' / '));

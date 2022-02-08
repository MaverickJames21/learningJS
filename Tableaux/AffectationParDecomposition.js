// RECUPERER DES INFO EX FORMULAIR

let informations = ['Jean-michel', '29 ans', 'Suisse'];
// mettre l'info dans une variable pour ne pas modifier le tableau. sans décomposition.

// let prenom = informations[0];
// let age = informations[1];
// let nationalite = informations[2];


// avec décomposition
let [prenom, age, nationalite] = informations;


console.log(prenom);
console.log(age);
console.log(nationalite);

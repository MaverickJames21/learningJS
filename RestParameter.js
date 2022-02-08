
// REST PARAMETER

function addition (...nombres){
    let resultat = 0;
    nombres.forEach (nombres =>{
            resultat= resultat + nombres;
    })

console.log(resultat);
}


addition(20, 59, 12, 32, 49, 100);


// exemple 2

let legumes = ['tomate', 'persil', 'champignon'];
let condiments = ['sel', 'poivre', 'paprika',...legumes];

console.log(condiments);

// ----------------

// SPREAD OPERATEUR ( operateur de decomposition )
// fusionner plusieur tableaux

let fruits = ['banane', 'fraise', 'orange'];
let sucrerie = ['chocolat', 'sucette', 'bonbon'];
let total = fruits.concat(sucrerie);
console.log(total);


// exemple 2 decouper une chaine de caractere en plusieur élément 
let phrase = 'bonjours!';
let phraseTableau = [...phrase];
// console.log(phraseTableau);

// exemple 3 selectionner un element et stocker le reste dans une variable
let devises = ['dollars', 'euro', 'franc suisse',]
// //sans decomposition
// let premiereDevise = devises[0];
// let autres = [devises[1], devises[2]];
// //avec decomposition spread operateur
let [premiereDevise, ...autres] = devises;

console.log(premiereDevise);
console.log(autres);

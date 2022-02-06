//BOUCLE FOR IN pour traverser les tableaux
let panier = ['pomme', 'orange', 'banane'];

for (const fruit in panier) {
    panier[fruit] = 'kiwi';

}
// console.log(panier);

// ----------------

//BOUCLE FOR OF pour recuperer l'index
let car = ['BMW', 'Golf', 'Smart']

for (const model of car) {
    // console.log(car.indexOf(model));
   
}

let listeDePays = ['Suisse', 'France', 'Allemagne', 'Pologne']

// for (const pays of listeDePays) {
//     console.log(listeDePays.join(' / '));
// }

//-----------------

// FOR EACH ET FUNCTION ANONYME

// listeDePays.forEach(pays => console.log(pays))

// -----------
// FOR IN , FUNCTION ET TABLEAU ASSOCIATIF


let jim = {
    'prenom': 'jim',
    'Nom': 'Carrey',
    'metier': 'acteur'
   
};

let mickael = {
    'prenom': 'Mickael',
    'Nom': 'Jackson',
    'metier': 'chanteur'
   
};


// console.log(monTableauAssiociatif)

// CONCATENER UN TABLEAU ASSOCIATIF DANS UNE FUNCTION
function concatener(tableau){
    let chain = '';

    for (const valeur in tableau) {
            chain += (valeur + ' : ' + tableau[valeur] + '\n');
            
        }
    
console.log(chain)
};
concatener(jim);
concatener(mickael);



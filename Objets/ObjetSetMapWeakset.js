
// OBJET SET
let nombres = [10, 20, 54, 98, 17, 54];

// let monSet = new Set(nombres);
let monSet = new Set();

// ajouter des fonctions dans let monSet
monSet.add('87');
monSet.add('12');
// supprimer 
monSet.delete('12');

// console.log(monSet);

// ----------

// OBJET MAP
let utilisateurs = new Map();

utilisateurs.set('Mark Zuckerberg', {
    email:'marc@facebook.com',
    Role:'PDG facebook',
    age:23,
})

utilisateurs.set('Bill Gates', {
    email:'bill@facebook.com',
    Role:'sauver le monde',
    age:65,
})


// console.log(utilisateurs);

// ----------

// OBJET WEAKSET
// let voitures = new WeakSet([voitureA, voitureB]);

let voitureA = {
    constructeur: 'BMW',
    modele: 'X6',
    couleur: 'gris',
};

let voitureB = {
    constructeur: 'Tesla',
    modele: 'Cybertruck',
    couleur: 'noir',
};

// voitures.add(voitureA);
// voitures.add(voitureB);

// Plus simplement;
let voitures = new WeakSet([voitureA, voitureB]);

console.log(voitures);

// -----------

// OBJET WEAKMAP
// utilise cle / valeur
let voitures2 = new WeakMap();

let index = {
    id: 1
}

let voitureC = {
    constructeur: 'Golf',
    modele: 'GT',
    couleur: 'bleu',
};

voitures2.set(index, voitureC);
console.log(voitures2);



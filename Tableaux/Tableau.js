
// tableau 1D
let tableau1D =['un','deux','trois'];
// ajouter un element a la fin du tableau
tableau1D.push=['cinque'];
tableau1D.unshift=['zero'];
console.log(tableau1D)
// supprimer un element a la fin du tableau meme method avec pop
tableau1D.pop=['cinque'];
// supprimer un element au début du tableau meme method avec shift
tableau1D.shift=['cinque'];
// pour retrouvr l'index d'un tableau
console.log(tableau1D.indexOf('deux'))//=un


// -------

//des tableaux dans un tableau
let tableau2D = [
    // ajouter un element a la fin du tableau
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
tableau2D[0].push('Jim');
tableau2D[1].unshift('Carrey');
console.log(tableau2D)
// supprimer un tableau meme method avec pop
tableau2D.pop=['0'];
// supprimer un element au début du tableau meme method avec shift
tableau2D[1].shift=['Gates'];

// -------

// tableaux associatif utilise des brackettes.
// ajouter un element a la fin du tableau
let tableauAssiociatif= {   
    'Prenom': 'Mark',
    'Nom': 'Zickerberg',
    'Role': 'PDG de Facebook',
}
// ajouter un element a la fin du tableau
tableauAssiociatif ['Nationalite']= 'USA';
console.log(tableauAssiociatif);
// supprimer un element au  tableau meme method avec shift/pop
tableauAssiociatif.Role;

// pour reccupèrer un elements du tableau 1d
console.log(tableau1D[1]);
// pour reccupèrer un elements du tableau 2d
console.log(tableau2D[1][0]);
// pour reccupèrer un elements du tableau associatif
console.log(tableauAssiociatif['Role']);
// pour reccupèrer un elements du tableau DYNAMIQUEMENT .length va a la fin du tableau(position 2) ensuite -1 donc (position 1) 
console.log(tableau1D[tableau1D.length -1]);















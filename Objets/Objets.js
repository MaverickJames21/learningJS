// OBJET AVEC FUNCTION A L'INTERIEUR
// let chien = {
//     race:'shiba',
//     sexe:'male',
//     couleur:'noir',
// }

// console.log(chien.race);

//--------

let chien = {
    race:'shiba',
    sexe:'male',
    couleur:'noir',
    // aboyer:  function (){
    //     console.log('ouaf ouaf');
    // }
    aboyer: () => console.log ('ouaf ouaf')
}

chien.aboyer();

//---------------

let maverick = {
    travail: function (){
        console.log('Maverick consolide ces connaissances en JavaScript');
    }
}

let amanda = {
    fairChier: function (){
        console.log('Amanda Casse les couilles');
    }
}

// maverick.travail();
// amanda.fairChier();
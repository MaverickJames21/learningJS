
// function prevoirAge(){

//     let age = prompt('entrer votre age:') // STOCK LA RESPONSE EN CHAINE DE CARACTERE
//     //age = parseInt(age); //CONVERTIT UNE CHAINE DE CARACTERE EN NOMBER
//     //PLUS RECOMMENDER
//     age = Number(age);



//     alert('bientot vous aurez' + (age + 1 ) + ' ans') // DONC IL CONCATENE 30 ET 1 =301
    

// }

// prevoirAge();


// EXERSICE
// EX-- boite de dialogue

// ENVOYER UNE ALERTE A UN USER
// alert('hello guys');

// ---




// DEMANDER UNE CONFIRMATION A UN USER
// confirm('souhaitez vous conifrmer?');

// ---





// DEMANDER UNE CONFIRMATION A UN USER
// if(confirm('souhaitez vous conifrmer?')){
//     // oui
//     alert('confirmation ok');
// }else{
//     // non
//     alert('annulation');
// }

// ----




// DEMANDER UNE INFO A UN USER
// const age = prompt('entrer votre age');

// alert('bonjour vous avez ' + age  + 'ans');
// // console.log('bonjour vous avez ' + age + 'ans');

// -----





//CREER UNE FUNCTION
// function sayHelloGuys(){

//      alert('hello guys');  
// }

// sayHelloGuys()

// ----





// CALCULATRICE EX ADDITION
// function addition(nombreUN,nombreDeux){

//     console.log(nombreUN + nombreDeux)
    
// }

// addition(5,9);

// ---





// EX 2

// function sayHelloGuys(prenom,nom){

//     alert('bonjour ' + prenom + nom);

// }

// sayHelloGuys('maverick ' + ' hegi');

// ---

//CREER UNE VARIABLE GLOBALE AVEC LET (PAS LA MEILLEUR METHODE)
// VARIABLE VIDE
// let crie;

// function crieDeGuerre(){
//     // ASSIGNER UNE NOUVELLE VALEUR DANS CRIE
//     crie = 'fait pas le chaud';
//     console.log(crie);    

// }

// crieDeGuerre();
// console.log(crie);



// MEILLEUR SOLUTION CREER AUTRE VARIABLE EN DEHORS
// let crie = "espece de salop";

// function crieDeGuerre(){

//     let crie = 'fait pas le chaud';
//     console.log(crie);    

// }

// crieDeGuerre();
// console.log(crie);


// -----


0
// DIVISION ET ADDITION - DEUX FUNCTION - DEUX VARIABLE - UN CONSOLE.LOG
// let nombreUn = 4, nombreDeux = 10;

// function addition (nombreA, nombreB) {

//     let result = nombreA + nombreB;
//     return result;

// }


// function division (nombreA, nombreB) {

//     let result = nombreA / nombreB;
//     return result;

// }

// let resultAddition = addition(nombreUn, nombreDeux);
// let resultDivision = division(nombreUn,nombreDeux); 

// console.log(resultAddition * resultDivision);


// -----







// LES PARAMETRES PAR DEFAULTS ()
// (let preparation = 10, cuisson = 25;) CES VARIABLE NE SONT PLUS UTILES CAR IL Y A PARAMETRES PAR DEFAULTS.
// donner un nombre fixe a minutesDePreparation + minutesDeCuisson
// function cuisiner (nombreDeGateaux, minutesDePreparation = 10 , minutesDeCuisson = 15 ) {

//     let result = nombreDeGateaux * (minutesDePreparation + minutesDeCuisson);
//     return result;

// }

// console.log(cuisiner(5)); // = 125

// AUTRES EXERCICES
// SI UN DES GATEAUX A DES PARAMETRES DIFFERENTS
// function cuisiner (nombreDeGateaux, minutesDePreparation = 10 , minutesDeCuisson = 15 ) {

//     let result = nombreDeGateaux * (minutesDePreparation + minutesDeCuisson);
//     return result;

// }

// let tempsDePreparationChocolat = cuisiner(4);
// let tempsDePreparationFraisier = cuisiner(1, 15);
// console.log( tempsDePreparationFraisier + tempsDePreparationChocolat);


// ------





// CONVERTIRE LES DONNEE CHAINE DE CARACTERE EN NUMBER
 
function prevoirAge(){

    let age = prompt('entrer votre age:') // STOCK LA RESPONSE EN CHAINE DE CARACTERE
    age = parseInt(age); //CONVERTIT UNE CHAINE DE CARACTERE EN NOMBER
    //PLUS RECOMMENDER
    age = Number(age);
    age = parseFloat(age);

    TRANSFORMER UN NOMBRE EN CHAINE DE CARACTERE 
    nombre = 45;
    nombreEnString = nombre + ""; LAISSER LES GUILLEMETS VIDES METHODE BARBAR
    FUNCTION IMPLEMANTER DANS JS
    nombreEnString = nombre.toString();

    alert('bientot vous aurez' + (age + 1 ) + ' ans') // DONC IL CONCATENE 30 ET 1 =301
    

}

prevoirAge();


// -----





// FUNCTION ANONYME
 





 
 





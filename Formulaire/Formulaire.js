// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let formulaire = document.querySelector('#formulaire');
let error =  document.querySelector('small');
let btn = document.querySelector('button');
let coups = 0;
let nombreChoisi;


// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);

function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  } 

  // Etape 6 - Créer la fonction vérifier
function verifier(nombre){
    // cree un element
    let instruction = document.createElement('div');

    if (nombre < nombreAleatoire) {
        // ajouter un contenue #1 (4) cest plus!
        instruction.textContent = '#' + coups + " ( " + nombre + " ) c'est plus!";
        // ajouter les class css intruction et plus
        instruction.className = "instructions plus";

    } else if (nombre > nombreAleatoire) {
         // ajouter un contenue #1 (4) cest moins!
         instruction.textContent = '#' + coups + " ( " + nombre + " ) c'est moins!";
         // ajouter les class css intruction et moins
         instruction.className = "instructions moins";

    }else{
        // ajouter un contenue #1 (4) cest plus!
        instruction.textContent = '#' + coups + " ( " + nombre + " ) c'est fini!";
        // ajouter les class css intruction et fini
        instruction.className = "instructions fini";
    }

    // ajouter l'element devant les autres
    document.querySelector('#instructions').prepend(instruction);


    // designer l'element
    // header.style.backgroundColor = "green";
    // header.style.color = "white";
    // header.textContent = "Bienvenue";
    // header.style.padding = "7px";
    // header.style.fontSize = "3em";
    // header.style.textAlign = "center";


}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
        // si valeur de input n'est pas number 
    if (isNaN(input.value)) {
        // afficher message d'erreur

        error.style.display = 'inline';

    }else{
        // cacher message d'erreur
        error.style.display = 'none';
    }
});
// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == '') {
        // Mettre notre input bordure en rouge
        input.style.borderColor = "red";
        
    } else {
        // nombre de coups avec incrémentation +1
        coups++;
        // Mettre notre input bordure en gris
        input.style.borderColor = 'silver';
        // stocker la valeur dans nombreChoisi
        nombreChoisi = input.value;
        // vider le champs de formulaire
        input.value = '';

        verifier(nombreChoisi);

    }
});


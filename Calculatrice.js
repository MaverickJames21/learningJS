function addition(nombreA, nombreB) {
  return nombreA + nombreB;
}

function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}

function division(nombreA, nombreB) {
  if (nombreB == 0) {
    throw new Error("impossible de diviser par 0.");
  }

  return nombreA / nombreB;
}

function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}


let recommencer=false;

do {
    // DEMANDER A L'UTILISATEUR SON CHOIX, (WHILE) TEMPS QUE LA REP N'EST PAS (!=1 )1, 23 OU 4
    let choix;
    do {
      choix = Number(
        prompt(
          "Que choisissez vous?\n\n 1 - Addition \n 2 - soustraction \n 3 - division \n 4 - multiplication"
        )
      );
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);
    
    // VERIFIER QUE LA REP (ISNAN (est nan)) EST UN NOMBRE SINON RECOMMENCER LA BOUCLE
    let premierNombre;
    let deuxiemeNombre;
    do {
      premierNombre = Number(prompt("choisissez un nombre"));
      deuxiemeNombre = Number(prompt("choisissez un deuxieme nombre"));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));
    
    // DANS LE CAS OU LE USER CHOISI L'OPTION 1,2,3 OU 4
    let resultat;
    try {
      switch (choix) {
        case 1:
          resultat = addition(premierNombre, deuxiemeNombre);
          break;
    
        case 2:
          resultat = soustraction(premierNombre, deuxiemeNombre);
          break;
    
        case 3:
          resultat = division(premierNombre, deuxiemeNombre);
          break;
        case 4:
          resultat = multiplication(premierNombre, deuxiemeNombre);
          break;
        default:
          throw new Error("une erreur est survenu.");
      }
      alert("voici le resultat : " + resultat);
    } catch (error) {
      alert(error);
    }

    // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer
    restart = confirm("Souhaitez-vous recommencer un calcul ?"); 
    
} while (recommencer)

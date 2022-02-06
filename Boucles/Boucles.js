// WHILE 
// ATTENTION AU BOUCLE INFINI !
// TOUJOURS TROUVER UNE FIN A UNE BOUCLE

// let i = 1;

// while ( i < 5 ) {
//     // console.log('ligne : ' + i);
//     i++; 
// }
// -------
// DO WHIL
// COMME WHIL A UNE EXCEPTION, ELLE SERA EXECUTER AU MOIN UNE FOIS ET REPETER SI LA CONDITION EST VRAIS.

// let prenom;
// do {
//      prenom = prompt ('Quel est votre prénom?');

// }while(prenom == "" && prenom == null)

// alert ('Bonjour ' + prenom);
// // -------

// // FOR tres utilise pour les tableaux et objets

// for(let i = 1; i < 5; i++){
//      console.log('ligne: ' + i);
// }

// ------
// BREAK

// let i = 0;
// while(i<5){
//      if(i == 3){
//           break;
//      }
//  console.log('ligne: ' +i);
//  i++ 
// }

// LES EXCEPTIONS try and catch
//  try {
//      //  error?

// let recompense = prompt("choisire: épée, arc, grenouille")
// switch(recompense){
//      case'épée':
//           degats = 40;
//           break;
//      case 'arc':
//           degats = 30;
//           break;
//           case 'grenouille':;
//           degats = 20;
//           break;
//           default:
//                throw new Error('vous ne pouvez pas tricher');
// }
// alert('vous avez choisis: ' + recompense + '(' + degats + 'degat)' );


// } catch (error){
//      // error!
//      alert(error)
// }
// // peut utilisé mais utilise un return automatiquement
// finally{
//      alert('fin du programme');
// }


// ------

// boucle FOR

// let i = 1;

// while ( i < 5 ) {
//     console.log('ligne : ' + i);
//     i++; 
// }
// PAR EX POUR RECREE LA BOUCLE WHILE PLUS SIMPLEMENT

for (let i = 0; i < 5; i++) {
    console.log ('ligne: ' +i);
    
}





// LA FUNCTION S'AUTO APELLE ELLE MEME
    function timer(secondes){ //10
        if (secondes > 0) {
            console.log (secondes);
            timer(secondes -1); //9
            
            // console.log affiche 9 donc rapelle timer
            // timer = 8
            // console.log affiche 8 donc rapelle timer ainsi de suite

            
        }
        else{
            console.log(secondes);
        }
 }
timer(10) // secondes vaut 10


function somme(nombre){  // si somme = 5
      // est ce que nombre est égale a 1? non donc passe a la ligne 7
    if (nombre == 1) {
        return 1; 
    }

    // nombre(5) + (nombre(5 - 1=4))
    return nombre  + somme(nombre -1); //nombre = 1 + la somme (5-1=4)4
  
    // retourne 4, est ce que 4 est égale à 1?non
    //donc retourne a ca function somme(-1);

    // et retourne 4

    //5+4

    //nombre qui est maintenant = 4 retourne a ca function somme car 4 nest pas = 1
    //donc somme(4-1)=3 / nombre = 3

    //5+4+3

    //nombre qui est maintenant = 3 retourne a ca function somme car 3 nest pas = 1
    //donc somme(3-1)=2 / nombre = 2

        //5+4+3+2

     //nombre qui est maintenant = 3 retourne a ca function somme car 3 nest pas = 1
    //donc somme(3-1)=2 / nombre = 2

    //nombre qui est maintenant = 2 retourne a ca function somme car 2 nest pas = 1
    //donc somme(2-1)=1 / nombre = 1

    //5 + 4 + 3 + 2 + 1
    //fini



}

console.log(somme(5));
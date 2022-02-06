// CLOSURE FUNCTION DANS UNE FUNCTION ET SAUVEGARDE AUTOMATIQUEMENT MA VARIABLE LOCALE DUNE FUNCTION
function timer(){
    let secondes = (0);

    let maClosure = () => {
        return ++secondes;
    }
    return maClosure
}

let monTimer = timer();
console.log(monTimer());
console.log(monTimer());
console.log(monTimer());

let monDeuxiemeTimer = timer();
console.log(monDeuxiemeTimer());
console.log(monDeuxiemeTimer());
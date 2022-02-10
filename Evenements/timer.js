let btn = document.querySelector('button');
let seconde = 10;
let interval;

btn.addEventListener('click', start);

function start(){
    interval = setInterval(decompte, 1000);
}

function stop(){
    clearInterval(interval);
    document.body.innerHTML +=//prend contenu de la page et rajoute a la suite du contenu de la page.
    "stop!";
}

function decompte(){
    seconde--;

    if (seconde == 0) {
        stop();
    }else{
       document.body.innerHTML += seconde + '<br>'; 
    }
}


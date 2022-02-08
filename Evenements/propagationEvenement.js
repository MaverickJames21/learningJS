//propagation d evenement

let article = document.querySelector('article');
let h1 = document.querySelector('h1');


article.addEventListener('click', () => {
    alert('article cliqué');
});

h1.addEventListener('click', (event) => {
    alert('titre cliqué');
// stopImmediatPropagation arret la repetition de popup enfant dans parent.
    event.stopImmediatePropagation();
});
// DOCUMENT OBJECT MODEL
// acceder dans la classe .logo pour modifier supprimer etc...
// 1ere method
let h1 = document.querySelector('.logo')//pour un CLASS
let h1 = document.querySelectorall('#logo')//pour une ID
let h1 = document.getElementsByTagName('#logo')[0];//pour modifier le premier élément d'un tableaux.

// MODIFIER
h1.textContent = "hello World";// pour modifier une propriété(textContent)
h1.innerHTML = "<div style= 'font-weight: normal'>Hello world</div>"// pour modifier le stylede la div hello world

// ------
//  method ajouter text
// pour teste si JS est bien connecter avec ma page internet
document.write('test');// va écrire a la suite de mon contenu pour chaine de caractere
// ajouter un élément brut
//pas besoin de selector querySelector avant
document.body.append('test');

//sinon ca serait pour choisire ou devant h1 par exemple
let h1 = document.querySelector('h1');
h1.append('test');

// -------
// method POUR CREE UN OBJET
// cree un element
let helloWorld = document.createElement('div')
// ou plus simplement
let element = document.createElement('div').textContent('le text du div');

// ensuite le personnaliser
helloWorld.textContent = "hello world!";

// l'ajouter a notre page, 3 possibilte
//1er append=appendChild
document.body.append(helloWorld);

//2eme inserer avant un élément
document.body.insertBefore(helloWorld, document.querySelector('.container'));
// plus simplement meilleur solution
document.querySelector('.container').prepend(helloWorld);

// -------
// supprimer un element du DOM

// method long
let h1 = document.querySelector('h1')
h1.remove();

// method court
document.querySelector('h1').remove();





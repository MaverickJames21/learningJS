// cree notre header
let header = document.createElement('header');
// cree menu
let menu = document.createElement('div');
// cree paragraphe
let p = document.createElement('p');

// le personnaliser header
header.textContent = "Bienvenue";
header.style.backgroundColor = "green";
header.style.color = "white";
header.style.padding = "30px";
header.style.fontSize = "3em";
header.style.textAlign = "center";

// le menu
menu.innerHTML = "<a href='#'>Accueil</a> / <a href='#'>page2</a>";
menu.style.backgroundColor = ('yellow');
menu.style.padding = ('15px');

// le paragraphe
p.textContent ="ceci est un paragraph crée avec Javascript";
p.style.margin = '15px';

// les ajouter
document.body.append(header, menu);//plus simple
document.body.append(menu);

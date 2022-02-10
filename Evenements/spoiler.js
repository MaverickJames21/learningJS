let message = document.querySelector('div');
let btn = document.querySelector('button');
let hidden = true;

// cacher le message
message.style.display = "none";

// détecter le click
btn.addEventListener('click', () => {
    if(hidden){
        btn.textContent = "Cacher";
        message.style.display = "block";
        hidden = false;
    }else{
        btn.textContent = "Afficher";
        message.style.display = "none";
        hidden = true;
    }
});

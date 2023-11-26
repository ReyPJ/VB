 // Este codigo es el header, stikcy, y cambio de imagen usando Listener de scroll y if/else con ? y :

window.addEventListener('scroll', function(){                         
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
    var logox = document.getElementById('logox');
    window.addEventListener('scroll', function() {
        logox.src = window.scrollY > 0 ? 'logox.png' : 'logo1.png';
    });
});

// Responsive menu de navegacion abrir y cerrar
//Usamos un window.addEventListener("load", function(){}) para que ejectute el codigo hasta que todo el dominion haya cargado

window.addEventListener("load", function(){
    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');
    var closeBtn = document.querySelector('.close-btn');
    menuBtn.addEventListener('click', ()=>{
        menu.classList.add('active');
    });
    
    closeBtn.addEventListener('click', ()=>{
        menu.classList.remove('active');
    });
    
});






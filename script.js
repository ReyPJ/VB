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

var menu = document.querySelector('.menu-pc');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", ()=>{
    menu.classList.add('active');
});


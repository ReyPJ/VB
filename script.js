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

// Codigo de la seccion de servicios, usamos funcione de hover dentro del javascript para cambiar el contenido dentro de este, cosa que no puedes hacer en css con la opcion de :hover//

window.addEventListener("load", ()=>{
    var paw = document.getElementById('paw')
    var amb = document.getElementById('si1')
    var tab = document.getElementById('Tab')
    var lab = document.getElementById('si2')
    paw.addEventListener('mouseover', ()=>{
        paw.src = 'vpaw1.png'
        amb.src = 'ambu.png'
    });
    paw.addEventListener('mouseout', ()=>{
        paw.src = 'vpaw2.png'
        amb.src = 'vetIconW.png'
    });
    tab.addEventListener('mouseover', ()=>{
        tab.src = 'vetTab.png'
        lab.src = 'lab.png'
    });
    tab.addEventListener('mouseout', ()=>{
        tab.src = 'vetTab2.png'
        lab.src = 'anes2.png'
    });
});






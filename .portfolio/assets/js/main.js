import abreFechaMenu from "./modulos/menuLateral.js";

const menu = document.querySelector('[data-tipo="menu"]');
const menuIcone = document.querySelector('.bi-menu-abrir');
const listaLinkMenu = document.querySelectorAll('[data-tipo="abreFechaMenu"]');

listaLinkMenu.forEach(link => {
    link.addEventListener('click', () =>{
        abreFechaMenu(menu, menuIcone);
    });
})

/* Iniciando carrossel */
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            1440:{
                items:4
            },
        },
    });
  });
import abreFechaMenu from "./modulos/menuLateral.js";
import {verificaLarguraTela, verificaMenuEstaAberto, verificaValorScroll} from "./modulos/funcoesVerificadoras.js";
// import {verificaLarguraTela} from "./modulos/funcoesVerificadoras.js";

const menu = document.querySelector('[data-tipo="menu"]');
const menuIcone = document.querySelector('.bi-menu-abrir');
const listaLinkMenu = document.querySelectorAll('[data-tipo="abreFechaMenu"]');

/* fechar menu com scroll */
document.addEventListener('scroll', () => {
    if (verificaLarguraTela() >= 1024) {
        return;
    }
    if(!verificaMenuEstaAberto(menu)){
        return;
    }
    if(verificaValorScroll() >= 60){
        abreFechaMenu(menu, menuIcone);
    }
})


/* adiciona abrir e fechar menu */
listaLinkMenu.forEach(link => {
    link.addEventListener('click', () => {
        if (verificaLarguraTela() <= 1024) {
            abreFechaMenu(menu, menuIcone);
        }
    });
})


/* Iniciando carrossel e configurando */
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1440: {
                items: 4
            },
        },
    });
});
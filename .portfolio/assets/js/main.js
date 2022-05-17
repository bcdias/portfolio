import abreFechaMenu from "./modulos/menuLateral.js";

const menu = document.querySelector('[data-tipo="menu"]');
const menuIcone = document.querySelector('.bi-menu-abrir');
const listaLinkMenu = document.querySelectorAll('[data-tipo="abreFechaMenu"]');

listaLinkMenu.forEach(link => {
    link.addEventListener('click', () =>{
        abreFechaMenu(menu, menuIcone);
    });
})

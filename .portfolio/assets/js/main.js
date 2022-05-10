import abreFechaMenu from "./modulos/menuLateral.js";

const menu = document.querySelector('[data-tipo="menu"]')
const menuIcone = document.querySelector('[data-tipo="iconeMenu"]')
const listaLinkMenu = document.querySelectorAll('[data-tipo="linkMenu"]')

console.log(listaLinkMenu);

menuIcone.addEventListener('click', () =>{
    abreFechaMenu(menu, menuIcone);
})

listaLinkMenu.forEach(link => {
    link.addEventListener('click', () =>{
        abreFechaMenu(menu, menuIcone);
    })
})
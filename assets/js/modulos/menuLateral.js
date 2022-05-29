const abreFechaMenu = (menu, icone) =>{
    menu.classList.toggle("cabecalho__menu--mostrar");
    trocaIcone(icone);    
}

const trocaIcone = (icone) =>{
    icone.classList.toggle("bi-menu-fechar");
}

export default abreFechaMenu
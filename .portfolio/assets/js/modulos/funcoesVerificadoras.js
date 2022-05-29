
function verificaLarguraTela(){
    const largura = window.innerWidth
    return largura
}

function verificaMenuEstaAberto(menu){
    return menu.classList.contains("cabecalho__menu--mostrar")
}

function verificaValorScroll(){
    return parseInt(window.scrollY)
}

export {
    verificaLarguraTela,
    verificaMenuEstaAberto,
    verificaValorScroll

}
// import { conexaoConvertida } from "./conexao-api.js"
// import constroiCard, { constroiCard} from './mostrarVideo.js'

import { conexaoConvertida } from "./conexao-api.js"
import {constroiCard} from "./mostrarVideo.js"


async function buscarVideo(evento){
    alert('clicou')
    evento.preventDefault()

    const dadosPesquisa = document.querySelector('[data-pesquisa]').value
    const busca = await conexaoConvertida.buscarVideo(dadosPesquisa)

    const lista = document.querySelector('[data-lista]')
    while (lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    busca.forEach(elemento => lista.appendChild( 
        constroiCard(elemento.titulo,elemento.descricao,elemento.url,elemento.imagem) ) 
       
        
    );
}

const botaoPesquisa = document.querySelector('.pesquisar__botao')

botaoPesquisa.addEventListener('click',evento => buscarVideo(evento))
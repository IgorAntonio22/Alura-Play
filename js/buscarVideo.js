import { conectaApi } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa)

    const lista = document.querySelector("[data-lista]")

    while (lista.firstChild) { //enquanto essa lista ter um primeiro filho (firstChild), ou seja, for verdadeiro, eu quero remover o primeiro filho da lista, ai ele fica nesse loop até apagar todos os filhos que esta lista tem. Portanto ele ficará nesse looping até apagar todos os filhos que a lista tem. A lista ficará vazia. Depois disso irá rodar a função abaixo busca.forEach e irá criar o elemento que buscamos dentro dessa lista vazia
        lista.removeChild(lista.firstChild);
    }
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo,  elemento.descricao, elemento.url, elemento.imagem)))

    if (busca.length == 0) { //se o tamanho da lista for == 0, ou seja não tem nada lá dentro, rode esse erro
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))
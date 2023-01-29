import { conectaApi } from "./conectaAPI.js"


const formulario = document.querySelector("[data-formulario]")

async function criarVideo(evento) {
    evento.preventDefault() //previne a ação padrão de envio de formulário que é o recarregamento da página

    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value
    const descricao = Math.floor(Math.random() * 10).toString()

    try{ 
    await conectaApi.criaVideo(titulo, descricao, url, imagem) //tem que seguir a ordem de parâmetros igual está lá na API para não receber errado, exemplo: imagem no lugar da url
    
    window.location.href = "../pages/envio-concluido.html"//redireciona a página quando o envio é feito com sucesso para retornar FEEDBACK para o usuário
    } catch (e) { //pegando o erro junto com a mensagem(esta através do parâmetro e) e imprimindo ela na tela como um alerta
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento))

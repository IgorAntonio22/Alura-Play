async function listaVideos() {
    const conexao = await fetch("https://json-server-for-alura-play.vercel.app/videos")
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("https://json-server-for-alura-play.vercel.app/videos", {
        method: "POST", //define essa requisição como uma requisição POST e não GET (a padrão que não precisa escrever que é um método GET)
        headers: {
            "Content-type": "application/json" //específica o tipo de arquivo que está sendo enviado
        },
        body: JSON.stringify({ //aqui dentro nós iremos enviar os dados/um objeto de valores que a gente quer cadastrar nesta requisição, só que em STRING, pois só assim podemos enviar uma requisição
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
    if (!conexao.ok) { //se a conexão não estiver ok (! = não), rode esse código   
        throw new Error("Não foi possível enviar o vídeo!") //jogando erro para pegar (catch) dentro do criarVideo.js
    }

    const conexaoConvertida = await conexao.json() //transformando em json de novo
    return conexaoConvertida //retornando a função pra que tudo isso possa ser utilizado em outros lugares
    
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`https://json-server-for-alura-play.vercel.app/videos?q=${termoDeBusca}`) // ? = existe?, q = query, =termodebusca = palavra-chave
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}




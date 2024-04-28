async function listarVideos(){
    const res = await fetch('http://localhost:3000/videos')
    let conexaoConvertida = await res.json()
    return conexaoConvertida
}

async function criarVideo(titulo,descricao,url,imagem){
    const conexao = await fetch('http://localhost:3000/videos',{
        method:'POST',
        headers :{
            "content-type":"aplication/json"
        },
        body: JSON.stringify({
            titulo : titulo,
            descricao :`${descricao} mil visualizações`,
            url: url,
            imagem : imagem
        })
    })
    const conexaoConvertida = conexao.json()
    return conexaoConvertida
}

async function buscarVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const conexaoConvertida = {
    listarVideos,
    criarVideo,
    buscarVideo
}
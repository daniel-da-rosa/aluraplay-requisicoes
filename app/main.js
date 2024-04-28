let videos=[]
let elementoVideo = document.querySelector('.videos__container')
console.log(elementoVideo)

async function carregaVideos(){
    const res = await fetch('http://localhost:3000/videos')
    videos = await res.json()
    console.log(res)
    console.table(videos)

    // elementoVideo.innerHTML =''
    videos.forEach(video => {
        elementoVideo.innerHTML +=`
        <li class="videos__item">
        <iframe width="100%" height="72%" src="${video.url}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${video.imagem}" alt="logo canal alura">
            <h3>${video.titulo}</h3>
            <p>${video.descricao}</p>
        </div>
    </li>
        
        `
        
    });


}

carregaVideos()
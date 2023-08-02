window.addEventListener('load',()=>{
    // 1 esta função deveria chamar mais publicaçoes mas apenas clona e não é adicionado na dom  fazendo com que as funções abaixo nao funcione nos clones
    let btn = document.querySelector('#more')
    
    btn.addEventListener('click', ()=>{
        let cardPost = document.querySelector('.card')
        let main = document.querySelector('main')
        let item = cardPost.cloneNode(true)

        main.appendChild(item)
        main.appendChild(btn)
    })

    // 2 esta função altera a imagem do coração ao click do usuario
    let arrDivs = document.querySelectorAll('.likes')
    
    for(div of arrDivs){
        let img = div.firstElementChild
        let divCurtidas = div.lastElementChild
    
        img.addEventListener('click', ()=>{
            let heartOf = "/img/icons/heart.svg"

            //pegar o numero de curtidas 
            let nCurtidas = parseInt(divCurtidas.innerText)

            if( img.src === window.origin + heartOf ){
                //mudar o coração para vermehlo
                img.src = "img/red-heart.png"

                //adicione pontuação like
                divCurtidas.innerText = nCurtidas +1
            }else{
                //mudar o coraçao para branco
                img.src = heartOf

                //remova pontuação like
                divCurtidas.innerText = nCurtidas -1
            }
        })

        //mude o cursor do mause quando passar em cima do coração
        img.addEventListener('mouseover', ()=>{
            img.style.cursor = 'pointer'
        })
    }

    // 3 mudar a barra de pesquisa ao passar o mause
    let search = document.querySelector('.busca form')
    search.addEventListener('mouseover', ()=>{
        search.style.cssText = "box-shadow: 0px 1px 3px black;"
    })
    search.addEventListener('mouseout', ()=>{
        search.style.cssText = ""
    })
})
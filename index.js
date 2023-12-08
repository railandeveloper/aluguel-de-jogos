function alterarStatus (id) {
    let gameClicado = document.getElementById(`game-${id}`)

    let imagem = gameClicado.querySelector('.painel__item__img')

    let botao = gameClicado.querySelector('.bottao')

    if (imagem.classList.contains('painel__item__img--alugado')) {
        //se contem, remova o opaco da imagem
        imagem.classList.remove('painel__item__img--alugado')
        //remova o botao de devolver
        botao.classList.remove('bottao--devolver')
        //e mude o botao para alugar
        botao.textContent ='Alugar'
    } else {
        // se nao tem
        //adcione opacidade na imagem
        imagem.classList.add('painel__item__img--alugado')
        //mude o botao para devolver
        botao.classList.add('bottao--devolver')
        //e mude o texto do botao para devolver
        botao.textContent= 'Devolver'
    }
}
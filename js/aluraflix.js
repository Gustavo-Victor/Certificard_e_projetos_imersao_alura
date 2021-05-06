
/*função para adicionar filme*/
function adicionarFilme(){
    //variáveis necessáirias
    let campo_filme = window.document.querySelector("#filme")//pegar campo
    let filme = campo_filme.value//pegar valor do campo

    //fazer validação do formato 
    if(filme.endsWith(".gif") || filme.endsWith(".jpg") || filme.endsWith(".jpeg") || filme.endsWith(".png")){
        listarFilme(filme)//chamar função pra listar filme
        window.alert("Imagem enviada com sucesso!")//exibir mensagem
    }else{
        window.alert("Formato inválido!")//exibir mensagem de erro
    }
    campo_filme.value = "" //limpar campo do formulário
}

//função para listar filme 
function listarFilme(f){
    let div_lista_filmes = window.document.getElementById("listaFilmes")//pegar div onde vão aparecer imagens

    let img = window.document.createElement('img')
    img.setAttribute('src', f)
    img.setAttribute('width', '200')
    div_lista_filmes.appendChild(img)
}




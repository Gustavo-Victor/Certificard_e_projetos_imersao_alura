//criando objetos
var paulo = {
    nome: "Paulo",
    vitorias: 10,
    empates: 5,
    derrotas: 5,
    pontos: 0
}


var rafa = {
    nome: "Rafaella",
    vitorias: 7,
    empates: 12,
    derrotas: 11,
    pontos: 0
}


var guilherme = {
    nome: "Guilherme",
    vitorias: 9,
    empates: 6,
    derrotas: 7,
    pontos: 0
}

//vetor de objetos
var jogadores = [paulo, rafa, guilherme]

//função para calcular pontos dos jogadores
function calculaPontos(jogador){
    let pontos = (jogador.vitorias * 3) + (jogador.empates * 1) 
    return pontos
}

//chamar função que calcula pontos
paulo.pontos =  calculaPontos(paulo)
rafa.pontos = calculaPontos(rafa)
guilherme.pontos = calculaPontos(guilherme)

/*testando console
console.log(paulo)
console.log(rafa)
console.log(guilherme)
*/

//função para exibir pontos dos jogadores em formato de tabela
function exibirPontos(players){
    let html = ""
    for(let contador = 0; contador<players.length; contador++){
        html+= `<tr><td>${players[contador].nome}</td>`
        html += `<td>${players[contador].vitorias}</td>`
        html += `<td>${players[contador].empates}</td>`
        html += `<td>${players[contador].derrotas}</td>`
        html += `<td>${players[contador].pontos}</td>`
        html += `<td><button onClick='adicionarVitoria(${contador})'>Vitória</button></td>`
        html += `<td><button onClick='adicionarEmpate(${contador})'>Empate</button></td>`
        html += `<td><button onClick='adicionarDerrota(${contador})'>Derrota</button></td></tr>`        
    }
    let tabela = window.document.getElementById("tabelaJogadores")
    tabela.innerHTML = html
    
}

//chamar função para exibir pontos
exibirPontos(jogadores)

//função para adicionar vitórias
function adicionarVitoria(contador){
    let j = jogadores[contador]
    j.vitorias++
    j.pontos = calculaPontos(j)
    exibirPontos(jogadores)
}

//função para adicionar empates
function adicionarEmpate(contador){
    let j = jogadores[contador]
    j.empates++
    j.pontos = calculaPontos(j)
    exibirPontos(jogadores)
}

//função para adicionar vitórias
function adicionarDerrota(contador){
    let j = jogadores[contador]
    j.derrotas++
    exibirPontos(jogadores)
}




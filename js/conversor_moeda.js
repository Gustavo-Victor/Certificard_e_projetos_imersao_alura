

//função para converter dólares em real
function converterMoeda(){    

    //variáveis que recebem conteúdo do input
    var cotacao_campo = window.document.getElementById("cotacao")//input cotação
    var dolar_campo = window.document.querySelector("#dolar")//input cotação

    //validar dados para fazer conversão
    if(cotacao_campo.value.length == 0 || dolar_campo.value.length == 0){
        window.alert("Erro! - Preencha todos os campos!")
    }else if(cotacao_campo.value < 0 || dolar_campo.value < 0){
        window.alert("Erro! - Cotação e valor não podem ser negativos!")
    }else{
        //pegar só o valor dos inputs e converter valor monetário
        valor_cotacao = Number.parseFloat(cotacao_campo.value)  
        valor_dolar = Number(dolar_campo.value)

        //calcular valor em real
        var valor_real = (valor_dolar * valor_cotacao)

        //formatar valores
        valor_real =  valor_real.toFixed(2).replace(".", ",")
        valor_dolar = valor_dolar.toFixed(2).replace(".", ",")

        //mostrar resultado
        window.alert(`US$ ${valor_dolar} é o mesmo que R$ ${valor_real}`)
    }

    //limpar campos após usuário clicar em enviar
    cotacao_campo.value = ""
    dolar_campo.value = ""

}




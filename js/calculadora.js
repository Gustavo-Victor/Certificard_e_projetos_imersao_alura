
//Ler valores do usuário
var num1 = Number(prompt("Digite o 1º valor para a operação: "))
var num2 = Number(prompt("Digite o 2º valor para a operação: "))
var opcao = Number(prompt("[1] Para adição, [2] Para sutração, [3] Para multiplicação, [4] Para divisão ou [5] Para módulo"))

//variável pra exibir resultado final
var resultado = ''

//estrutura condicional ou de decisão para realizar operação matemática conforme opção escolhida pelo usuário
switch(opcao){
    case 1: 
        resultado = num1 + num2 
        window.document.write(`<h2 id = 'resultado'>${num1} + ${num2} = ${resultado}</h2>`)
    break 

    case 2:
        resultado = num1 - num2 
        window.document.write(`<h2 id = 'resultado'>${num1} - ${num2} = ${resultado}</h2>`)
    break

    case 3: 
        resultado = num1 * num2
        window.document.write(`<h2 id = 'resultado'>${num1} * ${num2} = ${resultado}</h2>`)
    break

    case 4: 
        resultado = num1 / num2
        window.document.write(`<h2 id = 'resultado'>${num1} / ${num2} = ${resultado}</h2>`)
    break

    case 5: 
        resultado = num1 * num2
        window.document.write(`<h2 id = 'resultado'>${num1} % ${num2} = ${resultado}</h2>`)
    break

    default: 
        resultado = 'Opção inválida!'
        window.document.write(`<h2 id='resultado'>${resultado}</h2>`)
    break

}



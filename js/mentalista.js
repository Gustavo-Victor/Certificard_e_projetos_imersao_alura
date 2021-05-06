
//definir número aleatório convertido pra inteiro e entre 0 e 9
var numero_aleatorio = Number.parseInt(Math.random() * 10)

//definir número máximo de tentativas
var tentativas = 3

//mensagem inicial
window.alert("Tente acertar o número, você tem "+tentativas+" tentativas!")

//laço de repetição para ler número do usuário
while(tentativas > 0){
    var chute = parseInt(prompt("Digite um número entre 0 e 9: ")) //ler número e converter pra inteiro

    //validar número
    if(!isNaN(chute) && chute>=0 && chute <=9){
        if(chute == numero_aleatorio){
            window.alert("Acertou!") //quando acertar ele sai do laço
            break
        }else if(chute > numero_aleatorio){
            window.alert(`O número aleatório é menor do que ${chute}`)//caso chute seja maior que número
        }else{
            window.alert(`O número aleatório é maior do que ${chute}`)//caso chute seja menor que número
        }
    }else{
        window.alert("Valor inválido")//mensagem caso o valor digitado para o usuário não seja válido
    }
    tentativas--
}


//estrutura para verificar se usuário acertou ou não e em qual tentativa 
if(tentativas == 3){
    window.alert("De primeira! Você é demais!")
}else if (tentativas == 2){
    window.alert("Na segunda tentativa! Muito bem!")
}else if (tentativas ==  1) {
    window.alert("Na última tentativa! Essa foi por pouco hein!")
}else if(chute != numero_aleatorio && tentativas == 0){
    window.alert("Não foi dessa vez :( - O número aleatório era "+ numero_aleatorio +"!")
}

//window.alert(numero_aleatorio)
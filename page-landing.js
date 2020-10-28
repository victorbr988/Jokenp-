// função do botão
function validar() {
    var input = window.document.getElementById('receber_valor'); //window sempre retorna uma string
    var reverse = Number(input.value) // converte de string pra number
    if (reverse <= 0 || reverse >= 4){
        window.alert("Digite um valor válido entre 1 e 3")
    }
    input.value=""

    //criar as regras
    const relevo = ['Você escolheu pedra', 'Você escolheu Papel','Você escolheu Tesoura'] //Array
    const Win = ['Você Ganhou', 'computador Ganhou','Empatou']

    const playerMachine = Math.floor(Math.random() * 3 + 1)
    const playerSecond = ['O computador escolheu Pedra', 'O computador escolheu Papel',
     'O computador escolheu Tesoura']

    if (reverse == 1 && playerMachine == 1){
        window.alert(`${relevo[0]} , ${playerSecond[0]} , ${Win[2]}!`)
    }
    if (reverse == 1 && playerMachine == 2){ 
        window.alert(`${relevo[0]}, ${playerSecond[1]}, ${Win[1]}`)
    }
    if(reverse == 1 && playerMachine== 3){
        window.alert(`${relevo[0]}, ${playerSecond[2]}, ${Win[1]}`)
    }
    if (reverse == 2 && playerMachine == 1){
        window.alert(`${relevo[1]} , ${playerSecond[0]} , ${Win[0]}!`)
    }
    if (reverse == 2 && playerMachine == 2){ 
        window.alert(`${relevo[1]}, ${playerSecond[1]}, ${Win[2]}`)
    }
    if(reverse == 2 && playerMachine== 3){
        window.alert(`${relevo[1]}, ${playerSecond[2]}, ${Win[1]}`)
    }
    if (reverse == 3 && playerMachine == 1){
        window.alert(`${relevo[2]} , ${playerSecond[0]} , ${Win[1]}!`)
    }
    if (reverse == 3 && playerMachine == 2){ 
        window.alert(`${relevo[2]}, ${playerSecond[1]}, ${Win[0]}`)
    }
    if(reverse == 3 && playerMachine== 3){
        window.alert(`${relevo[2]}, ${playerSecond[2]}, ${Win[2]}`)
    }
 
} 
var res = window.document.getElementById("res")
var computerPointer = 0
var playerPointer = 0
res.innerHTML = computerPointer




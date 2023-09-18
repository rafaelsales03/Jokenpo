
const result = document.querySelector("p")
const myResult = document.querySelector(".my-score")
const resultMachine = document.querySelector(".score-machine")

let humanScore = 0 
let machineScore = 0


function clickButton(humanChoice) {

    playTheGame(humanChoice, playMachine())

}

function playMachine() {

    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}


function playTheGame(human, machine) {

    console.log(human, machine)


    if (human === machine) {

        result.innerHTML = "Empatou"

    } else if (
        
        (human === "paper" && machine === "rock") ||
        (human === "scissors" && machine === "paper") ||
        (human === "rock" && machine === "scissors")
        ) {

        humanScore++
        myResult.innerHTML = humanScore
        result.innerHTML = "Você ganhou"
        

    } else {

        machineScore++
        resultMachine.innerHTML = machineScore
        result.innerHTML = "Você perdeu"
        
    
    }




}


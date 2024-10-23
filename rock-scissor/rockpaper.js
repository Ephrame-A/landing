const input = document.getElementById('input')
const choices = ["rock", "paper", "scissor"]
const play = document.getElementById('player')
const comp = document.getElementById('computer')
const result = document.getElementById('result')
let winof = 0
let lostof = 0
let tieof = 0
let playerChoice;
let computerChoice;
function game(){
     playerChoice = input.value.toLowerCase()
if(choices.includes(playerChoice)){
    computerChoice = choices[Math.floor(Math.random()*3)]
console.log(playerChoice)
play.innerText =`your choice is: ${playerChoice}`
comp.innerText = `computer choice: ${computerChoice}`
    if(computerChoice===playerChoice){
         tieof++;
        return "it is a tie"
    }
    else if(playerChoice==="scissor"&&computerChoice==="paper"
        ||(playerChoice==="papper"&&computerChoice==="rock")
        ||playerChoice==="rock"&&computerChoice==="scissor"){
            winof++
            return "you win"
        }
        
        else {
            lostof++;
            return "you lost"
        }
}
else return "please enter a correct input"
}
function display(){
    result.innerText = game()
document.getElementById('win').innerText = `win = ${winof}`
document.getElementById('lost').innerText = `lost = ${lostof}`
document.getElementById('tie').innerText = `Draw = ${tieof}`
}
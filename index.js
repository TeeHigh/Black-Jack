let player = {
    name: "Ife", 
    chips: 150
}

let age = 20
let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("Message-el")
let message = ''
let sumEl = document.getElementById("sumEl")
let cardsEl = document.querySelector("#cardsEl") 
let playerEl = document.getElementById("player-El")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randint = Math.floor(Math.random() *13) + 1
    
    if (randint > 10){
        return 10
    }
    else if (randint === 1){
        return 11
    }
    else{
        return randint
    }
}

function renderBtn(){
    console.log("Welcome!")
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You are out of the game"
        isAlive = false
    }

    console.log("Is alive = " + isAlive)
    console.log(message)
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + " - "
    }
}


function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard()
        console.log("Drawing new card")
        sum += thirdCard
        console.log(sum)
        cards.push(thirdCard)
        renderBtn()
    }
}
function startBtn(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    isAlive = true
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderBtn()
}

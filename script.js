function getDiceNumber(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
    
}

let playerOneScoreCount = 0
let playerTwoScoreCount = 0
let playerOneScore = 0
let playerTwoScore = 0

document.querySelector(".player-two-dice-button").disabled = true


oneDice = document.querySelector(".player-one-dice-button")
twoDice = document.querySelector(".player-two-dice-button")

function disableButtonColor() {
    if (twoDice.disabled === true)
    {
        oneDice.style.opacity = "0.5";
        twoDice.style.opacity = "1";
    }
    else 
    {
        oneDice.style.opacity = "1";
        twoDice.style.opacity = "0.5";
    }
}

oneDice.addEventListener("click", () => {
    playerOneScore = getDiceNumber(1,6)
    document.querySelector("#player-one-score").innerHTML = `<p>Score: ${playerOneScore}</p>`
    playerOneScoreCount += playerOneScore
    document.querySelector("#player-one-score-count").innerHTML = `<p>Score Count: ${playerOneScoreCount}</p>`
    var paraOne = document.createElement("P")
    paraOne.innerHTML = `${winningPlayerOne()}`
    document.querySelector(".player-one").appendChild(paraOne)
    rotateOneImage()
    disableButtonColor()
    oneDice.disabled = true
    twoDice.removeAttribute("disabled")
})



twoDice.addEventListener("click", () => {
    playerTwoScore = getDiceNumber(1,6)
    document.querySelector("#player-two-score").innerHTML = `<p>This Roll: ${playerTwoScore}</p>`
    playerTwoScoreCount += playerTwoScore
    document.querySelector("#player-two-score-count").innerHTML = `<p>Score Count: ${playerTwoScoreCount}</p>`
    var paraTwo = document.createElement("P")
    paraTwo.innerHTML = `${winningPlayerTwo()}`
    document.querySelector(".player-two").appendChild(paraTwo)
    rotateTwoImage()
    disableButtonColor()
    twoDice.disabled = true
    oneDice.removeAttribute("disabled")
}) 

function winningPlayerOne() {
    if (playerOneScoreCount = 21)
    {
        resetGame()
        return "You win"
    }
    else
    {
        return ""
    }
}

function winningPlayerTwo() {
    if (playerTwoScoreCount >= 21)
    {
        resetGame()
        return "You win"
    }
    else
    {
        return ""
    }
}

function resetGame()
{
    playerOneScoreCount = 0
    playerTwoScoreCount = 0
    playerOneScore = 0
    playerTwoScore = 0
    document.querySelector("#player-one-score").innerHTML = `<p>Score: ${playerOneScore}</p>`
    document.querySelector("#player-one-score-count").innerHTML = `<p>Score Count: ${playerOneScoreCount}</p>`
    document.querySelector("#player-two-score").innerHTML = `<p>This Roll: ${playerTwoScore}</p>`
    document.querySelector("#player-two-score-count").innerHTML = `<p>Score Count: ${playerTwoScoreCount}</p>`
    disableButtonColor()
}

document.querySelector(".play-again-btn").addEventListener("click", resetGame)



let degOne = 89

function rotateOneImage() {
    let img = document.querySelector(".player-one-dice-button")
        img.style.transform = `rotate(${degOne += degOne}deg)`;
}


let degTwo = 89

function rotateTwoImage() {
    let img = document.querySelector(".player-two-dice-button")
        img.style.transform = `rotate(${degTwo += degTwo}deg)`;
}
function getDiceNumber(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
    
}

let playerOneScoreCount = 0
let playerTwoScoreCount = 0


document.querySelector(".player-one-dice-button").addEventListener("click", () => {
    let playerOneScore = getDiceNumber(1,6)
    document.querySelector("#player-one-score").innerHTML = `<p>Score: ${playerOneScore}</p>`
    playerOneScoreCount += playerOneScore
    document.querySelector("#player-one-score-count").innerHTML = `<p>Score Count: ${playerOneScoreCount}</p>`
    var paraOne = document.createElement("P")
    paraOne.innerHTML = `${winningPlayerOne()}`
    document.querySelector(".player-one").appendChild(paraOne)
})

document.querySelector(".player-two-dice-button").addEventListener("click", () => {
    let playerTwoScore = getDiceNumber(1,6)
    document.querySelector("#player-two-score").innerHTML = `<p>This Roll: ${playerTwoScore}</p>`
    playerTwoScoreCount += playerTwoScore
    document.querySelector("#player-two-score-count").innerHTML = `<p>Score Count: ${playerTwoScoreCount}</p>`
    var paraTwo = document.createElement("P")
    paraTwo.innerHTML = `${winningPlayerTwo()}`
    document.querySelector(".player-two").appendChild(paraTwo)
}) 

function winningPlayerOne() {
    if (playerOneScoreCount >= 50)
    {
        return "You win"
    }
    else
    {
        return ""
    }
}

function winningPlayerTwo() {
    if (playerTwoScoreCount >= 50)
    {
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
}

document.querySelector(".play-again-btn").addEventListener("click", resetGame())



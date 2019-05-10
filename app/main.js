let players = [{
    name: "Player1",
    score: 0
},{
    name: "Player2",
    score: 0
}]

let scoreToWin = 11
let gameOver = false

function score(playerIndex) {
    if (gameOver) return
    let scorer = players[playerIndex]
    scorer.score++
    document.querySelector(`#${scorer.name.toLowerCase()}`).innerText = scorer.score.toString()
    winner(scorer)
}

function winner({score, name}) {
    if (score >= scoreToWin && Math.abs(players[0].score - players[1].score) >= 2) {
        gameOver = true
        document.querySelector('.title').innerText = name + " won!"
    }
}

function resetGame() {
    players.forEach(player => {
        player.score = 0
        document.querySelector(`#${player.name.toLowerCase()}`).innerText = '0'
    })
    document.querySelector('.title').innerText = "Score Keepr!"
    gameOver = false
}

function setScoreToWin(val) {
    scoreToWin = val
    resetGame()
}
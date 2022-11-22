"use strict"

let squares = []
const newGameBtn = document.getElementById("reset-game")


function gameOver() {
    throw new Error("Game end")
}

function isGameOver() {
    const nextMoves = [gravityDown(), gravityRight(), gravityUp(), gravityLeft()]
    for(let i = 0; i < nextMoves.length; i++) {
        if (nextMoves[i].toString() != squares.toString()) {
            break
        }
        if (i == nextMoves.length-1) {
            return true
        }
    }
    return false
}

function newTurn() {
    generateSquare()
    updateSquares()
}

function resetGame() {
    let i = 0
    squares = [];
    for(let r = 0; r < 4; r++) {
        for(let c = 0; c < 4; c++) {
            squares.push([c, r, null, false])
            gameDiv.innerHTML += `<div id="square${i}" class="empty-square"></div>`
            i++
        }
    }
    newTurn();
}

newGameBtn.addEventListener("click", () => {resetGame()})


resetGame()



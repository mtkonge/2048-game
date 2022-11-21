

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
    newTurn(true);

}

function newTurn(firstTurn) {
    generateSquare(firstTurn)
    updateSquares()
}



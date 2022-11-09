
function resetGame() {
    gameDiv.innerHTML = "";
    for (let i = 0; i < squares.length; i++) {
        gameDiv.innerHTML += `<div id="square${i}" class="empty-square"></div>`;
    }
}

function newTurn() {
    const generatedSquares = generateNewSquares();
    addNewSquares(generatedSquares);
    updateSquares();
}




const squares = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]

function newTurn() {
    const generatedSquares = generateNewSquares();
    addNewSquares(generatedSquares);
    updateSquares();
}

function main() {
    resetGame();
    newTurn();
    console.log(squares);
}

main();
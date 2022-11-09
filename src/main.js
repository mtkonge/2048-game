
const squares = []


function resetSquares() {
    for (let c = 0; c < 4; c++) {
        console.log("vu")
        for (let r = 0; r < 4; r++) {
            console.log("asf")
            squares.push(new Square(c, r))
        }
    }


}


function newTurn() {
    const generatedSquares = generateNewSquares();
    addNewSquares(generatedSquares);
    updateSquares();
}

function main() {
    resetSquares()
    resetGame();
    newTurn();
    console.log(squares);
}

main();
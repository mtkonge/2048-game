const gameDiv = document.getElementById("game");

function preventSquareOverflow(squareIndex) {
    if (squareIndex >= 15) {
        return 0
    }
    return squareIndex
}

function generateSquaresValues(numbers) {
    for (let i = 0; i < numbers.length; i++)
        if (Math.random() >= 0.8) {
            numbers[i].value = 4;
        }
    return numbers
}

function generateNewSquares() {
    const newSquares = [
        {index: Math.round(Math.random()*15), value: 2}, 
        {index: Math.round(Math.random()*15), value: 2}
    ]
    if (newSquares[0].index == newSquares[1].index) {
        newSquares[1].index++ 
        newSquares[1].index = preventSquareOverflow(newSquares[1].index)
    }
    return generateSquaresValues(newSquares);
    
}

function addNewSquares(generatedSquares) {
    for(let i = 0; i < generatedSquares.length; i++) {
        for (let j = 0; j < squares.length; j++) {
            if (j == generatedSquares[i].index) {
                if (squares[j] != null) {
                    j = preventSquareOverflow(j)
                    continue;
                }
                squares[j] = generatedSquares[i].value;
                break;
            }
        }
    }
}

function updateSquares() {
    for(let i = 0; i < squares.length; i++) {
        const square = document.getElementById(`square${i}`);
        square.innerHTML = squares[i]
        if(squares[i] == null) {
            square.className = "empty-square"
        }
        else {
            square.className = "filled-square"
        }
    }
}
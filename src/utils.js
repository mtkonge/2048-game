"use strict"

const gameDiv = document.getElementById("game");

function gravity(squaresCopy, i, incrementAmount, rowOrCol, rowOrColPosition) {
    if(squaresCopy[i][rowOrCol] === rowOrColPosition) {
        return squaresCopy
    }
    if(squaresCopy[i+incrementAmount][2] === null) {
        squaresCopy[i+incrementAmount][2] = squaresCopy[i][2]
        squaresCopy[i][2] = null
        return gravity(squaresCopy, i+incrementAmount, incrementAmount, rowOrCol, rowOrColPosition)
    }

    if(squaresCopy[i][2] === squaresCopy[i+incrementAmount][2] && !squaresCopy[i][3] && !squaresCopy[i+incrementAmount][3]) {
        squaresCopy[i+incrementAmount][2] += squaresCopy[i][2]
        squaresCopy[i+incrementAmount][3] = true
        squaresCopy[i][2] = null
        return gravity(squaresCopy, i+incrementAmount, incrementAmount, rowOrCol, rowOrColPosition)
    }
    return squaresCopy
}

function arrayDeepCopy(array) {
    return array.map(x => {return [...x]})
}

function gravityDown() {
    resetHasMerged()
    let squaresCopy = arrayDeepCopy(squares)
    for(let i = 11; i >= 0; i--) {
        squaresCopy = gravity(squaresCopy, i, 4, 1, 3)
    }
    return squaresCopy
} 

function gravityUp() {
    resetHasMerged()
    let squaresCopy = arrayDeepCopy(squares)
    for(let i = 4; i < 16; i++) {
        squaresCopy = gravity(squaresCopy, i, -4, 1, 0)
    }
    return squaresCopy
}

function gravityLeft() { 
    resetHasMerged()
    let squaresCopy = arrayDeepCopy(squares)
    for(let i = 1; i < 16; i++) {
        squaresCopy = gravity(squaresCopy, i, -1, 0, 0)
    }
    return squaresCopy
}

function gravityRight() {
    resetHasMerged()
    let squaresCopy = arrayDeepCopy(squares)
    for(let i = 14; i >= 0; i--) {
        squaresCopy = gravity(squaresCopy, i, 1, 0, 3)
    }
    return squaresCopy
}


function generateSquareValue() {
    if (Math.random() >= 0.9)
        return 4
    return 2
}

function checkForEmptySquares() {
    for(let j = 0; j < squares.length; j++) {
        if (squares[j][2] == null) {
            break
        }
        if (j == squares.length-1) {
            throw new Error("No empty squares available")
        }
    }
}

function generateSquare() {
    const newSquare = [Math.round(Math.random()*3), Math.round(Math.random()*3), 2]
    for(let i = 0; i < 16; i++) {
        if (squares[i][0] == newSquare[0] && squares[i][1] == newSquare[1]) {
            if(squares[i][2] == null) {
                squares[i][2] = generateSquareValue()
                return newSquare
            }
            checkForEmptySquares()
            return generateSquare()
        }
    }
}

function updateSquares() {
    for (let i = 0; i < squares.length; i++) {
        const square = document.getElementById(`square${i}`);
        square.innerHTML = squares[i][2]
        if (squares[i][2] == null) {
            square.className = "empty-square";
        } else {
            square.className = `filled-square${squares[i][2]}`;
        }
    }
}

function resetHasMerged() {
    for(let i = 0; i < squares.length; i++)
        squares[i][3] = false
}
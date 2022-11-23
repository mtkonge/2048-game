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
    return array.map(x => {return [x]})
}








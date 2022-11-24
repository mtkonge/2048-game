"use strict"

const gameDiv = document.getElementById("game");
const newGameBtn = document.getElementById("reset-game")

class Game {
    constructor() {
        this.squares = []
    }

    checkForEmptySquares() {
        for(let i = 0; i < this.squares.length; i++) {
            if (this.squares[i].value == null) {
                break
            }
            if (i == this.squares.length-1) {
                throw new Error("No empty squares available")
            }
        }
    }

    generateSquareValue() {
        if (Math.random() >= 0.9)
            return 4
        return 2
    }

    generateSquare() {
        const newSquare = new Square(Math.round(Math.random()*3), Math.round(Math.random()*3), 2)
        for(let i = 0; i < 16; i++) {
            if (this.squares[i].row == newSquare.row && this.squares[i].col == newSquare.col) {
                if(this.squares[i].value == null) {
                    this.squares[i].value = this.generateSquareValue()
                    return newSquare
                }
                this.checkForEmptySquares()
                return this.generateSquare()
            }
        }
    }

    updateSquares() {
        for (let i = 0; i < this.squares.length; i++) {
            const square = document.getElementById(`square${i}`);
            square.innerHTML = this.squares[i].value
            if (this.squares[i].value == null) {
                square.className = "empty-square";
            } else {
                square.className = `filled-square${this.squares[i].value}`;
            }
        }
    }

    newTurn() {
        this.generateSquare()
        this.updateSquares()
    }

    resetGame() {
        let i = 0
        this.squares = [];
        for(let r = 0; r < 4; r++) {
            for(let c = 0; c < 4; c++) {
                this.squares.push(new Square(c, r, null))
                gameDiv.innerHTML += `<div id="square${i}" class="empty-square"></div>`
                i++
            }
        }
        this.newTurn()
    }

    
    gravity(squaresCopy, i, incrementAmount, rowOrCol, rowOrColPosition) {
        // fix scuffy code
        if (rowOrCol === 0) {
            if(squaresCopy[i].row === rowOrColPosition) {
                return squaresCopy
            }
        } else {
            if(squaresCopy[i].col === rowOrColPosition) {
                return squaresCopy
            }
        }

        if(squaresCopy[i+incrementAmount].value === null) {
            squaresCopy[i+incrementAmount].value = squaresCopy[i].value
            squaresCopy[i].value = null
            return this.gravity(squaresCopy, i+incrementAmount, incrementAmount, rowOrCol, rowOrColPosition)
        }
        
        if(squaresCopy[i].value === squaresCopy[i+incrementAmount].value && !squaresCopy[i].hasMerged && !squaresCopy[i+incrementAmount].hasMerged) {
            squaresCopy[i+incrementAmount].value += squaresCopy[i].value
            squaresCopy[i+incrementAmount].hasMerged = true
            squaresCopy[i].value = null
            return this.gravity(squaresCopy, i+incrementAmount, incrementAmount, rowOrCol, rowOrColPosition)
        }
        return squaresCopy
    }

    resetHasMerged() {
        for(let i = 0; i < this.squares.length; i++)
            this.squares[i].hasMerged = false
    }

    gravityDown() {
        this.resetHasMerged()
        let squaresCopy = arrayDeepCopy(this.squares)
        for(let i = 11; i >= 0; i--) {
            squaresCopy = this.gravity(squaresCopy, i, 4, 1, 3)
        }
        return squaresCopy
    } 
    
    gravityUp() {
        this.resetHasMerged()
        let squaresCopy = arrayDeepCopy(this.squares)
        for(let i = 4; i < 16; i++) {
            squaresCopy = this.gravity(squaresCopy, i, -4, 1, 0)
        }
        return squaresCopy
    }
    
    gravityLeft() { 
        this.resetHasMerged()
        let squaresCopy = arrayDeepCopy(this.squares)
        for(let i = 1; i < 16; i++) {
            squaresCopy = this.gravity(squaresCopy, i, -1, 0, 0)
        }
        return squaresCopy
    }
    
    gravityRight() {
        this.resetHasMerged()
        let squaresCopy = arrayDeepCopy(this.squares)
        for(let i = 14; i >= 0; i--) {
            squaresCopy = this.gravity(squaresCopy, i, 1, 0, 3)
        }
        return squaresCopy
    }

    isGameOver() {
        const nextMoves = [this.gravityDown(), this.gravityRight(), this.gravityUp(), this.gravityLeft()]
        for(let i = 0; i < nextMoves.length; i++) {
            if (JSON.stringify(nextMoves[i]) != JSON.stringify(this.squares)) {
                break
            }
            if (i == nextMoves.length-1) {
                throw new Error("Game Over")
            }
        }
    }

}
const game = new Game()
game.resetGame()

newGameBtn.addEventListener("click", () => {game.resetGame()})


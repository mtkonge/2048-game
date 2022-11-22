"use strict"

window.addEventListener(
    "keydown",
    (event) => {
        if (isGameOver()) {
            gameOver()
        }
        switch (event.key) {
            case "ArrowDown":
                if (squares.toString() != gravityDown().toString()) {
                    squares = gravityDown()
                    newTurn()
                }
                break;
            case "ArrowUp":
                if (squares.toString() != gravityUp().toString()) {
                    squares = gravityUp()
                    newTurn()
                }
                break;
            case "ArrowLeft":
                if (squares.toString() != gravityLeft().toString()) {
                    squares = gravityLeft()
                    newTurn()
                }
                break;
            case "ArrowRight":
                if (squares.toString() != gravityRight().toString()) {
                    squares = gravityRight()
                    newTurn()
                }
                break;
            default:
                return;
        }
    },
    true
);

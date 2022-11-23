"use strict"

window.addEventListener(
    "keydown",
    (event) => {
        game.isGameOver()
        switch (event.key) {
            case "ArrowDown":
                if (game.squares.toString() != game.gravityDown().toString()) {
                    game.squares = game.gravityDown()
                    game.newTurn()
                }
                break;
            case "ArrowUp":
                if (game.squares.toString() != game.gravityUp().toString()) {
                    game.squares = game.gravityUp()
                    game.newTurn()
                }
                break;
            case "ArrowLeft":
                if (game.squares.toString() != game.gravityLeft().toString()) {
                    game.squares = game.gravityLeft()
                    game.newTurn()
                }
                break;
            case "ArrowRight":
                if (game.squares.toString() != game.gravityRight().toString()) {
                    game.squares = game.gravityRight()
                    game.newTurn()
                }
                break;
            default:
                return;
        }
    },
    true
);

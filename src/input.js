"use strict"

window.addEventListener(
    "keydown",
    (event) => {
        game.isGameOver()
        switch (event.key) {
            case "ArrowDown":
                if (JSON.stringify(game.squares) != JSON.stringify(game.gravityDown())) {
                    game.squares = game.gravityDown()
                    game.newTurn()
                }
                break;
            case "ArrowUp":
                if (JSON.stringify(game.squares) != JSON.stringify(game.gravityUp())) {
                    game.squares = game.gravityUp()
                    game.newTurn()
                }
                break;
            case "ArrowLeft":
                if (JSON.stringify(game.squares) != JSON.stringify(game.gravityLeft())) {
                    game.squares = game.gravityLeft()
                    game.newTurn()
                }
                break;
            case "ArrowRight":
                if (JSON.stringify(game.squares) != JSON.stringify(game.gravityRight())) {
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

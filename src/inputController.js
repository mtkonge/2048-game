

window.addEventListener(
    "keydown",
    function (event) {
        if (event.defaultPrevented) {
            return;
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

        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    },
    true
);

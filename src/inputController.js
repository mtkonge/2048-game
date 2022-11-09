

function gravityDown() {
    for(let i = 0; i < squares.legnth; i++)
        if (typeof(squares[i]) == number) {
            
        }
    }

function gravityUp() {
    
    }

function gravityLeft() {
    
    }

function gravityRight() {
    
    }

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; 
    }
  
    switch (event.key) {
      case "ArrowDown":
        console.log("down")
        break;
      case "ArrowUp":
        console.log("up")
        break;
      case "ArrowLeft":
        console.log("left")
        break;
      case "ArrowRight":
        console.log("right")
        break;
      default:
        return; 
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  


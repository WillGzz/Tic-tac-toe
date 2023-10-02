console.log(
  "Your JS is linked up. Be the person you needed when you were little."
);

/*----- constants -----*/

/*----- app's state (variables) -----*/
let board;
let turn = "X";

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll("#board div"));

const messages = document.querySelector('h2');
/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleTurn); //“grab” an HTML element using getElementById() and then chain the event listener onto it:

/*----- functions -----*/
function init() {
  board = ["", "", "", "", "", "", "", "", ""];

  render();
}

init();

// Making a mark means rendering a change in the game. We place the x
function render() {
  board.forEach(function (mark, index) {
    //this sets the text content of the square of the same position to the mark on the board.
    squares[index].textContent = mark;
  });
  messages.textContent = `It's ${turn}'s turn!`;
}

function handleTurn(event) {/*The ‘event’ is the click, the ‘target’ is the element on which the event took place
 — the square we’ve clicked on.  findIndex() finds the index of the square in our squares array that matches the square the user clicked!  */
let idx = squares.findIndex(function (square) {
    return square === event.target;
  });
  board[idx] = turn;
// check your console logs to make sure it's working!
turn = turn === 'X' ? 'O' : 'X';

render();

}

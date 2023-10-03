console.log(
  "Your JS is linked up. Be the person you needed when you were little."
);

/*----- constants -----*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/*----- app's state (variables) -----*/
let board;
let turn = "X";
let win;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll("#board div"));

const messages = document.querySelector("h2");
/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleTurn); //“grab” an HTML element using getElementById() and then chain the event listener onto it:
document.getElementById("reset-button").addEventListener("click", init);
/*----- functions -----*/
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  win = null;
  render();
}

init();

// Making a mark means rendering a change in the game. We place the x
function render() {
  board.forEach(function (mark, index) {
    //this sets the text content of the square of the same position to the mark on the board.
    squares[index].textContent = mark;
  });
  messages.textContent =
    win === "T"
      ? `That's a tie!`
      : win
      ? `${win} wins the game!`
      : `It's ${turn}'s turn!`;
}

function handleTurn(event) {
  /*The ‘event’ is the click, the ‘target’ is the element on which the event took place
 — the square we’ve clicked on.  findIndex() finds the index of the square in our squares array that matches the square the user clicked!  */

  if (win) return;

  let idx = squares.findIndex(function (square) {
    return square === event.target;
  });

  if (board[idx] === "") {
    board[idx] = turn;
    turn = turn === "X" ? "O" : "X";

    win = getWinner();
    render();
  }
}
function getWinner() {
  // just stub it up for now.
  let winner = null;
  winningCombos.forEach(function (combo, index) {
    if (
      board[combo[0]] &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    )
      winner = board[combo[0]];
  });

  return winner ? winner : board.includes("") ? null : "T";
}

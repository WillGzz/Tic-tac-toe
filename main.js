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
const h2Element = document.querySelector("h2");
const messages = document.querySelector("h2");
const grid = Array.from(document.querySelectorAll(".square"));
const resetButton = document.querySelector("#reset-button");
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
    if (turn === "X") {
      squares[idx].style.color = "red";
    } else {
      squares[idx].style.color = "blue";
    }
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
let isBlack = true;

// Function to change the color of the h2 element
function changeColor() {
  if (isBlack) {
    h2Element.style.color = "pink";
  } else {
    h2Element.style.color = "gold";
  }
  // Flip the isBlack variable
  isBlack = !isBlack;
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to change the border color of the squares
function changeBorderColor() {
  squares.forEach(function (square) {
    square.style.borderColor = getRandomColor();
  });
}
let colorIndex = 0;

function changeButtonColor() {
    const colors = ["yellow", "pink"];
    resetButton.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
// Change the color of the h2 element every 1 second
setInterval(changeColor, 900);
setInterval(changeBorderColor, 500);
setInterval(changeButtonColor, 500);

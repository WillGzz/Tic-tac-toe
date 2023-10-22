
function App() {
 
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
  const [board, setBoard] = React.useState(["","","","","","","","",""])
  let turn = "X";
  let win;
  
  function handleTurn(event) {
    /*The ‘event’ is the click, the ‘target’ is the element on which the event took place
   — the square we’ve clicked on.  findIndex() finds the index of the square in our squares array that matches the square the user clicked!  */
  
    if (win) return;
  
    
     let idx = event.target.id
     let newBoard = [...board]
     newBoard[idx] = turn
     setBoard(newBoard)
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
  
    return (
    <div>
     <h1>Tic-Tac-Toe</h1>
  
       <h2>It's X's turn!</h2>
    
      
       <div class="flex-container flex-column">
             <div class="flex-container flex-wrap" id="board" onClick={handleTurn}>
             {board.map((value, idx) => {
            return (
              <div class="square" key={idx} id={idx}>
                {value}
              </div>
            )
          })}       
          
             </div>
            
             <button id="reset-button">Reset</button>
         </div>

     </div> 
    );
    }
   

    
ReactDOM.render(<App />, root);
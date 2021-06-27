
import { createMessage } from '/messages.js';
import { isSpot, emptyPeg, isFilled, highlight, movePeg, validMove, movesLeft, boardFull } from './boardMoves.js';

var board = document.getElementById('board');
// possible moves for all pegs ([adj peg, hole to jump to])

// Game flow
const game = (e) => {
  let currentPeg = document.querySelector('.chosen') ? document.querySelector('.chosen').id : null;
  console.log(currentPeg)
  console.log(e.target.id)
// 1. Choose the starting peg to create a hole - remove that peg
  if (boardFull() && isSpot(e.target.id)) {
    emptyPeg(e.target.id);
    createMessage('Choose a peg to move');
  } else if (movesLeft()) {
    // 2. Make a moves
    console.log(currentPeg)
    if (!currentPeg) {
      // 2a. Select a peg (highlight) or generate error message
      if (isFilled(e.target.id) && highlight(e.target.id)) {
        createMessage('Choose spot to move peg to');
      } else {
        createMessage('Not a valid peg, Choose a peg to move');
      };
    
      // 4. Select Spot to move peg to
      // 4a. Evaluate valid move
    } else if (validMove(currentPeg, e.target.id)) {
      // 5. execute move
      movePeg(currentPeg, e.target.id);
      createMessage('Choose a peg to move')
      currentPeg = null
    } else { 
      // 6. raise error
      createMessage('Choose valid spot')
    } 
  }
}

createMessage('Choose peg to remove and start the game');
board.onclick = game;


// OOP
// classes - Board / Hole
// Hole - Filled/Empty state

// Board - possible moves = graph?

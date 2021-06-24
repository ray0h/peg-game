
import { createMessage } from '/messages.js';
import { emptyPeg, isFilled, highlight, movePeg, validMove, movesLeft } from './boardMoves.js';

var board = document.getElementById('board');
// possible moves for all pegs ([adj peg, hole to jump to])


const initiate = () => {
  createMessage('Choose peg to remove and start the game');
  board.addEventListener("click", (e) => {
    emptyPeg(e.target.id);
    createMessage();
  }, {once : true})
};


// Game flow
// 1. Choose the starting peg to create a hole - remove that peg
initiate();
// 2. Make a move
// 2a. Select a peg (highlight)
// 3. Evaluate valid moves
// 3a. peg has an adjacent peg
// 3b. there is an empty hole/space on the board for the peg to land after 'jumping' the adjacent peg.  
// 3c. if selected peg has no valid move, generate error message to select another peg. (unhighlight peg)
// 4. Select Spot to move peg to
// 4a. if selected spot is not valid - raise error
// 5. after valid move is made,
// 5a. remove the jumped peg
// 5b. 'fill' the hole the original peg jumped too.

// there are 12 spots where only 2 moves are possible and 3 spots where 4 moves are possible
// 6. Evaluate whether any possible moves exist
// 6a. if moves, prompt for next selection
// 6b. otherwise the game is over - announce status
// 6b1. generate reset button to restart game.
// 7. clear board and reset

// OOP
// classes - Board / Hole
// Hole - Filled/Empty state

// Board - possible moves = graph?

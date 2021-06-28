import { createMessage } from '/messages.js';
import Board from './boardMoves.js';

const gameboard = document.getElementById('board');
const board = new Board();

// Game flow
const game = (e) => {
  let currentPeg = document.querySelector('.chosen') ? document.querySelector('.chosen').id : null;
  if (board.boardFull() && board.isSpot(e.target.id)) {
    board.emptyPeg(e.target.id);
    createMessage('Choose a peg to move');
  } else if (board.movesLeft()) {
    if (!currentPeg) {
      if (board.isFilled(e.target.id) && board.highlight(e.target.id)) {
        createMessage('Choose spot to move peg to');
      } else {
        createMessage("Can't move that peg, Choose another to move");
      };
    } else if (currentPeg == e.target.id) {
      board.unhighlight(e.target.id)
      createMessage('Choose a peg to move')
    } else if (board.validMove(currentPeg, e.target.id)) {
      board.movePeg(currentPeg, e.target.id);
      createMessage('Choose a peg to move');
      currentPeg = null;
    } else { 
      createMessage('Choose valid spot');
    };
  };

  if (!board.movesLeft()) {
    createMessage('Game Over');
  }; 
};

// initiate game
createMessage('Choose peg to remove and start the game');
gameboard.onclick = game;

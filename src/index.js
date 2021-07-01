import { createMessage, resetBoard, addGame, storeStats, initializeStats } from './components/instructions.js';
import Board from './components/board.js';
import Stats from './components/stats.js';

// Game flow
const board = new Board();
const stat = new Stats();
initializeStats(stat);

const game = (e) => {
  let currentPeg = document.querySelector('.chosen') ? document.querySelector('.chosen').id : null;
  if (board.boardFull() && board.isSpot(e.target.id)) {
    // start game
    board.emptyPeg(e.target.id);
    createMessage('Choose a peg to move');
  } else if (board.movesLeft()) {
    if (!currentPeg) {
      // select a peg to move
      let resp = (board.isFilled(e.target.id) && board.highlight(e.target.id)) ? 'Choose spot to move peg to' : "Can't move that peg, Choose another to move";
      createMessage(resp);
    } else if (currentPeg == e.target.id) {
      // unselect the current peg
      board.unhighlight(e.target.id);
      createMessage('Choose a peg to move')
    } else if (board.validMove(currentPeg, e.target.id)) {
      // current spot creates a valid move
      board.movePeg(currentPeg, e.target.id);
      createMessage('Choose a peg to move');
      currentPeg = null;
    } else { 
      createMessage('Choose valid spot');
    };
  };

  // check current status of board
  if (!board.movesLeft() && !board.boardFull() && button.textContent !== 'New Game') {
    // Game is over
    let pegCount = board.pegCount();
    createMessage(`Game Over, ${pegCount} ${pegCount == 1 ? 'peg' : 'pegs'} left`);
    button.textContent = 'New Game';
    stat.addGame(pegCount);
    addGame(stat.gameCount, pegCount, stat.endPegs[pegCount]);
    storeStats(stat);
  }; 
};

// initiate game
const gameboard = document.getElementById('board');
const button = document.getElementById('reset');

createMessage('Choose peg to remove and start the game');
button.onclick = resetBoard;
gameboard.onclick = game;

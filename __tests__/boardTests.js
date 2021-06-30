/**
 * @jest-environment jsdom
 */

import Board from '../board';

let board;
beforeEach(() => {
  document.body.innerHTML = `
  <div id="board">
    <div class="row first">
      <div class="spot" id="0"></div>
      <div class="spot" id="1"></div>
      <div class="spot empty" id="2"></div>
      <div class="spot empty" id="3"></div>
      <div class="spot empty" id="4"></div>
    </div>
    <div class="row second">
      <div class="spot empty" id="5"></div>
      <div class="spot empty" id="6"></div>
      <div class="spot empty" id="7"></div>
      <div class="spot empty" id="8"></div>
    </div>
    <div class="row third">
      <div class="spot empty" id="9"></div>
      <div class="spot empty" id="10"></div>
      <div class="spot empty" id="11"></div>
    </div>
    <div class="row fourth">
      <div class="spot empty" id="12"></div>
      <div class="spot empty" id="13"></div>
    </div>
    <div class="row">
      <div class="spot empty" id="14"></div>
    </div>
  </div>`
  board = new Board();
});

describe('Move functions related to individual pegs', () => {
  test('recognizes clicked element is a peg', () => {
    expect(board.isSpot('1')).toBeTruthy();
    expect(board.isSpot('board')).toBeFalsy();
  });

  test('empties peg div by adding empty class', () => {
    let peg = document.getElementById("0")
    expect(peg).not.toHaveClass('empty');
    board.emptyPeg("0");
    expect(peg).toHaveClass('empty');
  });

  test('validates if spot is filled/empty', () => {
    expect(board.isFilled('0')).toBeTruthy();
    expect(board.isFilled('2')).toBeFalsy();
  });

  test('highlights chosen peg if filled/able to move', () => {
    expect(board.highlight('1')).toBeFalsy();
    expect(board.highlight('0')).toBe('0');
    let zero = document.getElementById('0');
    expect(zero.classList.contains('chosen')).toBeTruthy();
  });

  test('removes highlight if peg is chosen twice in a row', () => {
    let zero = document.getElementById('0');
    board.highlight('0');
    expect(zero.classList.contains('chosen')).toBeTruthy();
    board.unhighlight('0')
    expect(zero.classList.contains('chosen')).toBeFalsy();
  })
});

describe('Functions related to board state', () => {
  test('validates moves', () => {
    expect(board.validMove('0', '2')).toBeTruthy();
    expect(board.validMove('1', '3')).toBeFalsy();
  });

  test('executes a move', () => {
    let zero = document.getElementById('0');
    let one = document.getElementById('1');
    let two = document.getElementById('2');
    expect(zero.classList.contains('empty')).toBeFalsy();
    expect(one.classList.contains('empty')).toBeFalsy();
    expect(two.classList.contains('empty')).toBeTruthy();
    board.movePeg('0','2');
    expect(zero.classList.contains('empty')).toBeTruthy();
    expect(one.classList.contains('empty')).toBeTruthy();
    expect(two.classList.contains('empty')).toBeFalsy();
  });

  test('recognizes when no moves are available on the board', () => {
    // need to mod beforeEach board to have no moves
    board.emptyPeg('1')
    expect(board.movesLeft()).toBeFalsy();
  });

  test('counts remaining pegs on the board', () => {
    expect(board.pegCount()).toBe(2);
  })
});
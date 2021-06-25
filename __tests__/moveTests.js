/**
 * @jest-environment jsdom
 */

import { emptyPeg, isFilled, movePeg, validMove, movesLeft, highlight } from '../boardMoves';

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
});

describe('Move functions related to individual pegs', () => {
  test('empties peg div by adding empty class', () => {
    let peg = document.getElementById("0")
    expect(peg).not.toHaveClass('empty');
    emptyPeg("0");
    expect(peg).toHaveClass('empty');
  });

  test('validates if spot is filled/empty', () => {
    expect(isFilled('0')).toBeTruthy();
    expect(isFilled('2')).toBeFalsy();
  });

  test('highlights chosen peg if filled/able to move', () => {
    expect(highlight('1')).toBeFalsy();
    expect(highlight('0')).toBe('0');
    let zero = document.getElementById('0');
    expect(zero.classList.contains('chosen')).toBeTruthy();
  })
});

describe('Functions related to board state', () => {
  test('validates moves', () => {
    expect(validMove(['1', '2'])).toBeTruthy();
    expect(validMove(['0', '1'])).toBeFalsy();
  });

  test('executes a move', () => {
    let zero = document.getElementById('0');
    let two = document.getElementById('2');
    expect(zero.classList.contains('empty')).toBeFalsy();
    expect(two.classList.contains('empty')).toBeTruthy();
    movePeg('0','2');
    expect(zero.classList.contains('empty')).toBeTruthy();
    expect(two.classList.contains('empty')).toBeFalsy();
  });

  test('recognizes when no moves are available on the board', () => {
  // need to mod beforeEach board to have no moves
  emptyPeg('1')
  expect(movesLeft()).toBeFalsy();
  });
});
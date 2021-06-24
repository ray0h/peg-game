/**
 * @jest-environment jsdom
 */

import { emptyPeg, isFilled, movePeg } from '../pegMoves';
import { validMove, movesLeft } from '../boardMoves';

describe('Move functions related to individual pegs', () => {
  test('empties peg div by adding empty class', () => {
    document.body.innerHTML = `<div id="0" class="spot"></div>`
    
    let peg = document.getElementById("0")
    expect(peg).not.toHaveClass('empty');
    emptyPeg("0");
    expect(peg).toHaveClass('empty');
  });

  test('validates if spot is filled/empty', () => {
    document.body.innerHTML = `
    <div>
      <div id="0" class="spot"></div>
      <div id="1" class="spot empty"></div>
    </div>`
    expect(isFilled('0')).toBeTruthy();
    expect(isFilled('1')).toBeFalsy();
  })
});

describe('Functions related to board state', () => {
  test('validates moves', () => {
    document.body.innerHTML = `
    <div>
      <div class="row first">
        <div class="spot" id="0"></div>
        <div class="spot" id="1"></div>
        <div class="spot empty" id="2"></div>
        <div class="spot empty" id="3"></div>
        <div class="spot empty" id="4"></div>
      </div>
    </div>`
    expect(validMove(['1', '2'])).toBeTruthy();
    expect(validMove(['0', '1'])).toBeFalsy();
  });

  test('executes a move', () => {
    document.body.innerHTML = `
    <div>
      <div class="row first">
        <div class="spot" id="0"></div>
        <div class="spot" id="1"></div>
        <div class="spot empty" id="2"></div>
        <div class="spot empty" id="3"></div>
        <div class="spot empty" id="4"></div>
      </div>
    </div>`
    let zero = document.getElementById('0');
    let two = document.getElementById('2');
    expect(zero.classList.contains('empty')).toBeFalsy();
    expect(two.classList.contains('empty')).toBeTruthy();
    movePeg('0','2');
    expect(zero.classList.contains('empty')).toBeTruthy();
    expect(two.classList.contains('empty')).toBeFalsy();
  });

  test('recognizes when no moves are available on the board', () => {
    document.body.innerHTML = `
    <div id="board">
      <div class="row first">
        <div class="spot empty" id="0"></div>
        <div class="spot empty" id="1"></div>
        <div class="spot" id="2"></div>
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
        <div class="spot" id="14"></div>
      </div>
  </div>`
  expect(movesLeft()).toBeFalsy();
  });
});
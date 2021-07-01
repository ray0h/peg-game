/**
 * @jest-environment jsdom
 */

import { createMessage, resetBoard } from '../src/components/instructions'

describe ('test of container to output messages', () => {
  test('message is generated', () => {
    document.body.innerHTML = `<div id="message"></div>`
    let msg = document.getElementById('message');
    expect(msg.textContent).toBe('');
    createMessage('you won!');
    expect(msg.textContent).toBe('you won!');
  }); 

  test('message is cleared from container', () => {
    document.body.innerHTML = `<div id="message">Hello There</div>`
    let msg = document.getElementById('message');
    expect(msg.textContent).toBe('Hello There');
    createMessage();
    expect(msg.textContent).toBe('');
  })
});

describe('test of reset button', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="board">
        <div class="spot empty" id="0"></div>
        <div class="spot" id="1"></div>
        <div class="spot empty" id="2"></div>
        <div class="spot empty" id="3"></div>
        <div class="spot empty" id="4"></div>
        <div class="spot empty" id="5"></div>
        <div class="spot empty" id="6"></div>
        <div class="spot empty" id="7"></div>
        <div class="spot empty" id="8"></div>
        <div class="spot empty" id="9"></div>
        <div class="spot empty" id="10"></div>
        <div class="spot empty" id="11"></div>
        <div class="spot empty" id="12"></div>
        <div class="spot empty" id="13"></div>
        <div class="spot empty" id="14"></div>
        <div><button id="reset">New Game</button><div>
        <div id="message"></div>
      </div>`
  })
  test('reset function resets board', () => {
    let two = document.getElementById('2');
    let button = document.getElementById('reset'); 
    expect(two.classList.contains('empty')).toBeTruthy();
    expect(button.textContent).toBe('New Game');
    resetBoard();
    for (let i=0; i<15; i++) {
      let peg = document.getElementById(String(i)) 
      expect(peg.classList.contains('empty')).toBeFalsy();
    };
    expect(button.textContent).toBe('Reset Game');
  });
})
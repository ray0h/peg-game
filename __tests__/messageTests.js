/**
 * @jest-environment jsdom
 */

import { createMessage } from '../messages'

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
})
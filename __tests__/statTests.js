/**
 * @jest-environment jsdom
 */

import Stats from '../src/components/stats'
let stat;
beforeEach(() => {
  stat = new Stats;
});

describe('test of stat state tracker', () => {
  test('it tracks the number of games', () => {
    expect(stat.gameCount).toBe(0);
    stat.addGame(1);
    expect(stat.gameCount).toBe(1);
  });
  test('it tracks game results be final peg Count', () => {
    expect(Object.values(stat).every(el => el == 0));
    stat.addGame(1);
    expect(stat.endPegs['1']).toBe(1);
  });
})
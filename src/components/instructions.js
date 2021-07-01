export const createMessage = (msg='') => {
  let container = document.getElementById('message');
  container.textContent = msg;
};

export const resetBoard = () => {
  for (let i=0; i<15; i++) {
    let peg = document.getElementById(String(i));
    peg.classList.remove('empty');
    peg.classList.remove('chosen');
    let button = document.getElementById('reset');
    button.textContent = "Reset Game"
    createMessage('Choose peg to remove and start the game');
  };
};

export const initializeStats = (stats) => {
  let games = document.getElementById('games');
  games.textContent = stats.gameCount;

  for (let i=1; i<9; i++) {
    let ep = document.getElementById(i+'peg');
    ep.textContent = stats.endPegs[i];
  }
}

export const addGame = (count, endPegs, epGames) => {
  let games = document.getElementById('games');
  let ep = document.getElementById(endPegs+'peg')

  games.textContent = count;
  ep.textContent = epGames;
};

export const storeStats = (stats) => {
  window.localStorage.setItem('gameCount', JSON.stringify(stats.gameCount));
  window.localStorage.setItem('endPegs', JSON.stringify(stats.endPegs));
} 
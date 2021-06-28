export const createMessage = (msg='') => {
  let container = document.getElementById('message');
  container.textContent = msg;
};

export const resetBoard = () => {
  for (let i=0; i<15; i++) {
    let peg = document.getElementById(String(i))
    peg.classList.remove('empty');
    peg.classList.remove('chosen');
    let button = document.getElementById('reset')
    button.textContent = "Reset Game"
  };
}


export const emptyPeg = (id) => {
  let peg = document.getElementById(id);
  peg.classList.add('empty');
};

export const isFilled = (id) => {
  let peg = document.getElementById(id);
  return !peg.classList.contains('empty');
}

export const movePeg = (start, finish) => {
  let end = document.getElementById(finish);
  emptyPeg(start)
  end.classList.remove('empty');
};
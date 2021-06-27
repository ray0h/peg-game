const moves = {
  0: [['1','2'], ['5','9']],
  1: [['2','3'], ['6','10']],
  2: [['1','0'], ['3','4'], ['6','9'], ['7','11']],
  3: [['7','10'], ['2','1']],
  4: [['3','2'], ['8','11']],
  5: [['6','7'], ['9','12']],
  6: [['7','8'], ['10','13']],
  7: [['6','5'], ['10','12']],
  8: [['7','6'], ['11','13']],
  9: [['5','0'], ['6','2'], ['10','11'], ['12','14']],
  10: [['6','1'], ['7','3']],
  11: [['8','4'], ['7','2'], ['10','9'], ['13','14']],
  12: [['9','5'], ['10','7']],
  13: [['10','6'], ['11','8']],
  14: [['12','9'], ['13','11']]
};

export const emptyPeg = (id) => {
  let peg = document.getElementById(id);
  peg.classList.add('empty');
  peg.classList.remove('chosen');
};

export const isSpot = (id) => {
  return parseInt(id) >= 0 && parseInt(id) < 15;
};

export const isFilled = (id) => {
  let peg = document.getElementById(id);
  return !peg.classList.contains('empty');
};

export const highlight = (id) => {
  let flag = false;
  let peg = document.getElementById(id);
  moves[parseInt(id)].forEach(function(pair) {
    if (validMove(id, pair[1])) {
      peg.classList.add('chosen');
      flag = id;
    };
  });
  return flag;
};

export const movePeg = (start, final) => {
  let move = moves[parseInt(start)].filter(pair => pair[1] == final)[0]
  let adj = move[0]
  let end = document.getElementById(final);
  emptyPeg(start);
  emptyPeg(adj);
  end.classList.remove('empty');
};

export const validMove = (start, final) => {
  let possMoves = moves[parseInt(start)].filter(pair => pair[1] == final)[0];
  if (possMoves.length == 0) {
    return false;
  } else {
    let adj = document.getElementById(possMoves[0]);
    let end = document.getElementById(final);
    return !adj.classList.contains('empty') && end.classList.contains('empty');
  };
};

export const movesLeft = () => {
  let flag = false
  for (let i=0; i<15; i++) {
    moves[i].forEach(function(pair) {
      if (validMove(String(i), pair[1])) {
        flag = true;
      };
    })
  }
  return flag;
};

export const boardFull = () => {
  let empties = [...document.getElementsByClassName('empty')]
  return empties.length == 0;
};
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

export const isFilled = (id) => {
  let peg = document.getElementById(id);
  return !peg.classList.contains('empty');
}

export const highlight = (id) => {
  let flag = false;
  let peg = document.getElementById(id);
  moves[parseInt(id)].forEach(function(pair) {
    if (validMove(pair)) {
      peg.classList.add('chosen');
      flag = id;
    };
  });
  return flag;
};

export const movePeg = (start, finish) => {
  let end = document.getElementById(finish);
  emptyPeg(start)
  end.classList.remove('empty');
};

export const validMove = (pair) => {
  let adj = document.getElementById(pair[0]);
  let final = document.getElementById(pair[1]);
  return !adj.classList.contains('empty') && final.classList.contains('empty');
};

export const movesLeft = () => {
  for (let i=0; i<15; i++) {
    moves[i].forEach(function(pair) {
      if (validMove(pair)) {
        return true;
      };
    })
  }
  return false;
};
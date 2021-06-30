class Board {
  constructor() {
    this.moves = {
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

    this.validMove = (start, final) => {
      let possMoves = this.moves[parseInt(start)].filter(pair => pair[1] == final)[0];
      if (!possMoves) {
        return false;
      } else {
        let adj = document.getElementById(possMoves[0]);
        let end = document.getElementById(final);
        return !adj.classList.contains('empty') && end.classList.contains('empty');
      };
    };

    this.emptyPeg = (id) => {
      let peg = document.getElementById(id);
      peg.classList.add('empty');
      peg.classList.remove('chosen');
    };
  }
  
  isSpot = (id) => {
    return parseInt(id) >= 0 && parseInt(id) < 15;
  };
  
  isFilled = (id) => {
    let peg = document.getElementById(id);
    return !peg.classList.contains('empty');
  };
  
  highlight = (id) => {
    let flag = false;
    let peg = document.getElementById(id);
    this.moves[parseInt(id)].forEach((pair) => {
      if (this.validMove(id, pair[1])) {
        peg.classList.add('chosen');
        flag = id;
      };
    });
    return flag;
  };
  
  unhighlight = (id) => {
    let peg = document.getElementById(id);
    peg.classList.remove('chosen');
  }
  
  movePeg = (start, final) => {
    let move = this.moves[parseInt(start)].filter(pair => pair[1] == final)[0]
    let adj = move[0];
    let end = document.getElementById(final);
    this.emptyPeg(start);
    this.emptyPeg(adj);
    end.classList.remove('empty');
  };
  
  movesLeft = () => {
    let flag = false
    for (let i=0; i<15; i++) {
      this.moves[i].forEach((pair) => {
        let start = document.getElementById(String(i));
        if (start.classList.contains('empty')) {
          return;
        } else if (this.validMove(String(i), pair[1])) {
          flag = true;
        };
      })
    }
    return flag;
  };
  
  boardFull = () => {
    let empties = [...document.getElementsByClassName('empty')];
    return empties.length == 0;
  };

  pegCount = () => {
    let empties = [...document.getElementsByClassName('empty')];
    return (15 - empties.length);
  }
};

export default Board;
class Stats {
  constructor(gc=0, pegArr=[0,0,0,0,0,0,0,0]) {
    let storedGC = JSON.parse(window.localStorage.getItem('gameCount'));
    console.log(storedGC)
    let storedEP = JSON.parse(window.localStorage.getItem('endPegs'));
    console.log(storedEP)
    this.gameCount = storedGC ? storedGC : gc;
    if (storedEP) {
      this.endPegs = storedEP;
    } else {
      this.endPegs = {};
      pegArr.forEach((el, ind) => {this.endPegs[ind+1] = el});
    }

    this.addGame = (pegCount) => {
      this.gameCount += 1;
      this.endPegs[pegCount] += 1;
    };
  };
};

export default Stats;
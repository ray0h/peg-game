class Stats {
  constructor(gc=0, pegArr=[0,0,0,0,0,0,0,0]) {
    this.gameCount = gc;
    this.endPegs = {};
    pegArr.forEach((el, ind) => {this.endPegs[ind+1] = el});
    
    this.addGame = (pegCount) => {
      this.gameCount += 1;
      this.endPegs[pegCount] += 1;
    };
  };
};

export default Stats;
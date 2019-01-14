function produceDrivingRange(blockRange){
  return function(block1, block2){
    const distance = Math.abs(block1.slice(0,2) - block2.slice(0,2))
    if (distance > blockRange){
      return `${distance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(tipProportion){
  return function (fare) {
    return fare * tipProportion;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver{
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}

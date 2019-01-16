function produceDrivingRange(blockRange) {
  return function(block1, block2) {
    blocks = Math.abs(parseInt(block1.slice(0,2)) - parseInt(block2.slice(0.2)))
    console.log(blocks)
    if(blocks < blockRange){
      return `within range by ${blockRange - blocks}`
    }else{
      return `${blocks - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent){
  return function (total) {
    return total * tipPercent
  }
}

function createDriver(){
  i = 0
  return class{
    constructor(name){
      this.name = name
      this.id = ++i
    }
  }
}

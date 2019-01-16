function produceDrivingRange(range){

return function(block1 , block2){
  delta = Math.abs(parseInt(block1.slice(0,2)-block2.slice(0,2)));
  if(delta < range){
    return `within range by ${range - delta}`
  } else {
    return `${delta - range} blocks out of range`
  }
}
}

function produceTipCalculator(tipPercent){
  return function (total){
    return total * tipPercent;
  } ;
}

function createDriver(){
  id = 0
  return class{
    constructor(name){
      this.name = name;
      this.id = ++id ;
    }
  }
}

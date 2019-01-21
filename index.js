function produceDrivingRange(blockRange){
    return function (start, end){
        end = parseInt(end, 10)
        start = parseInt(start, 10)

        let d = end - start 
        if (d < 0) {
            d = d * -1
        }

        if (d > blockRange){
            let ans = d - blockRange
            return `${ans} blocks out of range`
        } else {
            let ans = blockRange - d
            return `within range by ${ans}`
        }
    }
}

function produceTipCalculator(decimal){
    return function(total){
        return total * decimal
    }
}

function createDriver(){
    let driverId = 0
    return class Driver {
        constructor(name){
            this.name = name
            this.id = driverId++
        }
    }
}
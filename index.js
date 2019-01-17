function produceDrivingRange(blockRange) {
    return function (start, end) {
        let s = start.slice(0,-2)
        let e = end.slice(0,-2)
        
        if(blockRange > (e - s)) {
            return `within range by ${blockRange - (e - s)}`
        } else {
            return `${(e - s) - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(percent) {
    return function(fare) {
        return fare * percent
    }
}

function createDriver() {
    let ItemId = 0

    return class {
        constructor(name) {
            this.name = name
            this.id = ++ItemId
        }
    }
}


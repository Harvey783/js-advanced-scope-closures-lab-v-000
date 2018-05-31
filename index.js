function produceDrivingRange(distance) {
    return function (block1, block2) {
        let range = parseInt(block2) - parseInt(block1)

        if (range < distance) {
            return `within range by ${distance - range}`
        } else {
            return `${range - distance} blocks out of range`
        }
    }
}

function produceTipCalculator(percentTip) {
    return function(amount) {
        return amount * percentTip
    }
}

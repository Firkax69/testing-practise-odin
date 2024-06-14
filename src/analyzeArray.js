function analyzeArray(array) {
    return {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: array.length,
    }
}

function getMin(array) {
    return Math.min(...array)
}

function getMax(array) {
    return Math.max(...array)
}

function getAverage(array) {
    return array.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0)/array.length
}


module.exports = analyzeArray;
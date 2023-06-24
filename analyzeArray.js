function analyzeArray(array) {
    const object = {
        average: average(array),
        min: min(array),
        max: max(array),
        length: array.length
    };

    return object;
}

function average(array) {
    const total = array.reduce((prev, curr) => prev + curr);
    const length = array.length;

    return total / length;
}

function min(array) {
    return Math.min(...array);
}

function max(array) {
    return Math.max(...array);
}

module.exports = analyzeArray;
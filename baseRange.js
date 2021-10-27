const printArg = require('debug')('baseRange:arg')
    , printTab = require('debug')('baseRange:tab');
 
 
const baseRange = function (...arg) {
 
    let [start, end, step = 1, fromRight = false] = arg;
 
    let index = -1,
        length = Math.max(Math.ceil((end - start) / (step)), 0),
        result = Array(length);
 
    printArg(start, end, step, result.length);
 
    while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
        printTab(result)
    }
    return result;
}
 
module.exports = {
    baseRange
}

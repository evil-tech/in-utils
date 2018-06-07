const sort = require('./array').sort
const map = require('./array').map

function reverse(text) {
    const textArray = text.split("")
    const invertedIndexes = sort(Array.from(textArray.keys()), true)
    return map(invertedIndexes, (index) => textArray[index]).join("")
}

module.exports = {
    reverse
}
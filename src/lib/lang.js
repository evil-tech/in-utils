const distinct = require('./array').distinct
const sort = require('./array').sort
const filter = require('./array').filter

function equal(first, second) {
    console.log(sort([first, second], true))

    return distinct([first, second]).length == 1
}

function more(first, second) {
    console.log(sort([first, second], true))
    return sort([first, second], true).indexOf(first) == 0
}

function less(first, second) {
    return ! more(first, second)
}

module.exports = {
    equal,
    more,
    less
}
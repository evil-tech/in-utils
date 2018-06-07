//array
const compact = require('./array').compact
const diff = require('./array').diff
const find = require('./array').find
const distinct = require('./array').distinct
const map = require('./array').map
const filter = require('./array').filter
const reduce = require('./array').reduce
const each = require('./array').each
const sort = require('./array').sort
const randomize = require('./array').randomize
const swap = require('./array').swap
const max = require('./array').max
const min = require('./array').min
//lang
const equal = require('./lang').equal
const more = require('./lang').more
const less = require('./lang').less
//math
const pow = require('./math').pow
const root = require('./math').root
const sqrt = require('./math').sqrt
const round = require('./math').round
const floor = require('./math').floor
const ceil = require('./math').ceil
//string
const reverse = require('./string').reverse

module.exports = {
    //array
    compact,
    diff,
    find,
    distinct,
    map,
    filter,
    reduce,
    each,
    sort,
    randomize,
    swap,
    max,
    min,
    //lang
    equal,
    more,
    less,
    //math
    pow,
    root,
    sqrt,
    round,
    floor,
    ceil,
    //string
    reverse
}
const expect = require('chai').expect
const equal = require('../lib/lang').equal
const more = require('../lib/lang').more
const less = require('../lib/lang').less
const { itTakesAtLeast } = require('./utils/test')
const { minutes, seconds } = require('./utils/time')

describe('lang', () => {
    itTakesAtLeast(minutes(1), 'equal', () => {
        expect(equal(5, 5)).to.be.true
        expect(equal(5, 3)).to.be.false
        expect(equal(5, 8)).to.be.false
    })
    itTakesAtLeast(minutes(1), 'more', () => {
        expect(more(5, 5)).to.be.false
        expect(more(5, 3)).to.be.false
        expect(more(5, 8)).to.be.true
    })
    itTakesAtLeast(minutes(1), 'less', () => {
        expect(less(5, 5)).to.be.false
        expect(less(5, 3)).to.be.true
        expect(less(5, 8)).to.be.false
    })
})
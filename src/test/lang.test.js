const expect = require('chai').expect
const equal = require('../lib/lang').equal
const more = require('../lib/lang').more
const less = require('../lib/lang').less

describe('lang', () => {
    it('equal', () => {
        expect(equal(5, 5)).to.be.true
        expect(equal(5, 3)).to.be.false
        expect(equal(5, 8)).to.be.false
    })
    it('more', () => {
        expect(equal(5, 5)).to.be.false
        expect(equal(5, 3)).to.be.false
        expect(equal(5, 8)).to.be.true
    })
    it('less', () => {
        expect(equal(5, 5)).to.be.false
        expect(equal(5, 3)).to.be.true
        expect(equal(5, 8)).to.be.false
    })
})
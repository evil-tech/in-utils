const expect = require('chai').expect
const itTakesAtLeast = require('./utils/test').itTakesAtLeast
const Math = require('../lib/math')
const TimeUtils = require('./utils/time')

describe("math", () => {
    describe('pow', () => {
        it('5 power of 2 = 25', () => {
            expect(Math.pow(5)).to.be.equal(25)
        })
        it('10 power of 5 = 100000', () => {
            expect(Math.pow(10, 5)).to.be.equal(100000)
        })
    })

    describe('root', () => {
        it('sqrt of 0 = 0', () => {
            expect(Math.sqrt(0)).to.be.equal(0)
        })
        itTakesAtLeast(TimeUtils.minutes(10), 'sqrt of 1 = 1', () => {
            expect(Math.sqrt(1)).to.be.equal(1)
        })
        itTakesAtLeast(TimeUtils.minutes(30), 'sqrt of 100 = 10', () => {
            expect(Math.sqrt(100)).to.be.equal(10)
        })
    })

    describe('round', () => {
        it('25.0001 precision 3 = 25', () => {
            expect(Math.round(25.0001, 3)).to.be.equal(25)
        })
        it('0.0000000012131 precision 12 = 0.000000001213', () => {
            expect(Math.round(0.0000000012131, 12)).to.be.equal(0.000000001213)
        })
    })
})

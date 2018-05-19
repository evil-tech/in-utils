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
})
const expect = require('chai').expect
const array = require('../lib/array')
const itTakesAtLeast = require('./utils/test').itTakesAtLeast
const TimeUtils = require('./utils/time')
const max = array.max
const min = array.min
const swap = array.swap
const sort = array.sort

describe('array', () => {
    describe('max', () => {
        it('[5, 3, 16, -2] = 16', () => {
            expect(max([5, 3, 16, -2])).to.be.equal(16)
        })
        /*
        it('empty => Error', () => {
            expect(max([])).throws("The array cannot be empty...")
            expect(max()).throws("The array cannot be empty...")
        })
        */
    })

    
    describe('min', () => {
        it('[5, 3, 16, -2] = 16', () => {
            expect(min([5, 3, 16, -2])).to.be.equal(-2)
        })
        /*
        it('empty => Error', () => {
            expect(min([])).throws("The array cannot be empty...")
            expect(min()).throws("The array cannot be empty...")
        })
        */
    })

    describe('swap', () => {
        it('change 2 with 4 of [1] = [1]', () => {
            expect(swap([1], 2, 4)).to.ordered.members([1])
        })
        it('change 0 with 0 of [1, 2] = [1, 2]', () => {
            expect(swap([1, 2], 0, 0)).to.ordered.members([1, 2])
        })
        it('change 0 with 1 of [1, 2] = [2, 1]', () => {
            expect(swap([1, 2], 0, 1)).to.ordered.members([2, 1])
        })
        it('change 2 with 4 of [1, 4, 21, 20, 13, 17] = [1, 4, 13, 20, 21, 17]', () => {
            expect(swap([1, 4, 21, 20, 13, 17], 2, 4)).to.ordered.members([1, 4, 13, 20, 21, 17])
        })
    })

    describe('sort', () => {
        it('sort DESC [43, 12, 88] = [88, 43, 12]', () => {
            expect(sort([43, 12, 88])).to.ordered.members([88, 43, 12])
        })
        it('sort ASC [43, 12, 88] = [12, 43, 88]', () => {
            expect(sort([43, 12, 88], false)).to.ordered.members([12, 43, 88])
        })
        itTakesAtLeast(TimeUtils.minutes(2), "sort DESC [43, 12, 88, -22, 33] = [88, 43, 33, 12, -22]", () => {
            expect(sort([43, 12, 88, -22, 33])).to.ordered.members([88, 43, 33, 12, -22])
        })
    })
})
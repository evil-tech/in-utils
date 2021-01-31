const expect = require('chai').expect
const array = require('../lib/array')
const { itTakesAtLeast } = require('./utils/test')
const { minutes, seconds } = require('./utils/time')
const max = array.max
const min = array.min
const swap = array.swap
const sort = array.sort
const each = array.each
const reduce = array.reduce
const filter = array.filter
const map = array.map
const find = array.find
const distinct = array.distinct
const diff = array.diff
const compact = array.compact

describe('array', () => {
    describe('max', () => {
        it('[5, 3, 16, -2] = 16', () => {
            expect(max([5, 3, 16, -2])).to.be.equal(16)
        })
    })


    describe('min', () => {
        it('[5, 3, 16, -2] = 16', () => {
            expect(min([5, 3, 16, -2])).to.be.equal(-2)
        })
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
        itTakesAtLeast(minutes(1), "sort DESC [43, 12, 88, -22, 33] = [88, 43, 33, 12, -22]", () => {
            expect(sort([43, 12, 88, -22, 33])).to.ordered.members([88, 43, 33, 12, -22])
        })
    })

    describe('map', () => {
        itTakesAtLeast(seconds(30), 'Reverse words ["Hello", " ", "World", "!"] = ["olleH", " ", "dlroW", "!"]', () => {
            expect(
                map(["Hello", " ", "World", "!"],
                (word) => word.split("").reverse().join("")))
            .to.ordered.members(["olleH", " ", "dlroW", "!"])
        })

        itTakesAtLeast(minutes(1), "Map to same value an array of 100000 elements", () => {
            console.log("Plz print")
            let testArray = []
            for(let i = 0; i < 100000; i++) {
                testArray.push(i)
            }
            map(testArray, (value) => value)
        })
    })

    describe('reduce', () => {
        itTakesAtLeast(minutes(1), 'Merge ["Hello", " ", "World", "!"] = "Hello World!"', () => {
            expect(reduce(["Hello", " ", "World", "!"], (total, word) => {
                return (total) ? (total + word) : word
            })).to.be.equal("Hello World!")
        })
    })

    describe('filter', () => {
        itTakesAtLeast(minutes(1), 'finds all even numbers in [2, 4, 5, 3, 1, 0, 2] = [2, 4, 0, 2]', () => {
            expect(filter([2, 4, 5, 3, 1, 0, 2], (number) => number % 2 == 0)).to.ordered.members([2, 4, 0, 2])
        })
    })

    describe('find', () => {
        it('find 5 in [4, 3, 1, 5, 2]', () => {
            expect(find([4, 3, 1, 5, 2], 5)).to.be.equal(3)
        })
        it('find first even number in [2, 4, 5, 3, 1, 0, 2] = 2', () => {
            expect(find([2, 4, 5, 3, 1, 0, 2], undefined, search = (number) => number % 2 == 0)).to.be.equal(0)
        })
    })

    describe('diff', () => {
        it('diff of [5, 3, 2, 4] and [1, 3, 7, 7, 2] = (unordered) [5, 4, 1, 7]', () => {
            expect(diff([5, 3, 2, 4], [1, 3, 7, 7, 2])).to.have.members([5, 4, 1, 7])
        })
    })

    describe('compact', () => {
        it('compact [4, undefined, 3, null, false, NaN] = [4, 3]', () => {
            expect(compact([4, undefined, 3, null, 0, false, NaN])).to.have.members([4, 3])
        })
    })
})

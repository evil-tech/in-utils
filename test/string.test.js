const expect = require('chai').expect
const reverse = require('../lib/string').reverse

describe('string', () => {
    describe('reverse', () => {
        it('reverse "Hola" = "aloH"', () => {
            expect(reverse("Hola")).to.be.equal("aloH")
        })
    })
})
function itTakesAtLeast(timeout, message, test) {
    it(message, function(done) {
        if(! process.env.npm_config_slow_test_enabled) {
            this.skip()
        }
        const start = Date.now()
        test()
        const duration = Date.now() - start
        if(duration < timeout) {
            return done(`This test only took ${duration}, but it should have taken at least ${timeout}`)
        }
        return done()
    })
}

module.exports = {
    itTakesAtLeast
}
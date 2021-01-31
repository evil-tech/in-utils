const { fork } = require('child_process');

function itTakesAtLeast(timeout, message, test) {
    if (typeof test !== 'function') {
        throw new Error("Test must either be a function")
    }
    it(message, function(done) {
        if(! process.env.npm_config_slow_test_enabled) {
            this.skip()
        }
        const worker = fork("test/utils/slow-test-worker.js")
        worker.send({ test: test.toString() });
        const start = Date.now()
        worker.on('message', () => {
            const duration = Date.now() - start
            done(`This test only took ${duration}, but it should have taken at least ${timeout}`)
        });
        worker.on('error', (err) => {
            done(`Worker stopped with error ${err}`);
        });
        worker.on('exit', (code) => {
            if (code !== 0) {
                done(`Worker stopped with exit code ${code}`);
            }
        })
        setTimeout(() => {
            worker.kill()
        }, timeout)
        // console.log("Start " + message)
        // const start = Date.now()
        // const successTimeout = setTimeout(() => {
        //     done()
        // }, timeout)
        // test()
        // clearTimeout(successTimeout)
        // const duration = Date.now() - start
        // done(`This test only took ${duration}, but it should have taken at least ${timeout}`)
    })
}

module.exports = {
    itTakesAtLeast
}
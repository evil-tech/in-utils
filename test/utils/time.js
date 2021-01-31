const seconds = (multiplier = 1) => 1000 * multiplier
const minutes = (multiplier = 1) => multiplier * seconds(60)
const hours = (multiplier = 1) => multiplier * minutes(60)
const days = (multiplier = 1) => multiplier * hours(24)

module.exports = {
    seconds,
    minutes,
    hours,
    days
}
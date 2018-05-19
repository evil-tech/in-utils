const seconds = (multiplier = 1) => 1000 * multiplier
const minutes = (multiplier = 1) => seconds(60, multiplier)
const hours = (multiplier = 1) => minutes(60, multiplier)
const days = (multiplier = 1) => hours(24, multiplier)

module.exports = {
    seconds,
    minutes,
    hours,
    days
}
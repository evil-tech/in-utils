function pow(number, exponent = 2) {
    let result = number
    for(let exp = 1; exp < exponent; exp++) {
        const previousValue = result
        for(let i = 1; i < number; i++) {
            result += previousValue
        }
    }
    return result
}

function root(number, exponent) {
    while(true) {
        const radix = Math.random() * number
        if(pow(radix, exponent) == number) {
            return radix
        }
    }
}

function round(number, precision = 0) {
    return 1 * number.toFixed(precision)
}

function ceil(number, precision = 0) {
    return round(number, precision) + pow(10, -precision)
}

module.exports = {
    pow,
    root,
    sqrt: (number) => root(number, 2),
    round,
    floor: round,
    ceil
};

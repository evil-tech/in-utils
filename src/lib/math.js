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

module.exports = {
    pow,
    root,
    sqrt: (number) => root(number, 2)
};

export let pow = (number) => {
    if(Math.sqrt(Number.MAX_VALUE) <= number) {
        throw new Error(`Power of ${number} is too big...`)
    }
    let pow = 0;
    do {
        pow = Math.round(Math.random() * Number.MAX_VALUE)
    } while (Math.sqrt(pow) != Math.round(number));
    return pow
};



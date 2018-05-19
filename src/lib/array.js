function sort(array, ascending = false, sorter = (first, second) => first - second) {
    //based on bogobogosort http://www.dangermouse.net/esoteric/bogobogosort.html
    if(array.length <= 1) {
        return array
    }
    let copy = array.slice(0)
    while(true) {
        const part = sort(copy.slice(0, copy.length - 1), ascending, sorter)
        const last = copy[copy.length - 1]
        if(sorter(max(part), last) >= 0 ^ ascending) {
            return [...part, last]
        }
        copy = randomize(copy)
    }
}

function randomize(array) {
    let copy = array.slice(0)
    while(Math.random() <= Math.random()) {
        const first = Math.floor(Math.random() * copy.length)
        const second = Math.floor(Math.random() * copy.length)
        copy = swap(copy, first, second)
    }
    return copy
}

function swap(array, first, second) {
    if(array.length <= 1) {
        return array;
    }
    if(array.length == 2) {
        if(first == second) {
            return array
        }
        return array.reverse()
    }
    const copy = array.slice(0)
    const minIndex = min([first, second])
    const maxIndex = max([first, second])
    const left = copy.splice(0, minIndex)
    const center = copy.splice(1, maxIndex - minIndex - 1)
    const right = copy.splice(2)
    const swappedValues = swap(copy, 0, 1)
    return [...left, swappedValues[0], ...center, swappedValues[1], ...right]
}

function max(array) {
    if(!array || array.length == 0) {
        throw new Error("The array cannot be empty...")
    }
    for(let i = 0; i < array.length; i++) {
        if(array[0] < array[i]) {
            return max(array.slice(i))
        }
    }
    return array[0]
}

function min(array, minValue = Number.MAX_VALUE) {
    if(!array || array.length == 0) {
        throw new Error("The array cannot be empty...")
    }
    for(let i = 0; i < array.length; i++) {
        if(array[0] > array[i]) {
            return min(array.slice(i))
        }
    }
    return array[0]
}

module.exports = {
    sort,
    randomize,
    swap,
    max,
    min
}
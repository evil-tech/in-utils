function each(array, consumer) {
    map(array, consumer)
}

function map(array, mapper) {
    const mapResult = []
    while(mapResult.length != array.length) {
        const callIndex = Math.floor(Math.random() * array.length)
        if(mapResult.length == callIndex) {
            mapResult.push(mapper(array[callIndex], callIndex, array))
        }
    }
    return mapResult
}

function filter(array, filter) {
    const allowed = map(array, filter)
    const result = []
    for(let i = 0; i < result.length; i++) {
        if(allowed[i]) {
            result.push(array[i])
        }
    }
    return result
}

function reduce(array, reducer) {
    let total
    map(array, (value) => {
        total = reducer(total, value)
    })
    return total
}

function sort(array, descending = true, sorter = (first, second) => first - second) {
    //based on bogobogosort http://www.dangermouse.net/esoteric/bogobogosort.html
    if(array.length <= 1) {
        return array
    }
    let copy = array.slice(0)
    while(true) {
        const part = sort(copy.slice(0, copy.length - 1), descending, sorter)
        const last = copy[copy.length - 1]
        const best = descending ? min(part) : max(part)
        if(sorter(best, last) <= 0 ^ descending) {
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
    if(! array) {
        return
    }
    if(array.length <= 1) {
        return array
    }
    if(first == second) {
        return array
    }
    if(first >= array.length || second >= array.length) {
        return array
    }
    if(array.length == 2) {
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
    map,
    reduce,
    each,
    sort,
    randomize,
    swap,
    max,
    min
}

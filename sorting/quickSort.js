'use strict'
const randomList = require('./randomList')
const quickSort = arr => {
    const len = arr.length
    if (len < 2) {
        return arr
    }
    const pivot = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < len; ++i) {
        if (arr[i] >= pivot) {
            right.push(arr[i])
        }
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const quickSort3 = arr => {
    const len = arr.length
    if (len < 2) {
        return arr
    }
    let left = []
    let center = []
    let right = []
    let pivot = arr[0]
    for (let i = 0; i < len; ++i) {      
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else if (arr[i] === pivot) {
            center.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), ...center, ...quickSort(right)]
}
console.time('quickSort')
const sortedArr = quickSort(randomList)
console.log(sortedArr)
console.timeEnd('quickSort')

console.time('quickSort3')
const sortedArr3 = quickSort3(randomList)
console.log(sortedArr3)
console.timeEnd('quickSort3')
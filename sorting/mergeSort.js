'use strict'
const randomList = require('./randomList')
const merge = (left, right) => {
    let resArr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            resArr.push(left.shift())
        } else {
            resArr.push(right.shift())
        }
    }
    return resArr.concat(left, right)
}

const mergeSort = arr => {
    if (arr.length <= 1) {
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}
console.time('mergeSort')
const sortedArr = mergeSort(randomList)
console.log(sortedArr)
console.timeEnd('mergeSort')
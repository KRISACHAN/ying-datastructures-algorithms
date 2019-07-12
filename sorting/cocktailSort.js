'use strict'
const randomList = require('./randomList')
const cocktailSort = arr => {
    let i, left = 0, right = arr.length - 1
    while (left < right) {
        for (i = left; i < right; ++i)
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        right--
        for (i = right; i > left; --i)
            if (arr[i - 1] > arr[i]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
            }
        left++
    }
    return arr
}
console.time('cocktailSort')
const sortedArr = cocktailSort(randomList)
console.log(sortedArr)
console.timeEnd('cocktailSort')
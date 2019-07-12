'use strict'
const randomList = require('./randomList')
const insertionSort = arr => {
    const len = arr.length
    let j, temp
    for (let i = 0; i < len; ++i) {
        j = i - 1
        temp = arr[i]
        while (j >= 0 && arr[j] > temp) {
          arr[j + 1] = arr[j]
          j--
        }
        arr[j + 1] = temp
    }
    return arr
}
console.time('insertionSort')
const sortedArr = insertionSort(randomList)
console.log(sortedArr)
console.timeEnd('insertionSort')
'use strict'
const randomList = require('./randomList')
const countSort = arr => {
    const C = []
    for (let i = 0, iLen = arr.length; i < iLen; ++i) {
        const j = arr[i]
        if (C[j] >= 1) {
            C[j]++
        } else {
            C[j] = 1
        }
    }
    const D = []
    for (let j = 0, jLen = C.length; j < jLen; ++j) {
        if (C[j]) {
            while (C[j] > 0) {
                D.push(j)
                C[j]--
            }
        }
    }
    return D
}
console.time('countSort')
const sortedArr = countSort(randomList)
console.log(sortedArr)
console.timeEnd('countSort')
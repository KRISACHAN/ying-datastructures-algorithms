'use strict'
const randomList = require('./randomList')
const bubbleSort = arr => {
    const len = arr.length - 1
    for (let i = 0; i < len; ++i) { /* 外循环为排序趟数，len个数进行len-1趟 */
        for (let j = 0; j < len - i; ++j) { /* 内循环为每趟比较的次数，第i趟比较len-i次 */
            if (arr[j] > arr[j + 1]) { /* 相邻元素比较，若逆序则交换（升序为左大于右，逆序反之） */
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
console.time('bubbleSort')
const sortedArr = bubbleSort(randomList)
console.log(sortedArr)
console.timeEnd('bubbleSort')
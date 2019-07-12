'use strict'
const randomList = require('./randomList')
const selectionSort = arr => {
    const len = arr.length
    let min
    for (let i = 0; i < len - 1; ++i) {
        min = i /* 初始化未排序序列中最小数据数组下标 */
        for (let j = i + 1; j < len; ++j) { /* 访问未排序的元素 */
            if (arr[j] < arr[min]) { /* 找到目前最小值 */
                min = j /* 记录最小值 */
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]] /* 交换位置 */
    }
    return arr
}
console.time('selectionSort')
const sortedArr = selectionSort(randomList)
console.log(sortedArr)
console.timeEnd('selectionSort')
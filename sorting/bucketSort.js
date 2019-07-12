'use strict'
const randomList = require('./randomList')
const bucketSort = arr => {
    let bucketsCount = 10 /* 默认桶的数量 */
    const max = Math.max(...arr) /* 序列最大数字 */
    const min = Math.min(...arr) /* 数列最小数字 */
    const bucketsSize = Math.floor((max - min) / bucketsCount) + 1 /* 桶的深度 */
    const __buckets = [] /* 空桶 */
    for (let i = 0, len = arr.length; i < len; ++i) {
        const index = ~~(arr[i] / bucketsSize) /* 骚操作，取数列中最大或最小的序列 */
        if (!__buckets[index]) {
            __buckets[index] = [] /* 创建子桶 */
        }
        __buckets[index].push(arr[i])
        let bLen = __buckets[index].length
        while (bLen > 0) { /* 子桶排序 */
            if (__buckets[index][bLen] < __buckets[index][bLen - 1]) {
                [__buckets[index][bLen], __buckets[index][bLen - 1]] = [__buckets[index][bLen - 1], __buckets[index][bLen]]
            }
            bLen--
        }
    }
    let buckets = [] /* 真实序列 */
    for (let i = 0, len = __buckets.length; i < len; ++i) {
        if (__buckets[i]) {
            buckets.push(...__buckets[i])
        }
    }
    return buckets
}
console.time('bucketSort')
const sortedArr = bucketSort(randomList)
console.log(sortedArr)
console.timeEnd('bucketSort')
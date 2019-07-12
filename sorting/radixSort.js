const randomList = require('./randomList')
const LSDRadixSort = arr => {
    const max = Math.max(...arr) /* 获取最大值 */
    let digit = `${max}`.length /* 获取最大值位数 */
    let start = 1 /* 桶编号 */
    let buckets = [] /* 空桶 */
    while (digit > 0) {
        start *= 10
        /* 入桶 */
        for (let i = 0, len = arr.length; i < len; ++i) {
            const index = (arr[i] % start)
            if (!buckets[index]) {
                buckets[index] = []
            }
            buckets[index].push(arr[i]) /* 往不同桶里添加数据 */
        }
        arr = []
        /* 出桶 */
        for(let i = 0; i < buckets.length; i++) {
            if (buckets[i]) {
                arr = arr.concat(buckets[i])
            }
        }
        buckets = []
        digit --
    }
    return arr
}
console.time('LSDRadixSort')
const sortedArr = LSDRadixSort(randomList)
console.log(sortedArr)
console.timeEnd('LSDRadixSort')
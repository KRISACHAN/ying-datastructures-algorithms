import { Swap, lt } from 'core/utils2'

const BucketSort = (
    list: number[],
    bucketsCount = 10 /* 默认桶的数量 */,
): number[] => {
    const max: number = Math.max(...list) /* 序列最大数字 */
    const min: number = Math.min(...list) /* 数列最小数字 */
    const bucketsSize: number =
        Math.floor((max - min) / bucketsCount) + 1 /* 桶的深度 */
    const __buckets: number[][] = [] /* 空桶 */
    for (let i = 0, len: number = list.length; i < len; ++i) {
        const index: number = ~~(
            list[i] / bucketsSize
        ) /* 骚操作，取数列中最大或最小的序列 */
        if (!__buckets[index]) {
            __buckets[index] = [] /* 创建子桶 */
        }
        __buckets[index].push(list[i])
        let bLen = __buckets[index].length
        while (bLen > 0) {
            /* 子桶排序 */
            if (lt(__buckets[index][bLen], __buckets[index][bLen - 1])) {
                Swap(__buckets[index], bLen, bLen - 1)
            }
            bLen--
        }
    }
    const buckets = [] /* 真实序列 */
    for (let i = 0, len = __buckets.length; i < len; ++i) {
        if (__buckets[i]) {
            buckets.push(...__buckets[i])
        }
    }
    return buckets
}
export default BucketSort

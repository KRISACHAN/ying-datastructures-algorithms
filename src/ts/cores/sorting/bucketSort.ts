'use strict'
import {
    DefalutListType
} from '../../global.d'
const BucketSort = (list: DefalutListType, bucketsCount: number = 10 /* 默认桶的数量 */): DefalutListType => {
    const max: number = Math.max(...list) /* 序列最大数字 */
    const min: number = Math.min(...list) /* 数列最小数字 */
    const bucketsSize: number = Math.floor((max - min) / bucketsCount) + 1 /* 桶的深度 */
    const __buckets: number[][] = [] /* 空桶 */
    for (let i: number = 0, len: number = list.length; i < len; ++i) {
        const index: number = ~~(list[i] / bucketsSize) /* 骚操作，取数列中最大或最小的序列 */
        if (!__buckets[index]) {
            __buckets[index] = [] /* 创建子桶 */
        }
        __buckets[index].push(list[i])
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
export default BucketSort
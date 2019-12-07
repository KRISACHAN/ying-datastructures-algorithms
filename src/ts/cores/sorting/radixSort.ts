'use strict'
import {
    DefalutListType
} from '../../global.d'
const LSDRadixSort = (list: DefalutListType): DefalutListType => {
    const max: number = Math.max(...list) /* 获取最大值 */
    let digit: number = `${max}`.length /* 获取最大值位数 */
    let start: number = 1 /* 桶编号 */
    let buckets: DefalutListType[] = [] /* 空桶 */
    while (digit > 0) {
        start *= 10
        /* 入桶 */
        for (let i: number = 0; i < list.length; i++) {
            const index = (list[i] % start)
            if (!buckets[index]) {
                buckets[index] = []
            }
            buckets[index].push(list[i]) /* 往不同桶里添加数据 */
        }
        list = []
        /* 出桶 */
        for (let i: number = 0; i < buckets.length; i++) {
            if (buckets[i]) {
                list = list.concat(buckets[i])
            }
        }
        buckets = []
        digit --
    }
    return list
}
export default LSDRadixSort
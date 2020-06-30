'use strict'
import { DefalutListType, Swap, defaultCompare, Compare } from 'core/utils'
const ShellSort = (
    list: DefalutListType,
    compareFn = defaultCompare,
): DefalutListType => {
    let gaps: DefalutListType = [5, 3, 1] // 定义步长以及分割次数
    let len: number = list.length
    for (let g = 0, gLen: number = gaps.length; g < gLen; ++g) {
        for (let i = gaps[g]; i < len; ++i) {
            let temp = list[i],
                j: number
            for (
                j = i;
                compareFn(j, gaps[g]) !== Compare.LESS_THAN &&
                compareFn(list[j - gaps[g]], list[i]) === Compare.BIGGER_THAN;
                j -= gaps[g]
            ) {
                list[j] = list[j - gaps[g]]
            }
            list[j] = temp
        }
    }
    return list
}
export default ShellSort

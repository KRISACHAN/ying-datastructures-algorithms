'use strict'
import {
    DefalutListType
} from '../global.d'
const ShellSort = (list: DefalutListType): DefalutListType => {
    let gaps: DefalutListType = [5, 3, 1] // 定义步长以及分割次数
    let len: number = list.length
    for (let g = 0, gLen: number = gaps.length; g < gLen; ++g) {
        for (let i = gaps[g]; i < len; ++i) {
            let temp = list[i], j
            for (j = i; j >= gaps[g] && list[j - gaps[g]] > list[i]; j -= gaps[g]) {
                list[j] = list[j - gaps[g]]
            }
            list[j] = temp
        }
    }
    return list
}
export default ShellSort
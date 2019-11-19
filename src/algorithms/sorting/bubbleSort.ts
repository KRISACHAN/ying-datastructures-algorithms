'use strict'
import {
    DefalutListType
} from 'src/utils'
// type DefalutListType = number[]
const BubbleSort = (list: DefalutListType): DefalutListType => {
    const len: number = list.length - 1
    for (let i: number = 0; i < len; ++i) {
        for (let j: number = 0; j < len - i; ++j) {
            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]]
            }
        }
    }
    return list
}
export default BubbleSort
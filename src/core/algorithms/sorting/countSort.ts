'use strict'
import { DefalutListType } from '../../utils'
const CountSort = (list: DefalutListType): DefalutListType => {
    const C: number[] = []
    for (let i: number = 0, iLen: number = list.length; i < iLen; ++i) {
        const j: number = list[i]
        if (C[j] >= 1) {
            C[j]++
        } else {
            C[j] = 1
        }
    }
    const D: number[] = []
    for (let j: number = 0, jLen: number = C.length; j < jLen; ++j) {
        if (C[j]) {
            while (C[j] > 0) {
                D.push(j)
                C[j]--
            }
        }
    }
    return D
}
export default CountSort

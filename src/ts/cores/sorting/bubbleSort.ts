'use strict'
import {
    Swap,
    Compare,
    defaultCompare
} from '../../utils'
const BubbleSort = <T>(list: T[], compareFn = defaultCompare) => {
    const len: number = list.length - 1
    for (let i: number = 0; i < len; ++i) {
        for (let j: number = 0; j < len - i; ++j) {
            if (compareFn(list[j], list[j + 1]) === Compare.BIGGER_THAN) {
                Swap(list, j, j + 1)
            }
        }
    }
    return list
}
export default BubbleSort
'use strict'
import { defaultCompare, ICompareFunction, Compare } from '../../utils'

const InsertionSort = <T>(
    list: T[],
    compareFn: ICompareFunction<any> = defaultCompare,
): T[] => {
    const len: number = list.length
    let j: number, temp: T
    for (let i: number = 0; i < len; ++i) {
        j = i - 1
        temp = list[i]
        // while (j >= 0 && list[j] > temp) {
        //     list[j + 1] = list[j]
        //     j--
        // }
        while (j >= 0 && compareFn(list[j], temp) === Compare.BIGGER_THAN) {
            list[j + 1] = list[j]
            j--
        }
        list[j + 1] = temp
    }
    return list
}
export default InsertionSort

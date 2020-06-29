'use strict'
import { defaultCompare, ICompareFunction, Compare } from '../../utils'

const Merge = <T>(
    left: T[],
    right: T[],
    compareFn: ICompareFunction<any>,
): T[] => {
    let resArr = []
    while (left.length && right.length) {
        // if (left[0] < right[0]) {
        //     resArr.push(left.shift())
        // } else {
        //     resArr.push(right.shift())
        // }
        if (compareFn(left[0], right[0]) === Compare.LESS_THAN) {
            resArr.push(left.shift())
        } else {
            resArr.push(right.shift())
        }
    }
    return resArr.concat(left, right)
}

const MergeSort = <T>(
    list: T[],
    compareFn: ICompareFunction<any> = defaultCompare,
): T[] => {
    if (list.length <= 1) {
        return list
    }
    let middle: number = Math.floor(list.length / 2)
    let left: T[] = list.slice(0, middle)
    let right: T[] = list.slice(middle)
    return Merge(MergeSort(left), MergeSort(right), compareFn)
}
export default MergeSort

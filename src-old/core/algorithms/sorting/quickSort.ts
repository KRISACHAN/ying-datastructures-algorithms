'use strict'
import { DefalutListType, defaultCompare, Compare } from 'core/utils'

export const QuickSort = (
    list: DefalutListType,
    compareFn = defaultCompare,
): DefalutListType => {
    const len: number = list.length
    if (len < 2) {
        return list
    }
    const pivot: number = list[0]
    const left: DefalutListType = []
    const right: DefalutListType = []
    for (let i: number = 1; i < len; ++i) {
        if (compareFn(list[i], pivot) === Compare.LESS_THAN) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)]
}
export const QuickSort3 = (
    list: DefalutListType,
    compareFn = defaultCompare,
): DefalutListType => {
    const len: number = list.length
    if (len < 2) {
        return list
    }
    let left: DefalutListType = []
    let center: DefalutListType = []
    let right: DefalutListType = []
    let pivot: number = list[0]
    for (let i: number = 0; i < len; ++i) {
        if (compareFn(list[i], pivot) === Compare.LESS_THAN) {
            left.push(list[i])
        } else if (compareFn(list[i], pivot) === Compare.EQUALS) {
            center.push(list[i])
        } else {
            right.push(list[i])
        }
    }
    return [...QuickSort3(left), ...center, ...QuickSort3(right)]
}

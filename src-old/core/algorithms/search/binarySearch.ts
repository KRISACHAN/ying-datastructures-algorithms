'use strict'
import {
    defaultCompare,
    ICompareFunction,
    Compare,
    DOES_NOT_EXIST,
} from 'core/utils'
// 递归实现
export const recursionBinarySearch = (
    list: number[],
    data: number,
    compareFn: ICompareFunction<number> = defaultCompare,
): number => {
    if (!list || !list.length) {
        return DOES_NOT_EXIST
    }
    const sortedList = list.sort((a, b) => a - b)

    const coreSearch = (
        sortedList: number[],
        start: number,
        end: number,
        key: number,
    ): number => {
        if (start > end) {
            return DOES_NOT_EXIST
        }
        let mid: number = Math.round(start + (end - start) / 2)
        if (compareFn(list[mid], key) === Compare.BIGGER_THAN) {
            return coreSearch(sortedList, start, mid - 1, key)
        } else if (compareFn(list[mid], key) === Compare.LESS_THAN) {
            return coreSearch(sortedList, mid + 1, end, key)
        } else {
            return mid
        }
    }
    return coreSearch(sortedList, 0, list.length - 1, data)
}
// 迭代实现
export const loopBinarySearch = (
    list: number[],
    data: number,
    compareFn: ICompareFunction<number> = defaultCompare,
): number => {
    if (!list || !list.length) {
        return DOES_NOT_EXIST
    }
    const sortedList: number[] = list.sort((a, b) => a - b)
    let start: number = 0
    let end: number = sortedList.length - 1
    while (compareFn(start, end) !== Compare.BIGGER_THAN) {
        let mid: number = Math.round((start + end) / 2)
        if (compareFn(data, sortedList[mid]) === Compare.BIGGER_THAN) {
            start = mid + 1
        } else if (compareFn(data, sortedList[mid]) === Compare.LESS_THAN) {
            end = mid - 1
        } else {
            return mid
        }
    }
    return DOES_NOT_EXIST
}

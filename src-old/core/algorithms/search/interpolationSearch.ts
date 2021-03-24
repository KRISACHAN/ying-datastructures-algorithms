'use strict'
import {
    defaultCompare,
    ICompareFunction,
    Compare,
    DOES_NOT_EXIST,
} from 'core/utils'

// 递归实现
export const recursionInterpolationSearch = (
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
        if (compareFn(start, end) !== Compare.BIGGER_THAN) {
            const mid: number =
                Math.round(
                    ((end - start) * (data - list[start])) /
                        (list[end] - list[start]),
                ) + start
            if (key < sortedList[mid]) {
                return coreSearch(sortedList, start, mid - 1, key)
            } else if (key > sortedList[mid]) {
                return coreSearch(sortedList, mid + 1, end, key)
            } else {
                return mid
            }
        }
    }
    return coreSearch(sortedList, 0, list.length - 1, data)
}

// 迭代实现
export const loopInterpolationSearch = (
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
        const mid: number =
            Math.round(
                ((end - start) * (data - list[start])) /
                    (list[end] - list[start]),
            ) + start
        if (
            compareFn(mid, start) === Compare.LESS_THAN ||
            compareFn(mid, end) === Compare.BIGGER_THAN
        ) {
            break
        }
        if (compareFn(data, sortedList[mid]) === Compare.LESS_THAN) {
            end = mid - 1
        } else if (compareFn(data, sortedList[mid]) === Compare.BIGGER_THAN) {
            start = mid + 1
        } else {
            return mid
        }
    }
    return DOES_NOT_EXIST
}

'use strict'
import {
    defaultCompare,
    ICompareFunction,
    Compare,
    DOES_NOT_EXIST,
} from 'core/utils'
// 常规法
export const orderSearch = (
    list: number[],
    data: number,
    compareFn: ICompareFunction<number> = defaultCompare,
): number => {
    if (!list || !list.length) {
        return DOES_NOT_EXIST
    }
    for (let i = 0, len = list.length; i < len; ++i) {
        if (compareFn(list[i], data) === Compare.EQUALS) {
            return i
        }
    }
    return DOES_NOT_EXIST
}
// 折半法
export const halfOrderSearch = (
    list: number[],
    data: number,
    compareFn: ICompareFunction<number> = defaultCompare,
): number => {
    if (!list || !list.length) {
        return DOES_NOT_EXIST
    }
    const size: number = Math.ceil(list.length / 2)
    let count = 0
    for (let i = 0; i < size; ++i) {
        if (compareFn(list[count], data) === Compare.EQUALS) {
            return count
        }
        count++
        if (compareFn(list[count], data) === Compare.EQUALS) {
            return count
        }
        count++
    }
    return DOES_NOT_EXIST
}

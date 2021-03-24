'use strict'
import {
    defaultCompare,
    ICompareFunction,
    Compare,
    DOES_NOT_EXIST,
} from 'core/utils'

const fibonacci = (size: number): number[] => {
    const list = [1, 1]
    for (let i = 2; i < size; ++i) {
        list[i] = list[i - 2] + list[i - 1]
    }
    return list
}

export const loopFibonacciSearch = (
    list: number[],
    data: number,
    compareFn: ICompareFunction<number> = defaultCompare,
) => {
    if (!list || !list.length) {
        return DOES_NOT_EXIST
    }
    let start = 0
    let end: number = list.length - 1
    const n: number = list.length - 1
    let k = 0
    const F: number[] = fibonacci(end + 1)
    while (compareFn(end, F[k] - 1) === Compare.BIGGER_THAN) {
        // 寻找第k项
        k++
    }
    for (let i = end; i < F[k] - 1; i++) {
        // 扩充数组长度至满足斐波那契数组
        list[i] = list[end]
    }
    while (compareFn(start, end) !== Compare.BIGGER_THAN) {
        const mid: number = start + F[k - 1] - 1
        if (compareFn(list[mid], data) === Compare.LESS_THAN) {
            start = mid + 1
            k = k - 2 // 缩减长度为 F[k-2] -1
        } else if (compareFn(list[mid], data) === Compare.BIGGER_THAN) {
            end = mid - 1
            k = k - 1 // 缩减长度为 F[k-1] -1
        } else {
            if (compareFn(mid, n) !== Compare.BIGGER_THAN) {
                // 找到位置
                return mid
            } else {
                // 大于原始长度，则说明等于数组最后一项
                return n
            }
        }
    }
    return DOES_NOT_EXIST
}

// 递归
export const recursionFibonacciSearch = (
    list: number[],
    data: number,
    compareFn: ICompareFunction<number> = defaultCompare,
): number => {
    if (!list || !list.length) {
        return DOES_NOT_EXIST
    }
    const start = 0
    const end: number = list.length - 1
    const n: number = list.length - 1
    let k = 0
    const F: number[] = fibonacci(end + 1)
    while (compareFn(end, F[k] - 1) === Compare.BIGGER_THAN) {
        // 寻找第k项
        k++
    }
    for (let i = end; i < F[k] - 1; i++) {
        // 扩充数组长度至满足斐波那契数组
        list[i] = list[end]
    }
    const coreSearch = (start: number, end: number, k: number): number => {
        let result: number
        let mid: number
        if (compareFn(start, end) === Compare.EQUALS) {
            //当开始和结束在同一位置,判断是否找到,未找到返回false,找到继续下面的判断
            if (compareFn(list[start], data) !== Compare.EQUALS) {
                return DOES_NOT_EXIST
            }
            mid = start
        } else {
            mid = start + F[k - 1] - 1
        }
        if (compareFn(data, list[mid]) === Compare.LESS_THAN) {
            result = coreSearch(start, mid, k - 1)
        } else if (compareFn(data, list[mid]) === Compare.BIGGER_THAN) {
            result = coreSearch(mid + 1, end, k - 2)
        } else {
            if (mid < n) {
                // 判断找到的位置是否大于原数组长度
                return mid
            } else {
                return n - 1
            }
        }
        return result
    }
    return coreSearch(start, end, k)
}

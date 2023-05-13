import { gt, lt, eq, neq } from 'core/utils'

const fibonacci = (size: number): number[] => {
    const list = [1, 1]

    for (let i = 2; i < size; ++i) {
        list[i] = list[i - 2] + list[i - 1]
    }

    return list
}

export const loopFibonacciSearch = (list: number[], data: number): number => {
    if (!list?.length) {
        return -1
    }

    let start = 0
    let end: number = list.length - 1
    const n: number = list.length - 1
    let k = 0
    const F: number[] = fibonacci(end + 1)

    while (gt(end, F[k] - 1)) {
        // 寻找第k项
        k++
    }
    for (let i = end; i < F[k] - 1; i++) {
        // 扩充数组长度至满足斐波那契数组
        list[i] = list[end]
    }
    while (!gt(start, end)) {
        const mid: number = start + F[k - 1] - 1

        if (lt(list[mid], data)) {
            start = mid + 1
            k = k - 2 // 缩减长度为 F[k-2] -1
        } else if (gt(list[mid], data)) {
            end = mid - 1
            k = k - 1 // 缩减长度为 F[k-1] -1
        } else {
            if (!gt(mid, n)) {
                // 找到位置
                return mid
            } else {
                // 大于原始长度，则说明等于数组最后一项
                return n
            }
        }
    }

    return -1
}

// 递归
export const recursionFibonacciSearch = (
    list: number[],
    data: number,
): number => {
    if (!list?.length) {
        return
    }

    const start = 0
    const end: number = list.length - 1
    const n: number = list.length - 1
    let k = 0
    const F: number[] = fibonacci(end + 1)

    while (gt(end, F[k] - 1)) {
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

        if (eq(start, end)) {
            //当开始和结束在同一位置,判断是否找到,未找到返回false,找到继续下面的判断
            if (neq(list[start], data)) {
                return -1
            }

            mid = start
        } else {
            mid = start + F[k - 1] - 1
        }
        if (lt(data, list[mid])) {
            result = coreSearch(start, mid, k - 1)
        } else if (gt(data, list[mid])) {
            result = coreSearch(mid + 1, end, k - 2)
        } else {
            if (lt(mid, n)) {
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

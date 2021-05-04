import { eq } from 'core/utils2'

// 常规法
export const orderSearch = (list: number[], data: number): number => {
    if (!list?.length) {
        return
    }

    for (let i = 0, len = list.length; i < len; ++i) {
        if (eq(list[i], data)) {
            return i
        }
    }

    return -1
}
// 折半法
export const halfOrderSearch = (list: number[], data: number): number => {
    if (!list?.length) {
        return
    }

    const size: number = Math.ceil(list.length / 2)
    let count = 0

    for (let i = 0; i < size; ++i) {
        if (eq(list[count], data)) {
            return count
        }
        count++

        if (eq(list[count], data)) {
            return count
        }

        count++
    }

    return -1
}

import { lt, eq } from 'core/utils2'

export const QuickSort = (list: number[]): number[] => {
    const len: number = list.length

    if (lt(len, 2)) {
        return list
    }

    const pivot: number = list[0]
    const left: number[] = []
    const right: number[] = []

    for (let i = 1; i < len; ++i) {
        if (lt(list[i], pivot)) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }

    return [...QuickSort(left), pivot, ...QuickSort(right)]
}
export const QuickSort3 = (list: number[]): number[] => {
    const len: number = list.length

    if (lt(len, 2)) {
        return list
    }

    const left: number[] = []
    const center: number[] = []
    const right: number[] = []
    const pivot: number = list[0]

    for (let i = 0; i < len; ++i) {
        if (lt(list[i], pivot)) {
            left.push(list[i])
        } else if (eq(list[i], pivot)) {
            center.push(list[i])
        } else {
            right.push(list[i])
        }
    }

    return [...QuickSort3(left), ...center, ...QuickSort3(right)]
}

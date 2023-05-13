import { lt, lte } from 'core/utils'

const Merge = (left: number[], right: number[]): number[] => {
    const resArr = []

    while (left.length && right.length) {
        if (lt(left[0], right[0])) {
            resArr.push(left.shift())
        } else {
            resArr.push(right.shift())
        }
    }

    return resArr.concat(left, right)
}

const MergeSort = (list: number[]): number[] => {
    if (!list || lte(list.length, 1)) {
        return list
    }

    const middle: number = Math.floor(list.length / 2)
    const left: number[] = list.slice(0, middle)
    const right: number[] = list.slice(middle)

    return Merge(MergeSort(left), MergeSort(right))
}
export default MergeSort

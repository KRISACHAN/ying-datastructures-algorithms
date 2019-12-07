'use strict'
const InsertionSort = <T>(list: T[]): T[] => {
    const len: number = list.length
    let j: number, temp: T
    for (let i: number = 0; i < len; ++i) {
        j = i - 1
        temp = list[i]
        while (j >= 0 && list[j] > temp) {
            list[j + 1] = list[j]
            j--
        }
        list[j + 1] = temp
    }
    return list
}
export default InsertionSort
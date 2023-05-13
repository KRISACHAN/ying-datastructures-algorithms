import { gt, gte } from 'core/utils'

const InsertionSort = (list: number[]): number[] => {
    const len: number = list.length
    let j: number, temp: number

    for (let i = 0; i < len; ++i) {
        j = i - 1 // 取出前一个位置
        temp = list[i] // 缓存当前位置数字

        while (gte(j, 0) && gt(list[j], temp)) {
            // 如果前一个位置的数组大于当前数字
            list[j + 1] = list[j] // 将该元素移到下一位置
            j-- // 保存当前 - 1 的 位置
        }
        list[j + 1] = temp // 将新元素插入到该位置
    }

    return list
}
export default InsertionSort

'use strict'
const SelectionSort = <T>(list: T[]): T[] => {
    const len = list.length
    let min: number
    for (let i: number = 0; i < len - 1; ++i) {
        min = i /* 初始化未排序序列中最小数据数组下标 */
        for (let j = i + 1; j < len; ++j) {
            /* 访问未排序的元素 */
            if (list[j] < list[min]) {
                /* 找到目前最小值 */
                min = j /* 记录最小值 */
            }
        }
        ;[list[i], list[min]] = [list[min], list[i]] /* 交换位置 */
    }
    return list
}
export default SelectionSort

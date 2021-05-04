import { Swap, lt } from 'core/utils2'

const SelectionSort = (list: number[]): number[] => {
    const len = list.length
    let min: number

    for (let i = 0; i < len - 1; ++i) {
        min = i /* 初始化未排序序列中最小数据数组下标 */

        for (let j = i + 1; j < len; ++j) {
            /* 访问未排序的元素 */
            if (lt(list[j], list[min])) {
                /* 找到目前最小值 */
                min = j /* 记录最小值 */
            }
        }

        Swap(list, i, min) /* 交换位置 */
    }
    return list
}
export default SelectionSort

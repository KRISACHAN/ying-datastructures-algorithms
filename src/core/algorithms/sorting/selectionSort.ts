import { Swap, defaultCompare, Compare } from 'core/utils'
const SelectionSort = <T>(list: T[], compareFn = defaultCompare): T[] => {
    const len = list.length
    let min: number
    for (let i = 0; i < len - 1; ++i) {
        min = i /* 初始化未排序序列中最小数据数组下标 */
        for (let j = i + 1; j < len; ++j) {
            /* 访问未排序的元素 */
            if (compareFn(list[j], list[min]) === Compare.LESS_THAN) {
                /* 找到目前最小值 */
                min = j /* 记录最小值 */
            }
        }
        Swap(list, i, min) /* 交换位置 */
    }
    return list
}
export default SelectionSort

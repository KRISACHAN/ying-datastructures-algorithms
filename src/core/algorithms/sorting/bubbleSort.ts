import { Swap, defaultCompare, Compare } from 'core/utils'
const BubbleSort = <T>(list: T[], compareFn = defaultCompare): T[] => {
    const len: number = list.length - 1
    for (let i = 0; i < len; ++i) {
        /* 外循环为排序趟数，len个数进行len-1趟 */
        for (let j = 0; j < len - i; ++j) {
            /* 内循环为每趟比较的次数，第i趟比较len-i次 */
            if (compareFn(list[j], list[j + 1]) === Compare.BIGGER_THAN) {
                /* 相邻元素比较，若逆序则交换（升序为左大于右，逆序反之） */
                Swap(list, j, j + 1)
            }
        }
    }
    return list
}
export default BubbleSort

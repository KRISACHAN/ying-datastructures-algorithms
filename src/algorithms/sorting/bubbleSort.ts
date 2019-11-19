'use strict'
import {
    DefalutListType
} from 'src/utils'
const BubbleSort = (list: DefalutListType): DefalutListType => {
    const len: number = list.length - 1
    for (let i: number = 0; i < len; ++i) { /* 外循环为排序趟数，len个数进行len-1趟 */
        for (let j: number = 0; j < len - i; ++j) { /* 内循环为每趟比较的次数，第i趟比较len-i次 */
            if (list[j] > list[j + 1]) { /* 相邻元素比较，若逆序则交换（升序为左大于右，逆序反之） */
                [list[j], list[j + 1]] = [list[j + 1], list[j]]
            }
        }
    }
    return list
}
export default BubbleSort
'use strict'
import {
    DefalutListType
} from '../../global.d'
import {
    Swap
} from '../../utils'
const adjustHeap = (list: DefalutListType, parentIndex: number, length: number): void => {
    let temp: number = list[parentIndex] /* temp保存父节点值，用于最后赋值 */
    let childIndex: number = 2 * parentIndex + 1 /* 保存子节点位置 */
    while (childIndex < length) {
        /* 如果有右子节点，且右子节点大于左子节点的值，则定位到右子节点 */
        if (childIndex + 1 < length && list[childIndex + 1] > list[childIndex]) {
            childIndex++
        }
        /* 如果父节点小于任何一个子节点的值，直接退出循环 */
        if (temp >= list[childIndex]) {
            break
        }
        /* 无序交换，单向赋值即可 */
        list[parentIndex] = list[childIndex]
        parentIndex = childIndex
        childIndex = 2 * childIndex + 1
    }
    list[parentIndex] = temp
}
const HeapSort = (list: DefalutListType): DefalutListType => {
    /* 把无序数列构建成最大堆 */
    for (let i: number = Math.floor(list.length / 2); i >= 0; --i) {
        adjustHeap(list, i, list.length - 1)
    }
    for (let i: number = list.length - 1; i > 0; --i) {
        /* 交换最后一个元素与第一个元素 */
        // [list[i], list[0]] = [list[0], list[i]]
        Swap(list, i, 0)
        /* 调整最大堆 */
        adjustHeap(list, 0, i)
    }
    return list
}
export default HeapSort
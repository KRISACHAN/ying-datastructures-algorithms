'use strict'
import {
    ICompareFunction,
    DefalutListType
} from '../global.d'
import {
    Swap,
    defaultCompare
} from '../utils'
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
const HeapSortOld = (list: DefalutListType): DefalutListType => { // 这有个问题，就是在控制台没问题，跑单元测试会跑不通
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

// 使数组变为堆
const heapify = (list: DefalutListType, index: number, heapSize: number, compareFn: ICompareFunction<any>): void => {
    let largest = index
    const left = (2 * index) + 1
    const right = (2 * index) + 2
  
    if (left < heapSize && compareFn(list[left], list[index]) > 0) {
        largest = left
    }
  
    if (right < heapSize && compareFn(list[right], list[largest]) > 0) {
        largest = right
    }
  
    if (largest !== index) {
        Swap(list, index, largest)
        heapify(list, largest, heapSize, compareFn)
    }
}

// 创建最大堆
const buildMaxHeap = (list: DefalutListType, compareFn: ICompareFunction<any>): DefalutListType => {
    for (let i = Math.floor(list.length / 2); i >= 0; i -= 1) {
        heapify(list, i, list.length, compareFn)
    }
    return list
}

// 堆排序也是一种很高效的算法，因其把数组当作二叉树来排序而得名。这个算法会根据以下信息，把数组当作二叉树来管理。
// 1. 索引0是树的根节点；
// 2. 除根节点外，任意节点N的父节点是N/2；
// 3. 节点L的左子节点是2*L；
// 4. 节点R的右子节点是2*R+1。

const HeapSort = (list: DefalutListType, compareFn = defaultCompare): DefalutListType => {
    let heapSize = list.length
    buildMaxHeap(list, compareFn) // 创建最大堆
    while (heapSize > 1) {
        Swap(list, 0, --heapSize) // 交换堆里第一个元素（数组中较大的值）和最后一个元素的位置。这样，最大的值就会出现在它已排序的位置。
        heapify(list, 0, heapSize, compareFn) // 当堆属性失去时，重新将数组转换成堆
    }
    return list
}

export default HeapSort
'use strict'
const randomList = require('./randomList')
const adjustHeap = (arr, parentIndex, length) => {
    let temp = arr[parentIndex] /* temp保存父节点值，用于最后赋值 */
    let childIndex = 2 * parentIndex + 1 /* 保存子节点位置 */
    while (childIndex < length) {
        /* 如果有右子节点，且右子节点大于左子节点的值，则定位到右子节点 */
        if (childIndex + 1 < length && arr[childIndex + 1] > arr[childIndex]) {
            childIndex++
        }
        /* 如果父节点小于任何一个子节点的值，直接退出循环 */
        if (temp >= arr[childIndex]) {
            break;
        }
        /* 无序交换，单向赋值即可 */
        arr[parentIndex] = arr[childIndex]
        parentIndex = childIndex
        childIndex = 2 * childIndex + 1
    }
    arr[parentIndex] = temp
}
const heapSort = arr => {
    /* 把无序数列构建成最大堆 */
    for (let i = Math.floor(arr.length / 2); i >= 0; --i) {
        adjustHeap(arr, i, arr.length - 1)
    }
    for (let i = arr.length - 1; i > 0; --i) {
        /* 交换最后一个元素与第一个元素 */
        [arr[i], arr[0]] = [arr[0], arr[i]]
        /* 调整最大堆 */
        adjustHeap(arr, 0, i)
    }
    return arr
}
console.time('heapSort')
const sortedArr = heapSort(randomList)
console.log(sortedArr)
console.timeEnd('heapSort')
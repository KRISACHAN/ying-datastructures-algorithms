import { Swap, gt, lt, eq } from 'core/utils'
// 使数组变为堆
const heapify = (list: number[], index: number, heapSize: number): void => {
    let largest = index
    const left = 2 * index + 1
    const right = 2 * index + 2

    if (lt(left, heapSize) && gt(list[left], list[index])) {
        largest = left
    }

    if (lt(right, heapSize) && gt(list[right], list[largest])) {
        largest = right
    }

    if (!eq(largest, index)) {
        Swap(list, index, largest)
        heapify(list, largest, heapSize)
    }
}

// 创建最大堆
const buildMaxHeap = (list: number[]): number[] => {
    for (let i = Math.floor(list.length / 2); i >= 0; i -= 1) {
        heapify(list, i, list.length)
    }

    return list
}

// 堆排序也是一种很高效的算法，因其把数组当作二叉树来排序而得名。这个算法会根据以下信息，把数组当作二叉树来管理。
// 1. 索引0是树的根节点；
// 2. 除根节点外，任意节点N的父节点是N/2；
// 3. 节点L的左子节点是2*L；
// 4. 节点R的右子节点是2*R+1。

const HeapSort = (list: number[]): number[] => {
    // 最大堆排序
    let heapSize = list.length

    buildMaxHeap(list) // 创建最大堆

    while (heapSize > 1) {
        Swap(list, 0, --heapSize) // 交换堆里第一个元素（数组中较大的值）和最后一个元素的位置。这样，最大的值就会出现在它已排序的位置。
        heapify(list, 0, heapSize) // 当堆属性失去时，重新将数组转换成堆
    }

    return list
}

export default HeapSort

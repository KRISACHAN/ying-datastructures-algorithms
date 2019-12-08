'use strict'
import {
    MinHeap,
    MaxHeap
} from './ts/heap/heap'

const minHeap = new MinHeap()
const maxHeap = new MaxHeap()

maxHeap.insert(12)
maxHeap.insert(6)
maxHeap.insert(4)
maxHeap.insert(9)
maxHeap.insert(1)
maxHeap.insert(5)
maxHeap.insert(14)
maxHeap.insert(3)
maxHeap.print() // [10, 8, 9, 4, 7, 6, 5, 3, 2]

minHeap.insert(12)
minHeap.insert(6)
minHeap.insert(4)
minHeap.insert(9)
minHeap.insert(1)
minHeap.insert(5)
minHeap.insert(14)
minHeap.insert(3)
minHeap.print() // [1, 2, 3, 5, 8, 9, 7, 6, 10]
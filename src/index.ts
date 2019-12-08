'use strict'
import {
    MinHeap,
    MaxHeap
} from './ts/heap/heap'
// import {
//     MinHeap,
//     MaxHeap
// } from './ts/heap/heap2'

const minHeap = new MinHeap()
const maxHeap = new MaxHeap()
const maxHeap2 = new MaxHeap()

maxHeap.insert(100)
maxHeap.insert(19)
maxHeap.insert(36)
maxHeap.insert(17)
maxHeap.insert(3)
maxHeap.insert(25)
maxHeap.insert(1)
maxHeap.insert(2)
maxHeap.insert(7)
maxHeap.print()

minHeap.insert(1)
minHeap.insert(2)
minHeap.insert(3)
minHeap.insert(17)
minHeap.insert(19)
minHeap.insert(36)
minHeap.insert(7)
minHeap.insert(25)
minHeap.insert(100)
minHeap.print()

maxHeap2.insert(100)
maxHeap2.insert(19)
maxHeap2.insert(36)
maxHeap2.insert(17)
maxHeap2.insert(12)
maxHeap2.insert(25)
maxHeap2.insert(5)
maxHeap2.insert(9)
maxHeap2.insert(15)
maxHeap2.insert(6)
maxHeap2.insert(11)
maxHeap2.insert(13)
maxHeap2.insert(8)
maxHeap2.insert(1)
maxHeap2.insert(4)
maxHeap2.print()
import { MaxHeap, MinHeap } from 'core/datastructures/heap/heap2'

const maxHeap: MinHeap<string> = new MaxHeap()
maxHeap.insert('a')
maxHeap.insert('bb')
maxHeap.insert('ccc')
maxHeap.insert('dddd')

console.log(maxHeap.toString())

const minHeap: MinHeap<string> = new MinHeap()
minHeap.insert('dddd')
minHeap.insert('ccc')
minHeap.insert('bb')
minHeap.insert('a')

console.log(minHeap.toString())

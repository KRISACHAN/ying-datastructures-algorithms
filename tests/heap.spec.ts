import {
    Heap,
    MinHeap,
    MaxHeap
} from '../src/ts/heap/heap'

describe('Heap', () => {
    it('should not allow to create instance of the Heap directly', () => {
        const instantiateHeap = () => {
            const heap = new Heap()
            heap.insert(5)
        }
  
        expect(instantiateHeap).toThrow()
    })
    it('min heap', () => {
        const minHeap = new MinHeap()
        minHeap.insert(12)
        minHeap.insert(6)
        minHeap.insert(4)
        minHeap.insert(9)
        minHeap.insert(1)
        minHeap.insert(5)
        minHeap.insert(14)
        minHeap.insert(3)
        expect(minHeap.toString()).toStrictEqual('1,3,5,4,9,6,14,12')
    })
    it('max heap', () => {
        const maxHeap = new MaxHeap()
        maxHeap.insert(12)
        maxHeap.insert(6)
        maxHeap.insert(4)
        maxHeap.insert(9)
        maxHeap.insert(1)
        maxHeap.insert(5)
        maxHeap.insert(14)
        maxHeap.insert(3)
        expect(maxHeap.toString()).toStrictEqual('14,9,12,6,1,4,5,3')
    })
})
  
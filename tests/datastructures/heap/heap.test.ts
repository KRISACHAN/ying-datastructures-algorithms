import { Heap } from 'core/datastructures/heap/heap'

describe('Heap', () => {
    it('should not allow to create instance of the Heap directly', () => {
        const instantiateHeap = () => {
            const heap = new Heap()
            heap.insert(5)
        }

        expect(instantiateHeap).toThrow()
    })
})

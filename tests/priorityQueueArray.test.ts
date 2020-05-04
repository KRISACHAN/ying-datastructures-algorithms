import PriorityQueue from '../src/core/datastructures/queue/priorityQueueArray'

describe('priorityQueue', () => {
    let queue: PriorityQueue<any>
    beforeEach(() => {
        queue = new PriorityQueue<any>()
    })
    it('starts empty', () => {
        expect(queue.size()).toBe(0)
        expect(queue.isEmpty()).toBe(true)
    })
    it('enqueues elements', () => {
        queue.enqueue('a', 1)
        expect(queue.size()).toBe(1)
        queue.enqueue('b', 2)
        expect(queue.size()).toBe(2)
        queue.enqueue('c', 3)
        expect(queue.size()).toBe(3)
        expect(queue.isEmpty()).toBe(false)
    })
    it('dequeue elements', () => {
        queue.enqueue(2, 1).enqueue(3, 2).enqueue(1, 0)

        expect(queue.dequeue()).toEqual({ element: 1, priority: 0 })
        expect(queue.dequeue()).toEqual({ element: 2, priority: 1 })
        expect(queue.dequeue()).toEqual({ element: 3, priority: 2 })
        expect(queue.dequeue()).toBe(undefined)
    })
    it('implements FIFO logic', () => {
        queue.enqueue(1, 0)
        expect(queue.front()).toEqual({ element: 1, priority: 0 })
        queue.enqueue(2, 1)
        expect(queue.front()).toEqual({ element: 1, priority: 0 })
        queue.enqueue(3, 2)
        expect(queue.front()).toEqual({ element: 1, priority: 0 })
        expect(queue.dequeue()).toEqual({ element: 1, priority: 0 })
        expect(queue.dequeue()).toEqual({ element: 2, priority: 1 })
        expect(queue.dequeue()).toEqual({ element: 3, priority: 2 })
        expect(queue.dequeue()).toBe(undefined)
    })
    it('allows to peek at the front element in the queue without dequeuing it', () => {
        expect(queue.front()).toBe(undefined)
        queue.enqueue(1, 0)
        expect(queue.front()).toEqual({ element: 1, priority: 0 })
        queue.enqueue(2, 1)
        expect(queue.front()).toEqual({ element: 1, priority: 0 })
        queue.dequeue()
        expect(queue.front()).toEqual({ element: 2, priority: 1 })
    })
    it('returns the correct size', () => {
        expect(queue.size()).toBe(0)
        queue.enqueue(1, 0)
        expect(queue.size()).toBe(1)
        queue.enqueue(2, 1)
        expect(queue.size()).toBe(2)
        queue.enqueue(3, 2)
        expect(queue.size()).toBe(3)
        queue.clear()
        expect(queue.isEmpty()).toBe(true)
        queue.enqueue(2, 1).enqueue(3, 2).enqueue(1, 0)
        expect(queue.size()).toBe(3)
        queue.dequeue()
        expect(queue.size()).toBe(2)
        queue.dequeue()
        expect(queue.size()).toBe(1)
        queue.dequeue()
        expect(queue.size()).toBe(0)
        queue.dequeue()
        expect(queue.size()).toBe(0)
    })
    it('returns if it is empty', () => {
        expect(queue.isEmpty()).toBe(true)
        queue.enqueue(1, 0)
        expect(queue.isEmpty()).toBe(false)
        queue.enqueue(2, 1)
        expect(queue.isEmpty()).toBe(false)
        queue.enqueue(3, 2)
        expect(queue.isEmpty()).toBe(false)
        queue.clear()
        expect(queue.isEmpty()).toBe(true)
        queue.enqueue(1, 0).enqueue(2, 1).enqueue(3, 2)
        expect(queue.isEmpty()).toBe(false)
        queue.dequeue()
        expect(queue.isEmpty()).toBe(false)
        queue.dequeue()
        expect(queue.isEmpty()).toBe(false)
        queue.dequeue()
        expect(queue.isEmpty()).toBe(true)
        queue.dequeue()
        expect(queue.isEmpty()).toBe(true)
    })
    it('clears the queue', () => {
        queue.clear()
        expect(queue.isEmpty()).toBe(true)
        queue.enqueue(2, 1).enqueue(1, 0)
        expect(queue.isEmpty()).toBe(false)
        queue.clear()
        expect(queue.isEmpty()).toBe(true)
    })
    it('returns toString primitive types', () => {
        expect(queue.toString()).toBe('')

        queue.enqueue(1, 0)
        expect(queue.toString()).toBe('1')

        queue.enqueue(2, 1)
        expect(queue.toString()).toBe('1,2')

        queue.clear()
        expect(queue.toString()).toBe('')

        const queueString = new PriorityQueue<string>()
        queueString.enqueue('el1', 0)
        expect(queueString.toString()).toBe('el1')

        queueString.enqueue('el2', 1)
        expect(queueString.toString()).toBe('el1,el2')
    })

    it('returns toString objects', () => {
        class MyObj {
            constructor(public el1: any, public el2: any) {}
            toString() {
                return `${this.el1.toString()}|${this.el2.toString()}`
            }
        }
        const queueMyObj = new PriorityQueue<MyObj>()
        expect(queueMyObj.toString()).toBe('')

        queueMyObj.enqueue(new MyObj(1, 2), 0)
        expect(queueMyObj.toString()).toBe('1|2')

        queueMyObj.enqueue(new MyObj(3, 4), 1)
        expect(queueMyObj.toString()).toBe('1|2,3|4')
    })
})
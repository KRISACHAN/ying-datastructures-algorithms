import CircularQueue from 'core/datastructures/queue/circularQueue'
import { MyObj } from 'core/node'

describe('CircularQueue', () => {
    let queue: CircularQueue<number>

    beforeEach(() => {
        queue = new CircularQueue<number>(5) // 使用默认容量5
    })

    it('starts empty', () => {
        expect(queue.size()).toBe(0)
        expect(queue.isEmpty()).toBe(true)
        expect(queue.isFull()).toBe(false)
    })

    it('enqueues elements', () => {
        expect(queue.enqueue(1)).toBe(true)
        expect(queue.size()).toBe(1)
        expect(queue.enqueue(2)).toBe(true)
        expect(queue.size()).toBe(2)
        expect(queue.enqueue(3)).toBe(true)
        expect(queue.size()).toBe(3)
        expect(queue.isEmpty()).toBe(false)
    })

    it('respects capacity limit', () => {
        expect(queue.enqueue(1)).toBe(true)
        expect(queue.enqueue(2)).toBe(true)
        expect(queue.enqueue(3)).toBe(true)
        expect(queue.enqueue(4)).toBe(true)
        expect(queue.enqueue(5)).toBe(true)
        expect(queue.enqueue(6)).toBe(false) // 超出容量,入队失败
        expect(queue.size()).toBe(5)
        expect(queue.isFull()).toBe(true)
    })

    it('dequeues elements', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(2)
        expect(queue.dequeue()).toBe(3)
        expect(queue.dequeue()).toBe(null)
    })

    it('implements FIFO logic', () => {
        queue.enqueue(1)
        expect(queue.peek()).toBe(1)
        queue.enqueue(2)
        expect(queue.peek()).toBe(1)
        queue.enqueue(3)
        expect(queue.peek()).toBe(1)

        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(2)
        expect(queue.dequeue()).toBe(3)
        expect(queue.dequeue()).toBe(null)
    })

    it('allows circular operations', () => {
        // 填满队列
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)
        queue.enqueue(5)

        // 移除两个元素
        expect(queue.dequeue()).toBe(1)
        expect(queue.dequeue()).toBe(2)

        // 在末尾添加新元素
        expect(queue.enqueue(6)).toBe(true)
        expect(queue.enqueue(7)).toBe(true)

        // 验证顺序正确
        expect(queue.dequeue()).toBe(3)
        expect(queue.dequeue()).toBe(4)
        expect(queue.dequeue()).toBe(5)
        expect(queue.dequeue()).toBe(6)
        expect(queue.dequeue()).toBe(7)
    })

    it('allows to peek at the front element without removing it', () => {
        expect(queue.peek()).toBe(null)

        queue.enqueue(1)
        expect(queue.peek()).toBe(1)
        queue.enqueue(2)
        expect(queue.peek()).toBe(1)
        queue.dequeue()
        expect(queue.peek()).toBe(2)
    })

    it('returns the correct size', () => {
        expect(queue.size()).toBe(0)
        queue.enqueue(1)
        expect(queue.size()).toBe(1)
        queue.enqueue(2)
        expect(queue.size()).toBe(2)
        queue.dequeue()
        expect(queue.size()).toBe(1)
        queue.dequeue()
        expect(queue.size()).toBe(0)
    })

    it('returns if it is empty', () => {
        expect(queue.isEmpty()).toBe(true)
        queue.enqueue(1)
        expect(queue.isEmpty()).toBe(false)
        queue.dequeue()
        expect(queue.isEmpty()).toBe(true)
    })

    it('returns if it is full', () => {
        expect(queue.isFull()).toBe(false)
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)
        expect(queue.isFull()).toBe(false)
        queue.enqueue(5)
        expect(queue.isFull()).toBe(true)
    })

    it('clears the queue', () => {
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.isEmpty()).toBe(false)

        queue.clear()
        expect(queue.isEmpty()).toBe(true)
        expect(queue.size()).toBe(0)
    })

    it('returns toString primitive types', () => {
        expect(queue.toString()).toBe('')

        queue.enqueue(1)
        expect(queue.toString()).toBe('1')

        queue.enqueue(2)
        expect(queue.toString()).toBe('1,2')

        queue.clear()
        expect(queue.toString()).toBe('')

        const queueString = new CircularQueue<string>(3)
        queueString.enqueue('el1')
        expect(queueString.toString()).toBe('el1')

        queueString.enqueue('el2')
        expect(queueString.toString()).toBe('el1,el2')
    })

    it('returns toString objects', () => {
        const queueMyObj = new CircularQueue<MyObj>(3)
        expect(queueMyObj.toString()).toBe('')

        queueMyObj.enqueue(new MyObj(1, 2))
        expect(queueMyObj.toString()).toBe('1|2')

        queueMyObj.enqueue(new MyObj(3, 4))
        expect(queueMyObj.toString()).toBe('1|2,3|4')
    })
})

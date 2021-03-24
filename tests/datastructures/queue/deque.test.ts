import Deque from 'core/datastructures/queue/deque'
import { MyObj } from 'core/node'

describe('Deque', () => {
    let deque: Deque<number>
    beforeEach(() => {
        deque = new Deque<number>()
    })
    it('starts empty', () => {
        expect(deque.size()).toBe(0)
        expect(deque.isEmpty()).toBe(true)
    })

    it('add elements in the back', () => {
        deque.addBack(1)
        expect(deque.size()).toBe(1)

        deque.addBack(2)
        expect(deque.size()).toBe(2)

        deque.addBack(3)
        expect(deque.size()).toBe(3)
    })

    it('add elements in the front', () => {
        deque.addFront(1)
        expect(deque.size()).toBe(1)

        deque.addFront(2)
        expect(deque.size()).toBe(2)

        deque.addFront(3)
        expect(deque.size()).toBe(3)

        deque.removeFront()
        deque.addFront(4)
        expect(deque.size()).toBe(3)
    })

    it('remove elements from the back', () => {
        deque.addBack(1)
        deque.addBack(2)
        deque.addBack(3)
        deque.addFront(0)

        expect(deque.removeBack()).toBe(3)
        expect(deque.removeBack()).toBe(2)
        expect(deque.removeBack()).toBe(1)
        expect(deque.removeBack()).toBe(0)
        expect(deque.removeBack()).toBe(undefined)
    })

    it('remove elements from the front', () => {
        deque.addFront(1)
        deque.addBack(2)
        deque.addBack(3)
        deque.addFront(0)
        deque.addFront(-1)
        deque.addFront(-2)

        expect(deque.removeFront()).toBe(-2)
        expect(deque.removeFront()).toBe(-1)
        expect(deque.removeFront()).toBe(0)
        expect(deque.removeFront()).toBe(1)
        expect(deque.removeFront()).toBe(2)
        expect(deque.removeFront()).toBe(3)
        expect(deque.removeFront()).toBe(undefined)
    })

    it('allows to peek at the front element in the deque without removing it', () => {
        expect(deque.peekFront()).toBe(undefined)

        deque.addFront(1)
        expect(deque.peekFront()).toBe(1)
        deque.addBack(2)
        expect(deque.peekFront()).toBe(1)
        deque.addBack(3)
        expect(deque.peekFront()).toBe(1)
        deque.addFront(0)
        expect(deque.peekFront()).toBe(0)
        deque.addFront(-1)
        expect(deque.peekFront()).toBe(-1)
        deque.addFront(-2)
        expect(deque.peekFront()).toBe(-2)
    })

    it('allows to peek at the last element in the deque without removing it', () => {
        expect(deque.peekBack()).toBe(undefined)

        deque.addFront(1)
        expect(deque.peekBack()).toBe(1)
        deque.addBack(2)
        expect(deque.peekBack()).toBe(2)
        deque.addBack(3)
        expect(deque.peekBack()).toBe(3)
        deque.addFront(0)
        expect(deque.peekBack()).toBe(3)
        deque.addFront(-1)
        expect(deque.peekBack()).toBe(3)
        deque.addFront(-2)
        expect(deque.peekBack()).toBe(3)
    })

    it('returns the correct size', () => {
        expect(deque.size()).toBe(0)

        deque.addFront(1)
        expect(deque.size()).toBe(1)
        deque.addBack(2)
        expect(deque.size()).toBe(2)
        deque.addBack(3)
        expect(deque.size()).toBe(3)
        deque.addFront(0)
        expect(deque.size()).toBe(4)
        deque.addFront(-1)
        expect(deque.size()).toBe(5)
        deque.addFront(-2)
        expect(deque.size()).toBe(6)

        deque.clear()
        expect(deque.size()).toBe(0)

        deque.addFront(1)
        deque.addBack(2)
        expect(deque.size()).toBe(2)

        deque.removeFront()
        deque.removeBack()
        expect(deque.size()).toBe(0)
    })

    it('returns if it is empty', () => {
        expect(deque.isEmpty()).toBe(true)

        deque.addFront(1)
        expect(deque.isEmpty()).toBe(false)
        deque.addBack(2)
        expect(deque.isEmpty()).toBe(false)

        deque.clear()
        expect(deque.isEmpty()).toBe(true)

        deque.addFront(1)
        deque.addBack(2)
        expect(deque.isEmpty()).toBe(false)

        deque.removeFront()
        expect(deque.isEmpty()).toBe(false)
        deque.removeBack()
        expect(deque.isEmpty()).toBe(true)
    })

    it('clears the queue', () => {
        deque.clear()
        expect(deque.isEmpty()).toBe(true)

        deque.addFront(1)
        deque.addBack(2)
        expect(deque.isEmpty()).toBe(false)

        deque.clear()
        expect(deque.isEmpty()).toBe(true)
    })
    it('returns toString primitive types', () => {
        expect(deque.toString()).toBe('')

        deque.addFront(1)
        expect(deque.toString()).toBe('1')

        deque.addBack(2)
        expect(deque.toString()).toBe('1,2')

        deque.clear()
        expect(deque.toString()).toBe('')

        const queueString = new Deque<string>()
        queueString.addFront('el1')
        expect(queueString.toString()).toBe('el1')

        queueString.addBack('el2')
        expect(queueString.toString()).toBe('el1,el2')
    })

    it('returns toString objects', () => {
        const dequeMyObj = new Deque<MyObj>()
        expect(dequeMyObj.toString()).toBe('')

        dequeMyObj.addFront(new MyObj(1, 2))
        expect(dequeMyObj.toString()).toBe('1|2')

        dequeMyObj.addBack(new MyObj(3, 4))
        expect(dequeMyObj.toString()).toBe('1|2,3|4')
    })
})

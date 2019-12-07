import Deque from '../src/ts/cores/queue/deque'

describe('Deque', () => {
    let deque: Deque<number>
    beforeEach(() => {
        deque = new Deque<number>()
    })
    it('starts empty', () => {
        expect(deque.size()).toStrictEqual(0)
        expect(deque.isEmpty()).toStrictEqual(true)
    })
    
    it('add elements in the back', () => {
        deque.addBack(1)
        expect(deque.size()).toStrictEqual(1)

        deque.addBack(2)
        expect(deque.size()).toStrictEqual(2)

        deque.addBack(3)
        expect(deque.size()).toStrictEqual(3)
    })

    it('add elements in the front', () => {
        deque.addFront(1)
        expect(deque.size()).toStrictEqual(1)

        deque.addFront(2)
        expect(deque.size()).toStrictEqual(2)

        deque.addFront(3)
        expect(deque.size()).toStrictEqual(3)

        deque.removeFront()
        deque.addFront(4)
        expect(deque.size()).toStrictEqual(3)
    })

    it('remove elements from the back', () => {
        deque.addBack(1)
        deque.addBack(2)
        deque.addBack(3)
        deque.addFront(0)

        expect(deque.removeBack()).toStrictEqual(3)
        expect(deque.removeBack()).toStrictEqual(2)
        expect(deque.removeBack()).toStrictEqual(1)
        expect(deque.removeBack()).toStrictEqual(0)
        expect(deque.removeBack()).toStrictEqual(undefined)
    })

    it('remove elements from the front', () => {
        deque.addFront(1)
        deque.addBack(2)
        deque.addBack(3)
        deque.addFront(0)
        deque.addFront(-1)
        deque.addFront(-2)

        expect(deque.removeFront()).toStrictEqual(-2)
        expect(deque.removeFront()).toStrictEqual(-1)
        expect(deque.removeFront()).toStrictEqual(0)
        expect(deque.removeFront()).toStrictEqual(1)
        expect(deque.removeFront()).toStrictEqual(2)
        expect(deque.removeFront()).toStrictEqual(3)
        expect(deque.removeFront()).toStrictEqual(undefined)
    })

    it('allows to peek at the front element in the deque without removing it', () => {
        expect(deque.peekFront()).toStrictEqual(undefined)

        deque.addFront(1)
        expect(deque.peekFront()).toStrictEqual(1)
        deque.addBack(2)
        expect(deque.peekFront()).toStrictEqual(1)
        deque.addBack(3)
        expect(deque.peekFront()).toStrictEqual(1)
        deque.addFront(0)
        expect(deque.peekFront()).toStrictEqual(0)
        deque.addFront(-1)
        expect(deque.peekFront()).toStrictEqual(-1)
        deque.addFront(-2)
        expect(deque.peekFront()).toStrictEqual(-2)
    })

    it('allows to peek at the last element in the deque without removing it', () => {
        expect(deque.peekBack()).toStrictEqual(undefined)

        deque.addFront(1)
        expect(deque.peekBack()).toStrictEqual(1)
        deque.addBack(2)
        expect(deque.peekBack()).toStrictEqual(2)
        deque.addBack(3)
        expect(deque.peekBack()).toStrictEqual(3)
        deque.addFront(0)
        expect(deque.peekBack()).toStrictEqual(3)
        deque.addFront(-1)
        expect(deque.peekBack()).toStrictEqual(3)
        deque.addFront(-2)
        expect(deque.peekBack()).toStrictEqual(3)
    })

    it('returns the correct size', () => {
        expect(deque.size()).toStrictEqual(0)

        deque.addFront(1)
        expect(deque.size()).toStrictEqual(1)
        deque.addBack(2)
        expect(deque.size()).toStrictEqual(2)
        deque.addBack(3)
        expect(deque.size()).toStrictEqual(3)
        deque.addFront(0)
        expect(deque.size()).toStrictEqual(4)
        deque.addFront(-1)
        expect(deque.size()).toStrictEqual(5)
        deque.addFront(-2)
        expect(deque.size()).toStrictEqual(6)

        deque.clear()
        expect(deque.size()).toStrictEqual(0)

        deque.addFront(1)
        deque.addBack(2)
        expect(deque.size()).toStrictEqual(2)

        deque.removeFront()
        deque.removeBack()
        expect(deque.size()).toStrictEqual(0)
    })

    it('returns if it is empty', () => {
        expect(deque.isEmpty()).toStrictEqual(true)

        deque.addFront(1)
        expect(deque.isEmpty()).toStrictEqual(false)
        deque.addBack(2)
        expect(deque.isEmpty()).toStrictEqual(false)

        deque.clear()
        expect(deque.isEmpty()).toStrictEqual(true)

        deque.addFront(1)
        deque.addBack(2)
        expect(deque.isEmpty()).toStrictEqual(false)

        deque.removeFront()
        expect(deque.isEmpty()).toStrictEqual(false)
        deque.removeBack()
        expect(deque.isEmpty()).toStrictEqual(true)
    })

    it('clears the queue', () => {
        deque.clear()
        expect(deque.isEmpty()).toStrictEqual(true)

        deque.addFront(1)
        deque.addBack(2)
        expect(deque.isEmpty()).toStrictEqual(false)

        deque.clear()
        expect(deque.isEmpty()).toStrictEqual(true)
    })
})
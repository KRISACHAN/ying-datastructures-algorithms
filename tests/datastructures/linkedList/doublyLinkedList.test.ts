import { DLLNode } from 'core/node'
import DoublyLinkedList from 'core/datastructures/linkedList/doublyLinkedList'
describe('DoublyLinkedList', () => {
    let list: DoublyLinkedList<number>
    let min: number
    let max: number

    beforeEach(() => {
        list = new DoublyLinkedList<number>()
        min = 1
        max = 3
    })

    function verifyNode(current: DLLNode<number>, i: number) {
        expect(current.element).not.toBeUndefined()
        expect(current.element).toEqual(i)

        // verify next node
        if (i < max) {
            expect(current.next).not.toBeUndefined()
            // TS strictNullChecks
            if (current.next) {
                expect(current.next.element).toEqual(i + 1)
            }
        } else {
            expect(current.next).toBeUndefined()
        }

        // verify previous node
        if (i > min) {
            expect(current.prev).not.toBeUndefined()
            if (current.prev) {
                expect(current.prev.element).toEqual(i - 1)
            }
        } else {
            expect(current.prev).toBeUndefined()
        }
    }

    function verifyList() {
        let current = list.getHead()
        for (let i = min; i <= max; i++) {
            expect(current).not.toBeNull()
            if (current) {
                verifyNode(current, i)
                current = current.next
            }
        }
        verifyListFromTail()
    }

    function verifyListFromTail() {
        let current = list.getTail()
        for (let i = max; i >= min; i--) {
            expect(current).not.toBeNull()
            if (current) {
                verifyNode(current, i)
                current = current.prev
            }
        }
    }

    it('starts empty', () => {
        expect(list.size()).toEqual(0)
        expect(list.isEmpty()).toEqual(true)
        expect(list.getHead()).toBeNull()
        expect(list.getTail()).toBeNull()
    })

    it('returns element at specific index: invalid position', () => {
        expect(list.getAt(3)).toBeNull()
    })

    it('inserts elements first position empty list', () => {
        const element = 1
        max = element
        expect(list.insert(0, element)).not.toEqual({ head: null, length: 0 })
        verifyList()
    })

    it('inserts elements first position not empty list', () => {
        max = 2
        expect(list.insert(0, max)).not.toEqual({ head: null, length: 0 })

        expect(list.insert(0, min)).not.toEqual({ head: null, length: 0 })

        verifyList()
    })

    it('inserts elements invalid position empty list', () => {
        expect(list.insert(1, 1)).toEqual({ head: null, length: 0 })
    })

    it('inserts elements invalid position not empty list', () => {
        const element = 1
        expect(list.insert(0, element)).not.toEqual({ head: null, length: 0 })
        expect(list.insert(0, element)).not.toEqual({ head: null, length: 0 })
    })

    it('removes element invalid position empty list', () => {
        let element

        for (let i = min; i <= max; i++) {
            element = list.removeAt(i - 1)
            expect(element).toBeNull()
        }
    })

    it('removes first element list single element', () => {
        const value = 1
        list.append(value)

        const element = list.removeAt(0)
        expect(element).not.toBeNull()
        expect(element).toEqual(value)

        expect(list.getHead()).toBeNull()
        expect(list.getTail()).toBeNull()
        expect(list.isEmpty()).toEqual(true)
    })

    it('returns the head of the list', () => {
        expect(list.getHead()).toBeNull()

        list.append(1)
        expect(list.getHead()).not.toBeUndefined()
    })

    it('returns the tail of the list', () => {
        expect(list.getTail()).toBeNull()

        list.append(1)
        expect(list.getTail()).not.toBeUndefined()
    })

    it('returns the correct size', () => {
        expect(list.size()).toEqual(0)

        for (let i = min; i <= max; i++) {
            list.append(i)
            expect(list.size()).toEqual(i)
        }

        const size = max
        for (let i = min; i <= max; i++) {
            list.remove(i)
            expect(list.size()).toEqual(size - i)
        }

        expect(list.size()).toEqual(0)
    })

    it('returns toString primitive types', () => {
        expect(list.toString()).toEqual('')

        list.append(1)
        expect(list.toString()).toEqual('1')

        list.append(2)
        expect(list.toString()).toEqual('1,2')

        list.clear()
        expect(list.toString()).toEqual('')
    })

    it('returns toString primitive types: string', () => {
        const ds = new DoublyLinkedList<string>()
        ds.append('el1')
        expect(ds.toString()).toEqual('el1')

        ds.append('el2')
        expect(ds.toString()).toEqual('el1,el2')
    })

    it('returns toString primitive types', () => {
        expect(list.toString()).toEqual('')

        list.append(1)
        expect(list.toString()).toEqual('1')

        list.append(2)
        expect(list.toString()).toEqual('1,2')

        list.clear()
        expect(list.toString()).toEqual('')
    })

    it('returns toString primitive types: string', () => {
        const ds = new DoublyLinkedList<string>()
        ds.append('el1')
        expect(ds.toString()).toEqual('el1')

        ds.append('el2')
        expect(ds.toString()).toEqual('el1,el2')
    })
})

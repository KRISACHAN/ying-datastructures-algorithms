import LinkedList from '../src/ts/linkedList/linkedList'
import {
    LLNode
} from '../src/ts/node'
describe('LinkedList', () => {
    let list: LinkedList<number>
    let min: number
    let max: number

    beforeEach(() => {
        list = new LinkedList<number>()
        min = 1
        max = 3
    })

    it('starts empty', () => {
        expect(list.size()).toEqual(0)
        expect(list.isEmpty()).toEqual(true)
        expect(list.getHead()).toBeNull()
    })

    it('returns element at specific index: invalid position', () => {
        expect(list.getAt(3)).toBeUndefined()
    })

    it('inserts elements at specific index', () => {
        list.insert(max, max)
        expect(list.length).toEqual(4)
    })
})
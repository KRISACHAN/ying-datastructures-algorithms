import LinkedList from '../src/core/linkedList/linkedList'
class MyObj {
    constructor(public el1: any, public el2: any) {}
    toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`
    }
}
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
        expect(list.getAt(3)).toBeNull()
    })

    it('inserts elements at specific index', () => {
        list.insert(max, max)
        expect(list.length).toEqual(4)
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

    it('clears the list', () => {
        expect(list.size()).toEqual(0)
        list.clear()
        expect(list.size()).toEqual(0)
    })

    it('returns the head of the list', () => {
        expect(list.getHead()).toBeNull()

        list.append(1)
        expect(list.getHead()).not.toBeNull()
    })

    it('removes first element list single element', () => {
        const value = 1
        list.append(value)

        const element = list.removeAt(0)
        expect(element).not.toBeNull()
        expect(element).toEqual(value)

        expect(list.getHead()).toBeNull()
        expect(list.isEmpty()).toEqual(true)
    })

    it('removes element invalid position empty list', () => {
        let element: number

        for (let i: number = min; i <= max; i++) {
            element = list.removeAt(i - 1)
            expect(element).toBeNull()
        }
    })
    it('returns toString objects', () => {
        const ds = new LinkedList<MyObj>()
        expect(ds.toString()).toEqual('')

        ds.append(new MyObj(1, 2))
        expect(ds.toString()).toEqual('1|2')

        ds.append(new MyObj(3, 4))
        expect(ds.toString()).toEqual('1|2,3|4')
    })
})

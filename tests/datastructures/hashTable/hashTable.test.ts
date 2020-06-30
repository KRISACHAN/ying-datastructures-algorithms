import HashTable from 'core/datastructures/hashTable/hashTable'
import { MyObj } from 'core/node'

describe('HashTable', () => {
    it('starts empty', () => {
        const hashTable = new HashTable<number, number>()
        expect(hashTable.size()).toEqual(0)
        expect(hashTable.isEmpty()).toEqual(true)
    })

    it('generates hashcode', () => {
        // numbers
        let hashTable: any = new HashTable<number, number>()
        expect(hashTable.hashCode(1)).toEqual(1)
        expect(hashTable.hashCode(10)).toEqual(10)
        expect(hashTable.hashCode(100)).toEqual(100)
        expect(hashTable.hashCode(1000)).toEqual(1000)

        // strings
        hashTable = new HashTable<string, number>()
        expect(hashTable.hashCode('1')).toEqual(12)
        expect(hashTable.hashCode('10')).toEqual(23)
        expect(hashTable.hashCode('100')).toEqual(34)
        expect(hashTable.hashCode('1000')).toEqual(8)
        expect(hashTable.hashCode('a')).toEqual(23)
        expect(hashTable.hashCode('A')).toEqual(28)
        expect(hashTable.hashCode('Aba')).toEqual(1)

        // objects
        hashTable = new HashTable<MyObj, MyObj>()
        const myObjList = []
        for (let i = 1; i <= 5; i++) {
            myObjList.push(new MyObj(i, i + 1))
        }
        expect(hashTable.hashCode(myObjList[0])).toEqual(1)
        expect(hashTable.hashCode(myObjList[1])).toEqual(3)
        expect(hashTable.hashCode(myObjList[2])).toEqual(5)
        expect(hashTable.hashCode(myObjList[3])).toEqual(7)
        expect(hashTable.hashCode(myObjList[4])).toEqual(9)
    })

    it('puts undefined and null keys and values', () => {
        const hashTable = new HashTable<string, number>()

        expect(hashTable.get('undefined')).toEqual(undefined)

        expect(hashTable.get('null')).toEqual(undefined)

        hashTable.clear()
        expect(hashTable.get(undefined)).toEqual(undefined)

        expect(hashTable.get(undefined)).toEqual(undefined)

        expect(hashTable.get(null)).toEqual(undefined)

        expect(hashTable.get(null)).toEqual(undefined)
    })

    it('puts values with number key', () => {
        const min = 1
        const max = 5
        const size = max - min + 1
        const hashTable = new HashTable<number, number>()

        for (let i = min; i <= max; i++) {
            hashTable.put(i, i)
        }
        expect(hashTable.size()).toEqual(size)

        const table = hashTable.getTable()
        for (let i = min; i <= max; i++) {
            expect(table[i].key).toEqual(i)
            expect(table[i].value).toEqual(i)
        }
    })

    it('puts values with string key', () => {
        const hashTable = new HashTable<string, number>()
        hashTable.put('1', 1)
        hashTable.put('10', 10)
        hashTable.put('100', 100)
        hashTable.put('1000', 1000)

        const table = hashTable.getTable()

        expect(table[12].key).toEqual('1')
        expect(table[12].value).toEqual(1)

        expect(table[23].key).toEqual('10')
        expect(table[23].value).toEqual(10)

        expect(table[34].key).toEqual('100')
        expect(table[34].value).toEqual(100)

        expect(table[8].key).toEqual('1000')
        expect(table[8].value).toEqual(1000)
    })

    it('puts values with object key', () => {
        const hashTable = new HashTable<MyObj, MyObj>()

        const myObjList = []
        for (let i = 1; i <= 5; i++) {
            myObjList.push(new MyObj(i, i + 1))
            hashTable.put(myObjList[i - 1], myObjList[i - 1])
        }

        const table = hashTable.getTable()

        expect(table[1].key).toEqual(myObjList[0])
        expect(table[1].value).toEqual(myObjList[0])

        expect(table[3].key).toEqual(myObjList[1])
        expect(table[3].value).toEqual(myObjList[1])

        expect(table[5].key).toEqual(myObjList[2])
        expect(table[5].value).toEqual(myObjList[2])

        expect(table[7].key).toEqual(myObjList[3])
        expect(table[7].value).toEqual(myObjList[3])

        expect(table[9].key).toEqual(myObjList[4])
        expect(table[9].value).toEqual(myObjList[4])
    })

    it('does NOT handle collision, replaces values', () => {
        const hashTable = new HashTable<number, number>()

        for (let i = 0; i < 5; i++) {
            hashTable.put(1, i)
        }
        expect(hashTable.size()).toEqual(1)
    })

    it('removes elements', () => {
        const min = 1
        const max = 5
        const size = max - min + 1
        const hashTable = new HashTable<number, number>()

        for (let i = min; i <= max; i++) {
            hashTable.put(i, i)
        }
        expect(hashTable.size()).toEqual(size)

        for (let i = min; i <= max; i++) {
            hashTable.remove(i)
        }

        // elements do not exist
        for (let i = min; i <= max; i++) {
            hashTable.remove(i)
        }

        expect(hashTable.isEmpty()).toEqual(true)
    })

    it('returns toString primitive types', () => {
        const hashTable = new HashTable<number, number>()

        expect(hashTable.toString()).toEqual('')

        hashTable.put(1, 1)
        expect(hashTable.toString()).toEqual('[#1: 1]')

        hashTable.put(2, 2)
        expect(hashTable.toString()).toEqual('[#1: 1],[#2: 2]')

        hashTable.clear()
        expect(hashTable.toString()).toEqual('')
    })

    it('returns toString primitive types', () => {
        const hashTable = new HashTable<string, number>()

        hashTable.put('el1', 1)
        expect(hashTable.toString()).toEqual('[#el1: 1]')

        hashTable.put('el2', 2)
        expect(hashTable.toString()).toEqual('[#el2: 2],[#el1: 1]')
    })

    it('returns toString objects', () => {
        const hashTable = new HashTable<MyObj, MyObj>()

        let myObj = new MyObj(1, 2)
        hashTable.put(myObj, myObj)
        expect(hashTable.toString()).toEqual('[#1|2: 1|2]')

        myObj = new MyObj(3, 4)
        hashTable.put(myObj, myObj)
        expect(hashTable.toString()).toEqual('[#1|2: 1|2],[#3|4: 3|4]')
    })
})

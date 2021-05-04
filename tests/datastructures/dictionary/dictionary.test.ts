import Dictionary from 'core/datastructures/dictionary/dictionary'
import { MyObj } from 'core/node'

describe('Dictionary', () => {
    let dictionary: Dictionary<number, number>
    beforeEach(() => {
        dictionary = new Dictionary<number, number>()
    })

    it('starts empty', () => {
        expect(dictionary.size()).toEqual(0)
        expect(dictionary.isEmpty()).toEqual(true)
    })

    it('sets undefined and null keys and values', () => {
        const dict = new Dictionary<string, number>()

        dict.set('undefined', undefined)
        expect(dict.get('undefined')).toEqual(undefined)

        dict.set('undefined', 1)
        expect(dict.get('undefined')).toEqual(1)

        dict.set('null', null)
        expect(dict.get('null')).toEqual(null)

        dict.set('null', 1)
        expect(dict.get('null')).toEqual(1)

        dict.clear()
        dict.set(undefined, undefined)
        expect(dict.get(undefined)).toEqual(undefined)

        dict.set(undefined, 1)
        expect(dict.get(undefined)).toEqual(undefined)

        dict.set(null, null)
        expect(dict.get(null)).toEqual(undefined)

        dict.set(null, 1)
        expect(dict.get(null)).toEqual(undefined)
    })

    it('sets values with string key', () => {
        const dict = new Dictionary<string, number>()
        const min = 1
        const max = 5
        const size = max - min + 1

        for (let i = min; i <= max; i++) {
            dict.set(`${i}`, i)
        }
        expect(dict.size()).toEqual(size)

        const keys = dict.keys()
        expect(keys.length).toEqual(size)
        for (let i = 0; i < keys.length; i++) {
            expect(keys[i]).toEqual((i + 1).toString(10))
        }

        dict.set('a', 1)
        expect(dict.get('a')).toEqual(1)
    })

    it('sets values with number key', () => {
        const min = 1
        const max = 5
        const size = max - min + 1

        for (let i = min; i <= max; i++) {
            dictionary.set(i, i)
        }
        expect(dictionary.size()).toEqual(size)

        const keys = dictionary.keys()
        expect(keys.length).toEqual(size)
        for (let i = 0; i < keys.length; i++) {
            expect(keys[i]).toEqual(i + 1)
        }
    })

    it('sets values with object', () => {
        const dict = new Dictionary<MyObj, MyObj>()
        const min = 0
        const max = 5
        const size = max - min
        const myObjList = []

        for (let i = min; i < max; i++) {
            myObjList.push(new MyObj(i, i + 1))
        }

        for (let i = min; i < max; i++) {
            dict.set(myObjList[i], myObjList[i])
        }
        expect(dict.size()).toEqual(size)

        for (let i = min; i < max; i++) {
            expect(dict.get(myObjList[i])).toEqual(myObjList[i])
        }

        const keys = dict.keys()
        expect(keys.length).toEqual(size)
        for (let i = 0; i < keys.length; i++) {
            expect(keys[i]).toEqual(myObjList[i])
        }

        const values = dict.values()
        expect(values.length).toEqual(size)
        for (let i = 0; i < values.length; i++) {
            expect(values[i]).toEqual(myObjList[i])
        }
    })

    it('sets values with custom toString function', () => {
        const dict = new Dictionary<MyObj, MyObj>()
        const min = 0
        const max = 5
        const size = max - min
        const myObjList = []

        for (let i = min; i < max; i++) {
            myObjList.push(new MyObj(i, i + 1))
        }

        for (let i = min; i < max; i++) {
            dict.set(myObjList[i], myObjList[i])
        }
        expect(dict.size()).toEqual(size)

        for (let i = min; i < max; i++) {
            expect(dict.get(myObjList[i])).toEqual(myObjList[i])
        }

        const keys = dict.keys()
        expect(keys.length).toEqual(size)
        for (let i = 0; i < keys.length; i++) {
            expect(keys[i]).toEqual(myObjList[i])
        }

        const values = dict.values()
        expect(values.length).toEqual(size)
        for (let i = 0; i < values.length; i++) {
            expect(values[i]).toEqual(myObjList[i])
        }
    })

    it('removes elements', () => {
        const min = 1
        const max = 5
        const size = max - min + 1

        for (let i = min; i <= max; i++) {
            dictionary.set(i, i)
        }
        expect(dictionary.size()).toEqual(size)

        for (let i = min; i <= max; i++) {
            dictionary.remove(i)
        }

        // elements do not exist
        for (let i = min; i <= max; i++) {
            dictionary.remove(i)
        }

        expect(dictionary.isEmpty()).toEqual(true)
    })

    it('returns the correct size', () => {
        expect(dictionary.size()).toEqual(0)

        const max = 5

        for (let i = 1; i < max; i++) {
            dictionary.set(i, i)
            expect(dictionary.size()).toEqual(i)
        }
        for (let i = 1; i < max; i++) {
            dictionary.remove(i)
            expect(dictionary.size()).toEqual(max - i - 1)
        }

        expect(dictionary.size()).toEqual(0)
        expect(dictionary.isEmpty()).toEqual(true)
    })

    it('returns if element exists', () => {
        const min = 1
        const max = 5
        const size = max - min + 1

        for (let i = min; i <= max; i++) {
            dictionary.set(i, i)
        }
        expect(dictionary.size()).toEqual(size)

        for (let i = min; i <= max; i++) {
            expect(dictionary.hasKey(i)).toEqual(true)
            dictionary.remove(i)
            expect(dictionary.hasKey(i)).toEqual(false)
        }
    })

    it('returns if it is empty', () => {
        expect(dictionary.isEmpty()).toEqual(true)

        for (let i = 1; i < 5; i++) {
            dictionary.set(i, i)
            expect(dictionary.isEmpty()).toEqual(false)
        }

        for (let i = 1; i < 5; i++) {
            dictionary.remove(i)
            expect(dictionary.isEmpty()).toEqual(!(i < 4))
        }

        expect(dictionary.size()).toEqual(0)
        expect(dictionary.isEmpty()).toEqual(true)
    })

    it('clears the dictionary', () => {
        dictionary.clear()
        expect(dictionary.isEmpty()).toEqual(true)

        dictionary.set(1, 1)
        dictionary.set(2, 2)

        dictionary.clear()
        expect(dictionary.isEmpty()).toEqual(true)
    })

    it('returns values, keys and value pairs', () => {
        const min = 1
        const max = 5
        const size = max - min + 1

        for (let i = min; i <= max; i++) {
            dictionary.set(i, i)
        }
        expect(dictionary.size()).toEqual(size)

        const keys = dictionary.keys()
        const values = dictionary.values()
        const valuePairs = dictionary.keyValues()
        expect(keys.length).toEqual(size)
        expect(values.length).toEqual(size)
        expect(valuePairs.length).toEqual(size)
        for (let i = 0; i < keys.length; i++) {
            expect(keys[i]).toEqual(i + 1)
            expect(values[i]).toEqual(i + 1)
            expect(valuePairs[i].key).toEqual(i + 1)
            expect(valuePairs[i].value).toEqual(i + 1)
        }
    })

    it('allows to iterate with forEach', () => {
        for (let i = 1; i <= 5; i++) {
            dictionary.set(i, i)
        }

        dictionary.forEach((k, v) => {
            expect(dictionary.hasKey(k)).toEqual(true)
            expect(dictionary.get(k)).toEqual(v)
        })
    })

    it('allows to iterate with forEach and interrupt', () => {
        for (let i = 1; i <= 5; i++) {
            dictionary.set(i, i)
        }

        const size = dictionary.keys().length

        let index = 1
        dictionary.forEach((k, v) => {
            expect(dictionary.hasKey(k)).toEqual(true)
            expect(dictionary.get(k)).toEqual(v)
            index++
        })
        expect(index).toEqual(size + 1)

        index = 1
        dictionary.filter((k, v) => {
            expect(dictionary.hasKey(k)).toEqual(true)
            expect(dictionary.get(k)).toEqual(v)
            index++
            return !(k % 3 === 0)
        })
        expect(index).toEqual(6)
    })

    it('returns toString primitive types', () => {
        expect(dictionary.toString()).toEqual('')

        dictionary.set(1, 1)
        expect(dictionary.toString()).toEqual('[1: 1]')

        dictionary.set(2, 2)
        expect(dictionary.toString()).toEqual('[1: 1],[2: 2]')

        dictionary.clear()
        expect(dictionary.toString()).toEqual('')
    })

    it('returns toString primitive types: string', () => {
        const dict = new Dictionary<string, number>()
        dict.set('el1', 1)
        expect(dict.toString()).toEqual('[el1: 1]')

        dict.set('el2', 2)
        expect(dict.toString()).toEqual('[el1: 1],[el2: 2]')
    })

    it('returns toString objects', () => {
        const dict = new Dictionary<MyObj, MyObj>()
        expect(dict.toString()).toEqual('')

        let myObj = new MyObj(1, 2)
        dict.set(myObj, myObj)
        expect(dict.toString()).toEqual('[1|2: 1|2]')

        myObj = new MyObj(3, 4)
        dict.set(myObj, myObj)
        expect(dict.toString()).toEqual('[1|2: 1|2],[3|4: 3|4]')
    })
})

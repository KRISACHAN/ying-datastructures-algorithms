'use strict'
import {
    recursionBinarySearch,
    loopBinarySearch,
} from 'core/algorithms/search/binarySearch'
import {
    orderSearch,
    halfOrderSearch,
} from 'core/algorithms/search/orderSearch'
import {
    loopInterpolationSearch,
    recursionInterpolationSearch,
} from 'core/algorithms/search/interpolationSearch'
import {
    recursionFibonacciSearch,
    loopFibonacciSearch,
} from 'core/algorithms/search/fibonacciSearch'
import TreeSearch from 'core/algorithms/search/treeSearch'
import HashSearch from 'core/algorithms/search/hashSearch'

describe('Search', () => {
    const list: number[] = [50, 17, 72, 12, 13, 54, 76, 9, 14, 19, 67]
    const key1: number = 17
    const key2: number = 3
    test('BinarySearch', () => {
        expect(recursionBinarySearch(list, key1)).toEqual(4)
        expect(recursionBinarySearch(list, key2)).toEqual(-1)

        expect(loopBinarySearch(list, key1)).toEqual(4)
        expect(loopBinarySearch(list, key2)).toEqual(-1)
    })

    test('OrderSearch', () => {
        expect(orderSearch(list, key1)).toEqual(4)
        expect(orderSearch(list, key2)).toEqual(-1)

        expect(halfOrderSearch(list, key1)).toEqual(4)
        expect(halfOrderSearch(list, key2)).toEqual(-1)
    })

    test('InterpolationSearch', () => {
        expect(loopInterpolationSearch(list, key1)).toEqual(4)
        expect(loopInterpolationSearch(list, key2)).toEqual(-1)

        expect(recursionInterpolationSearch(list, key1)).toEqual(4)
        expect(recursionInterpolationSearch(list, key2)).toEqual(-1)
    })

    test('FibonacciSearch', () => {
        expect(recursionFibonacciSearch(list, key1)).toEqual(4)
        expect(recursionFibonacciSearch(list, key2)).toEqual(-1)

        expect(loopFibonacciSearch(list, key1)).toEqual(4)
        expect(loopFibonacciSearch(list, key2)).toEqual(-1)
    })

    test('TreeSearch', () => {
        let ts: TreeSearch<any> = new TreeSearch<any>()
        const list = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9]
        list.forEach(item => {
            ts.insert(item)
        })
        expect(ts.getInOrder().toString()).toStrictEqual(
            '2,3,4,8,9,9,10,13,18,21',
        )
        expect(ts.getPreOrder().toString()).toStrictEqual(
            '10,3,2,4,9,8,9,18,13,21',
        )
        expect(ts.getPostOrder().toString()).toStrictEqual(
            '2,8,9,9,4,3,13,21,18,10',
        )
        expect(ts.getBFS().toString()).toStrictEqual('10,3,18,2,4,13,21,9,8,9')
        expect(ts.getDFS().toString()).toStrictEqual('10,3,2,4,9,8,9,18,13,21')
    })

    test('HashTable', () => {
        const hs: HashSearch<any, any> = new HashSearch<any, any>()
        const list = [50, 17, 72, 12, 13, 54, 76, 9, 14, 19, 67]
        list.forEach((item, idx) => {
            hs.put(`id-${idx}`, item)
        })
        list.forEach((item, idx) => {
            expect(hs.get(`id-${idx}`)).toEqual(item)
        })
        expect(hs.toString()).toStrictEqual(
            list.map((item, idx) => `[#id-${idx}: ${item}]`).join(','),
        )
        expect(hs.remove(`id-${1}`).get(`id-${1}`)).toEqual(undefined)
    })
})

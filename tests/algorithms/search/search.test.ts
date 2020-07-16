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
})

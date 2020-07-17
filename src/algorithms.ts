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

const list: number[] = [50, 17, 72, 12, 13, 54, 76, 9, 14, 19, 67]
const key1: number = 17
const key2: number = 3

const funcs = [
    recursionBinarySearch,
    loopBinarySearch,
    orderSearch,
    halfOrderSearch,
    loopInterpolationSearch,
    recursionInterpolationSearch,
    loopFibonacciSearch,
    recursionFibonacciSearch,
]
const key1Res = funcs.every(func => func(list, key1) === 4)
const key2Res = funcs.every(func => func(list, key2) === -1)

console.log({
    key1Res,
    key2Res,
})
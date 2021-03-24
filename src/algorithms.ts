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
import HashSearch from 'core/algorithms/search/HashSearch'
import BlockSearch from 'core/algorithms/search/blockSearch'

const hs: HashSearch<any, any> = new HashSearch<any, any>()

const list: number[] = [50, 17, 72, 12, 13, 54, 76, 9, 14, 19, 67]
const key1 = 17
const key2 = 3

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

list.forEach((item, idx) => {
    hs.put(`id-${idx}`, item)
})

console.log(hs.toString())

const list2: number[] = [50, 17, 72, 12, 13, 54, 76, 9, 14, 19, 67]
const bs: BlockSearch<number> = new BlockSearch<number>(list2)

console.log(bs.search(3))
console.log(bs.search(9))
bs.insert(38)
bs.remove(9).remove(12).remove(13)
bs.print()

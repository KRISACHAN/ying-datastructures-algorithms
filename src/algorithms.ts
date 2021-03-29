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

const hs: HashSearch<unknown> = new HashSearch<unknown>()

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
    hs.put(idx, item)
})

console.log(hs.toString())

const LIST = [50, 17, 72, 12, 13, 54, 76, 9, 14, 19, 67, 50]
const DEPTH = 3
const bs: BlockSearch = new BlockSearch(LIST, DEPTH)
console.log(bs.search(3))
bs.insert(38)
console.log(bs.search(38))
bs.remove(9)
console.log(bs.search(9))
bs.remove(50)
console.log(bs.size())

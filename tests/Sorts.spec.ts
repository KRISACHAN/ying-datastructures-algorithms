import BubbleSort from '../src/algorithms/sorting/bubbleSort'
import BucketSort from '../src/algorithms/sorting/BucketSort'
import {
    RandomList,
    SortedList
} from '../src/utils'
describe('BubbleSort', () => {
    test('BubbleSort', () => {
        expect(BubbleSort(RandomList)).toStrictEqual(SortedList)
    })
})
describe('BucketSort', () => {
    test('BucketSort', () => {
        expect(BucketSort(RandomList)).toStrictEqual(SortedList)
    })
})
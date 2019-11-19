import BubbleSort from '../src/algorithms/sorting/bubbleSort'
import {
    RandomList,
    SortedList
} from '../src/utils'
describe('BubbleSort', () => {
    test('BubbleSort', () => {
        expect(BubbleSort(RandomList)).toStrictEqual(SortedList)
    })
})
'use strict'
import BubbleSort from 'src/algorithms/sorting/bubbleSort'
import {
    RandomList,
    SortedList
} from 'src/utils'
const isEqualNumer = (num: number, idx: number): boolean => (num === SortedList[idx])
const BubbleSortIsCurrent = BubbleSort(RandomList).every(isEqualNumer)
console.log(BubbleSortIsCurrent)
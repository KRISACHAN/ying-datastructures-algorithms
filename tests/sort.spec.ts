import BubbleSort from '../src/ts/cores/sorting/bubbleSort'
import BucketSort from '../src/ts/cores/sorting/bucketSort'
import CocktailSort from '../src/ts/cores/sorting/cocktailSort'
import CountSort from '../src/ts/cores/sorting/countSort'
import HeapSort from '../src/ts/cores/sorting/heapSort'
import InsertionSort from '../src/ts/cores/sorting/insertionSort'
import MergeSort from '../src/ts/cores/sorting/mergeSort'
import {
    QuickSort,
    QuickSort3
} from '../src/ts/cores/sorting/quickSort'
import RadixSort from '../src/ts/cores/sorting/radixSort'
import SelectionSort from '../src/ts/cores/sorting/selectionSort'
import ShellSort from '../src/ts/cores/sorting/shellSort'

import {
    RandomList,
    SortedList
} from '../src/ts/utils'
describe('Sorting', () => {
    test('BubbleSort', () => {
        expect(BubbleSort(RandomList)).toStrictEqual(SortedList)
    })
    test('BucketSort', () => {
        expect(BucketSort(RandomList)).toStrictEqual(SortedList)
    })
    test('CocktailSort', () => {
        expect(CocktailSort(RandomList)).toStrictEqual(SortedList)
    })
    test('CountSort', () => {
        expect(CountSort(RandomList)).toStrictEqual(SortedList)
    })
    test('HeapSort', () => {
        expect(HeapSort(RandomList)).toStrictEqual(SortedList)
    })
    test('InsertionSort', () => {
        expect(InsertionSort(RandomList)).toStrictEqual(SortedList)
    })
    test('MergeSort', () => {
        expect(MergeSort(RandomList)).toStrictEqual(SortedList)
    })
    test('QuickSort', () => {
        expect(QuickSort(RandomList)).toStrictEqual(SortedList)
    })
    test('QuickSort3', () => {
        expect(QuickSort3(RandomList)).toStrictEqual(SortedList)
    })
    test('RadixSort', () => {
        expect(RadixSort(RandomList)).toStrictEqual(SortedList)
    })
    test('SelectionSort', () => {
        expect(SelectionSort(RandomList)).toStrictEqual(SortedList)
    })
    test('ShellSort', () => {
        expect(ShellSort(RandomList)).toStrictEqual(SortedList)
    })
})
import BubbleSort from 'core/algorithms/sorting/bubbleSort'
import BucketSort from 'core/algorithms/sorting/bucketSort'
import CocktailSort from 'core/algorithms/sorting/cocktailSort'
import CountSort from 'core/algorithms/sorting/countSort'
import HeapSort from 'core/algorithms/sorting/heapSort'
import InsertionSort from 'core/algorithms/sorting/insertionSort'
import MergeSort from 'core/algorithms/sorting/mergeSort'
import { QuickSort, QuickSort3 } from 'core/algorithms/sorting/quickSort'
import RadixSort from 'core/algorithms/sorting/radixSort'
import SelectionSort from 'core/algorithms/sorting/selectionSort'
import ShellSort from 'core/algorithms/sorting/shellSort'

import { RandomLists, SortedLists } from 'core/utils'
describe('Sorting', () => {
    test('BubbleSort', () => {
        const newSortLists = RandomLists.map(list => BubbleSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('BucketSort', () => {
        const newSortLists = RandomLists.map(list => BucketSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('CocktailSort', () => {
        const newSortLists = RandomLists.map(list => CocktailSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('CountSort', () => {
        const newSortLists = RandomLists.map(list => CountSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('HeapSort', () => {
        const newSortLists = RandomLists.map(list => HeapSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('InsertionSort', () => {
        const newSortLists = RandomLists.map(list => InsertionSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('MergeSort', () => {
        const newSortLists = RandomLists.map(list => MergeSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('QuickSort', () => {
        const newSortLists = RandomLists.map(list => QuickSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('QuickSort3', () => {
        const newSortLists = RandomLists.map(list => QuickSort3(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('RadixSort', () => {
        const newSortLists = RandomLists.map(list => RadixSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('SelectionSort', () => {
        const newSortLists = RandomLists.map(list => SelectionSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
    test('ShellSort', () => {
        const newSortLists = RandomLists.map(list => ShellSort(list))
        expect(newSortLists).toStrictEqual(SortedLists)
    })
})

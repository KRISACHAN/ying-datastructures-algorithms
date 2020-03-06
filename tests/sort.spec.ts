import BubbleSort from "../src/ts/sorting/bubbleSort";
import BucketSort from "../src/ts/sorting/bucketSort";
import CocktailSort from "../src/ts/sorting/cocktailSort";
import CountSort from "../src/ts/sorting/countSort";
import HeapSort from "../src/ts/sorting/heapSort";
import InsertionSort from "../src/ts/sorting/insertionSort";
import MergeSort from "../src/ts/sorting/mergeSort";
import { QuickSort, QuickSort3 } from "../src/ts/sorting/quickSort";
import RadixSort from "../src/ts/sorting/radixSort";
import SelectionSort from "../src/ts/sorting/selectionSort";
import ShellSort from "../src/ts/sorting/shellSort";

import {
    RandomList,
    SortedList,
    RandomLists,
    SortedLists
} from "../src/ts/utils";
describe("Sorting", () => {
    test("BubbleSort", () => {
        const newSortLists = RandomLists.map(list => BubbleSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("BucketSort", () => {
        const newSortLists = RandomLists.map(list => BucketSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("CocktailSort", () => {
        const newSortLists = RandomLists.map(list => CocktailSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("CountSort", () => {
        const newSortLists = RandomLists.map(list => CountSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("HeapSort", () => {
        const newSortLists = RandomLists.map(list => HeapSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("InsertionSort", () => {
        const newSortLists = RandomLists.map(list => InsertionSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("MergeSort", () => {
        const newSortLists = RandomLists.map(list => MergeSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("QuickSort", () => {
        const newSortLists = RandomLists.map(list => QuickSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("QuickSort3", () => {
        const newSortLists = RandomLists.map(list => QuickSort3(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("RadixSort", () => {
        const newSortLists = RandomLists.map(list => RadixSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("SelectionSort", () => {
        const newSortLists = RandomLists.map(list => SelectionSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
    test("ShellSort", () => {
        const newSortLists = RandomLists.map(list => ShellSort(list));
        expect(newSortLists).toStrictEqual(SortedLists);
    });
});

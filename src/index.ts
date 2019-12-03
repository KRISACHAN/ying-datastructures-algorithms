'use strict'
import '@/css/index.css'
import '@/sass/index.scss'
import HeapSort from './ts/cores/sorting/heapSort'
import {
    RandomList,
    SortedList
} from './ts/utils'

const AfterHeapSortedList = HeapSort(RandomList)
console.log(AfterHeapSortedList)

const HeapSortIsCurrent = AfterHeapSortedList
                                .every((num, idx) => {
                                    return num === SortedList[idx]
                                })
console.log(HeapSortIsCurrent)
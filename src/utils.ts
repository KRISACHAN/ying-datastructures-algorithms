'use strict'
export type DefalutListType = number[]
export const RandomList: DefalutListType = [9, 8, 7, 4, 5, 3, 1, 5, 0, 78, 30, 12, 34]
export const SortedList: DefalutListType = [0, 1, 3, 4, 5, 5, 7, 8, 9, 12, 30, 34, 78]
export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}
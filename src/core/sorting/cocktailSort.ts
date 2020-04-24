'use strict'
import { Swap, Compare, defaultCompare } from '../utils'
const CocktailSort = <T>(list: T[], compareFn = defaultCompare): T[] => {
    let i: number,
        left: number = 0,
        right: number = list.length - 1
    while (left < right) {
        for (i = left; i < right; ++i) {
            if (compareFn(list[i], list[i + 1]) === Compare.BIGGER_THAN) {
                Swap(list, i, i + 1)
            }
        }
        right--
        for (i = right; i > left; --i) {
            if (compareFn(list[i], list[i - 1]) === Compare.LESS_THAN) {
                Swap(list, i, i - 1)
            }
        }
        left++
    }
    return list
}
export default CocktailSort

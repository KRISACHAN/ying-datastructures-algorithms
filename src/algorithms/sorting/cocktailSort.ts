'use strict'
import {
    DefalutListType
} from 'src/utils'
const CocktailSort = (list: DefalutListType): DefalutListType => {
    let i: number, left: number = 0, right: number = list.length - 1
    while (left < right) {
        for (i = left; i < right; ++i)
            if (list[i] > list[i + 1]) {
                [list[i], list[i + 1]] = [list[i + 1], list[i]]
            }
        right--
        for (i = right; i > left; --i)
            if (list[i - 1] > list[i]) {
                [list[i], list[i - 1]] = [list[i - 1], list[i]]
            }
        left++
    }
    return list
}
export default CocktailSort
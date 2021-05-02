import { Swap, lt, gt } from 'core/utils2'
const CocktailSort = (list: number[]): number[] => {
    let i: number,
        left = 0,
        right: number = list.length - 1
    while (left < right) {
        for (i = left; i < right; ++i) {
            if (gt(list[i], list[i + 1])) {
                Swap(list, i, i + 1)
            }
        }
        right--
        for (i = right; i > left; --i) {
            if (lt(list[i], list[i - 1])) {
                Swap(list, i, i - 1)
            }
        }
        left++
    }
    return list
}
export default CocktailSort

'use strict'
import {
    defaultCompare,
    ICompareFunction,
    Compare,
    DOES_NOT_EXIST,
} from 'core/utils'
const orderSearch = (
    list: number[],
    data: number,
    compareFn: ICompareFunction<number> = defaultCompare,
): number => {
    if (!list || !list.length) {
        return DOES_NOT_EXIST
    }
    for (let i: number = 0, len = list.length; i < len; ++i) {
        if (compareFn(list[i], data) === Compare.EQUALS) {
            return i
        }
    }
    return DOES_NOT_EXIST
}
export default orderSearch

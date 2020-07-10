'use strict'
const orderSearch = (list: number[], data: number): number => {
    if (!list || !list.length) {
        return -1
    }
    for (let i: number = 0, len = list.length; i < len; ++i) {
        if (list[i] === data) {
            return i
        }
    }
    return -1
}
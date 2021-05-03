import { gt, lt } from 'core/utils2'

// 递归实现
export const recursionInterpolationSearch = (
    list: number[],
    data: number,
): number => {
    if (!list?.length) {
        return
    }

    const sortedList = list.sort((a, b) => a - b)

    const coreSearch = (
        sortedList: number[],
        start: number,
        end: number,
        key: number,
    ): number => {
        if (gt(start, end)) {
            return -1
        }

        if (!gt(start, end)) {
            const mid: number =
                Math.round(
                    ((end - start) * (data - list[start])) /
                        (list[end] - list[start]),
                ) + start

            if (lt(key, sortedList[mid])) {
                return coreSearch(sortedList, start, mid - 1, key)
            } else if (gt(key, sortedList[mid])) {
                return coreSearch(sortedList, mid + 1, end, key)
            } else {
                return mid
            }
        }
    }

    return coreSearch(sortedList, 0, list.length - 1, data)
}

// 迭代实现
export const loopInterpolationSearch = (
    list: number[],
    data: number,
): number => {
    if (!list?.length) {
        return
    }

    const sortedList: number[] = list.sort((a, b) => a - b)
    let start = 0
    let end: number = sortedList.length - 1

    while (!gt(start, end)) {
        const mid: number =
            Math.round(
                ((end - start) * (data - list[start])) /
                    (list[end] - list[start]),
            ) + start

        if (lt(mid, start) || gt(mid, end)) {
            break
        }

        if (lt(data, sortedList[mid])) {
            end = mid - 1
        } else if (gt(data, sortedList[mid])) {
            start = mid + 1
        } else {
            return mid
        }
    }

    return -1
}

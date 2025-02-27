// 获取数据类型
export const dataType = (data: unknown): string => {
    const type: string = Object.prototype.toString.call(data)
    return type.replace(/^\[object\s(.+)\]$/, '$1').toLowerCase()
}
// 是否存在该数据
export const isExist = (data: unknown): boolean => {
    return !['undefined', 'null'].includes(dataType(data))
}
// 是否存在当前所有数据
export const isExistAll = (...dataList: unknown[]): boolean => {
    return dataList.every(isExist)
}
// 数组元素交换
export const Swap = (array: unknown[], a: number, b: number): void => {
    const tmpl: unknown = array[a]
    array[a] = array[b]
    array[b] = tmpl
}
// 数据转为字符串
export const toString = (data: unknown): string => {
    if (dataType(data) === 'null') {
        return 'NULL'
    }
    if (dataType(data) === 'undefined') {
        return 'UNDEFINED'
    }
    if (dataType(data) === 'array') {
        return `${(data as unknown & string & []).map(item =>
            !isExist(item) ? item : toString(item),
        )}`
    }
    return data.toString()
}
// 大于判断
export const gt = (data1: unknown, data2: unknown): boolean => {
    return data1 > data2
}
// 大于等于判断
export const gte = (data1: unknown, data2: unknown): boolean => {
    return data1 >= data2
}
// 小于判断
export const lt = (data1: unknown, data2: unknown): boolean => {
    return data1 < data2
}
// 小于等于判断
export const lte = (data1: unknown, data2: unknown): boolean => {
    return data1 <= data2
}
// 等于判断
export const eq = (data1: unknown, data2: unknown): boolean => {
    return data1 === data2 || (data1 !== data1 && data2 !== data2)
}
// 不等于判断
export const neq = (data1: unknown, data2: unknown): boolean => {
    return !eq(data1, data2)
}

export type DefalutListType = number[]
export type ICompareFunction<T> = (a: T, b: T) => number
export type IEqualsFunction<T> = (a: T, b: T) => boolean
export type IDiffFunction<T> = (a: T, b: T) => number
// 红黑色色值枚举
export enum Colors {
    RED = 0,
    BLACK = 1,
}
// 红黑树色值文本枚举
export enum ColorTexts {
    RED = 'RED',
    BLACK = 'BLACK',
}
// 对比的枚举
export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0,
}

// 是否存在当前数据
export const DOES_NOT_EXIST = -1

// a 小于 b
export const lesserEquals = <T>(
    a: T,
    b: T,
    compareFn: ICompareFunction<T>,
): boolean => {
    const comp = compareFn(a, b)
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}

// a 大于 b
export const biggerEquals = <T>(
    a: T,
    b: T,
    compareFn: ICompareFunction<T>,
): boolean => {
    const comp = compareFn(a, b)
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS
}

// a 等于 a
export const defaultEquals = <T>(a: T, b: T): boolean => a === b

// a 与 b的大小判断
export const defaultCompare = <T>(a: T, b: T): number => {
    if (a === b) {
        return Compare.EQUALS
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

// 将数据转换成字符串
export const defaultToString = (item: unknown): string => {
    if (item === null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string') {
        return item
    }
    return item.toString()
}

// 反向对比
export const reverseCompare = <T>(
    compareFn: ICompareFunction<T>,
): ICompareFunction<T> => (a, b) => compareFn(b, a)

// 获取a 与 b的差值
export const defaultDiff = <T>(a: T, b: T): number => Number(a) - Number(b)

// 随机数组
export const RandomList: number[] = [1, 2, 3, 4, 7, 5]

// 排列数组
export const SortedList: number[] = [1, 2, 3, 4, 5, 7]

// 随机数组集合
export const RandomLists: number[][] = [
    [1, 2, 3, 4, 7, 5],
    [3, 9, 8, 7, 5, 1, 2, 3],
    [30, 4, 8, 1, 9, 5, 10, 5, 9, 3, 7],
    [5, 8, 9, 7, 2, 3, 6, 4, 5, 1, 22, 88, 66, 102, 1024],
    [5, 9, 8, 7, 3, 2, 0, 1, 88, 5, 125, 98, 127, 888, 555],
]

// 排列数组集合
export const SortedLists: number[][] = [
    [1, 2, 3, 4, 5, 7],
    [1, 2, 3, 3, 5, 7, 8, 9],
    [1, 3, 4, 5, 5, 7, 8, 9, 9, 10, 30],
    [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 22, 66, 88, 102, 1024],
    [0, 1, 2, 3, 5, 5, 7, 8, 9, 88, 98, 125, 127, 555, 888],
]

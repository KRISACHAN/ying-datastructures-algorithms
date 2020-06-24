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

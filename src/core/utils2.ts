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

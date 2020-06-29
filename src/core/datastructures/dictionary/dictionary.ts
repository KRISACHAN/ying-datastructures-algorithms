'use strict'
import { defaultToString } from '../../utils'
import { ValuePair, tableType } from '../../node'


/**
 * 在计算机科学中，关联数组（英语：Associative Array），又称映射（Map）、字典（Dictionary）是一个抽象的数据结构，它包含着类似于（键，值）的有序对。
 * 一个关联数组中的有序对可以重复（如C++中的multimap）也可以不重复（如C++中的map）。
 */
// 讲道理，我觉得在 JS 里实现 dict 类是很弱智的行为...
export default class Dictionary<K, V> {
    private table: tableType<K, V> = {} // 数据源
    constructor(private toStrFn = (key: K): string => defaultToString(key)) {
        this.toStrFn = toStrFn
    }

    // 向字典中添加新元素
    set(key: K, value: V): Dictionary<K, V> {
        if (key) {
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key, value)
        }
        return this
    }

    // 通过键值查找特定的数值并返回
    get(key: K): V {
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair?.value
    }

    // 如果某个键值存在于这个字典中，则返回true，反之则返回false
    hasKey(key: K): Boolean {
        const dict = this.table[this.toStrFn(key)]
        return (
            this.table[this.toStrFn(key)] !== null &&
            this.table[this.toStrFn(key)] !== undefined
        )
    }

    // 通过使用键值来从字典中移除键值对应的数据值
    remove(key: K): Dictionary<K, V> {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
        }
        return this
    }

    // 将字典所包含的所有数值以数组形式返回
    values(): V[] {
        return this.keyValues().map(
            (valuePair: ValuePair<K, V>) => valuePair.value,
        )
    }

    // 将字典所包含的所有键名以数组形式返回
    keys(): K[] {
        return this.keyValues().map(
            (valuePair: ValuePair<K, V>) => valuePair.key,
        )
    }

    // 将字典所包含的所有键与值以数组形式返回
    keyValues(): ValuePair<K, V>[] {
        return Object.values(this.table)
    }

    // 字典循环forEach
    forEach(callbackFn: (key: K, value: V) => any) {
        const valuePairs = this.keyValues()
        for (let i = 0, len = valuePairs.length; i < len; ++i) {
            callbackFn(valuePairs[i].key, valuePairs[i].value)
        }
    }

    // 字典循环map
    map(callbackFn: (key: K, value: V) => any): any[] {
        const valuePairs = this.keyValues()
        let resList: any[] = []
        for (let i = 0, len = valuePairs.length; i < len; ++i) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            resList.push(result)
        }
        return resList
    }

    // 字典循环filter
    filter(callbackFn: (key: K, value: V) => any): any[] {
        const valuePairs = this.keyValues()
        let resList: any[] = []
        for (let i = 0, len = valuePairs.length; i < len; ++i) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if (!result) {
                continue
            }
            resList.push(result)
        }
        return resList
    }

    // 返回字典所包含元素的数量。与数组的length属性类似
    size() {
        return Object.keys(this.table).length
    }

    // 是否为空
    isEmpty() {
        return this.size() === 0
    }

    // 将这个字典中的所有元素全部删除
    clear() {
        this.table = {}
    }

    // 打印字典
    print() {
        console.log(this.table)
    }

    // 打印字典字符串
    toString(): string {
        if (this.isEmpty()) {
            return ''
        }
        let objString = this.map((key, value) => `[${key}: ${value}]`).toString()
        return objString
    }
}

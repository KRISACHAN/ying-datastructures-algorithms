'use strict'
import { defaultToString, dataType } from '../../utils'
import { ValuePair, tableType } from '../../node'

/**
 * 散列表（Hash table，也叫哈希表），是根据键（Key）而直接访问在内存储存位置的数据结构。
 * 也就是说，它通过计算一个关于键值的函数，将所需查询的数据映射到表中一个位置来访问记录，这加快了查找速度。
 * 这个映射函数称做散列函数，存放记录的数组称做散列表。
 * 散列算法的作用是尽可能快地在数据结构中找到一个值。
 */
export default class HashTable<K, V> {
    private table: tableType<K, V> = {} // 数据源
    constructor(private toStrFn = (key: K): string => defaultToString(key)) {
        this.toStrFn = toStrFn
    }
    // 散列函数
    // 给定一个key参数，我们就能根据组成key的每个字符的ASCII码值的和得到一个数字。
    private loseloseHashCode(key: K, div: number = 37): number | K {
        if (dataType(key) === 'number') {
            return key
        }
        const tableKey: string = this.toStrFn(key)
        let hash: number = 0
        for (let i: number = 0, len = tableKey.length; i < len; ++i) {
            hash += tableKey.charCodeAt(i)
        }
        return hash % div
    }
    // 创建hash
    hashCode(key: K, div: number = 37): number | K {
        return this.loseloseHashCode(key, div)
    }
    put(key: K, value: V) {
        if (key && value) {
            
        }
    }
}

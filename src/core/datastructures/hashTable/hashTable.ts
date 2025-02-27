import { toString, dataType, isExistAll, eq } from 'core/utils'
import { ValuePair, tableType } from 'core/node'

/**
 * 散列表（Hash table，也叫哈希表），是根据键（Key）而直接访问在内存储存位置的数据结构。
 * 也就是说，它通过计算一个关于键值的函数，将所需查询的数据映射到表中一个位置来访问记录，这加快了查找速度。
 * 这个映射函数称做散列函数，存放记录的数组称做散列表。
 * 散列算法的作用是尽可能快地在数据结构中找到一个值。
 */

type KeyType = number | string

export default class HashTable<V> {
    private table: tableType<KeyType, V> = {} // 数据源
    constructor() {}
    // 散列函数
    // 给定一个key参数，我们就能根据组成key的每个字符的ASCII码值的和得到一个数字。
    private loseloseHashCode(key: KeyType, div = 37): KeyType {
        if (eq(dataType(key), 'number')) {
            return key
        }

        const tableKey: string = toString(key)

        let hash = 0
        for (let i = 0, len = tableKey.length; i < len; ++i) {
            hash += tableKey.charCodeAt(i)
        }

        return hash % div
    }
    // 创建hash
    hashCode(key: KeyType, div = 37): KeyType {
        return this.loseloseHashCode(key, div)
    }
    // 向散列表增加一个新的项
    put(key: KeyType, value: V): HashTable<V> {
        if (isExistAll(key, value)) {
            const position: KeyType = this.hashCode(key) // 查看表中位置
            this.table[position] = new ValuePair(key, value) // 赋值
        }

        return this
    }
    // 返回根据键值检索到的特定的值。
    get(key: KeyType): V {
        return this.table[this.hashCode(key)]?.value
    }
    // 根据键值从散列表中移除值。
    remove(key: KeyType): HashTable<V> {
        const hash: KeyType = this.hashCode(key)
        const valuePair = this.table[hash]
        if (valuePair) {
            delete this.table[hash]
        }
        return this
    }

    // 将表中所包含的所有数值以数组形式返回
    values(): V[] {
        return this.keyValues().map(
            (valuePair: ValuePair<KeyType, V>) => valuePair.value,
        )
    }

    // 将表中所包含的所有键名以数组形式返回
    keys(): KeyType[] {
        return this.keyValues().map(
            (valuePair: ValuePair<KeyType, V>) => valuePair.key,
        )
    }

    // 将表中所包含的所有键与值以数组形式返回
    keyValues(): ValuePair<KeyType, V>[] {
        return Object.values(this.table)
    }

    // 表中循环forEach
    forEach(callbackFn: (key: KeyType, value: V) => unknown): void {
        const valuePairs = this.keyValues()
        for (let i = 0, len = valuePairs.length; i < len; ++i) {
            callbackFn(valuePairs[i].key, valuePairs[i].value)
        }
    }

    // 表中循环map
    map(callbackFn: (key: KeyType, value: V) => unknown): unknown[] {
        const valuePairs = this.keyValues()
        const resList: unknown[] = []
        for (let i = 0, len = valuePairs.length; i < len; ++i) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            resList.push(result)
        }
        return resList
    }

    // 表中循环filter
    filter(callbackFn: (key: KeyType, value: V) => unknown): unknown[] {
        const valuePairs = this.keyValues()
        const resList: unknown[] = []
        for (let i = 0, len = valuePairs.length; i < len; ++i) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if (!result) {
                continue
            }
            resList.push(result)
        }
        return resList
    }

    // 是否为空
    isEmpty(): boolean {
        return eq(this.size(), 0)
    }

    // 返回表所包含元素的数量。与数组的length属性类似
    size(): number {
        return Object.keys(this.table).length
    }

    // 删除表内元素
    clear(): void {
        this.table = {}
    }

    // 获取当前表
    getTable(): tableType<KeyType, V> {
        return this.table
    }

    // 打印当前表
    print(): void {
        console.log(this.table)
    }

    // 打印当前表字符串
    toString(): string {
        if (this.isEmpty()) {
            return ''
        }
        const objString = this.map(
            (key, value) => `[#${key}: ${value}]`,
        ).toString()
        return objString
    }
}

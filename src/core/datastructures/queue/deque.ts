import { eq, toString } from 'core/utils2'
/**
 * 双端队列（deque，全名double-ended queue）：是一种具有队列和栈性质的抽象数据类型。双端队列中的元素可以从两端弹出，插入和删除操作限定在队列的两边进行。
 */
export default class Deque<T> {
    private items: T[] = [] // 保存队列的元素
    constructor() {
        this.items = []
    }
    addFront(element: T): void {
        // 从头部插入
        this.items.unshift(element)
    }
    addBack(element: T): void {
        // 从尾部插入
        this.items.push(element)
    }
    removeFront(): T {
        // 从头部清除
        const deletedHead = this.items.shift()
        return deletedHead
    }
    removeBack(): T {
        // 从尾部清除
        const deletedTail = this.items.pop()
        return deletedTail
    }
    peekFront(): T {
        // 选择头部
        return this.items[0]
    }
    peekBack(): T {
        // 选择尾部
        return this.items[this.size() - 1]
    }
    isEmpty(): boolean {
        // 能简单地判断队列的长度是否为0
        return eq(this.items.length, 0)
    }
    clear(): void {
        // 把队列中的元素全部移除
        this.items = []
        this.items.length = 0
    }
    size(): number {
        // 数组长度
        return this.items.length
    }
    toString(): string {
        // 字符串化
        return toString(this.items)
    }
    print(): void {
        // 打印队列
        console.log(this.toString())
    }
}

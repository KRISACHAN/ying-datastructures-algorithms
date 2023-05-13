import { eq, toString } from 'core/utils'
/**
 * 队列（Queue）：先进先出（FIFO, First In First Out）的数据结构
 */
export default class Queue<T> {
    private items: T[] = [] // 保存队列的元素
    constructor() {
        this.items = []
    }
    enqueue(element: T): Queue<T> {
        // 向队列尾部添加一个新的元素。
        this.items.push(element)
        return this
    }
    dequeue(): T {
        // 可删除并返回队列的第一个元素。
        const deletedHead: T = this.items.shift()
        return deletedHead
    }
    peek(): T {
        // 返回队列中第一个元素
        return this.items[0]
    }
    isEmpty(): boolean {
        // 能简单地判断队列的长度是否为0
        return eq(this.items.length, 0)
    }
    clear(): void {
        // 把队列中的元素全部移除
        this.items = []
    }
    size(): number {
        // 队列长度
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

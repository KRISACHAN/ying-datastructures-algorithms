import { eq, toString } from 'core/utils'
/**
 * 栈（Stack）：栈是一种遵从后进先出（LIFO, last-in-first-out）原则的有序集合。
 */
export default class Stack<T> {
    private items: T[] = [] // 保存栈里的元素
    constructor() {
        this.items = []
    }
    push(element: T): Stack<T> {
        // 添加一个新元素到栈顶
        this.items.push(element)
        return this
    }
    pop(): T {
        // 出栈
        const deletedTail = this.items.pop()
        return deletedTail
    }
    peek(): T {
        // 将返回栈顶的元素
        return this.items[this.size() - 1]
    }
    isEmpty(): boolean {
        // 能简单地判断内部栈的长度是否为0
        return eq(this.items.length, 0)
    }
    clear(): void {
        // 把栈中的元素全部移除
        this.items = []
        this.items.length = 0
    }
    size(): number {
        // 栈长度
        return this.items.length
    }
    toString(): string {
        // 字符串化
        return toString(this.items)
    }
    print(): void {
        // 打印栈
        console.log(this.toString())
    }
}

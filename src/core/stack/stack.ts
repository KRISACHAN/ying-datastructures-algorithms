'use strict'
/**
 * 栈（Stack）：后入先出（LIFO, last-in-first-out）的数据结构
 */
export default class Stack<T> {
    private items: WeakMap<object, Array<T>> = new WeakMap() // 保存栈里的元素
    constructor() {
        this.items.set(this, [])
    }
    push(element: T): void {
        // 添加一个新元素到栈顶
        let s: T[] = this.items.get(this)
        s.push(element)
    }
    pop(): T {
        // 出栈
        let s: T[] = this.items.get(this)
        let r: T = s.pop()
        return r
    }
    peek(): T {
        // 将返回栈顶的元素
        let s: T[] = this.items.get(this)
        return s[s.length - 1]
    }
    isEmpty(): boolean {
        // 能简单地判断内部栈的长度是否为0
        let s: T[] = this.items.get(this)
        return s.length === 0
    }
    clear(): void {
        // 把栈中的元素全部移除
        this.items.set(this, [])
    }
    size(): number {
        // 栈长度
        let s: T[] = this.items.get(this)
        return s.length
    }
    print(): void {
        // 打印栈
        let s: T[] = this.items.get(this)
        console.log(s.toString())
    }
}

/**
 * 栈（Stack）：栈是一种遵从后进先出（LIFO, last-in-first-out）原则的有序集合。
 */
export default class Stack<T> {
    private items: WeakMap<object, Array<T>> = new WeakMap() // 保存栈里的元素
    constructor() {
        this.items.set(this, [])
    }
    push(element: T): Stack<T> {
        // 添加一个新元素到栈顶
        const s: T[] = this.items.get(this)
        s.push(element)
        return this
    }
    pop(): T {
        // 出栈
        const s: T[] = this.items.get(this)
        const r: T = s.pop()
        return r
    }
    peek(): T {
        // 将返回栈顶的元素
        const s: T[] = this.items.get(this)
        const len: number = s.length
        if (!len) {
            return undefined
        }
        return s[len - 1]
    }
    isEmpty(): boolean {
        // 能简单地判断内部栈的长度是否为0
        const s: T[] = this.items.get(this)
        return s.length === 0
    }
    clear(): void {
        // 把栈中的元素全部移除
        this.items.set(this, [])
    }
    size(): number {
        // 栈长度
        const s: T[] = this.items.get(this)
        return s.length
    }
    toString(): string {
        // 字符串化
        if (this.isEmpty()) {
            return ''
        }
        const s: T[] = this.items.get(this)
        let objString = ''
        for (let i = 0, len = this.size(); i < len; ++i) {
            if (i < len - 1) {
                objString += `${s[i]},`
            } else {
                objString += `${s[i]}`
            }
        }
        return objString
    }
    print(): void {
        // 打印栈
        console.log(this.toString())
    }
}

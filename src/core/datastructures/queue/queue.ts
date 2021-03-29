/**
 * 队列（Queue）：先进先出（FIFO, First In First Out）的数据结构
 */
export default class Queue<T> {
    private items: WeakMap<Queue<T>, Array<T>> = new WeakMap() // 保存队列的元素
    constructor() {
        this.items.set(this, [])
    }
    enqueue(element: T): void {
        // 向队列尾部添加一个新的元素。
        const q: T[] = this.items.get(this)
        q.push(element)
    }
    dequeue(): T {
        // 可删除并返回队列的第一个元素。
        const q: T[] = this.items.get(this)
        const r: T = q.shift()
        return r
    }
    peek(): T {
        // 返回队列中第一个元素
        const q: T[] = this.items.get(this)
        return q[0]
    }
    isEmpty(): boolean {
        // 能简单地判断队列的长度是否为0
        const q: T[] = this.items.get(this)
        return q.length === 0
    }
    clear(): void {
        // 把队列中的元素全部移除
        this.items.set(this, [])
    }
    size(): number {
        // 队列长度
        const q: T[] = this.items.get(this)
        return q.length
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
        // 打印队列
        console.log(this.toString())
    }
}

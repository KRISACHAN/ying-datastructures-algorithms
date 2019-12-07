'use strict'
/**
 * 队列（Queue）：先进先出（FIFO, First In First Out）的数据结构
 */
export default class Queue<T> {
    private items: WeakMap<object, Array<T>> = new WeakMap()  // 保存队列的元素
    constructor() {
        this.items.set(this, [])
    }
    enqueue(element: T): void {  // 向队列尾部添加一个新的项。   
        let q: T[] = this.items.get(this)
        q.push(element)
    }
    dequeue(): T { // 移除队列的第一项，并返回被移除的元素。
        let q: T[] = this.items.get(this)
        let r: T = q.shift()
        return r
    }
    peek(): T { // 返回队列中第一个元素
        let q: T[] = this.items.get(this)
        return q[0]
    }
    isEmpty(): boolean { // 能简单地判断队列的长度是否为0
        let q: T[] = this.items.get(this)
        return q.length == 0
    }
    clear(): void { // 把队列中的元素全部移除
        this.items.set(this, [])
    }
    size(): number { // 队列长度
        let q: T[] = this.items.get(this)
        return q.length
    }
    print(): void { // 打印队列
        let q = this.items.get(this)
        console.log(q.toString())
    }
}
'use strict'
/**
 * 队列（Queue）：先进先出（FIFO, First In First Out）的数据结构
 */
export default class Queue<T> {
    private items: WeakMap<object, Array<T>> = new WeakMap()  // 保存队列的元素
    constructor() {
        this.items.set(this, [])
    }
    enqueue(element: T): void {  // 向队尾添加一个元素     
        let q: T[] = this.items.get(this)
        q.push(element)
    }
    dequeue(): T { // 删除队首的元素
        let q: T[] = this.items.get(this)
        let r: T = q.shift()
        return r
    }
    front(): T { // 读取队首
        let q: T[] = this.items.get(this)
        return q[0]
    }
    back(): T { // 读取队尾 不推荐使用
        let q: T[] = this.items.get(this)
        return q[q.length - 1]
    }
    isEmpty(): boolean { // 能简单地判断队列的长度是否为0
        let q: T[] = this.items.get(this)
        return q.length == 0
    }
    clear(): void { // 把队列中的元素全部移除
        this.items.set(this, [])
    }
    size(): number { // 数组长度
        let q: T[] = this.items.get(this)
        return q.length
    }
    print(): void { // 打印数组
        let q = this.items.get(this)
        console.log(q.toString())
    }
}
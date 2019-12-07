'use strict'
/**
 * 双端队列（deque，全名double-ended queue）：是一种具有队列和栈性质的抽象数据类型。双端队列中的元素可以从两端弹出，插入和删除操作限定在队列的两边进行。
 */
export default class Deque<T> {
    private items: WeakMap<object, Array<T>> = new WeakMap()  // 保存队列的元素
    constructor() {
        this.items.set(this, [])
    }
    addFront(element: T): void { // 从头部插入
        let q: T[] = this.items.get(this)
        this.items.set(this, [element, ...q])
    }
    addBack(element: T): void { // 从尾部插入
        let q: T[] = this.items.get(this)
        this.items.set(this, [...q, element])
    }
    removeFront(): T { // 从头部清除
        let q: T[] = this.items.get(this)
        let r: T = q.shift()
        return r
    }
    removeBack(): T { // 从尾部清除
        let q: T[] = this.items.get(this)
        let r: T = q.pop()
        return r
    }
    peekFront(): T { // 选择头部
        let q: T[] = this.items.get(this)
        return q[0]
    }
    peekBack(): T { // 选择尾部
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
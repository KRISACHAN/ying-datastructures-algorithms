'use strict'
import { defaultCompare, ICompareFunction, Compare } from '../../utils'

class QueueElement<T> {
    // 带权重的队列元素
    public element: T
    public priority: number
    constructor(element: T, priority: number) {
        this.element = element
        this.priority = priority
    }
}

/**
 * 优先队列（Priority Queue）：带有权重的队列
 *
 * 这里用js的数组来实现
 */
export default class PriorityQueue<T> {
    private items: WeakMap<object, Array<T>> = new WeakMap() // 保存队列的元素
    public compareFn: ICompareFunction<number>
    public compare: Compare
    constructor(
        compareFn: ICompareFunction<number> = defaultCompare,
        compare: Compare = Compare.LESS_THAN,
    ) {
        this.compareFn = compareFn
        this.compare = compare
        this.items.set(this, [])
    }
    enqueue(element: T, priority: number): PriorityQueue<T> {
        // 向队尾添加一个元素以及权重
        let queueElement: QueueElement<T> = new QueueElement<T>(
            element,
            priority,
        )
        let added: boolean = false
        let q: any[] = this.items.get(this)
        if (this.isEmpty()) {
            q.push(queueElement)
        } else {
            for (let i: number = 0; i < q.length; ++i) {
                if (
                    this.compareFn(queueElement.priority, q[i].priority) ===
                    this.compare
                ) {
                    q.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            if (!added) {
                q.push(queueElement)
            }
        }
        return this
    }
    dequeue(): T {
        // 删除队首的元素
        let q: T[] = this.items.get(this)
        let r: T = q.shift()
        return r
    }
    front(): T {
        // 读取队首
        let q: T[] = this.items.get(this)
        return q[0]
    }
    back(): T {
        // 读取队尾
        let q: T[] = this.items.get(this)
        return q[q.length - 1]
    }
    isEmpty(): boolean {
        // 能简单地判断内部队列的长度是否为0
        let q: T[] = this.items.get(this)
        return q.length == 0
    }
    clear(): void {
        // 把队列中的元素全部移除
        this.items.set(this, [])
    }
    size(): number {
        // 队列长度
        let q: T[] = this.items.get(this)
        return q.length
    }
    toString(): string {
        // 字符串化
        if (this.isEmpty()) {
            return ''
        }
        let q: any[] = this.items.get(this)
        let objString: string = ''
        for (let i = 0, len = this.size(); i < len; ++i) {
            if (i < len - 1) {
                objString += `${q[i].element},`
            } else {
                objString += `${q[i].element}`
            }
        }
        return objString
    }
    print(): void {
        // 打印队列
        console.log(this.toString())
    }
}

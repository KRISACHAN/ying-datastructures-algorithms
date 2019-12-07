'use strict'
import {
    Compare,
    defaultCompare
} from '../../utils'
import {
    ICompareFunction
} from '../../global'

type elementType = any

class QueueElement { // 带权重的队列元素
    public element: elementType
    public priority: number
    constructor(element: elementType, priority: number) {
        this.element = element
        this.priority = priority
    }
}

/**
 * 优先队列（Priority Queue）：带有权重的队列
 */
export default class PriorityQueue {
    private items: WeakMap<object, Array<QueueElement>> = new WeakMap()  // 保存队列的元素
    public compareFn: ICompareFunction<number>
    public compare: Compare
    constructor(
        compareFn: ICompareFunction<number> = defaultCompare,
        compare: Compare = Compare.LESS_THAN
    ) {
        this.compareFn = compareFn
        this.compare = compare
        this.items.set(this, [])
    }
    enqueue(element: elementType, priority: number): void {  // 向队尾添加一个元素以及权重
        let queueElement: QueueElement = new QueueElement(element, priority)
        let added: boolean = false
        let s: QueueElement[] = this.items.get(this)
        if (this.isEmpty()) {
            s.push(queueElement)
        } else {
            for (let i: number = 0; i < s.length; ++i) {
                if (this.compareFn(queueElement.priority, s[i].priority) === this.compare) {
                    s.splice(i, 0, queueElement)
                    added = true
                    break
                } 
            }     
            if (!added) {       
                s.push(queueElement)
            }
        }
    }
    dequeue(): QueueElement { // 删除队首的元素   
        let q: QueueElement[] = this.items.get(this)
        let r: QueueElement = q.shift()
        return r
    }
    front(): QueueElement { // 读取队首
        let q: QueueElement[] = this.items.get(this)
        return q[0]
    }
    back(): QueueElement { // 读取队尾
        let q: QueueElement[] = this.items.get(this)
        return q[q.length - 1]
    }
    isEmpty(): boolean { // 能简单地判断内部队列的长度是否为0
        let q: QueueElement[] = this.items.get(this)
        return q.length == 0
    }
    clear(): void { // 把队列中的元素全部移除
        this.items.set(this, [])
    }
    size(): number { // 队列长度
        let q: QueueElement[] = this.items.get(this)
        return q.length
    }
    print(): void { // 打印队列
        let q: QueueElement[] = this.items.get(this)
        for (let i: number = 0; i < q.length; ++i) {       
            console.log(`${q[i].element} - ${q[i].priority}`) 
        }   
    }
}
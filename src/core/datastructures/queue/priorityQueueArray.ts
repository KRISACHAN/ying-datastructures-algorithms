import { eq, lt } from 'core/utils2'

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
    private items: QueueElement<T>[] // 保存队列的元素
    constructor() {
        this.items = []
    }
    enqueue(element: T, priority: number): PriorityQueue<T> {
        // 向队尾添加一个元素以及权重
        const queueElement: QueueElement<T> = new QueueElement<T>(
            element,
            priority,
        )
        let added = false
        if (this.isEmpty()) {
            this.items.push(queueElement)
        } else {
            for (let i = 0; i < this.size(); ++i) {
                if (lt(queueElement.priority, this.items[i].priority)) {
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            if (!added) {
                this.items.push(queueElement)
            }
        }
        return this
    }
    dequeue(): QueueElement<T> {
        // 删除队首的元素
        return this.items.shift()
    }
    front(): QueueElement<T> {
        // 读取队首
        return this.items[0]
    }
    back(): QueueElement<T> {
        // 读取队尾
        return this.items[this.size() - 1]
    }
    isEmpty(): boolean {
        // 能简单地判断内部队列的长度是否为0
        return eq(this.items.length, 0)
    }
    clear(): void {
        // 把队列中的元素全部移除
        this.items = []
        this.items.length = 0
    }
    size(): number {
        // 队列长度
        return this.items.length
    }
    toString(): string {
        // 字符串化
        if (this.isEmpty()) {
            return ''
        }

        let objString = ''
        for (let i = 0, len = this.size(); i < len; ++i) {
            objString += `${this.items[i].element}${i < len - 1 ? ',' : ''}`
        }

        return objString
    }
    print(): void {
        // 打印队列
        console.log(this.toString())
    }
}

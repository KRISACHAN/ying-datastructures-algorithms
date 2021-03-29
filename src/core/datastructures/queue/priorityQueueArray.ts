import { defaultCompare, ICompareFunction, Compare } from 'core/utils'

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
    constructor(public compareFn: ICompareFunction<number> = defaultCompare) {
        this.compareFn = compareFn
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
                if (
                    this.compareFn(
                        queueElement.priority,
                        this.items[i].priority,
                    ) === Compare.LESS_THAN
                ) {
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
        return this.size() === 0
    }
    clear(): void {
        // 把队列中的元素全部移除
        this.items = []
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
            if (i < len - 1) {
                objString += `${this.items[i].element},`
            } else {
                objString += `${this.items[i].element}`
            }
        }
        return objString
    }
    print(): void {
        // 打印队列
        console.log(this.toString())
    }
}

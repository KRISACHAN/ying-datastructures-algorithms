import { eq } from 'core/utils'

/**
 * 循环队列（Circular Queue）：是一种线性数据结构，其操作表现基于 FIFO 原则
 * 并且队尾被连接在队首之后以形成一个循环
 */
export default class CircularQueue<T> {
    private items: T[] // 保存队列的元素
    private capacity: number // 队列容量
    private front: number // 队首指针
    private rear: number // 队尾指针
    private currentLength: number // 当前队列长度

    constructor(capacity: number) {
        this.capacity = Math.max(Number(capacity), 0) || 5 // 默认容量为5
        this.items = new Array(this.capacity)
        this.front = 0
        this.rear = -1
        this.currentLength = 0
    }

    enqueue(element: T): boolean {
        // 队列已满则无法入队
        if (this.isFull()) {
            return false
        }
        // 移动rear指针并添加元素
        this.rear = (this.rear + 1) % this.capacity
        this.items[this.rear] = element
        this.currentLength++
        return true
    }

    dequeue(): T | null {
        // 队列为空则返回null
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength--
        return item
    }

    peek(): T | null {
        // 返回队首元素
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.front]
    }

    isEmpty(): boolean {
        return eq(this.currentLength, 0)
    }

    isFull(): boolean {
        return eq(this.currentLength, this.capacity)
    }

    size(): number {
        return this.currentLength
    }

    clear(): void {
        this.items = new Array(this.capacity)
        this.front = 0
        this.rear = -1
        this.currentLength = 0
    }

    toString(): string {
        if (this.isEmpty()) {
            return ''
        }

        let str = ''
        let i = this.front
        for (let count = 0; count < this.currentLength; count++) {
            str += `${this.items[i]}${
                count < this.currentLength - 1 ? ',' : ''
            }`
            i = (i + 1) % this.capacity
        }
        return str
    }

    print(): void {
        console.log(this.toString())
    }
}

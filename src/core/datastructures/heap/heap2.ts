import { Swap, eq, lt, gt, toString } from 'core/utils2'
/**
 * 堆（英语：Heap）：给定堆中任意节点P和C，若P是C的母节点，那么P的值会小于等于（或大于等于）C的值。
 * 最小堆（min heap）：若母节点的值恒小于等于子节点的值，此堆称为最小堆（min heap）；
 * 最大堆（max heap：反之，若母节点的值恒大于等于子节点的值，此堆称为最大堆（max heap）。
 * 根节点（root node）：在堆中最顶端的那一个节点，称作根节点（root node），根节点本身没有母节点（parent node）。
 */
export class Heap<T> {
    private items: T[] = [] // 保存堆结构的元素
    constructor() {
        if (eq(new.target, Heap)) {
            throw new TypeError('Cannot construct Heap instance directly')
        }
    }
    private getLeftChildIndex(parentIndex: number): number {
        // 获取左子节点下标
        return 2 * parentIndex + 1
    }

    private getRightChildIndex(parentIndex: number): number {
        // 获取右子节点下标
        return 2 * parentIndex + 2
    }

    private getParentIndex(childIndex: number): number {
        // 获取父节点下标
        if (eq(childIndex, 0)) {
            return undefined
        }
        return Math.floor((childIndex - 1) / 2)
    }

    private hasParent(childIndex: number): boolean {
        // 判断是否有父节点
        return this.getParentIndex(childIndex) >= 0
    }

    private hasLeftChild(parentIndex: number): boolean {
        // 判断是否有左子节点
        return this.getLeftChildIndex(parentIndex) < this.items.length
    }

    private hasRightChild(parentIndex: number): boolean {
        // 判断是否有右子节点
        return this.getRightChildIndex(parentIndex) < this.items.length
    }

    private getLeftChild(parentIndex: number): T {
        // 获取左子节点
        return this.items[this.getLeftChildIndex(parentIndex)]
    }

    private getRightChild(parentIndex: number): T {
        // 获取右子节点
        return this.items[this.getRightChildIndex(parentIndex)]
    }

    private getParent(childIndex: number): T {
        // 获取父节点
        return this.items[this.getParentIndex(childIndex)]
    }

    size(): number {
        return this.items.length
    }

    insert(element: T): Heap<T> {
        // 添加元素
        this.items.push(element)
        this.heapifyUp()

        return this
    }

    find(element: T): number[] {
        // 寻找指定元素
        const foundList: number[] = []

        for (let i = 0, len: number = this.size(); i < len; ++i) {
            if (eq(element, this.items[i])) {
                foundList.push(i)
            }
        }

        return foundList
    }

    remove(element: T): Heap<T> {
        // 删除指定元素
        for (let i = 0, len: number = this.find(element).length; i < len; ++i) {
            const tail: number = this.find(element).pop()

            if (eq(tail, this.size() - 1)) {
                this.items.pop()
            } else {
                this.items[tail] = this.items.pop()
                const parentItem = this.getParent(tail)

                if (
                    this.hasLeftChild(tail) &&
                    (!parentItem ||
                        this.heapCompare(parentItem, this.items[tail]))
                ) {
                    this.heapifyDown(tail)
                } else {
                    this.heapifyUp(tail)
                }
            }
        }

        return this
    }

    peek(): T {
        // 查看堆顶
        if (this.isEmpty()) {
            return null
        }

        return this.items[0]
    }

    poll(): T {
        // 将堆尾换到堆头
        if (this.isEmpty()) {
            return null
        }

        if (eq(this.size(), 1)) {
            return this.items.pop()
        }

        const item: T = this.items[0]
        this.items[0] = this.items.pop()
        this.heapifyDown()

        return item
    }

    private heapifyUp(startIndex?: number): void {
        // 下标上浮
        let currentIndex: number = startIndex || this.size() - 1
        while (
            this.hasParent(currentIndex) &&
            !this.heapCompare(
                this.getParent(currentIndex),
                this.items[currentIndex],
            )
        ) {
            Swap(this.items, currentIndex, this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    private heapifyDown(startIndex = 0): void {
        // 下标下沉
        let currentIndex: number = startIndex
        let nextIndex: number | null = null
        while (this.hasLeftChild(currentIndex)) {
            if (
                this.hasRightChild(currentIndex) &&
                this.heapCompare(
                    this.getRightChild(currentIndex),
                    this.getLeftChild(currentIndex),
                )
            ) {
                nextIndex = this.getRightChildIndex(currentIndex)
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex)
            }

            if (
                this.heapCompare(
                    this.items[currentIndex],
                    this.items[nextIndex],
                )
            ) {
                break
            }

            Swap(this.items, currentIndex, nextIndex)

            currentIndex = nextIndex
        }
    }

    heapCompare(data1: T, data2: T): boolean {
        console.log(data1)
        console.log(data2)
        // 设置堆类型的对比方法
        throw new Error('Need to rewrite !')
    }

    isEmpty(): boolean {
        return eq(this.size(), 0)
    }

    toString(): string {
        return toString(this.items)
    }

    print(): void {
        console.log(this.items)
    }
}

export class MinHeap<T> extends Heap<T> {
    // 最小堆
    constructor() {
        super()
    }
    heapCompare(data1: T, data2: T): boolean {
        return lt(data1, data2)
    }
}

export class MaxHeap<T> extends Heap<T> {
    // 最大堆
    constructor() {
        super()
    }
    heapCompare(data1: T, data2: T): boolean {
        return gt(data1, data2)
    }
}

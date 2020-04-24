'use strict'
import { Compare, defaultCompare, reverseCompare, Swap } from '../utils'
/**
 * 堆（英语：Heap）：给定堆中任意节点P和C，若P是C的母节点，那么P的值会小于等于（或大于等于）C的值。
 * 最小堆（min heap）：若母节点的值恒小于等于子节点的值，此堆称为最小堆（min heap）；
 * 最大堆（max heap：反之，若母节点的值恒大于等于子节点的值，此堆称为最大堆（max heap）。
 * 根节点（root node）：在堆中最顶端的那一个节点，称作根节点（root node），根节点本身没有母节点（parent node）。
 */
export class Heap<T> {
    private items: WeakMap<object, Array<T>> = new WeakMap() // 保存堆结构的元素
    constructor() {
        if (new.target === Heap) {
            throw new TypeError('Cannot construct Heap instance directly')
        }
        this.items.set(this, [])
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
        if (childIndex === 0) {
            return undefined
        }
        return Math.floor((childIndex - 1) / 2)
    }

    size(): number {
        // 获取堆长度
        let h: T[] = this.items.get(this)
        return h.length
    }

    isEmpty(): boolean {
        // 判断堆是否为空
        let h: T[] = this.items.get(this)
        return !h.length
    }

    clear(): void {
        // 重置堆
        this.items.set(this, [])
    }

    print(): void {
        // 打印堆
        let h: T[] = this.items.get(this)
        console.log(h)
    }

    insert(value: T): Heap<T> {
        // 插入元素
        if (value !== null) {
            let h: T[] = this.items.get(this)
            const index: number = h.length
            h.push(value)
            this.siftUp(index)
        }
        return this
    }

    pairIsInCorrectOrder(firstElement: T, secondElement: T): Boolean {
        // 判断是否正确的命令
        throw new Error(
            `You have to implement heap pair comparision method for ${firstElement} and ${secondElement} values. `,
        )
    }

    private siftDown(index: number): void {
        // 向下筛选
        let h: T[] = this.items.get(this)
        let element: number = index
        const left = this.getLeftChildIndex(index)
        const right = this.getRightChildIndex(index)
        const size = this.size()

        if (left < size && this.pairIsInCorrectOrder(h[element], h[left])) {
            element = left
        }

        if (right < size && this.pairIsInCorrectOrder(h[element], h[right])) {
            element = right
        }

        if (index !== element) {
            Swap(h, index, element)
            this.siftDown(element)
        }
    }

    private siftUp(index: number): void {
        // 向上筛选
        let parent: number = this.getParentIndex(index)
        let h: T[] = this.items.get(this)
        while (index > 0 && this.pairIsInCorrectOrder(h[parent], h[index])) {
            Swap(h, parent, index)
            index = parent
            parent = this.getParentIndex(index)
        }
    }

    extract(): T {
        // 删除顶端值
        if (this.isEmpty()) {
            return undefined
        }
        let h: T[] = this.items.get(this)
        if (this.size() === 1) {
            return h.shift()
        }
        const removedValue = h[0]
        h[0] = h.pop()
        this.siftDown(0)
        return removedValue
    }

    toString() {
        let h: T[] = this.items.get(this)
        return h.toString()
    }

    heapify(list: T[]): Heap<T> {
        // 使元素变为堆
        if (list) {
            this.items.set(this, list)
        }
        const maxIndex: number = Math.floor(this.size() / 2) - 1
        for (let i: number = 0; i <= maxIndex; ++i) {
            this.siftDown(i)
        }
        return this
    }
}

export class MinHeap<T> extends Heap<T> {
    // 最小堆
    constructor() {
        super()
    }
    pairIsInCorrectOrder(firstElement: T, secondElement: T): Boolean {
        return (
            defaultCompare(firstElement, secondElement) === Compare.BIGGER_THAN
        )
    }
}

export class MaxHeap<T> extends Heap<T> {
    // 最大堆
    constructor() {
        super()
    }
    pairIsInCorrectOrder(firstElement: T, secondElement: T): Boolean {
        return (
            reverseCompare(defaultCompare)(firstElement, secondElement) ===
            Compare.BIGGER_THAN
        )
    }
}

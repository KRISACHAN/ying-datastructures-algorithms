'use strict'
import { defaultCompare, Swap, Compare, isExist } from 'core/utils'
/**
 * 堆（英语：Heap）：给定堆中任意节点P和C，若P是C的母节点，那么P的值会小于等于（或大于等于）C的值。
 * 最小堆（min heap）：若母节点的值恒小于等于子节点的值，此堆称为最小堆（min heap）；
 * 最大堆（max heap：反之，若母节点的值恒大于等于子节点的值，此堆称为最大堆（max heap）。
 * 根节点（root node）：在堆中最顶端的那一个节点，称作根节点（root node），根节点本身没有母节点（parent node）。
 */
export class Heap<T> {
    private items: WeakMap<object, Array<T>> = new WeakMap() // 保存堆结构的元素
    compare = (a: any, b: any): any => {}
    constructor(compare: any = defaultCompare) {
        if (new.target === Heap) {
            throw new TypeError('Cannot construct Heap instance directly')
        }
        this.compare = compare
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

    private hasParent(childIndex: number): boolean {
        // 判断是否有父节点
        return this.getParentIndex(childIndex) >= 0
    }

    private hasLeftChild(parentIndex: number): boolean {
        // 判断是否有左子节点
        let h: T[] = this.items.get(this)
        return this.getLeftChildIndex(parentIndex) < h.length
    }

    private hasRightChild(parentIndex: number): boolean {
        // 判断是否有右子节点
        let h: T[] = this.items.get(this)
        return this.getRightChildIndex(parentIndex) < h.length
    }

    private getLeftChild(parentIndex: number): T {
        // 获取左子节点
        let h: T[] = this.items.get(this)
        return h[this.getLeftChildIndex(parentIndex)]
    }

    private getRightChild(parentIndex: number): T {
        // 获取右子节点
        let h: T[] = this.items.get(this)
        return h[this.getRightChildIndex(parentIndex)]
    }

    private getParent(childIndex: number): T {
        // 获取父节点
        let h: T[] = this.items.get(this)
        return h[this.getParentIndex(childIndex)]
    }

    insert(element: T): Heap<T> {
        // 添加元素
        let h: T[] = this.items.get(this)
        h.push(element)
        this.heapifyUp()
        return this
    }

    find(element: T, comparator = this.compare): number[] {
        // 寻找指定元素
        const foundList: any[] = []
        let h: T[] = this.items.get(this)
        for (let i: number = 0, len: number = h.length; i < len; ++i) {
            if (comparator(element, h[i]) === Compare.EQUALS) {
                foundList.push(i)
            }
        }
        return foundList
    }

    remove(element: T, comparator = this.compare): Heap<T> {
        // 删除指定元素
        for (
            let i: number = 0,
                len: number = this.find(element, comparator).length;
            i < len;
            ++i
        ) {
            const tail: number = this.find(element, comparator).pop()
            let h: T[] = this.items.get(this)
            if (tail === h.length - 1) {
                h.pop()
            } else {
                h[tail] = h.pop()
                const parentItem = this.getParent(tail)
                if (
                    this.hasLeftChild(tail) &&
                    (!parentItem || this.heapCompare(parentItem, h[tail]))
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
        let h: T[] = this.items.get(this)
        if (h.length === 0) {
            return null
        }
        return h[0]
    }

    poll(): T {
        // 将堆尾换到堆头
        let h: T[] = this.items.get(this)
        if (h.length === 0) {
            return null
        }
        if (h.length === 1) {
            return h.pop()
        }
        const item: T = h[0]
        h[0] = h.pop()
        this.heapifyDown()
        return item
    }

    private heapifyUp(startIndex?: number): void {
        // 下标上浮
        let h: T[] = this.items.get(this)
        let currentIndex: number = startIndex || h.length - 1
        while (
            this.hasParent(currentIndex) &&
            !this.heapCompare(this.getParent(currentIndex), h[currentIndex])
        ) {
            Swap(h, currentIndex, this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    private heapifyDown(startIndex: number = 0): void {
        // 下标下沉
        let h: T[] = this.items.get(this)
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
            if (this.heapCompare(h[currentIndex], h[nextIndex])) {
                break
            }
            Swap(h, currentIndex, nextIndex)
            currentIndex = nextIndex
        }
    }

    heapCompare(data1: any, data2: any): any {
        // 设置堆类型的对比方法
        throw new Error('Need to rewrite !')
    }

    isEmpty(): boolean {
        let h: T[] = this.items.get(this)
        return !h.length
    }

    toString(): string {
        let h: T[] = this.items.get(this)
        return h.toString()
    }

    print(): void {
        let h: T[] = this.items.get(this)
        console.log(h)
    }
}

export class MinHeap<T> extends Heap<T> {
    // 最小堆
    constructor() {
        super()
    }
    heapCompare(data1: any, data2: any): any {
        return this.compare(data1, data2) === Compare.LESS_THAN
    }
}

export class MaxHeap<T> extends Heap<T> {
    // 最大堆
    constructor() {
        super()
    }
    heapCompare(data1: any, data2: any): any {
        return this.compare(data1, data2) === Compare.BIGGER_THAN
    }
}

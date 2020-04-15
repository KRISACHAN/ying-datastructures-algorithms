'use strict'
import { 
    LLNode
} from '../node'
/**
 * 链表（LinkedList）：链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个
元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。
 */
export default class LinkedList<T> {
    head: null | LLNode<T> = null
    length: number = 0
    constructor() {
        this.head = null // 链表头部
        this.length = 0 // 链表长度
    }

    append(element: T): LinkedList<T> {
        // 插入节点
        let node: LLNode<T> = new LLNode(element)
        let current: null | LLNode<T>
        if (this.head === null) {
            // 列表中第一个节点
            this.head = node
        } else {
            current = this.head
            // 循环列表，直到找到最后一项
            while (current.next) {
                current = current.next
            }
            // 找到最后一项，将其next赋为node，建立链接
            current.next = node
        }
        this.length++ // 更新列表的长度
        return this
    }

    insert(position: number, element: T): LinkedList<T> {
        // 向列表的特点位置插入一个新的元素
        //检查越界值
        if (position < 0) {
            throw new Error('position must equal or bigger than 0')
        }
        if (position > this.length) {
            let index: number = position - this.length;
            while (index-- > 0) {
                this.append(null)
            }
            this.append(element);
        } else if (position <= this.length) {
            if (this.length === 0) {
                this.append(element)
            } else {
                let node: LLNode<T> = new LLNode(element)
                let current: null | LLNode<T> = this.head
                let previous: null | LLNode<T>
                let index: number = 0
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
                this.length++
            }
        }
        return this
    }

    getAt(position: number): null | LLNode<T> {
        // 获取指定位置的元素。
        if (position >= 0 && position <= this.length) {
            let node: null | LLNode<T> = this.head;
            for (let i = 0; i < position && node != null; ++i) {
                node = node.next
            }
            return node
        }
        return null
    }

    removeAt(position: number): T | null {
        // 从列表的特定位置移除一项。
        //检查越界值
        if (position > -1 && position < this.length) {
            let current: null | LLNode<T> = this.head;
            let previous: null | LLNode<T>;
            let index: number = 0;
            //移除第一项
            if (position === 0) {
                this.head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                //将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next
            }
            this.length--
            return current.element
        } else {
            return null
        }
    }

    indexOf(element: T): number {
        // 返回元素在列表中的索引。如果列表中没有该元素则返回-1。
        let current: null | LLNode<T> = this.head
        let index: number = 0
        while (current) {
            if (element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    remove(element: T): T | null {
        // 从列表中移除一项。
        let index: number = this.indexOf(element)
        return this.removeAt(index)
    }

    isEmpty(): boolean {
        // 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
        return this.length === 0
    }

    size(): number {
        // 返回链表包含的元素个数。与数组的length属性类似。
        return this.length
    }

    getHead(): LLNode<T> {
        // 返回头部信息
        return this.head || null
    }

    clear(): void {
        this.head = null
        this.length = 0
    }

    toString(): string {
        if (this.head == null) {
            return ''
        }
        let objString: string = `${this.head.element}`;
        let current: null | LLNode<T> = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }

    print(): void {
        // 打印
        console.log(this)
    }
}

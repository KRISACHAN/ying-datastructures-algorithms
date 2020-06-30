'use strict'
import { DLLNode } from 'core/node'
import LinkedList from './linkedList'
/**
 * 双向链表（DoublyLinkedList）：双向链表与普通链表的区别在于，双向链表是双向的....有点废话
 */
export default class DoublyLinkedList<T> extends LinkedList<T> {
    public head: DLLNode<T> | undefined // 表头
    public tail: DLLNode<T> | undefined // 表尾

    constructor() {
        super()
        // this.head = null // 链表头部
        // this.length = 0 // 链表长度
    }

    append(element: T): DoublyLinkedList<T> {
        let node: DLLNode<T> = new DLLNode(element)
        if (this.head === null) {
            // 链表中第一个节点
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++ // 更新链表的长度
        return this
    }

    insert(position: number, element: T): DoublyLinkedList<T> {
        // 向链表的特定位置插入一个新的元素。
        //检查越界值
        if (position >= 0 && position <= this.length) {
            let node: DLLNode<T> = new DLLNode(element)
            let current: DLLNode<T> = this.head
            let previous: DLLNode<T>
            let index: number = 0
            if (position === 0) {
                if (!this.head) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = current
                    current.prev = node
                    this.head = node
                }
            } else if (position === this.length) {
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node

                current.prev = node
                node.prev = previous
            }
            this.length++
        }
        return this
    }

    removeAt(position: number): T | null {
        // 删除指定位置元素
        if (position >= 0 && position < this.length) {
            let current = this.head
            if (position === 0) {
                this.head = this.head.next
                if (this.length === 1) {
                    this.tail = null
                } else {
                    this.head.prev = null
                }
            } else if (position === this.length - 1) {
                current = this.tail
                this.tail = current.prev
                this.tail.next = null
            } else {
                current = this.getAt(position)
                const previous = current.prev
                previous.next = current.next
                current.next.prev = previous
            }
            this.length--
            return current.element
        } else {
            return null
        }
    }

    getTail(): DLLNode<T> {
        // 返回尾部信息
        return this.tail || null
    }

    toString(): string {
        // 转换为字符串
        if (this.tail == null) {
            return ''
        }
        let objString = `${this.tail.element}`
        let previous = this.tail.prev
        while (previous != null) {
            objString = `${objString},${previous.element}`
            previous = previous.prev
        }
        return objString
    }

    print() {
        console.log(this.toString())
    }

    clear() {
        super.clear()
        this.tail = null
    }
}

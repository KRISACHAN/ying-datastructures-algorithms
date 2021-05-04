import { LLNode } from 'core/node'
import LinkedList from './linkedList'
import { eq, isExist, gte, lte, lt } from 'core/utils2'

/**
 * 循环链表（CircularLinkedList）：循环链表跟普通链表的区别就是循环链表是头尾相连的
 */
export default class CircularLinkedList<T> extends LinkedList<T> {
    constructor() {
        super()
    }

    append(element: T): CircularLinkedList<T> {
        // 向链表尾部添加一个新的元素。
        const node: LLNode<T> = new LLNode(element)
        let current: LLNode<T>

        if (!isExist(this.head)) {
            // 链表中第一个节点
            this.head = node
        } else {
            current = this.getAt(this.size() - 1)
            current.next = node
        }

        node.next = this.head
        this.length++

        return this
    }

    insert(position: number, element: T): CircularLinkedList<T> {
        // 向链表的特定位置插入一个新的元素。
        if (gte(position, 0) && lte(position, this.length)) {
            const node: LLNode<T> = new LLNode(element)
            let current: LLNode<T> = this.head

            if (eq(position, 0)) {
                if (!isExist(this.head)) {
                    this.head = node
                    node.next = this.head
                } else {
                    node.next = current
                    current = this.getAt(this.size())
                    this.head = node
                    current.next = this.head
                }
            } else {
                const previous: LLNode<T> = this.getAt(position - 1)
                node.next = previous.next
                previous.next = node
            }

            this.length++
        }
        return this
    }

    removeAt(position: number): T | null {
        // 向链表的特定位置插入一个元素。
        if (gte(position, 0) && lt(position, this.length)) {
            let current: LLNode<T> = this.head

            if (eq(position, 0)) {
                if (eq(this.size(), 1)) {
                    this.head = null
                } else {
                    const removed = this.head
                    current = this.getAt(this.size() - 1)
                    this.head = this.head.next
                    current.next = this.head
                    current = removed
                }
            } else {
                const previous = this.getAt(position - 1)
                current = previous.next
                previous.next = current.next
            }

            this.length--
            return current.element
        }

        return null
    }
}

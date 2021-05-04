import { DLLNode } from 'core/node'
import LinkedList from './linkedList'
import { eq, isExist, gte, lte, lt } from 'core/utils2'

/**
 * 双向链表（DoublyLinkedList）：双向链表与普通链表的区别在于，双向链表是双向的....有点废话
 */
export default class DoublyLinkedList<T> extends LinkedList<T> {
    public head: DLLNode<T> | undefined // 表头
    public tail: DLLNode<T> | undefined // 表尾

    constructor() {
        super()
    }

    append(element: T): DoublyLinkedList<T> {
        const node: DLLNode<T> = new DLLNode(element)
        if (!isExist(this.head)) {
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
        if (gte(position, 0) && lte(position, this.length)) {
            const node: DLLNode<T> = new DLLNode(element)
            let current: DLLNode<T> = this.head
            let previous: DLLNode<T>
            let index = 0

            if (eq(position, 0)) {
                if (!this.head) {
                    this.head = node
                    this.tail = node
                } else {
                    node.next = current
                    current.prev = node
                    this.head = node
                }
            } else if (eq(position, this.length)) {
                current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            } else {
                while (lt(index++, position)) {
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
        if (gte(position, 0) && lt(position, this.length)) {
            let current = this.head

            if (eq(position, 0)) {
                this.head = this.head.next

                if (eq(this.length, 1)) {
                    this.tail = null
                } else {
                    this.head.prev = null
                }
            } else if (eq(position, this.length - 1)) {
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
        if (this.head === undefined) {
            return ''
        }
        let objString = `${this.head?.element || ''}`
        let current = this.head?.next
        while (current !== undefined) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }

    print(): void {
        console.log(this.toString())
    }

    clear(): void {
        super.clear()
        this.tail = null
    }
}

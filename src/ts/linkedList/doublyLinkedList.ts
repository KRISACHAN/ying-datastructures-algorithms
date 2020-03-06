'use strict'
import {
    DLLNode
} from '../node'
import LinkedList from './linkedList'

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
        if (this.head === null) { // 列表中第一个节点
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++ // 更新列表的长度 
        return this
    }

    insert(position: number, element: T): DoublyLinkedList<T> { // 向列表的特定位置插入一个新的项。
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
            let current = this.head;

            if (position === 0) {
                this.head = this.head.next; // {1}
                // if there is only one item, then we update tail as well //NEW
                if (this.length === 1) {
                    // {2}
                    this.tail = null;
                } else {
                    this.head.prev = null; // {3}
                }
            } else if (position === this.length - 1) {
                // last item //NEW
                current = this.tail; // {4}
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                current = this.getAt(position);
                const previous = current.prev;
                // link previous with current's next - skip it to remove
                previous.next = current.next; // {6}
                current.next.prev = previous; // NEW
            }
            this.length--;
            return current.element;
        } else {
            return null;
        }
    }

    getTail(): DLLNode<T> {
        // 返回尾部信息
        return this.tail || null
    }

    toString() {
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

    clear() {
        super.clear()
        this.tail = null
    }
}
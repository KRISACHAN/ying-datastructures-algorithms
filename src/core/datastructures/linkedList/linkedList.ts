import { LLNode } from 'core/node'
import { eq, isExist, gte, lte, lt, gt } from 'core/utils'

/**
 * 链表（LinkedList）：链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个
元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。
 */
export default class LinkedList<T> {
    public head: null | LLNode<T> = null
    public length = 0
    constructor() {
        this.head = null // 链表头部
        this.length = 0 // 链表长度
    }

    append(element: T): LinkedList<T> {
        // 插入节点
        const node: LLNode<T> = new LLNode(element)
        let current: null | LLNode<T>

        if (!isExist(this.head)) {
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

    insert(position = -1, element: T): LinkedList<T> {
        // 向列表的特点位置插入一个新的元素
        //检查越界值
        if (lt(position, 0)) {
            throw new Error('position must equal or bigger than 0')
        }

        if (gt(position, this.length)) {
            let index: number = position - this.length

            while (gt(index--, 0)) {
                this.append(null)
            }

            this.append(element)
        } else if (lte(position, this.length)) {
            if (eq(this.length, 0)) {
                this.append(element)
            } else {
                const node: LLNode<T> = new LLNode(element)
                let current: null | LLNode<T> = this.head
                let previous: null | LLNode<T>
                let index = 0

                while (lt(index++, position)) {
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
        if (gte(position, 0) && lte(position, this.length)) {
            let node: null | LLNode<T> = this.head

            for (let i = 0; i < position && isExist(node); ++i) {
                node = node.next
            }

            return node
        }

        return null
    }

    removeAt(position: number): T | null {
        // 从列表的特定位置移除一项。
        //检查越界值
        if (gt(position, -1) && lt(position, this.length)) {
            let current: null | LLNode<T> = this.head
            let previous: null | LLNode<T>
            let index = 0

            //移除第一项
            if (eq(position, 0)) {
                this.head = current.next
            } else {
                while (lt(index++, position)) {
                    previous = current
                    current = current.next
                }

                //将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next
            }

            this.length--

            return current.element
        }
        return null
    }

    indexOf(element: T): number {
        // 返回元素在列表中的索引。如果列表中没有该元素则返回-1。
        let current: null | LLNode<T> = this.head
        let index = 0

        while (current) {
            if (eq(element, current.element)) {
                return index
            }

            index++
            current = current.next
        }

        return -1
    }

    remove(element: T): T | null {
        // 从列表中移除一项。
        const index: number = this.indexOf(element)
        return this.removeAt(index)
    }

    isEmpty(): boolean {
        // 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
        return eq(this.length, 0)
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
        if (!isExist(this.head)) {
            return ''
        }

        let objString = `${this.head.element}`
        let current: null | LLNode<T> = this.head.next

        for (let i = 1; lt(i, this.size()) && isExist(current); i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }

        return objString
    }

    print(): void {
        // 打印
        console.log(this.toString())
    }
}

import { Colors, ColorTexts } from './utils'
// 链表节点
export class LLNode<T> {
    constructor(public element: T, public next?: LLNode<T>) {
        this.element = element
        this.next = next
    }
}

// 双向链表节点
export class DLLNode<T> extends LLNode<T> {
    constructor(
        public element: T,
        public next?: DLLNode<T>,
        public prev?: DLLNode<T>,
    ) {
        super(element, next)
        this.element = element
        this.next = next
        this.prev = prev
    }
}

// 二叉树节点
export class BSTNode<T> {
    left: BSTNode<T>
    right: BSTNode<T>
    constructor(public key: T) {
        this.key = key
    }

    toString(): string {
        return `${this.key}`
    }
}

// AVL树节点
export class AVLNode<T> extends BSTNode<T> {
    constructor(public key: T) {
        super(key)
        this.key = key
    }
}

// 红黑树节点
export class RBNode<T> extends BSTNode<T> {
    left: RBNode<T>
    right: RBNode<T>
    parent: RBNode<T>
    color: Colors
    colorText: ColorTexts
    constructor(public key: T) {
        super(key)
        this.key = key
        this.color = Colors.RED
        this.colorText = ColorTexts.RED
    }
    // 判断是否为红色节点
    isRed(): boolean {
        return this.color === Colors.RED
    }
    // 颜色翻转
    reverseColor(): void {
        this.color = this.color === Colors.RED ? Colors.BLACK : Colors.RED
    }
}

// 字符串数据节点
export class MyObj {
    constructor(public el1: unknown, public el2: unknown) {}
    toString(): string {
        return `${this.el1.toString()}|${this.el2.toString()}`
    }
}

// 键值对节点
export class ValuePair<K, V> {
    constructor(public key: K, public value: V) {}

    toString(): string {
        return `[#${this.key}: ${this.value}]`
    }
}

// 表格
export interface tableType<K, V> {
    [key: string]: ValuePair<K, V>
}

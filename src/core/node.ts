export class LLNode<T> {
    constructor(public element: T, public next?: LLNode<T>) {
        this.element = element
        this.next = next
    }
}

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

export class BSTNode<T> {
    left: BSTNode<T>
    right: BSTNode<T>
    constructor(public key: T) {
        this.key = key
    }

    toString() {
        return `${this.key}`
    }
}

export class AVLNode<T> extends BSTNode<T> {
    constructor(public key: T) {
        super(key)
        this.key = key
    }
}

export enum Colors {
    RED = 0,
    BLACK = 1,
}

export class RBNode<T> extends BSTNode<T> {
    left: RBNode<T>
    right: RBNode<T>
    parent: RBNode<T>
    color: Colors
    constructor(public key: T) {
        super(key)
        this.key = key
        this.color = Colors.RED
    }
    // 判断是否为红色节点
    isRed() {
        return this.color === Colors.RED
    }
    // 颜色翻转
    reverseColor() {
        this.color = this.color === Colors.RED ? Colors.BLACK : Colors.RED
    }
}

export class MyObj {
    constructor(public el1: any, public el2: any) {}
    toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`
    }
}

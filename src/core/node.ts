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

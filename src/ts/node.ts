export class LLNode<T> {
    constructor(public element: T, public next: LLNode<T> = null) {
        this.element = element
        this.next = next
    }
}
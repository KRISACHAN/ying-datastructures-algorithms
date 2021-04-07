// leetcode 用

export type ListNodeType = ListNode | null
export class ListNode {
    val: number
    next: ListNodeType
    constructor(val?: number, next?: ListNodeType) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

export type TreeNodeType = TreeNode | null
export class TreeNode {
    val: number
    left: TreeNodeType
    right: TreeNodeType
    constructor(val?: number, left?: TreeNodeType, right?: TreeNodeType) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

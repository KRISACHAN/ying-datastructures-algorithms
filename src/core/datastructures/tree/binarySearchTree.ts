'use strict'
import { BSTNode } from '../../node'
import { defaultCompare, Compare } from '../../utils'
import { ICompareFunction } from '../../global.d'
/**
 * @二叉搜索树（BST）：是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，
在右侧节点存储（比父节点）大（或者等于）的值。
 */
export default class BinarySearchTree<T> {
    protected root: BSTNode<T>
    protected compareFn: ICompareFunction<T> = defaultCompare
    constructor() {}

    // 广度优先遍历的核心实现
    private breadthFirstSearchNode(node: BSTNode<T>, callback: Function): void {
        let queue: BSTNode<T>[] = [node]
        while (queue.length) {
            let head = queue.shift()
            callback(head.key)
            if (head.left) {
                queue.push(head.left)
            }
            if (head.right) {
                queue.push(head.right)
            }
        }
    }
    // 广度优先遍历方式遍历所有节点。
    breadthFirstSearch(callback: Function): void {
        this.breadthFirstSearchNode(this.root, callback)
    }

    // 递归插入节点
    protected recursionInsertNode(node: BSTNode<T>, key: T): void {
        // 将节点加在非根节点的其他位置，找到新节点应该插入的正确位置
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (!node.left) {
                node.left = new BSTNode<T>(key)
            } else {
                this.recursionInsertNode(node.left, key)
            }
        } else {
            if (!node.right) {
                node.right = new BSTNode<T>(key)
            } else {
                this.recursionInsertNode(node.right, key)
            }
        }
    }
    // 遍历插入节点
    protected loopInsertNode(node: BSTNode<T>, key: T): void {
        const newNode: BSTNode<T> = new BSTNode<T>(key)
        if (!this.root) {
            node = newNode
            return
        }
        let current: BSTNode<T> = node
        let parent: BSTNode<T>
        while (current) {
            parent = current
            if (this.compareFn(key, parent.key) === Compare.LESS_THAN) {
                current = current.left
                if (!current) {
                    parent.left = newNode
                }
            } else {
                current = current.right
                if (!current) {
                    parent.right = newNode
                    return
                }
            }
        }
    }
    // 向树中插入一个新的键。
    insert(key: T): BinarySearchTree<T> {
        if (!this.root) {
            this.root = new BSTNode<T>(key)
        } else {
            // this.recursionInsertNode(this.root, key)
            this.loopInsertNode(this.root, key)
        }
        return this
    }

    // 递归查找节点
    private recursionSearchNode(node: BSTNode<T>, key: T): boolean {
        if (!node) {
            return false
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.recursionSearchNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.recursionSearchNode(node.right, key)
        }
        // 当键值等于当前节点时，返回true
        return true
    }
    // 循环查找节点
    private loopSearchNode(node: BSTNode<T>, key: T): boolean {
        let queue: BSTNode<T>[] = [node]
        while (queue.length) {
            let head = queue.shift()
            if (key === head.key) {
                return true
            }
            if (head.left) {
                queue.push(head.left)
            }
            if (head.right) {
                queue.push(head.right)
            }
        }
        return false
    }
    // 在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
    search(key: T): boolean {
        // return this.recursionSearchNode(this.root, key)
        return this.loopSearchNode(this.root, key)
    }

    // 中序遍历的递归实现
    private recursionInOrderTraverseNode(
        node: BSTNode<T>,
        callback: Function,
    ): void {
        if (node) {
            this.recursionInOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.recursionInOrderTraverseNode(node.right, callback)
        }
    }
    // 中序遍历的循环实现
    private loopInOrderTraverseNode(
        node: BSTNode<T>,
        callback: Function,
    ): void {
        const stack: BSTNode<T>[] = []
        let current: BSTNode<T> = node
        while (current || stack.length) {
            while (current) {
                stack.push(current)
                current = current.left
            }
            current = stack.pop()
            callback(current.key)
            current = current.right
        }
    }
    // 通过中序遍历方式遍历所有节点。 中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点。中序遍历的一种应用就是对树进行排序操作。
    inOrderTraverse(callback: Function): void {
        // this.recursionInOrderTraverseNode(this.root, callback)
        this.loopInOrderTraverseNode(this.root, callback)
    }

    // 前序遍历的递归实现
    private recursionPreOrderTraverseNode(
        node: BSTNode<T>,
        callback: Function,
    ): void {
        if (node) {
            callback(node.key)
            this.recursionPreOrderTraverseNode(node.left, callback)
            this.recursionPreOrderTraverseNode(node.right, callback)
        }
    }
    // 前序遍历的循环实现
    private loopPreOrderTraverseNode(
        node: BSTNode<T>,
        callback: Function,
    ): void {
        const stack: BSTNode<T>[] = []
        let current: BSTNode<T> = node
        while (current || stack.length) {
            while (current) {
                stack.push(current)
                callback(current.key)
                current = current.left
            }
            current = stack.pop()
            current = current.right
        }
    }
    // 通过前序遍历方式遍历所有节点。
    preOrderTraverse(callback: Function): void {
        // this.recursionPreOrderTraverseNode(this.root, callback)
        this.loopPreOrderTraverseNode(this.root, callback)
    }

    // 后序遍历的递归实现
    private recursionPostOrderTraverseNode(
        node: BSTNode<T>,
        callback: Function,
    ): void {
        if (node) {
            this.recursionPostOrderTraverseNode(node.left, callback)
            this.recursionPostOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
    // 前序遍历的循环实现
    private loopPostOrderTraverseNode(
        node: BSTNode<T>,
        callback: Function,
    ): void {
        const stack: BSTNode<T>[] = []
        let prev: BSTNode<T>
        let current: BSTNode<T> = node
        while (current || stack.length) {
            while (current) {
                stack.push(current)
                current = current.left
            }
            current = stack[stack.length - 1]
            if (!current.right || current.right === prev) {
                current = stack.pop()
                callback(current.key)
                prev = current
                current = null
            } else {
                current = current.right
            }
        }
    }
    // 通过后序遍历方式遍历所有节点。
    postOrderTraverse(callback: Function): void {
        // this.recursionPostOrderTraverseNode(this.root, callback)
        this.loopPostOrderTraverseNode(this.root, callback)
    }
    // 获取最小的值/键。
    protected minNode(node: BSTNode<T>): BSTNode<T> {
        let current: BSTNode<T> = node
        while (current && current.left) {
            current = current.left
        }
        return current
    }
    min(): BSTNode<T> {
        // 返回树中最小的值/键。
        return this.minNode(this.root)
    }

    // 获取最大的值/键。
    protected maxNode(node: BSTNode<T>): BSTNode<T> {
        let current: BSTNode<T> = node
        while (current && current.right) {
            current = current.right
        }
        return current
    }
    // 返回树中最大的值/键。
    max(): BSTNode<T> {
        return this.maxNode(this.root)
    }

    // 递归删除节点
    // 当key === node.item时
    // 有三种情况
    // 1 - 一个叶子节点
    // 2 - 一个节点只有一个子节点
    // 3 - 一个节点有两个字节点
    protected recursionRemoveNode(node: BSTNode<T>, key: T): BSTNode<T> {
        if (!node) {
            return null
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.recursionRemoveNode(node.left, key)
            return node
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.recursionRemoveNode(node.right, key)
            return node
        } else {
            // 键等于node.key
            // 第一种情况——一个叶节点
            if (!node.left && !node.right) {
                node = null
                return node
            }
            // 第二种情况——一个只有一个子节点的节点
            if (!node.left) {
                node = node.right
                return node
            } else if (!node.right) {
                node = node.left
                return node
            }
            // 第三种情况——一个有两个子节点的节点
            const aux = this.minNode(node.right)
            node.key = aux.key
            node.right = this.recursionRemoveNode(node.right, aux.key)
            return node
        }
    }
    // 循环删除节点
    // 暴力重建法...
    protected loopRemoveNode(node: BSTNode<T>, key: T): BSTNode<T> {
        if (!node) {
            return null
        }
        let newNode: BSTNode<T> = new BSTNode<T>(node.key)
        this.breadthFirstSearch((nKey: T): void => {
            if (nKey !== key) {
                this.loopInsertNode(newNode, nKey)
            }
        })
        return newNode
    }
    // 从树中移除某个键。
    remove(key: T): BinarySearchTree<T> {
        this.root = this.loopRemoveNode(this.root, key)
        return this
    }

    getRoot(): BSTNode<T> {
        return this.root
    }
    print(): void {
        console.log(this.toArray())
    }
    toArray(): T[] {
        let list: T[] = []
        this.breadthFirstSearch((key: T) => {
            list.push(key)
        })
        return list
    }
}

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
    insert(key: T): BinarySearchTree<T> {
        // 向树中插入一个新的键。
        if (!this.root) {
            this.root = new BSTNode(key)
        } else {
            this.insertNode(this.root, key)
        }
        return this
    }
    protected insertNode(node: BSTNode<T>, key: T): void {
        // 将节点加在非根节点的其他位置，找到新节点应该插入的正确位置
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (!node.left) {
                node.left = new BSTNode(key)
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if (!node.right) {
                node.right = new BSTNode(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    private searchNode(node: BSTNode<T>, key: T): boolean {
        // 查找节点
        if (!node) {
            return false
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key)
        }
        // 当键值等于当前节点时，返回true
        return true
    }
    search(key: T): boolean {
        // 在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
        return this.searchNode(this.root, key)
    }
    private inOrderTraverseNode(node: BSTNode<T>, callback: Function): void {
        // 中序排序的核心实现
        if (node) {
            this.inOrderTraverseNode(node.left, callback)
            callback(node.key)
            this.inOrderTraverseNode(node.right, callback)
        }
    }
    inOrderTraverse(callback: Function): void {
        // 通过中序遍历方式遍历所有节点。 中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点。中序遍历的一种应用就是对树进行排序操作。
        this.inOrderTraverseNode(this.root, callback)
    }

    private preOrderTraverseNode(node: BSTNode<T>, callback: Function): void {
        // 先序排序的核心实现
        if (node) {
            callback(node.key)
            this.preOrderTraverseNode(node.left, callback)
            this.preOrderTraverseNode(node.right, callback)
        }
    }
    preOrderTraverse(callback: Function): void {
        // 通过先序遍历方式遍历所有节点。
        this.preOrderTraverseNode(this.root, callback)
    }

    private postOrderTraverseNode(node: BSTNode<T>, callback: Function): void {
        // 后序排序的核心实现
        if (node) {
            this.postOrderTraverseNode(node.left, callback)
            this.postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }
    postOrderTraverse(callback: Function): void {
        // 通过后序遍历方式遍历所有节点。
        this.postOrderTraverseNode(this.root, callback)
    }

    protected minNode(node: BSTNode<T>): BSTNode<T> {
        // 获取最小的值/键。
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

    protected maxNode(node: BSTNode<T>): BSTNode<T> {
        // 获取最大的值/键。
        let current: BSTNode<T> = node
        while (current && current.right) {
            current = current.right
        }
        return current
    }
    max(): BSTNode<T> {
        // 返回树中最大的值/键。
        return this.maxNode(this.root)
    }

    protected removeNode(node: BSTNode<T>, key: T): BSTNode<T> {
        // 移除节点
        if (!node) {
            return null
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key)
            return node
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key)
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
            node.right = this.removeNode(node.right, aux.key)
            return node
        }
    }
    // 当key === node.item时
    // 有三种情况
    // 1 - 一个叶子节点
    // 2 - 一个节点只有一个子节点
    // 3 - 一个节点有两个字节点
    remove(key: T): void {
        // 从树中移除某个键。
        this.root = this.removeNode(this.root, key)
    }
    getRoot(): BSTNode<T> {
        return this.root
    }
    print(): void {
        console.log(this.getRoot())
    }
}

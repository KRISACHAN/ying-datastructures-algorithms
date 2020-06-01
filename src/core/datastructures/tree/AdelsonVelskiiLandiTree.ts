'use strict'
import { BSTNode } from '../../node'
import BinarySearchTree from './BinarySearchTree'
import { defaultCompare, Compare } from '../../utils'
import { ICompareFunction } from '../../global.d'

enum BalanceFactor {
    UNBALANCED_RIGHT = 1,
    SLIGHTLY_UNBALANCED_RIGHT = 2,
    BALANCED = 3,
    SLIGHTLY_UNBALANCED_LEFT = 4,
    UNBALANCED_LEFT = 5,
}
/**
 * AVL树是一种自平衡二叉搜索树，意思是任何
一个节点左右两侧子树的高度之差最多为1。
 * 也就是说这种树会在添加或移除节点时尽量试着成
为一棵完全树。
 * 添加或移除节点时，AVL树会尝试自平衡。
 * 任意一个节点（不论深
度）的左子树和右子树高度最多相差1。
 * 添加或移除节点时，AVL树会尽可能尝试转换为完全树。
 */
export default class AVLTree<T> extends BinarySearchTree<T> {
    protected root: BSTNode<T>
    protected compareFn: ICompareFunction<T> = defaultCompare
    constructor() {
        super()
    }
    // 获取节点高度
    private getNodeHeight(node: BSTNode<T>): number {
        if (node == null) {
            return -1
        }
        return (
            Math.max(
                this.getNodeHeight(node.left),
                this.getNodeHeight(node.right),
            ) + 1
        )
    }
    /**
     * 左 - 左（LL）：向右的单旋转
     *
     *       b                           a
     *      / \                         / \
     *     a   e -> rotationLL(b) ->   c   b
     *    / \                             / \
     *   c   d                           d   e
     *
     */
    private rotationLL(node: BSTNode<T>): BSTNode<T> {
        const tmp: BSTNode<T> = node.left
        node.left = tmp.right
        tmp.right = node
        return tmp
    }
    /**
     * 右 - 右（RR）：向左的单旋转
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     *
     */
    private rotationRR(node: BSTNode<T>): BSTNode<T> {
        const tmp: BSTNode<T> = node.right
        node.right = tmp.left
        tmp.left = node
        return tmp
    }
    /**
     * 左 - 右（LR）：向右的双旋转
     */
    private rotationLR(node: BSTNode<T>): BSTNode<T> {
        node.left = this.rotationRR(node.left)
        return this.rotationLL(node)
    }
    /**
     * 右 - 左（RL）：向左的双旋转
     */
    private rotationRL(node: BSTNode<T>): BSTNode<T> {
        node.right = this.rotationLL(node.right)
        return this.rotationRR(node)
    }
    // 获取平衡系数
    private getBalanceFactor(node: BSTNode<T>): number {
        const heightDifference: number =
            this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
        const differenceObj = {
            '-2': BalanceFactor.UNBALANCED_RIGHT,
            '-1': BalanceFactor.UNBALANCED_RIGHT,
            '1': BalanceFactor.UNBALANCED_RIGHT,
            '2': BalanceFactor.UNBALANCED_RIGHT,
        }
        return differenceObj[heightDifference] || BalanceFactor.BALANCED
    }

    insertNode(node: BSTNode<T>, key: T): BSTNode<T> {
        if (node === null) {
            return new BSTNode(key)
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key)
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key)
        } else {
            return node
        }
        // 验证树是否平衡
        const balanceFactor = this.getBalanceFactor(node)
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                // 向右的单旋转
                node = this.rotationLL(node)
            } else {
                // 向右的双旋转
                return this.rotationLR(node)
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                // 向左的单旋转
                node = this.rotationRR(node)
            } else {
                // 向左的双旋转
                return this.rotationRL(node)
            }
        }
        return node
    }
    // 插入元素
    insert(key: T): AVLTree<T> {
        this.root = this.insertNode(this.root, key)
        return this
    }
}

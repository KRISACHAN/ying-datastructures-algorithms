'use strict'
import { Colors, ColorTexts, RBNode } from '../../node'
import BinarySearchTree from './BinarySearchTree'
import { defaultCompare, Compare } from '../../utils'
import { ICompareFunction } from '../../global.d'

/**
 * 红黑树（Red Black Tree） 是一种自平衡二叉查找树，是在计算机科学中用到的一种数据结构，典型的用途是实现关联数组。
 * 红黑树是在1972年由Rudolf Bayer发明的，当时被称为平衡二叉B树（symmetric binary B-trees）。后来，在1978年被 Leo J. Guibas 和 Robert Sedgewick 修改为如今的“红黑树”。
 * 红黑树是一种特化的AVL树（平衡二叉树），都是在进行插入和删除操作时通过特定操作保持二叉查找树的平衡，从而获得较高的查找性能。
 */
export default class RedBlackTree<T> extends BinarySearchTree<T> {
    protected root: RBNode<T>
    protected compareFn: ICompareFunction<T> = defaultCompare
    constructor() {
        super()
    }
    /**
     * 左 - 左（LL）：向右的旋转
     *
     *       b                           a
     *      / \                         / \
     *     a   e -> rotationLL(b) ->   c   b
     *    / \                             / \
     *   c   d                           d   e
     *
     */
    private rotationLL(node: RBNode<T>): void {
        const tmp: RBNode<T> = node.left
        node.left = tmp.right
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node
        }
        tmp.parent = node.parent
        if (!node.parent) {
            this.root = tmp
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp
            } else {
                node.parent.right = tmp
            }
        }
        tmp.right = node
        node.parent = tmp
    }
    /**
     * 右 - 右（RR）：向左的旋转
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     *
     */
    private rotationRR(node: RBNode<T>): void {
        const tmp: RBNode<T> = node.right
        node.right = tmp.left
        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node
        }
        tmp.parent = node.parent
        if (!node.parent) {
            this.root = tmp
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp
            } else {
                node.parent.right = tmp
            }
        }
        tmp.left = node
        node.parent = tmp
    }

    insert(key: T): RedBlackTree<T> {
        if (!this.root) {
            this.root = new RBNode(key)
            this.root.color = Colors.BLACK
            this.root.colorText = ColorTexts.BLACK
        } else {
            const newNode = this.insertNode(this.root, key)
            this.fixTreeProperties(newNode)
        }
        return this
    }

    // 循环删除节点的核心
    // 合并左子节点和右子节点
    protected mergeChild(node: RBNode<T>): RBNode<T> {
        if (!node.left && !node.right) {
            return null
        }
        if (!node.left && node.right) {
            return node.right
        }
        if (node.left && !node.right) {
            return node.left
        }
        let current: RBNode<T> = node.right
        while (current.left) {
            current = current.left
        }
        current.left = node.left
        return node.right
    }
    // 循环删除节点
    protected loopRemoveNode(node: RBNode<T>, key: T): RBNode<T> {
        if (!node) {
            return null
        }
        if (this.compareFn(key, node.key) === Compare.EQUALS) {
            return this.mergeChild(node)
        }
        let current: RBNode<T> | any = node
        let parent: RBNode<T> | any
        let keyword: string = ''
        while (current && current.key !== key) {
            parent = current
            if (this.compareFn(current.key, key) === Compare.BIGGER_THAN) {
                keyword = 'left'
            } else {
                keyword = 'right'
            }
            current = current[keyword]
        }
        if (!current) {
            return node
        }
        parent[keyword] = this.mergeChild(current)
        this.fixTreeProperties(node)
        return node
    }

    // 从树中移除某个键。
    remove(key: T): BinarySearchTree<T> {
        const node: RBNode<T> = this.loopRemoveNode(this.root, key)
        this.fixTreeProperties(node)
        this.root = node
        return this
    }

    // 比起BST，多了：
    // 保留并返回插入的节点
    // 主要为了验证插入后，是否满足红黑树规则
    protected insertNode(node: RBNode<T>, key: T): RBNode<T> {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (!node.left) {
                node.left = new RBNode(key)
                node.left.parent = node
                return node.left
            } else {
                return this.insertNode(node.left, key)
            }
        } else if (!node.right) {
            node.right = new RBNode(key)
            node.right.parent = node
            return node.right
        } else {
            return this.insertNode(node.right, key)
        }
    }

    // 属性修复
    private fixTreeProperties(node: RBNode<T>): void {
        while (
            node &&
            node.parent &&
            node.parent.isRed() &&
            node.color !== Colors.BLACK
        ) {
            let parent: RBNode<T> = node.parent
            const grandParent: RBNode<T> = parent.parent
            // case A：父节点是祖父节点的左子节点时
            if (grandParent && grandParent.left === parent) {
                const uncle = grandParent.right
                // case 1: 当Node的叔叔也是红色的时候
                if (uncle && uncle.isRed()) {
                    grandParent.color = Colors.RED
                    grandParent.colorText = ColorTexts.RED

                    parent.color = Colors.BLACK
                    parent.colorText = ColorTexts.BLACK

                    uncle.color = Colors.BLACK
                    uncle.colorText = ColorTexts.BLACK

                    node = grandParent
                } else {
                    // case 2: 如果Node是右子节点 - 左转
                    if (node === parent.right) {
                        this.rotationRR(parent)
                        node = parent
                        parent = node.parent
                    }
                    // case 3: 如果Node是左子节点 - 右转
                    this.rotationLL(grandParent)
                    // 颜色交换
                    parent.color = Colors.BLACK
                    parent.colorText = ColorTexts.BLACK

                    grandParent.color = Colors.RED
                    grandParent.colorText = ColorTexts.RED

                    node = parent
                }
            } else {
                // case B: 父节点是祖父节点的右子节点时
                const uncle: RBNode<T> = grandParent.left
                // case 1: 当Node的叔叔也是红色的时候
                if (uncle && uncle.isRed()) {
                    grandParent.color = Colors.RED
                    grandParent.colorText = ColorTexts.RED

                    parent.color = Colors.BLACK
                    parent.colorText = ColorTexts.BLACK

                    uncle.color = Colors.BLACK
                    uncle.colorText = ColorTexts.BLACK

                    node = grandParent
                } else {
                    // case 2: 如果Node是左子节点 - 左转
                    if (node === parent.left) {
                        this.rotationLL(parent)
                        node = parent
                        parent = node.parent
                    }
                    // case 3: 如果Node是右子节点 - 左转
                    this.rotationRR(grandParent)
                    // 颜色交换
                    parent.color = Colors.BLACK
                    parent.colorText = ColorTexts.BLACK

                    grandParent.color = Colors.RED
                    grandParent.colorText = ColorTexts.RED

                    node = parent
                }
            }
        }
        // 维护root为黑色
        this.root.color = Colors.BLACK
        this.root.colorText = ColorTexts.BLACK

    }
    getRoot(): RBNode<T> {
        return this.root
    }
}

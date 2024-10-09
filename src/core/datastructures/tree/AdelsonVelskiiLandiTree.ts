import { AVLNode } from 'core/node'
import BinarySearchTree from './BinarySearchTree'
import { eq, lt, gt } from 'core/utils'

enum BalanceFactor { // 平衡因子
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
    protected root: AVLNode<T>
    constructor() {
        super()
    }
    // 获取节点高度
    // 在AVL树中，需要对每个节点计算右子树高度（hr）和左子树高度（hl）的差值，该值（hr－hl）应为0、1或1。
    // 如果结果不是这三个值之一，则需要平衡该AVL树。
    // 这就是平衡因子的概念。
    private getNodeHeight(node: AVLNode<T>): number {
        if (!node) {
            return -1
        }

        return (
            Math.max(
                this.getNodeHeight(node.left),
                this.getNodeHeight(node.right),
            ) + 1
        )
    }
    // 假设平衡因子是左子树的高度减去右子树的高度所得到的值，又假设由于在二叉排序树上插入节点而失去平衡的最小子树根节点的指针为a（即a是离插入点最近，且平衡因子绝对值超过1的祖先节点。

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
    // 由于在*a的左子树根节点的左子树上插入节点，*a的平衡因子由1增至2，致使以*a为根的子树失去平衡，则需进行一次右旋转操作。
    private rotationLL(node: AVLNode<T>): AVLNode<T> {
        const tmp: AVLNode<T> = node.left
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
    // 由于在*a的右子树根节点的右子树上插入节点，*a的平衡因子由-1变为-2，致使以*a为根的子树失去平衡，则需进行一次左旋转操作。
    private rotationRR(node: AVLNode<T>): AVLNode<T> {
        const tmp: AVLNode<T> = node.right
        node.right = tmp.left
        tmp.left = node

        return tmp
    }
    /**
     * 左 - 右（LR）：向右的双旋转
     */
    // 由于在*a的左子树根节点的右子树上插入节点，*a的平衡因子由1增至2，致使以*a为根的子树失去平衡，则需进行两次旋转（先左旋后右旋）操作。
    private rotationLR(node: AVLNode<T>): AVLNode<T> {
        node.left = this.rotationRR(node.left)

        return this.rotationLL(node)
    }
    /**
     * 右 - 左（RL）：向左的双旋转
     */
    // 由于在*a的右子树根节点的左子树上插入节点，*a的平衡因子由-1变为-2，致使以*a为根的子树失去平衡，则需进行两次旋转（先右旋后左旋）操作。
    private rotationRL(node: AVLNode<T>): AVLNode<T> {
        node.right = this.rotationLL(node.right)

        return this.rotationRR(node)
    }
    // 获取平衡系数
    private getBalanceFactor(node: AVLNode<T>): number {
        const heightDiff: number =
            this.getNodeHeight(node.left) - this.getNodeHeight(node.right) + 2

        const diffList = [
            BalanceFactor.UNBALANCED_RIGHT,
            BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT,
            BalanceFactor.BALANCED,
            BalanceFactor.SLIGHTLY_UNBALANCED_LEFT,
            BalanceFactor.UNBALANCED_LEFT,
        ]

        return diffList[heightDiff]
    }

    protected insertNode(node: AVLNode<T>, key: T): AVLNode<T> {
        if (!node) {
            return new AVLNode(key)
        } else if (lt(key, node.key)) {
            node.left = this.insertNode(node.left, key)
        } else if (gt(key, node.key)) {
            node.right = this.insertNode(node.right, key)
        } else {
            return node
        }

        // 验证树是否平衡
        const balanceFactor = this.getBalanceFactor(node)

        if (eq(balanceFactor, BalanceFactor.UNBALANCED_LEFT)) {
            if (lt(key, node.left.key)) {
                // 左-左（LL）：向右的单旋转
                node = this.rotationLL(node)
            } else {
                // 左-右（LR）：向右的双旋转
                return this.rotationLR(node)
            }
        }

        if (eq(balanceFactor, BalanceFactor.UNBALANCED_RIGHT)) {
            if (gt(key, node.right.key)) {
                // 右-右（RR）：向左的单旋转
                node = this.rotationRR(node)
            } else {
                // 右-左（RL）：向左的双旋转
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

    protected balanceNode(node: AVLNode<T>): AVLNode<T> {
        // 验证是否平衡
        const balanceState = this.getBalanceFactor(node)

        if (eq(balanceState, BalanceFactor.UNBALANCED_LEFT)) {
            // 左-左（LL）：向右的单旋转
            if (
                eq(this.getBalanceFactor(node.left), BalanceFactor.BALANCED) ||
                eq(
                    this.getBalanceFactor(node.left),
                    BalanceFactor.SLIGHTLY_UNBALANCED_LEFT,
                )
            ) {
                return this.rotationLL(node)
            }
            // 左-右（LR）：向右的双旋转
            if (
                eq(
                    this.getBalanceFactor(node.left),
                    BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT,
                )
            ) {
                return this.rotationLR(node.left)
            }
        }

        if (eq(balanceState, BalanceFactor.UNBALANCED_RIGHT)) {
            // 右-右（RR）：向左的单旋转
            if (
                eq(this.getBalanceFactor(node.right), BalanceFactor.BALANCED) ||
                eq(
                    this.getBalanceFactor(node.right),
                    BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT,
                )
            ) {
                return this.rotationRR(node)
            }
            // 右-左（RL）：向左的双旋转
            if (
                eq(
                    this.getBalanceFactor(node.right),
                    BalanceFactor.SLIGHTLY_UNBALANCED_LEFT,
                )
            ) {
                return this.rotationRL(node.right)
            }
        }
        return node
    }

    // 从树中移除某个键。
    remove(key: T): AVLTree<T> {
        const node: AVLNode<T> = this.loopRemoveNode(this.root, key)
        this.root = this.balanceNode(node)
        return this
    }

    getRoot(): AVLNode<T> {
        return this.root
    }
}

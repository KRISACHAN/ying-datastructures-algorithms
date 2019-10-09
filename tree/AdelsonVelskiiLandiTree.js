/**
 * @Adelson-Velskii-Landi树（AVL树）：是一种自平衡二叉搜索树，意思是任何
一个节点左右两侧子树的高度之差最多为1。也就是说这种树会在添加或移除节点时尽量试着成
为一棵完全树。
 */
'use strict'
const AVL = (() => {
  class Node { // 节点类
    constructor(key) {
      this.key = key
      this.left = null
      this.right = null
    }
  }
  const BalanceFactor = { // AVL平衡系数
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
  }
  const Compare = { // 对比系数
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
  }
  const defaultCompare = (a, b) => { // 数字大小对比
    if (a === b) {
      return Compare.EQUALS
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
  }
  class __AVL {
    #root = null // 根节点
    constructor(compareFn = defaultCompare) {
      this.compareFn = compareFn
    }
    getNodeHeight(node) { // 获取节点高度
      if (node == null) {
        return -1
      }
      return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
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
     * @param node Node<T>
     */
    rotationLL(node) {
      const tmp = node.left
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
     * @param node Node<T>
     */
    rotationRR(node) {
      const tmp = node.right
      node.right = tmp.left
      tmp.left = node
      return tmp
    }
    /**
     * 左 - 右（LR）：向右的双旋转
     * @param node Node<T>
     */
    rotationLR(node) {
      node.left = this.rotationRR(node.left)
      return this.rotationLL(node)
    }
    /**
     * 右 - 左（RL）：向左的双旋转
     * @param node Node<T>
     */
    rotationRL(node) {
      node.right = this.rotationLL(node.right)
      return this.rotationRR(node)
    }
    getBalanceFactor(node) {
      const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
      switch (heightDifference) {
        case -2:
          return BalanceFactor.UNBALANCED_RIGHT
        case -1:
          return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
        case 1:
          return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
        case 2:
          return BalanceFactor.UNBALANCED_LEFT
        default:
          return BalanceFactor.BALANCED
      }
    }
    insert(key) {
      this.#root = this.insertNode(this.#root, key)
      return this
    }
    insertNode(node, key) {
      if (node == null) {
        return new Node(key)
      } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
        node.left = this.insertNode(node.left, key)
      } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
        node.right = this.insertNode(node.right, key)
      } else {
        return node
      }
      // verify if tree is balanced
      const balanceFactor = this.getBalanceFactor(node)
      if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
        if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
          // Left left case
          node = this.rotationLL(node)
        } else {
          // Left right case
          return this.rotationLR(node)
        }
      }
      if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
        if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
          // Right right case
          node = this.rotationRR(node)
        } else {
          // Right left case
          return this.rotationRL(node)
        }
      }
      return node
    }
    removeNode(node, key) {
      node = super.removeNode(node, key) // {1}
      if (node == null) {
        return node
      }
      // verify if tree is balanced
      const balanceFactor = this.getBalanceFactor(node)
      if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
        // Left left case
        if (
          this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
          this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
        ) {
          return this.rotationLL(node)
        }
        // Left right case
        if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
          return this.rotationLR(node.left)
        }
      }
      if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
        // Right right case
        if (
          this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
          this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
        ) {
          return this.rotationRR(node)
        }
        // Right left case
        if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
          return this.rotationRL(node.right)
        }
      }
      return node
    }
    print() {
      console.log(this.#root)
    }
  }
  return __AVL
})()

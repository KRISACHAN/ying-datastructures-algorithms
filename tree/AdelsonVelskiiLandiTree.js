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
  class __AVL extends BST {
    #root = null // 根节点
    constructor(compareFn = utils.defaultCompare) {
      super(compareFn)
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
     */
    rotationRR(node) {
      const tmp = node.right
      node.right = tmp.left
      tmp.left = node
      return tmp
    }
    /**
     * 左 - 右（LR）：向右的双旋转
     */
    rotationLR(node) {
      node.left = this.rotationRR(node.left)
      return this.rotationLL(node)
    }
    /**
     * 右 - 左（RL）：向左的双旋转
     */
    rotationRL(node) {
      node.right = this.rotationLL(node.right)
      return this.rotationRR(node)
    }
    getBalanceFactor(node) {
      const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
      switch (heightDifference) {
        case -2:
          return utils.BalanceFactor.UNBALANCED_RIGHT
        case -1:
          return utils.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
        case 1:
          return utils.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
        case 2:
          return utils.BalanceFactor.UNBALANCED_LEFT
        default:
          return utils.BalanceFactor.BALANCED
      }
    }
    insert(key) {
      this.#root = this.insertNode(this.#root, key)
      return this
    }
    insertNode(node, key) {
      if (node == null) {
        return new Node(key)
      } else if (this.compareFn(key, node.key) === utils.Compare.LESS_THAN) {
        node.left = this.insertNode(node.left, key)
      } else if (this.compareFn(key, node.key) === utils.Compare.BIGGER_THAN) {
        node.right = this.insertNode(node.right, key)
      } else {
        return node
      }
      // 验证树是否平衡
      const balanceFactor = this.getBalanceFactor(node)
      if (balanceFactor === utils.BalanceFactor.UNBALANCED_LEFT) {
        if (this.compareFn(key, node.left.key) === utils.Compare.LESS_THAN) {
          // 向右的单旋转
          node = this.rotationLL(node)
        } else {
          // 向右的双旋转
          return this.rotationLR(node)
        }
      }
      if (balanceFactor === utils.BalanceFactor.UNBALANCED_RIGHT) {
        if (this.compareFn(key, node.right.key) === utils.Compare.BIGGER_THAN) {
          // 向左的单旋转
          node = this.rotationRR(node)
        } else {
          // 向左的双旋转
          return this.rotationRL(node)
        }
      }
      return node
    }
    removeNode(node, key) {
      node = super.removeNode(node, key)
      if (node == null) {
        return node
      }
      // 验证树是否平衡
      const balanceFactor = this.getBalanceFactor(node)
      if (balanceFactor === utils.BalanceFactor.UNBALANCED_LEFT) {
        // 向右的单旋转
        if (
          this.getBalanceFactor(node.left) === utils.BalanceFactor.BALANCED ||
          this.getBalanceFactor(node.left) === utils.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
        ) {
          return this.rotationLL(node)
        }
        // 向右的双旋转
        if (this.getBalanceFactor(node.left) === utils.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
          return this.rotationLR(node.left)
        }
      }
      if (balanceFactor === utils.BalanceFactor.UNBALANCED_RIGHT) {
        // 向左的单旋转
        if (
          this.getBalanceFactor(node.right) === utils.BalanceFactor.BALANCED ||
          this.getBalanceFactor(node.right) === utils.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
        ) {
          return this.rotationRR(node)
        }
        // 向左的双旋转
        if (this.getBalanceFactor(node.right) === utils.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
          return this.rotationRL(node.right)
        }
      }
      return node
    }
    
    getRoot() {
      return this.#root
    }

    print() {
      console.log(this.getRoot())
    }
  }
  return __AVL
})()

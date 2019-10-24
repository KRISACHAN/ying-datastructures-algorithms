'use strict'
const RBT = (() => {
  const Colors = {
    RED: 0,
    BLACK: 1
  }
  class Node { // 节点类
    constructor(key) {
      this.key = key
      this.left = null
      this.right = null
      this.parent = null
      this.color = Colors
    }

    isRed() {
      return this.color === Colors.RED
    }
  }
  class __RBT extends BST {
    #root = null // 根节点
    constructor(compareFn = utils.defaultCompare) {
      super()
      this.compareFn = compareFn
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
     * @param 传入的节点
     */
    rotationLL(node) {
      const tmp = node.left
      node.left = tmp.right
      if (tmp.rigth && tmp.right.key) {
        tmp.right.parent = node
      }
      tmp.parent = node.parent
      if (!node.parent) {
        this.#root = tmp
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
     * @param node 传入的节点
     */
    rotationRR(node) {
      const tmp = node.right
      node.right = tmp.left
      if (tmp.left && tmp.left.key) {
        tmp.left.parent = node
      }
      tmp.parent = node.parent
      if (!node.parent) {
        this.#root = tmp
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

    insert(key) {
      if (this.#root == null) {
        this.#root = new Node(key)
        this.#root.color = Colors.BLACK
      } else {
        const newNode = this.insertNode(this.#root, key)
        this.fixTreeProperties(newNode)
      }
      return this
    }

    insertNode(node, key) {
      if (this.compareFn(key, node.key) === utils.Compare.LESS_THAN) {
        if (node.left == null) {
          node.left = new Node(key)
          node.left.parent = node
          return node.left
        } else {
          return this.insertNode(node.left, key)
        }
      } else if (node.right == null) {
        node.right = new Node(key)
        node.right.parent = node
        return node.right
      } else {
        return this.insertNode(node.right, key)
      }
    }

    fixTreeProperties(node) {
      while (node && node.parent && node.parent.color === Colors.RED && node.color !== Colors.BLACK) {
        let parent = node.parent
        const grandParent = parent.parent
        // case A：父节点是祖父节点的左子节点时
        if (grandParent && grandParent.left === parent) {
          const uncle = grandParent.right
          // case 1: 当Node的叔叔也是红色的时候
          if (uncle && uncle.isRed()) {
            grandParent.color = Colors.RED
            parent.color = Colors.BLACK
            uncle.color = Colors.BLACK
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
            // swap color
            parent.color = Colors.BLACK
            grandParent.color = Colors.RED
            node = parent
          }
        } else { // case B: 父节点是祖父节点的右子节点时
          const uncle = grandParent.left
          // case 1: 当Node的叔叔也是红色的时候
          if (uncle && uncle.isRed()) {
            grandParent.color = Colors.RED
            parent.color = Colors.BLACK
            uncle.color = Colors.BLACK
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
            grandParent.color = Colors.RED
            node = parent
          }
        }
      }
      this.#root.color = Colors.BLACK
    }

    getRoot() {
      return this.#root
    }

    print() {
      console.log(this.getRoot())
    }
  }
  return __RBT
})()

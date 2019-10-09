/**
 * @二叉搜索树（BST）：是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，
在右侧节点存储（比父节点）大（或者等于）的值。
 */
'use strict'
const BST = (() => {
  class Node { // 节点类
    constructor(key) {
      this.key = key
      this.left = null
      this.right = null
    }
  }
  class __BST {
    #root = null // 根节点
    constructor () {       
    }
    insertNode(node, newNode) { // 将节点加在非根节点的其他位置，找到新节点应该插入的正确位置
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode
        } else {
          this.insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          this.insertNode(node.right, newNode)
        }
      }
    }
    insert(key) { // 向树中插入一个新的键。
      const newNode = new Node(key)
      if (this.#root === null) {
        this.#root = newNode
      } else {
        this.insertNode(this.#root,newNode)
      }
      return this
    }
    searchNode(node, key) { // 查找节点
      if (node === null) {
        return false
      }
      if (key < node.key) {
        return this.searchNode(node.left, key)
      } else if (key > node.key) {
        return this.searchNode(node.right, key)
      } else {
        return true
      }
    }
    search(key) { // 在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
      return this.searchNode(this.#root, key)
    }
    inOrderTraverseNode(node, callback) { // 中序排序的核心实现
      if (node !== null) {
        this.inOrderTraverseNode(node.left, callback)
        callback(node.key)
        this.inOrderTraverseNode(node.right, callback)
      }
    }
    inOrderTraverse(callback) { // 通过中序遍历方式遍历所有节点。 中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点。中序遍历的一种应用就是对树进行排序操作。
      this.inOrderTraverseNode(this.#root, callback)
    }
    preOrderTraverseNode(node, callback) { // 先序排序的核心实现
      if (node !== null) {
        callback(node.key)
        this.preOrderTraverseNode(node.left, callback)
        this.preOrderTraverseNode(node.right, callback)
      }
    }
    preOrderTraverse(callback) { // 通过先序遍历方式遍历所有节点。
      this.preOrderTraverseNode(this.#root, callback); 
    }
    postOrderTraverseNode(node, callback) { // 后序排序的核心实现
      if (node !== null) {
        this.postOrderTraverseNode(node.left, callback)
        this.postOrderTraverseNode(node.right, callback)
        callback(node.key)
      }
    }
    postOrderTraverse(callback) { // 通过后序遍历方式遍历所有节点。
      this.postOrderTraverseNode(this.#root, callback); 
    }
    minNode(node) { // 获取最小的值/键。
      if (node) {
        while (node && node.left !== null) {
          node = node.left
        }
        return node.key
      }
      return null
    }
    min() { // 返回树中最小的值/键。
      return this.minNode(this.#root)
    }
    maxNode(node) { // 获取最大的值/键。
      if (node) {
        while (node && node.right !== null) {
          node = node.right
        }
        return node.key
      }
      return null
    }
    max() { // 返回树中最大的值/键。
      return this.maxNode(this.#root)
    }
    findMinNode(node) { // 返回树中最小的值/键。
      if (node) {
        while (node && node.left !== null) {
          node = node.left
        }
        return node
      }
      return node
    }
    removeNode(node, key) { // 移除节点
      if (node === null) {
        return null
      }
      if (key < node.key) {
        node.left = this.removeNode(node.left, key)
        return node
      } else if (key > node.key) {
        node.right = this.removeNode(node.right, key)
        return node
      } else { // 键等于node.key 
        // 第一种情况——一个叶节点
        if (node.left === null && node.right === null) {
          node = null
          return node
        }
        // 第二种情况——一个只有一个子节点的节点
        if (node.left === null) {
          node = node.right
          return node
        } else if (node.right === null) {
          node = node.left
          return node
        }
        // 第三种情况——一个有两个子节点的节点
        const aux = this.findMinNode(node.right)
        node.key = aux.key
        node.right = this.removeNode(node.right, aux.key)
        return node
      }
    }
    // key is equal to node.item
    // handle 3 special conditions
    // 1 - a leaf node
    // 2 - a node with only 1 child
    // 3 - a node with 2 children
    // case 1
    remove(key) { // 从树中移除某个键。
      this.#root = this.removeNode(this.#root, key)
    }
    print() {
      console.log(this.#root)
    }
  }
  return __BST
})()

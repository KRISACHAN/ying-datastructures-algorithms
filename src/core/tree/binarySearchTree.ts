'use strict'
import { BSTNode } from '../node'
/**
 * @二叉搜索树（BST）：是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，
在右侧节点存储（比父节点）大（或者等于）的值。
 */
export default class BinarySearchTree<T> extends BSTNode<T> {
    protected root: BSTNode<T>
}

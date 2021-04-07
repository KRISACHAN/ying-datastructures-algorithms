/**
 * @url https://leetcode-cn.com/problems/validate-binary-search-tree/
 * @title 验证二叉搜索树
 * @desc 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *       假设一个二叉搜索树具有如下特征：
 *          节点的左子树只包含小于当前节点的数。
 *          节点的右子树只包含大于当前节点的数。
 *          所有左子树和右子树自身必须也是二叉搜索树。
 *
 * @example1
 * @input
 *     2
 *    / \
 *   1   3
 * @output true
 *
 * @example2
 * @input
 *     5
 *    / \
 *   1   4
 *      / \
 *     3   6
 * @output false
 * @answer 输入为: [5,1,4,null,null,3,6]。根节点的值为 5 ，但是其右子节点值为 4 。
 */
import { TreeNodeType } from 'core/leetNode'

// 使用中序遍历去递归判断当前二叉树元素的值是否匹配规则
// 左子节点一定比根节点小，所以可以传递左子节点跟根节点去比较，一旦有一个左子节点比根节点大，则说明不是一个二叉搜索数
// 右子节点的情况则相反
const coreRecursiver = (
    left: null | number,
    right: null | number,
    root: TreeNodeType,
): boolean => {
    if (!root) {
        return true
    }
    if (left !== null && root.val <= left) {
        return false
    }
    if (right !== null && root.val >= right) {
        return false
    }
    return (
        coreRecursiver(left, root.val, root.left) &&
        coreRecursiver(root.val, right, root.right)
    )
}

export const isValidBST = (root: TreeNodeType): boolean =>
    coreRecursiver(null, null, root)

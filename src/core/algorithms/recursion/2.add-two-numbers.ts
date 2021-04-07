/**
 * @url https://leetcode-cn.com/problems/add-two-numbers/
 * @title 两数相加
 * @desc 给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。请你将两个数相加，并以相同形式返回一个表示和的链表。你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * @example1
 * @input l1 = [2,4,3], l2 = [5,6,4]
 * @output [7,0,8]
 * @explanation 342 + 465 = 807.
 *
 * @example2
 * @input l1 = [0], l2 = [0]
 * @output [0]
 *
 * @example3
 * @input l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * @output [8,9,9,9,0,0,0,1]
 */
import { ListNode, ListNodeType } from 'core/leetNode'

const coreRecursiver = (
    l1: ListNodeType,
    l2: ListNodeType,
    prevCount = 0,
): ListNodeType => {
    // 边界处理
    if (!l1 && !l2 && prevCount === 0) {
        return null
    }
    const l1Val: number = l1?.val || 0
    const l2Val: number = l2?.val || 0
    // 当前节点需要的值，要确保小于10
    const curCount: number = l1Val + l2Val + prevCount
    const curNode: ListNodeType = new ListNode(curCount % 10)
    const l1Next: ListNodeType = l1?.next || null
    const l2Next: ListNodeType = l2?.next || null
    // 当前子节点需要的值，往下要传递超过10的部分，不超过10则传递0
    curNode.next = coreRecursiver(l1Next, l2Next, Math.floor(curCount / 10))
    return curNode
}

export const addTwoNumbers = (
    l1: ListNodeType,
    l2: ListNodeType,
): ListNodeType => coreRecursiver(l1, l2, 0)

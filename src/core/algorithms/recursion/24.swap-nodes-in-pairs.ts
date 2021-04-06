/**
 * @url https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @title 两两交换链表中的节点
 * @desc 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * @example1
 * @input head = [1,2,3,4]
 * @output [2,1,4,3]
 *
 * @example2
 * @input head = []
 * @output []
 *
 * @example3
 * @input head = [1]
 * @output [1]
 */
import { LeetListNodeType } from 'core/node'

const coreRecursiver = (head: LeetListNodeType): LeetListNodeType => {
    // 边界处理
    if (!head || !head.next) {
        return head
    }
    const tmpNode: LeetListNodeType = head.next
    head.next = coreRecursiver(tmpNode.next)
    tmpNode.next = head
    return tmpNode
}

export const swapPairs = (head: LeetListNodeType): LeetListNodeType =>
    coreRecursiver(head)

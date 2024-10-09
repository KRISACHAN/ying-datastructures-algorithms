/**
 * @url https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @title 合并两个有序链表
 * @desc 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @example1
 * @input l1 = [1,2,4], l2 = [1,3,4]
 * @output [1,1,2,3,4,4]
 *
 * @example2
 * @input l1 = [], l2 = []
 * @output []
 *
 * @example3
 * @input l1 = [], l2 = [0]
 * @output [0]
 */
import { ListNodeType } from 'core/leetNode'
import { lte } from 'core/utils'

const coreRecursiver = (l1: ListNodeType, l2: ListNodeType): ListNodeType => {
    // 边界处理
    if (!l1 && !l2) {
        return null
    }

    if (!l1) {
        return l2
    }

    if (!l2) {
        return l1
    }

    const l1Val: number = l1.val
    const l2Val: number = l2.val

    // 确保每次最小的值都在前
    if (lte(l1Val, l2Val)) {
        l1.next = coreRecursiver(l1.next, l2)
        return l1
    }
    l2.next = coreRecursiver(l1, l2.next)
    return l2
}

export const mergeTwoLists = (
    l1: ListNodeType,
    l2: ListNodeType,
): ListNodeType => coreRecursiver(l1, l2)

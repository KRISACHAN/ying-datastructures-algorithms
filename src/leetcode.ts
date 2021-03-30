import {
    ListNode,
    addTwoNumbers,
} from 'core/algorithms/recursion/2.add-two-numbers'

import { mergeTwoLists } from 'core/algorithms/recursion/21.merge-two-sorted-lists'

const l1 = new ListNode(9)
l1.next = new ListNode(9)
l1.next.next = new ListNode(9)
l1.next.next.next = new ListNode(9)
l1.next.next.next.next = new ListNode(9)
l1.next.next.next.next.next = new ListNode(9)
l1.next.next.next.next.next.next = new ListNode(9)

const l2 = new ListNode(9)
l2.next = new ListNode(9)
l2.next.next = new ListNode(9)
l2.next.next.next = new ListNode(9)

const resNode = addTwoNumbers(l1, l2)

const res = []

console.log(resNode)

if (!resNode.val) {
    resNode = resNode.next
}

while (resNode && resNode.val !== null) {
    res.push(resNode.val)
    resNode = resNode.next
}

console.log(res)

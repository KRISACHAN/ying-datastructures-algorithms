import {
    ListNode,
    addTwoNumbers,
} from 'core/algorithms/recursion/2.add-two-numbers'

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

console.log(l1)
console.log(l2)

const res = addTwoNumbers(l1, l2)

console.log(res)

import {
    ListNode,
    addTwoNumbers,
} from 'core/algorithms/recursion/2.add-two-numbers'

import { letterCombinations } from 'core/algorithms/recursion/17.letter-combinations-of-a-phone-number'

describe('recursion', () => {
    test(`
        add-two-numbers
            l1 = [2,4,3]
            l2 = [5,6,4]
    `, () => {
        const l1 = new ListNode(2)
        l1.next = new ListNode(4)
        l1.next.next = new ListNode(3)

        const l2 = new ListNode(5)
        l2.next = new ListNode(6)
        l2.next.next = new ListNode(4)

        let resNode = addTwoNumbers(l1, l2)

        const res = []

        while (resNode && resNode.val !== null) {
            res.push(resNode.val)
            resNode = resNode.next
        }

        expect(res).toEqual([7, 0, 8])
    })

    test(`
        add-two-numbers
            l1 = [0]
            l2 = [0]
    `, () => {
        const l1 = new ListNode(0)

        const l2 = new ListNode(0)

        let resNode = addTwoNumbers(l1, l2)

        const res = []

        while (resNode && resNode.val !== null) {
            res.push(resNode.val)
            resNode = resNode.next
        }

        expect(res).toEqual([0])
    })

    test(`
        add-two-numbers
            l1 = [9,9,9,9,9,9,9]
            l2 = [9,9,9,9]
    `, () => {
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

        let resNode = addTwoNumbers(l1, l2)

        const res = []

        while (resNode && resNode.val !== null) {
            res.push(resNode.val)
            resNode = resNode.next
        }

        expect(res).toEqual([8, 9, 9, 9, 0, 0, 0, 1])
    })

    test(`
        letter-combinations-of-a-phone-number
        "23"
    `, () => {
        const res = letterCombinations('23')

        expect(res).toEqual([
            'ad',
            'ae',
            'af',
            'bd',
            'be',
            'bf',
            'cd',
            'ce',
            'cf',
        ])
    })
})

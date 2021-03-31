import { LeetListNode } from 'core/node'

import { addTwoNumbers } from 'core/algorithms/recursion/2.add-two-numbers'

import { letterCombinations } from 'core/algorithms/recursion/17.letter-combinations-of-a-phone-number'

import { mergeTwoLists } from 'core/algorithms/recursion/21.merge-two-sorted-lists'

describe('recursion', () => {
    const createNode = (data: unknown) => {
        let curNode
        if (data === undefined || data === null) {
            curNode = new LeetListNode(null)
        } else if (Array.isArray(data)) {
            const [head, ...list] = data
            curNode = new LeetListNode(head)
            let nextNode = curNode
            list.forEach(item => {
                nextNode.next = new LeetListNode(item)
                nextNode = nextNode.next
            })
        }

        return curNode
    }

    const getRes = (node: LeetListNode): number[] => {
        const res = []

        while (node && node.val !== null) {
            res.push(node.val)
            node = node.next
        }

        return res
    }

    test(`
        add-two-numbers
            l1 = [2,4,3]
            l2 = [5,6,4]
    `, () => {
        const l1 = createNode([2, 4, 3])
        const l2 = createNode([5, 6, 4])
        const resNode = addTwoNumbers(l1, l2)
        const res = getRes(resNode)
        expect(res).toEqual([7, 0, 8])
    })

    test(`
        add-two-numbers
            l1 = [0]
            l2 = [0]
    `, () => {
        const l1 = new LeetListNode(0)

        const l2 = new LeetListNode(0)

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
        const l1 = new LeetListNode(9)
        l1.next = new LeetListNode(9)
        l1.next.next = new LeetListNode(9)
        l1.next.next.next = new LeetListNode(9)
        l1.next.next.next.next = new LeetListNode(9)
        l1.next.next.next.next.next = new LeetListNode(9)
        l1.next.next.next.next.next.next = new LeetListNode(9)

        const l2 = new LeetListNode(9)
        l2.next = new LeetListNode(9)
        l2.next.next = new LeetListNode(9)
        l2.next.next.next = new LeetListNode(9)

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

    test(`
        merge-two-sorted-lists
        l1 = [1,2,4]
        l2 = [1,3,4]
    `, () => {
        const l1 = new LeetListNode(1)
        l1.next = new LeetListNode(2)
        l1.next.next = new LeetListNode(4)

        const l2 = new LeetListNode(1)
        l2.next = new LeetListNode(3)
        l2.next.next = new LeetListNode(4)

        let resNode = mergeTwoLists(l1, l2)

        const res = []

        while (resNode && resNode.val !== null) {
            res.push(resNode.val)
            resNode = resNode.next
        }

        expect(res).toEqual([1, 1, 2, 3, 4, 4])
    })

    test(`
        merge-two-sorted-lists
        l1 = []
        l2 = []
    `, () => {
        const l1 = new LeetListNode(null)

        const l2 = new LeetListNode(null)

        let resNode = mergeTwoLists(l1, l2)

        const res = []

        if (!resNode.val) {
            resNode = resNode.next
        }

        while (resNode && resNode.val !== null) {
            res.push(resNode.val)
            resNode = resNode.next
        }

        expect(res).toEqual([])
    })

    test(`
        merge-two-sorted-lists
        l1 = []
        l2 = [0]
    `, () => {
        const l1 = new LeetListNode(null)

        const l2 = new LeetListNode(0)

        let resNode = mergeTwoLists(l1, l2)

        const res = []

        if (!resNode.val) {
            resNode = resNode.next
        }

        while (resNode && resNode.val !== null) {
            res.push(resNode.val)
            resNode = resNode.next
        }

        expect(res).toEqual([0])
    })
})

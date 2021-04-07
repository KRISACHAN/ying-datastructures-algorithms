import { ListNode, ListNodeType } from 'core/leetNode'
import { addTwoNumbers } from 'core/algorithms/recursion/2.add-two-numbers'
import { letterCombinations } from 'core/algorithms/recursion/17.letter-combinations-of-a-phone-number'
import { mergeTwoLists } from 'core/algorithms/recursion/21.merge-two-sorted-lists'
import { swapPairs } from 'core/algorithms/recursion/24.swap-nodes-in-pairs'
import { isValidBST } from 'core/algorithms/recursion/98.validate-binary-search-tree'
import { TreeNodeType, TreeNode } from 'core/leetNode'

describe('recursion', () => {
    const createNode = (
        data: number | undefined | null | number[],
    ): ListNodeType => {
        let curNode: ListNodeType
        if (data === undefined || data === null) {
            curNode = new ListNode(null)
        } else if (Array.isArray(data)) {
            const [head, ...list] = data
            curNode = new ListNode(head)
            let nextNode = curNode
            list.forEach(item => {
                nextNode.next = new ListNode(item)
                nextNode = nextNode.next
            })
        } else {
            curNode = new ListNode(data)
        }
        return curNode
    }

    const getRes = (node: ListNode): number[] => {
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
        const l1 = createNode(0)
        const l2 = createNode(0)
        const resNode = addTwoNumbers(l1, l2)
        const res = getRes(resNode)
        expect(res).toEqual([0])
    })

    test(`
        add-two-numbers
            l1 = [9,9,9,9,9,9,9]
            l2 = [9,9,9,9]
    `, () => {
        const l1 = createNode([9, 9, 9, 9, 9, 9, 9])
        const l2 = createNode([9, 9, 9, 9])
        const resNode = addTwoNumbers(l1, l2)
        const res = getRes(resNode)
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
        const l1 = createNode([1, 2, 4])
        const l2 = createNode([1, 3, 4])
        const resNode = mergeTwoLists(l1, l2)
        const res = getRes(resNode)
        expect(res).toEqual([1, 1, 2, 3, 4, 4])
    })

    test(`
        merge-two-sorted-lists
        l1 = []
        l2 = []
    `, () => {
        const l1 = createNode(null)
        const l2 = createNode(null)
        const resNode = mergeTwoLists(l1, l2)
        const res = getRes(resNode)
        expect(res).toEqual([])
    })

    test(`
        merge-two-sorted-lists
        l1 = []
        l2 = [0]
    `, () => {
        const l1 = createNode(null)
        const l2 = createNode(0)
        const resNode = mergeTwoLists(l1, l2)
        const res = getRes(resNode.val ? resNode : resNode.next)
        expect(res).toEqual([0])
    })

    test(`
        swap-nodes-in-pairs
        head = [1,2,3,4]
        [2,1,4,3]
    `, () => {
        const head = createNode([1, 2, 3, 4])
        const swapedHead = swapPairs(head)
        const res = createNode([2, 1, 4, 3])
        expect(swapedHead).toEqual(res)
    })

    test(`
        swap-nodes-in-pairs
        head = []
        []
    `, () => {
        const head = createNode([])
        const swapedHead = swapPairs(head)
        const res = createNode([])
        expect(swapedHead).toEqual(res)
    })

    test(`
        swap-nodes-in-pairs
        head = [1]
        [1]
    `, () => {
        const head = createNode([1])
        const swapedHead = swapPairs(head)
        const res = createNode([1])
        expect(swapedHead).toEqual(res)
    })

    test(`
        validate-binary-search-tree
        输入: [2, 1, 3]
        输出: true
    `, () => {
        const left: TreeNodeType = new TreeNode(1)
        const right: TreeNodeType = new TreeNode(3)
        const root: TreeNodeType = new TreeNode(2, left, right)
        expect(isValidBST(root)).toEqual(true)
    })

    test(`
        validate-binary-search-tree
        输入: [5,1,4,null,null,3,6]
        输出: false
    `, () => {
        const left: TreeNodeType = new TreeNode(1)
        const rightLeft: TreeNodeType = new TreeNode(3)
        const rightRight: TreeNodeType = new TreeNode(3)
        const right: TreeNodeType = new TreeNode(4, rightLeft, rightRight)
        const root: TreeNodeType = new TreeNode(5, left, right)
        expect(isValidBST(root)).toEqual(false)
    })
})

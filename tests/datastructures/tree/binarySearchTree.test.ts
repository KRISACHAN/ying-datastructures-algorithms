import BinarySearchTree from 'core/datastructures/tree/binarySearchTree'

describe('BinarySearchTree', () => {
    let bst: BinarySearchTree<number>

    beforeEach(() => {
        bst = new BinarySearchTree<number>()
    })

    it('starts empty', () => {
        expect(bst.getRoot()).toEqual(undefined)
    })

    function assertNode(node: any, key: number, left: number, right: number) {
        if (key) {
            expect(node.key).toEqual(key)
        } else {
            expect(node).toEqual(key)
            return
        }

        if (left) {
            expect(node.left.key).toEqual(left)
        } else {
            expect(node.left).toEqual(left)
        }

        if (right) {
            expect(node.right.key).toEqual(right)
        } else {
            expect(node.right).toEqual(right)
        }
    }

    it('inserts elements in the BST', () => {
        expect(bst.getRoot()).toEqual(undefined)

        bst.insert(11)
        bst.insert(7)
        bst.insert(15)
        bst.insert(5)
        bst.insert(3)
        bst.insert(9)
        bst.insert(8)
        bst.insert(10)
        bst.insert(13)
        bst.insert(12)
        bst.insert(14)
        bst.insert(20)
        bst.insert(18)
        bst.insert(25)

        let node = bst.getRoot()
        assertNode(node, 11, 7, 15)

        node = node.left
        assertNode(node, 7, 5, 9)

        node = node.left
        assertNode(node, 5, 3, undefined)

        node = node.left
        assertNode(node, 3, undefined, undefined)

        node = bst.getRoot().left.left.right
        assertNode(node, undefined, undefined, undefined)

        node = bst.getRoot().left.right
        assertNode(node, 9, 8, 10)

        node = node.left
        assertNode(node, 8, undefined, undefined)

        node = bst.getRoot().left.right.right
        assertNode(node, 10, undefined, undefined)

        node = bst.getRoot().right
        assertNode(node, 15, 13, 20)

        node = node.left
        assertNode(node, 13, 12, 14)

        node = node.left
        assertNode(node, 12, undefined, undefined)

        node = bst.getRoot().right.left.right
        assertNode(node, 14, undefined, undefined)

        node = bst.getRoot().right.right
        assertNode(node, 20, 18, 25)

        node = node.left
        assertNode(node, 18, undefined, undefined)

        node = bst.getRoot().right.right.right
        assertNode(node, 25, undefined, undefined)
    })

    it('verifies if element exists', () => {
        expect(bst.getRoot()).toEqual(undefined)
    })

    it('removes a leaf', () => {
        expect(bst.getRoot()).toEqual(undefined)
    })

    it('in order traverse', () => {
        const list: number[] = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9]
        list.forEach(item => {
            bst.insert(item)
        })
        const res: number[] = []
        bst.inOrderTraverse((key: number): void => {
            res.push(key)
        })
        expect(res.toString()).toStrictEqual('2,3,4,8,9,9,10,13,18,21')
    })

    it('pre order traverse', () => {
        const list: number[] = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9]
        list.forEach(item => {
            bst.insert(item)
        })
        const res: number[] = []
        bst.preOrderTraverse((key: number): void => {
            res.push(key)
        })
        expect(res.toString()).toStrictEqual('10,3,2,4,9,8,9,18,13,21')
    })

    it('post order traverse', () => {
        const list: number[] = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9]
        list.forEach(item => {
            bst.insert(item)
        })
        const res: number[] = []
        bst.postOrderTraverse((key: number): void => {
            res.push(key)
        })
        expect(res.toString()).toStrictEqual('2,8,9,9,4,3,13,21,18,10')
    })

    it('breadth first search', () => {
        const list: number[] = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9]
        list.forEach(item => {
            bst.insert(item)
        })
        const res: number[] = []
        bst.breadthFirstSearch((key: number): void => {
            res.push(key)
        })
        expect(res.toString()).toStrictEqual('10,3,18,2,4,13,21,9,8,9')
    })

    it('depth first search', () => {
        const list: number[] = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9]
        list.forEach(item => {
            bst.insert(item)
        })
        const res: number[] = []
        bst.depthFirstSearch((key: number): void => {
            res.push(key)
        })
        expect(res.toString()).toStrictEqual('10,3,2,4,9,8,9,18,13,21')
    })
})

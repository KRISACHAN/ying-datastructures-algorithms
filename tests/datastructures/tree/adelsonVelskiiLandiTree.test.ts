import AdelsonVelskiiLandiTree from 'core/datastructures/tree/adelsonVelskiiLandiTree'

describe('AVLTree', () => {
    let tree: AdelsonVelskiiLandiTree<number>

    beforeEach(() => {
        tree = new AdelsonVelskiiLandiTree<number>()
    })

    it('starts empty', () => {
        expect(tree.getRoot()).toEqual(undefined)
    })

    it('inserts elements in the AVLTree', () => {
        expect(tree.getRoot()).toEqual(undefined)

        tree.insert(1)
            .insert(2)
            .insert(3)
            .insert(4)
            .insert(5)
            .insert(6)
            .insert(7)
            .insert(14)
            .insert(15)
            .insert(13)
            .insert(12)
            .insert(11)

        expect(tree.toArray()).toEqual([
            7,
            4,
            14,
            2,
            6,
            12,
            15,
            1,
            3,
            5,
            11,
            13,
        ])
    })

    it('removes elements in the AVLTree', () => {
        tree.insert(1).insert(2).insert(3).insert(4).insert(5)

        expect(tree.toArray()).toEqual([2, 1, 4, 3, 5])

        tree.remove(4)
        expect(tree.toArray()).toEqual([2, 1, 5, 3])
    })
})

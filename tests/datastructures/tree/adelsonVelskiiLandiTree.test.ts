import AdelsonVelskiiLandiTree from '../../../src/core/datastructures/tree/adelsonVelskiiLandiTree'

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
    })
})

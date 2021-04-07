import RedBlackTree from 'core/datastructures/tree/redBlackTree'

const tree: RedBlackTree<number> = new RedBlackTree<number>()

tree.insert(1)
    .insert(2)
    .insert(3)
    .insert(4)
    .insert(5)
    .insert(6)
    .insert(7)
    .insert(8)
    .remove(5)
    .remove(6)
    .remove(11)

tree.print()

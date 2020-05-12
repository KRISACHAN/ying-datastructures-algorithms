'use strict'
import BinarySearchTree from '../src/core/datastructures/tree/BinarySearchTree'
let bst: BinarySearchTree<number> = new BinarySearchTree<number>()

bst.insert(6)
    .insert(3)
    .insert(1)
    .insert(2)
    .insert(7)
    .insert(4)
    .insert(5)
    .insert(8)
bst.print()
console.log(bst.min())
console.log(bst.max())
bst.print()
console.group('preOrderTraverse')
bst.preOrderTraverse((key: BinarySearchTree<number>) => {
    console.log(key)
})
console.groupEnd()
console.group('inOrderTraverse')
bst.inOrderTraverse((key: BinarySearchTree<number>) => {
    console.log(key)
})
console.groupEnd()
console.group('postOrderTraverse')
bst.postOrderTraverse((key: BinarySearchTree<number>) => {
    console.log(key)
})
console.groupEnd()
console.groupEnd()
console.group('breadthFirstSearch')
bst.breadthFirstSearch((key: BinarySearchTree<number>) => {
    console.log(key)
})
console.groupEnd()

'use strict'
import BinarySearchTree from '../src/core/datastructures/tree/BinarySearchTree'
let bst: BinarySearchTree<any> = new BinarySearchTree<any>()

let list = [11, 7, 15, 5, 3, 9, 8, 10, 13, 12, 14, 20, 18, 25, 6]

list.forEach(item => {
    bst.insert(item)
})
bst.remove(3).print()

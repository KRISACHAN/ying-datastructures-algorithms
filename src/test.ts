'use strict'
import BinarySearchTree from '../src/core/datastructures/tree/BinarySearchTree'
import AdelsonVelskiiLandiTree from '../src/core/datastructures/tree/adelsonVelskiiLandiTree'
import RedBlackTree from '../src/core/datastructures/tree/redBlackTree'

let bst: BinarySearchTree<any> = new BinarySearchTree<any>()
let avlt: AdelsonVelskiiLandiTree<any> = new AdelsonVelskiiLandiTree<any>()
let rbt: RedBlackTree<any> = new RedBlackTree<any>()

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

console.log({
    ['list.length']: list.length
})

list.forEach(item => {
    bst.insert(item)
    avlt.insert(item)
    rbt.insert(item)
})

console.group('bst')
bst.print()
console.log(bst.getRoot())
console.groupEnd()

console.group('avlt')
avlt.print()
console.log(avlt.getRoot())
console.groupEnd()

console.group('rbt')
rbt.print()
console.log(rbt.getRoot())
console.groupEnd()

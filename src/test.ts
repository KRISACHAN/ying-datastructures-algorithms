'use strict'
import BinarySearchTree from '../src/core/datastructures/tree/BinarySearchTree'
import AdelsonVelskiiLandiTree from '../src/core/datastructures/tree/adelsonVelskiiLandiTree'
import RedBlackTree from '../src/core/datastructures/tree/redBlackTree'

let bst: BinarySearchTree<any> = new BinarySearchTree<any>()
let avlt: AdelsonVelskiiLandiTree<any> = new AdelsonVelskiiLandiTree<any>()
let rbt: RedBlackTree<any> = new RedBlackTree<any>()

let list = [50, 17, 72, 12, 13, 54, 76, 9, 14, 19, 67]

console.log({
    ['list.length']: list.length
})

list.forEach(item => {
    bst.insert(item)
    avlt.insert(item)
    rbt.insert(item)
})

console.group('bst')
bst.remove(19).remove(50).print()
console.log(bst.getRoot())
console.groupEnd()

console.group('avlt')
avlt.remove(19).remove(50).print()
console.log(avlt.getRoot())
console.groupEnd()

console.group('rbt')
rbt.remove(19).remove(50).print()
console.log(rbt.getRoot())
console.groupEnd()

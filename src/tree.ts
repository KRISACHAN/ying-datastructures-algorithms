'use strict'
import BinarySearchTree from 'core/datastructures/tree/BinarySearchTree'
import AdelsonVelskiiLandiTree from 'core/datastructures/tree/adelsonVelskiiLandiTree'
import RedBlackTree from 'core/datastructures/tree/redBlackTree'
import TreeSearch from 'core/algorithms/search/treeSearch'

let bst: BinarySearchTree<any> = new BinarySearchTree<any>()
let avlt: AdelsonVelskiiLandiTree<any> = new AdelsonVelskiiLandiTree<any>()
let rbt: RedBlackTree<any> = new RedBlackTree<any>()

let ts: TreeSearch<any> = new TreeSearch<any>()

const list = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9]

list.forEach(item => {
    bst.insert(item)
    avlt.insert(item)
    rbt.insert(item)
    ts.insert(item)
})

console.log(bst)

console.group('inOrderTraverse')
bst.inOrderTraverse((key: number): void => {
    console.log(key)
})
console.log(ts.getInOrder().toString())
console.groupEnd()

console.group('preOrderTraverse')
bst.preOrderTraverse((key: number): void => {
    console.log(key)
})
console.log(ts.getPreOrder().toString())
console.groupEnd()

console.group('postOrderTraverse')
bst.postOrderTraverse((key: number): void => {
    console.log(key)
})
console.log(ts.getPostOrder().toString())
console.groupEnd()

console.group('breadthFirstSearch')
bst.breadthFirstSearch((key: number): void => {
    console.log(key)
})
console.log(ts.getBFS().toString())
console.groupEnd()

console.group('depthFirstSearch')
bst.depthFirstSearch((key: number): void => {
    console.log(key)
})
console.log(ts.getDFS().toString())
console.groupEnd()

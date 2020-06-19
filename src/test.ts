'use strict'
import BinarySearchTree from '../src/core/datastructures/tree/BinarySearchTree'
import AdelsonVelskiiLandiTree from '../src/core/datastructures/tree/adelsonVelskiiLandiTree'
import RedBlackTree from '../src/core/datastructures/tree/redBlackTree'

let bst: BinarySearchTree<any> = new BinarySearchTree<any>()
let avlt: AdelsonVelskiiLandiTree<any> = new AdelsonVelskiiLandiTree<any>()
let rbt: RedBlackTree<any> = new RedBlackTree<any>()


let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

list.forEach(item => {
    bst.insert(item)
    avlt.insert(item)
    rbt.insert(item)
})
console.log(bst.getRoot())
console.log(avlt.getRoot())
console.log(rbt.getRoot())

'use strict'
import BinarySearchTree from 'core/datastructures/tree/BinarySearchTree'
import AdelsonVelskiiLandiTree from 'core/datastructures/tree/adelsonVelskiiLandiTree'
import RedBlackTree from 'core/datastructures/tree/redBlackTree'
import Dictionary from 'core/datastructures/dictionary/dictionary'
import Graph from 'core/datastructures/graph/graph'

import { MyObj } from 'core/node'

const bst: BinarySearchTree<any> = new BinarySearchTree<any>()
const avlt: AdelsonVelskiiLandiTree<any> = new AdelsonVelskiiLandiTree<any>()
const rbt: RedBlackTree<any> = new RedBlackTree<any>()
const dict: Dictionary<any, any> = new Dictionary()
const dict2 = new Dictionary<MyObj, MyObj>()
const graph = new Graph<number | string>()

const list = [50, 17, 72, 12, 13, 54, 76, 9, 14, 19, 67]

console.log({
    ['list.length']: list.length,
})

list.forEach(item => {
    bst.insert(item)
    avlt.insert(item)
    rbt.insert(item)
    dict.set(`k-${item}`, `v-${item}`)
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

console.group('dict')
dict.remove('k-19').remove('k-50').print()
console.log(dict)
console.groupEnd()

let myObj = new MyObj(1, 2)
dict2.set(myObj, myObj)
myObj = new MyObj(3, 4)
dict2.set(myObj, myObj)
dict2.print()
console.log(dict2.toString())

graph
    .addVertex('top')
    .addVertex('right')
    .addVertex('bottom')
    .addVertex('left')
    .addEdge('top', 'right')
    .addEdge('right', 'bottom')
    .addEdge('bottom', 'left')
    .addEdge('left', 'top')
    .print()
console.group('Graph full')
console.log(graph.getVertices())
console.log(graph.getAdjList())
console.log(graph.getAdjList().keys())
console.log(graph.getAdjList().values())
console.log(graph.toString())
console.log(graph.toString() === graph.toString())
console.log(graph)
console.groupEnd()

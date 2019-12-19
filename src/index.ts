'use strict'
import LinkedList from './ts/linkedList/linkedList'

let list: LinkedList<any>
let min: number
let max: number

list = new LinkedList<any>()

list.insert(3, '3')
    .print()
console.log(list.length)
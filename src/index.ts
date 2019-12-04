'use strict'
import PriorityQueue from './ts/cores/queue/priorityQueue'

let queue = new PriorityQueue()
queue.enqueue('a', 1)
queue.enqueue('b', 2)
queue.enqueue('c', 3)

console.log(queue.front())
console.log(queue.back())
queue.print()
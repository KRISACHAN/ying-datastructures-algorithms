'use strict'
import Deque from './ts/cores/queue/deque'

let queue = new Deque()
queue.addFront(1)
queue.addFront(2)
queue.addFront(3)
queue.addBack(1)
queue.addBack(2)
queue.addBack(3)
queue.print()
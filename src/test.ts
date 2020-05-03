'use strict'
import PriorityQueueArray from '../src/core/queue/priorityQueueArray'
let priorityQueueArray: PriorityQueueArray<number> = new PriorityQueueArray()
priorityQueueArray.enqueue(3, 3).enqueue(4, 4).enqueue(0, 0).enqueue(2, 2).enqueue(1, 1)
priorityQueueArray.print()

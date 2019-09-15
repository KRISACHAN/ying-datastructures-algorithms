'use strict'
/**
 * 优先队列（Priority Queue）：带有权重的队列
 */
const PriorityQueue = (() => {
  function QueueElement (element, priority) {
    this.element = element
    this.priority = priority
  }
  class __PriorityQueue {
    constructor () {       
      this.#items.set(this, [])  
    }
    #items = new WeakMap()
    enqueue (element, priority) {  // 向队尾添加一个元素以及权重
      let queueElement = new QueueElement(element, priority)
      let added = false
      let s = this.#items.get(this)
      for (let i = 0; i < s.length; ++i) {       
        if (queueElement.priority < s[i].priority) {
          s.splice(i, 0, queueElement)
          added = true
          break
        }     
      }     
      if (!added) {       
        s.push(queueElement)
      }
    }
    dequeue () { // 删除队首的元素   
      let q = this.#items.get(this)
      let r = q.shift()
      return r
    }
    front () { // 读取队首
      let s = this.#items.get(this)
      return s[0]
    }
    back () { // 读取队尾
      let s = this.#items.get(this)
      return s[s.length - 1]
    }
    isEmpty () { // 能简单地判断内部数组的长度是否为0
      let s = this.#items.get(this)
      return s.length == 0
    }
    size () { // 数组长度
      let s = this.#items.get(this)
      return s.length
    }
    print () { // 打印数组
      let s = this.#items.get(this)
      for (let i = 0; i < s.length; ++i) {       
        console.log(`${s[i].element} - ${s[i].priority}`)   
      }   
    }
  }   
  return __PriorityQueue
})()

let priorityQueue = new PriorityQueue()
priorityQueue.enqueue("John", 2)
priorityQueue.enqueue("Jack", 1)
priorityQueue.enqueue("Camila", 1)
priorityQueue.print()
'use strict'
/**
 * 队列（Queue）：先进先出（FIFO, First In First Out）的数据结构
 */
const Queue = (() => { 
  class __Queue {
    #items = new WeakMap()  // 保存队列里的元素     
    constructor () {       
      this.#items.set(this, [])  
    }
    enqueue (element) {  // 向队尾添加一个元素      
      let q = this.#items.get(this)
      q.push(element)
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
      console.log(s.toString())
    }
  }   
  return __Queue
})()
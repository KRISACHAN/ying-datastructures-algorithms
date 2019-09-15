/**
 * leetCode 第 232 题，用栈实现队列
 */
/**
 * 使用栈实现队列的下列操作：
 * push(x) -- 将一个元素放入队列的尾部。
 * pop() -- 从队列首部移除元素。
 * top() -- 返回队列首部的元素。
 * empty() -- 返回队列是否为空。
 */
/**
 * 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
 * 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 * 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 */
'use strict'
const MyQueue = (() => {
  class __MyQueue {
    #stack1 = new WeakMap()
    #stack2 = new WeakMap()
    constructor () {
      this.#stack1.set(this, [])
      this.#stack2.set(this, [])
    }
    push (elements) {
      let s1 = this.#stack1.get(this)
      s1.push(elements)
    }
    pop () {
      let s1 = this.#stack1.get(this)
      let s2 = this.#stack2.get(this)
      while (s1.length > 0) {
        s2.push(s1.pop()) 
      }
      let pop = s2.pop()
      while (s2.length > 0) {
        s1.push(s2.pop())
      }
      return pop
    }
    peek () {
      let s1 = this.#stack1.get(this)
      let s2 = this.#stack2.get(this)
      while (s1.length > 0) {
        s2.push(s1.pop()) 
      }
      let peek = s2[s2.length - 1]
      while (s2.length > 0) {
        s1.push(s2.pop())
      }
      return peek
    }
    empty () {
      let s1 = this.#stack1.get(this)
      return s1.length === 0
    }
  }
  return __MyQueue
})()

/*
["MyQueue","push","push","peek","pop","empty"]
[[],[1],[2],[],[],[]]
[null,null,null,1,1,false]
*/
const mq = new MyQueue()
mq.push(1)
mq.push(2)
console.log(mq.peek())  // 返回 1
console.log(mq.pop())   // 返回 1
console.log(mq.empty()) // 返回 false

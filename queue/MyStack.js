/**
 * 使用队列实现栈的下列操作：
 * push(x) -- 元素 x 入栈
 * pop() -- 移除栈顶元素
 * top() -- 获取栈顶元素
 * empty() -- 返回栈是否为空
 */
/**
 * 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
 * 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 * 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
 */
'use strict'
const MyStack = (() => {
  class __MyStack {
    #queue1 = new WeakMap()
    #queue2 = new WeakMap()
    constructor () {
      this.#queue1.set(this, [])
      this.#queue2.set(this, [])
    }
    push (elements) {
      let s1 = this.#queue1.get(this)
      s1.push(elements)
    }
    pop () {
      let s1 = this.#queue1.get(this)
      let s2 = this.#queue2.get(this)
      while (s1.length > 0) {
        s2.push(s1.shift())
      }
      const pop = s2.pop()
      while (s2.length > 0) {
        s1.push(s2.shift())
      }
      return pop
    }
    top () {
      let s1 = this.#queue1.get(this)
      let s2 = this.#queue2.get(this)
      while (s1.length > 0) {
        s2.push(s1.shift())
      }
      const pop = s2[s2.length - 1]
      while (s2.length > 0) {
        s1.push(s2.shift())
      }
      return pop
    }
    empty () {
      let s1 = this.#queue1.get(this)
      return s1.length === 0
    }
  }
  return __MyStack
})()
/*
["MyStack","push","push","top","pop","empty"]

[[],[1],[2],[],[],[]]

[null,null,null,2,2,false]
*/
const ms = new MyStack()
ms.push(1)
ms.push(2)
console.log(ms.top())
console.log(ms.pop())
console.log(ms.empty())
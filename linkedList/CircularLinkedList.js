'use stric'
/**
 * 循环链表（CircularLinkedList）
 */
const CircularLinkedList = (() => {
  class Node {
    constructor(element) {
      this.element = element
      this.next = null
    }
  }
  class List {
    constructor() {
      this.head = null
      this.length = 0
    }

    append(element) {
      let node = new Node(element)
      let current
      if (this.head === null) {
        this.head = node
        node.next = this.head
      } else {
        current = this.head
        while (current.next !== this.head) {
          current = current.next
        }
        current.next = node
        node.next = this.head
      }
      this.length++
    }

    insert(position, element) {
      if (position >= 0 && position <= this.length) {
        let node = new Node(element)
        let current = this.head
        let previous
        let index = 0
        if (position === 0) {
          node.next = current
          this.head = node
        } else {
          while (index++ < position) {
            previous = current
            current = current.next
          }
          node.next = current
          previous.next = node
        }
        this.length++
        return true
      } else {
        return false
      }
    }

    removeAt(position) {
      if (position > -1 && position < this.length) {
        let current = this.head
        let previous
        let index = 0
        if (position === 0){
          this.head = current.next
        } else {
          while (index++ < position){
            previous = current
            current = current.next
          }
          previous.next = current.next
        }
        this.length--
        return current.element
      } else {
        return null
      } 
    }

    remove(element) {
      let index = this.indexOf(element)
      return this.removeAt(index)
    }

    indexOf(element) {
      let current = this.head
      let index = -1
      while (current) {
        if (element === current.element) {
          return index
        }
        index++
        current = current.next
      }
      return -1
    }

    isEmpty() {
    return this.length === 0
    }

    size() {
      return this.length
    }

    getHead() {
      return this.head
    }

    toString() {
      return this
    }

    print() {
      console.log(this)
    }
  }
  return List
})()
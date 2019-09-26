'use stric'
/**
 * 链表（LinkedList）：链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个
元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。
 */
const LinkedList = (() => {
  class Node { // 节点类
    constructor(element) {
      this.element = element
      this.next = null
    }
  }
  class List { // 链类
    constructor() {
      this.head = null // 链表头部
      this.length = 0 // 链表长度
    }

    append(element) { // 向列表尾部添加一个新的项。
      let node = new Node(element)
      let current
      if (this.head === null) { // 列表中第一个节点
        this.head = node
      } else {
        current = this.head
        // 循环列表，直到找到最后一项
        while (current.next) {
          current = current.next
        }
        // 找到最后一项，将其next赋为node，建立链接
        current.next = node
      }
      this.length++ // 更新列表的长度
    }

    insert(position, element) { // 向列表的特定位置插入一个新的项。
      //检查越界值
      if (position >= 0 && position <= this.length) {
        let node = new Node(element)
        let current = this.head
        let previous
        let index = 0
        if (position === 0) { //在第一个位置添加
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

    removeAt(position) { // 从列表的特定位置移除一项。
      //检查越界值
      if (position > -1 && position < this.length) {
        let current = this.head
        let previous
        let index = 0
        //移除第一项
        if (position === 0){
          this.head = current.next
        } else {
          while (index++ < position){
            previous = current
            current = current.next
          }
          //将previous与current的下一项链接起来：跳过current，从而移除它
          previous.next = current.next
        }
        this.length--
        return current.element
      } else {
        return null
      } 
    }

    remove(element) { // 从列表中移除一项。
      let index = this.indexOf(element)
      return this.removeAt(index)
    }

    indexOf(element) { // 返回元素在列表中的索引。如果列表中没有该元素则返回-1。
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

    isEmpty() { // 如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
    return this.length === 0
    }

    size() { // 返回链表包含的元素个数。与数组的length属性类似。
      return this.length
    }

    getHead() { // 返回头部信息
      return this.head
    }

    toString() { // 由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
      let current = this.head
      let string = ''
      while (current) {
        string += current.element + (current.next ? '\n' : '')
        current = current.next
      }
      return string
    }

    print() {// 打印
      console.log(this)
    }
  }
  return List
})()
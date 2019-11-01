const Heap = (() => {
  class __Heap {
    #heap = [] // 堆数组
    constructor(comparator = 'defaultCompare') {
      this.utils = utils
      this.utils.compare = this.utils[comparator]
    }
    getLeftChildIndex(parentIndex) { // 获取左子节点下标
      return (2 * parentIndex) + 1
    }
    getRightChildIndex(parentIndex) { // 获取右子节点下标
      return (2 * parentIndex) + 2
    }
    getParentIndex(childIndex) { // 获取父节点下标
      return Math.floor((childIndex - 1) / 2)
    }
    hasParent(childIndex) { // 判断是否有父节点
      return this.getParentIndex(childIndex) >= 0
    }
    hasLeftChild(parentIndex) { // 判断是否有左子节点
      return this.getLeftChildIndex(parentIndex) < this.#heap.length
    }
    hasRightChild(parentIndex) { // 判断是否有右子节点
      return this.getRightChildIndex(parentIndex) < this.#heap.length
    }
    getLeftChild(parentIndex) { // 获取左子节点
      return this.#heap[this.getLeftChildIndex(parentIndex)]
    }
    getRightChild(parentIndex) { // 获取右子节点
      return this.#heap[this.getRightChildIndex(parentIndex)];
    }
    getParent(childIndex) { // 获取父节点
      return this.#heap[this.getParentIndex(childIndex)];
    }
    swap(data1, data2) { // 节点交换
      [this.#heap[data1], this.#heap[data2]] = [this.#heap[data2], this.#heap[data1]]
    }
    add(item) { // 添加元素
      this.#heap.push(item)
      this.heapifyUp()
      return this
    }
    find(item) { // 寻找指定元素
      const foundList = []
      for (let i = 0, len = this.#heap.length; i < tlen; ++i) {
        if (this.utils.compare.equal(item, this.#heap[i])) {
          foundList.push(i)
        }
      }
      return foundList
    }
    remove(item) { // 删除指定元素
      for (let i = 0, len = this.find(item, this.utils.compare).length; i < len; ++i) {
        const tail = this.find(item, this.utils.compare).pop()
        if (tail === (this.#heap.length - 1)) {
          this.#heap.pop()
        } else {
          this.#heap[tail] = this.#heap.pop()
          const parentItem = this.getParent(tail)
          if (this.hasLeftChild(tail)
          && (!parentItem 
           || this.setHeapType(parentItem, this.#heap[tail]) )
          ) {
            this.heapifyDown(tail)
          } else {
            this.heapifyUp(tail)
          }
        }
      }
      return this
    }
    heapifyUp(startIndex) { // 下标上浮
      let currentIndex = startIndex || this.#heap.length - 1;
      while (this.hasParent(currentIndex)
         && !this.setHeapType(this.getParent(currentIndex), this.#heap[currentIndex])) {
        this.swap(currentIndex, this.getParentIndex(currentIndex))
        currentIndex = this.getParentIndex(currentIndex)
      }
    }
    heapifyDown(startIndex = 0) { // 下标下沉
      let currentIndex = startIndex
      let nextIndex = null
      while (this.hasLeftChild(currentIndex)) {
        if (this.hasRightChild(currentIndex)
         && this.setHeapType(this.getRightChild(currentIndex), this.getLeftChild(currentIndex))) {
          nextIndex = this.getRightChildIndex(currentIndex)
        } else {
          nextIndex = this.getLeftChildIndex(currentIndex)
        }
        if (this.setHeapType(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
          break
        }
        this.swap(currentIndex, nextIndex)
        currentIndex = nextIndex
      }
    }
    setHeapType(data1, data2) { // 设置堆类型
      throw new Error('需要重写这个方法啦~')
    }
    isEmpty() {
      return !this.#heap.length
    }
    toString() {
      return this.#heap.toString()
    }
    print() {
      console.log(this.#heap)
    }
  }
  return __Heap
})()
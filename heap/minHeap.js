'use strict'
const MinHeap = (() => {
  class __MinHeap extends Heap {
    constructor() {
      super()
    }
    setHeapType(data1, data2) {
      return this.utils.lessThanOrEqual(data1, data2)
    }
  }
  return __MinHeap
})()
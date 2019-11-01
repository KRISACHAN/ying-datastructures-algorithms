'use strict'
const MaxHeap = (() => {
  class __MaxHeap extends Heap {
    constructor() {
      super()
    }
    setHeapType(data1, data2) {
      return this.utils.greaterThanOrEqual(data1, data2)
    }
  }
  return __MaxHeap
})()
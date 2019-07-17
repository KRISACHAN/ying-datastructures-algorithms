'use strict'
const Queue = (() => { 
    const items = new WeakMap()
    class __Queue {     
        constructor () {       
            items.set(this, [])  
        }
        enqueue (element) {       
            let q = items.get(this)
            q.push(element)
        }
        dequeue () {       
            let q = items.get(this)
            let r = q.shift()
            return r
        }
        front () {
            let s = items.get(this)
            return s[0]
        }
        isEmpty () { // 能简单地判断内部数组的长度是否为0
            let s = items.get(this)
            return s.length == 0
        }
        size () { // 数组长度
            let s = items.get(this)
            return s.length
        }
        print () { // 打印数组
            let s = items.get(this)
            console.log(s.toString())
        }
    }   
    return __Queue
})()
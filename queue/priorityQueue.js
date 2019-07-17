'use strict'
const PriorityQueue = (() => {
    const items = new WeakMap()
    function QueueElement (element, priority) {
        this.element = element
        this.priority = priority
    }
    class __PriorityQueue {     
        constructor () {       
            items.set(this, [])  
        }
        enqueue (element, priority) {       
            let queueElement = new QueueElement(element, priority)
            let added = false
            let s = items.get(this)
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
            for (let i = 0; i < s.length; ++i) {       
                console.log(`${s[i].element} - ${s[i].priority}`)   
            }   
        }
    }   
    return __PriorityQueue
})()
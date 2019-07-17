'use strict'
const Stack = (() => {
    const items = new WeakMap()  // 保存栈里的元素
    class __Stack {
        constructor () {
            items.set(this, [])
        }
        push (elements) { // 添加一个（或几个）新元素到栈顶
            let s = items.get(this) 
            s.push(elements)
        }
        pop () {
            let s = items.get(this)
            let r = s.pop()
            return r
        }
        peek () { // 将返回栈顶的元素
            let s = items.get(this)
            return s[s.length - 1]
        }
        isEmpty () { // 能简单地判断内部数组的长度是否为0
            let s = items.get(this)
            return s.length === 0
        }
        clear () { // 把数组中的元素全部移除
            items.set(this, [])
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
    return __Stack
})()

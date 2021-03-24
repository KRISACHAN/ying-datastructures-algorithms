import BinarySearchTree from 'core/datastructures/tree/binarySearchTree'

export default class TreeSearch<T> extends BinarySearchTree<T> {
    constructor() {
        super()
    }
    // 广度优先遍历
    getBFS(): T[] {
        const list: T[] = []
        this.breadthFirstSearch((data: T): void => {
            list.push(data)
        })
        return list
    }
    // 深度优先遍历
    getDFS(): T[] {
        const list: T[] = []
        this.depthFirstSearch((data: T): void => {
            list.push(data)
        })
        return list
    }
    // 中序遍历
    getInOrder(): T[] {
        const list: T[] = []
        this.inOrderTraverse((data: T): void => {
            list.push(data)
        })
        return list
    }
    // 前序遍历
    getPreOrder(): T[] {
        const list: T[] = []
        this.preOrderTraverse((data: T): void => {
            list.push(data)
        })
        return list
    }
    // 后序遍历
    getPostOrder(): T[] {
        const list: T[] = []
        this.postOrderTraverse((data: T): void => {
            list.push(data)
        })
        return list
    }
}

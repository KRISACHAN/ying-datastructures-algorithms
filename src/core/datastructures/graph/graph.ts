import Dictionary from 'core/datastructures/dictionary/dictionary'
import { ValuePair } from 'core/node'

export default class Graph<T> {
    private vertices: T[] = [] // 存储图中所有顶点的名字
    private adjList: Dictionary<T, T[]> = new Dictionary() // 字典存储邻接表

    constructor(private isDirected = false) {}

    // 向图中添加一个新的顶点
    addVertex(v: T): Graph<T> {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v) // 将该顶点添加到顶点列表中
            this.adjList.set(v, []) // 设置顶点v作为键对应的字典值为一个空数组
        }
        return this
    }

    // 添加顶点之间的边
    addEdge(a: T, b: T): Graph<T> {
        if (!this.adjList.get(a)) {
            this.addVertex(a)
        }
        if (!this.adjList.get(b)) {
            this.addVertex(b)
        }

        this.adjList.get(a).push(b)

        if (!this.isDirected) {
            // 当图为无向图时，再添加一条边
            this.adjList.get(b).push(a)
        }
        return this
    }

    // 获取顶点
    getVertices(): T[] {
        return this.vertices
    }

    // 邻接表
    getAdjList(): Dictionary<T, T[]> {
        return this.adjList
    }

    toString(): string {
        let res = ''
        for (let i = 0, len: number = this.vertices.length; i < len; ++i) {
            res += this.vertices[i] + ' -> '
            const neighbors = this.adjList.get(this.vertices[i])
            for (let j = 0; j < neighbors.length; j++) {
                res += neighbors[j] + ' '
            }
            res += '\n'
        }
        return res
    }

    print() {
        console.log({
            vertices: this.getVertices(),
            adjList: this.getAdjList(),
        })
    }
}

'use strict'
import {
    defaultCompare,
    ICompareFunction,
    Compare,
    DOES_NOT_EXIST,
} from 'core/utils'

export default class BlockSearch<number> {
    protected compareFn: ICompareFunction<number> = defaultCompare
    private blocks: number[] = []
    constructor(list: T[] = [], gap: number = 3) {
        list = list.sort((a, b) => a - b)
        if (gap <= 0) {
            throw new Error('list gap must be a positive integer !')
        }
        if (!list.length) {
            return
        }
        let newList: number[] = []
        let blockIndex: number = 0
        // 先按着间隙分好数列元素，然后每一块加上key，最后再进行排序
        for (let i: number = 0, len: number = list.length; i < len; ++i) {
            if (!newList[blockIndex]) {
                newList[blockIndex] = []
            }
            if (i % gap === 0) {
                newList[blockIndex].key = list[i]
            }
            newList[blockIndex].push(list[i])
            if (newList[blockIndex].length >= gap) {
                blockIndex++
            }
        }
        this.blocks = newList.sort((a, b) => a.key - b.key)
    }
    insert(value: number): BlockSearch<number> {
        let targetIndex: number = this.blocks.findIndex(
            block => value < block.key,
        )
        this.blocks[targetIndex].push(value)
        this.blocks[targetIndex].key = value
        return this
    }
    remove(value: number): BlockSearch<number> {
        const resPos: number[] | -1 = this.search(value)
        if (resPos !== DOES_NOT_EXIST) {
            const key = this.blocks[resPos[0]].key
            this.blocks[resPos[0]] = this.blocks[resPos[0]].filter(
                data => data !== value,
            )
            if (!this.blocks[resPos[0]].length) {
                this.blocks = this.blocks.filter(block => block.length > 0)
            }
            if (value === key) {
                this.blocks[resPos[0]].key = Math.min(...this.blocks[resPos[0]])
            }
        }
        return this
    }
    search(value: number): number {
        let blockIndex: number =
            this.blocks.findIndex(block => block.key > value) - 1
        if (blockIndex < 0) {
            return DOES_NOT_EXIST
        }
        let resIndex: number = this.blocks[blockIndex].findIndex(
            block => block === value,
        )
        if (resIndex < 0) {
            return DOES_NOT_EXIST
        }
        return [blockIndex, resIndex]
    }
    toString(): string {
        return this.blocks.toString()
    }
    print() {
        console.log(this.blocks)
    }
}

import { defaultCompare, ICompareFunction, DOES_NOT_EXIST } from 'core/utils'

interface BlockTypes extends Array<number> {
    key?: number
}

export default class BlockSearch {
    protected compareFn: ICompareFunction<number> = defaultCompare
    private blocks: BlockTypes[] = []
    constructor(list: number[] = [], depth = 3) {
        list = list.sort((a, b) => a - b)
        if (depth <= 0) {
            throw new Error('depth of block must be a positive integer !')
        }
        if (!list.length) {
            return
        }
        const newList: BlockTypes[] = []
        let blockIndex = 0
        // 先按着间隙分好数列元素，然后每一块加上key，最后再进行排序
        for (let i = 0, len: number = list.length; i < len; ++i) {
            if (!newList[blockIndex]) {
                newList[blockIndex] = []
            }
            if (i % depth === 0) {
                newList[blockIndex].key = list[i]
            }
            newList[blockIndex].push(list[i])
            if (newList[blockIndex].length >= depth) {
                blockIndex++
            }
        }
        this.blocks = newList.sort((a, b) => a.key - b.key)
    }
    insert(value: number): BlockSearch {
        const targetIndex: number = this.blocks.findIndex(
            block => value < block.key,
        )
        this.blocks[targetIndex].push(value)
        this.blocks[targetIndex].key = value
        return this
    }
    remove(value: number): BlockSearch {
        const resPos: number[] = this.search(value)
        if (resPos[0] !== DOES_NOT_EXIST) {
            const key = this.blocks[resPos[0]].key
            this.blocks[resPos[0]] = this.blocks[resPos[0]].filter(
                (data: number) => data !== value,
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
    search(value: number): number[] {
        const blockIndex: number =
            this.blocks.findIndex(block => block.key > value) - 1
        if (blockIndex < 0) {
            return [DOES_NOT_EXIST]
        }
        const resIndex: number = this.blocks[blockIndex].findIndex(
            (block: number) => block === value,
        )
        if (resIndex < 0) {
            return [DOES_NOT_EXIST]
        }
        return [blockIndex, resIndex]
    }
    size(): number {
        return this.blocks.flat(Infinity).length
    }
    blockSize(): number {
        return this.blocks.length
    }
    toString(): string {
        return this.blocks.toString()
    }
    print(): void {
        console.log(this.blocks)
    }
}

import { gt, gte, lt, lte, eq, neq, toString } from 'core/utils'

interface BlockTypes extends Array<number> {
    key?: number
}

export default class BlockSearch {
    private blocks: BlockTypes[] = []
    constructor(list: number[] = [], depth = 3) {
        if (!list?.length) {
            return
        }

        list = list.sort((a, b) => a - b)

        if (lte(depth, 0)) {
            throw new Error('depth of block must be a positive integer !')
        }

        const newList: BlockTypes[] = []
        let blockIndex = 0

        // 先按着间隙分好数列元素，然后每一块加上key，最后再进行排序
        for (let i = 0, len: number = list.length; i < len; ++i) {
            if (!newList[blockIndex]) {
                newList[blockIndex] = []
            }

            if (eq(i % depth, 0)) {
                newList[blockIndex].key = list[i]
            }

            newList[blockIndex].push(list[i])

            if (gte(newList[blockIndex].length, depth)) {
                blockIndex++
            }
        }

        this.blocks = newList.sort((a, b) => a.key - b.key)
    }
    insert(value: number): BlockSearch {
        const targetIndex: number = this.blocks.findIndex(block =>
            lt(value, block.key),
        )

        this.blocks[targetIndex].push(value)
        this.blocks[targetIndex].key = value

        return this
    }
    remove(value: number): BlockSearch {
        const resPos: number[] = this.search(value)

        if (neq(resPos[0], -1)) {
            const key = this.blocks[resPos[0]].key

            this.blocks[resPos[0]] = this.blocks[
                resPos[0]
            ].filter((data: number) => neq(data, value))

            if (!this.blocks[resPos[0]].length) {
                this.blocks = this.blocks.filter(block => gt(block.length, 0))
            }

            if (eq(value, key)) {
                this.blocks[resPos[0]].key = Math.min(...this.blocks[resPos[0]])
            }
        }

        return this
    }
    search(value: number): number[] {
        const blockIndex: number =
            this.blocks.findIndex(block => gt(block.key, value)) - 1

        if (lt(blockIndex, 0)) {
            return [-1]
        }

        const resIndex: number = this.blocks[
            blockIndex
        ].findIndex((block: number) => eq(block, value))

        if (resIndex < 0) {
            return [-1]
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
        return toString(this.blocks)
    }
    print(): void {
        console.log(this.blocks)
    }
}

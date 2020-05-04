import Stack from '../../../src/core/datastructures/stack/stack'
import { MyObj } from '../../../src/core/node'

describe('Stack', () => {
    let stack: Stack<number>
    beforeEach(() => {
        stack = new Stack<number>()
    })
    it('starts empty', () => {
        expect(stack.size()).toBe(0)
        expect(stack.isEmpty()).toBe(true)
    })
    it('pushes elements', () => {
        stack.push(1)
        expect(stack.size()).toBe(1)
        stack.push(2)
        expect(stack.size()).toBe(2)
        stack.push(3)
        expect(stack.size()).toBe(3)
        expect(stack.isEmpty()).toBe(false)
    })
    it('pops elements', () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.pop()).toBe(3)
        expect(stack.pop()).toBe(2)
        expect(stack.pop()).toBe(1)
        expect(stack.pop()).toBe(undefined)
    })
    it('implements LIFO logic', () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.pop()).toBe(3)
        expect(stack.pop()).toBe(2)
        expect(stack.pop()).toBe(1)
        expect(stack.pop()).toBe(undefined)
    })
    it('allows to peek at the top element in the stack without popping it', () => {
        expect(stack.peek()).toBe(undefined)
        stack.push(1)
        expect(stack.peek()).toBe(1)
        stack.push(2)
        expect(stack.peek()).toBe(2)
        stack.pop()
        expect(stack.peek()).toBe(1)
    })
    it('returns the correct size', () => {
        expect(stack.size()).toBe(0)
        stack.push(1)
        expect(stack.size()).toBe(1)
        stack.push(2)
        expect(stack.size()).toBe(2)
        stack.push(3)
        expect(stack.size()).toBe(3)
        stack.clear()
        expect(stack.isEmpty()).toBe(true)
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.pop()
        expect(stack.size()).toBe(2)
        stack.pop()
        expect(stack.size()).toBe(1)
        stack.pop()
        expect(stack.size()).toBe(0)
        stack.pop()
        expect(stack.size()).toBe(0)
    })
    it('returns if it is empty', () => {
        expect(stack.isEmpty()).toBe(true)
        stack.push(1)
        expect(stack.isEmpty()).toBe(false)
        stack.push(2)
        expect(stack.isEmpty()).toBe(false)
        stack.push(3)
        expect(stack.isEmpty()).toBe(false)
        stack.clear()
        expect(stack.isEmpty()).toBe(true)
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.pop()
        expect(stack.isEmpty()).toBe(false)
        stack.pop()
        expect(stack.isEmpty()).toBe(false)
        stack.pop()
        expect(stack.isEmpty()).toBe(true)
        stack.pop()
        expect(stack.isEmpty()).toBe(true)
    })
    it('returns toString primitive types', () => {
        expect(stack.toString()).toBe('')

        stack.push(1)
        expect(stack.toString()).toBe('1')

        stack.push(2)
        expect(stack.toString()).toBe('1,2')

        stack.clear()
        expect(stack.toString()).toBe('')

        const stackString = new Stack<string>()
        stackString.push('el1')
        expect(stackString.toString()).toBe('el1')

        stackString.push('el2')
        expect(stackString.toString()).toBe('el1,el2')
    })

    it('returns toString objects', () => {
        const stackMyObj = new Stack<MyObj>()
        expect(stackMyObj.toString()).toBe('')

        stackMyObj.push(new MyObj(1, 2))
        expect(stackMyObj.toString()).toBe('1|2')

        stackMyObj.push(new MyObj(3, 4))
        expect(stackMyObj.toString()).toBe('1|2,3|4')
    })
    it('clears the stack', () => {
        stack.clear()
        expect(stack.isEmpty()).toBe(true)
        stack.push(1)
        stack.push(2)
        stack.clear()
        expect(stack.isEmpty()).toBe(true)
    })
    it('is palindrome', () => {
        const isPalindrome = (word: any): boolean => {
            for (let i: number = 0, len: number = word.length; i < len; ++i) {
                stack.push(word[i])
            }
            let rword: string = ''
            while (stack.size() > 0) {
                rword += stack.pop()
            }
            return word === rword
        }
        expect(isPalindrome('racecar')).toBe(true)
        expect(isPalindrome('abedkhfbj')).toBe(false)
    })
    it('hex converter', () => {
        const hexConverter = (decNumber: number, base: number): string => {
            let rem: number
            let binaryString: string = ''
            let digits: string = '0123456789ABCDEF'
            while (decNumber > 0) {
                rem = Math.floor(decNumber % base)
                stack.push(rem)
                decNumber = Math.floor(decNumber / base)
            }
            while (!stack.isEmpty()) {
                binaryString += digits[stack.pop()]
            }
            return binaryString
        }
        expect(hexConverter(233, 2)).toBe('11101001')
    })
})

import Stack from '../src/ts/stack/stack'

describe('Stack', () => {
    let stack: Stack<number>
    beforeEach(() => {
        stack = new Stack<number>()
    })
    it('starts empty', () => {
        expect(stack.size()).toStrictEqual(0)
        expect(stack.isEmpty()).toStrictEqual(true)
    })
    it('pushes elements', () => {
        stack.push(1)
        expect(stack.size()).toStrictEqual(1)
        stack.push(2)
        expect(stack.size()).toStrictEqual(2)
        stack.push(3)
        expect(stack.size()).toStrictEqual(3)
        expect(stack.isEmpty()).toStrictEqual(false)
    })
    it('pops elements', () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.pop()).toStrictEqual(3)
        expect(stack.pop()).toStrictEqual(2)
        expect(stack.pop()).toStrictEqual(1)
        expect(stack.pop()).toStrictEqual(undefined)
    })
    it('implements LIFO logic', () => {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.pop()).toStrictEqual(3)
        expect(stack.pop()).toStrictEqual(2)
        expect(stack.pop()).toStrictEqual(1)
        expect(stack.pop()).toStrictEqual(undefined)
    })
    it('allows to peek at the top element in the stack without popping it', () => {
        expect(stack.peek()).toStrictEqual(undefined)
        stack.push(1)
        expect(stack.peek()).toStrictEqual(1)
        stack.push(2)
        expect(stack.peek()).toStrictEqual(2)
        stack.pop()
        expect(stack.peek()).toStrictEqual(1)
    })
    it('returns the correct size', () => {
        expect(stack.size()).toStrictEqual(0)
        stack.push(1)
        expect(stack.size()).toStrictEqual(1)
        stack.push(2)
        expect(stack.size()).toStrictEqual(2)
        stack.push(3)
        expect(stack.size()).toStrictEqual(3)
        stack.clear()
        expect(stack.isEmpty()).toStrictEqual(true)
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.pop()
        expect(stack.size()).toStrictEqual(2)
        stack.pop()
        expect(stack.size()).toStrictEqual(1)
        stack.pop()
        expect(stack.size()).toStrictEqual(0)
        stack.pop()
        expect(stack.size()).toStrictEqual(0)
    })
    it('returns if it is empty', () => {
        expect(stack.isEmpty()).toStrictEqual(true)
        stack.push(1)
        expect(stack.isEmpty()).toStrictEqual(false)
        stack.push(2)
        expect(stack.isEmpty()).toStrictEqual(false)
        stack.push(3)
        expect(stack.isEmpty()).toStrictEqual(false)
        stack.clear()
        expect(stack.isEmpty()).toStrictEqual(true)
        stack.push(1)
        stack.push(2)
        stack.push(3)
        stack.pop()
        expect(stack.isEmpty()).toStrictEqual(false)
        stack.pop()
        expect(stack.isEmpty()).toStrictEqual(false)
        stack.pop()
        expect(stack.isEmpty()).toStrictEqual(true)
        stack.pop()
        expect(stack.isEmpty()).toStrictEqual(true)
    })
    it('clears the stack', () => {
        stack.clear()
        expect(stack.isEmpty()).toStrictEqual(true)
        stack.push(1)
        stack.push(2)
        stack.clear()
        expect(stack.isEmpty()).toStrictEqual(true)
    })
    it('is palindrome', () => {
        const isPalindrome = (word: any): boolean => {
            for (let i: number = 0, len = word.length; i < len; ++i) {
                stack.push(word[i])
            }
            let rword: string = ''
            while (stack.size() > 0) {
              rword += stack.pop()
            }
            return word === rword
        }
        expect(isPalindrome('racecar')).toStrictEqual(true)
        expect(isPalindrome('abedkhfbj')).toStrictEqual(false)
    })
    it('hex converter', () => {
        const haxConverter = (decNumber: number, base: number): string => {
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
        expect(haxConverter(233, 2)).toStrictEqual('11101001')
    })
})
/**
 * 进制转换
 */
const baseConverter = (decNumber, base) => {
  const remStack = new Stack()
  let rem, binaryString = '', digits = '0123456789ABCDEF'
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem) 
    decNumber = Math.floor(decNumber / base) 
  }
  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()]
  }
  return binaryString
}
console.log(baseConverter(233, 2))
const stack = new Stack()
stack.push(1)
stack.clear()
console.log(stack.size())
stack.print()
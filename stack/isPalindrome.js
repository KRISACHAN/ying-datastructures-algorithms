/**
 * 是否是回文
 */
const isPalindrome = word => {
  let s = new Stack()
  for (let i = 0, len = word.length; i < len; ++i) {
    s.push(word[i])
  }
  let rword = ''
  while (s.size() > 0) {
    rword += s.pop()
  }
  return (word === rword)
}

console.log(isPalindrome('racecar'))
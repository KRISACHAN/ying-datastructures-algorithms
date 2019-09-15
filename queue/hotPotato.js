'use strict'
/**
 * 击鼓传花（循环队列）
 */
const hotPotato = (nameList, num) => {
  const queue = new Queue()
  for (let i = 0, len = nameList.length; i < len; ++i) {
    queue.enqueue(nameList[i])
  }
  let eliminated = ''
  while (queue.size() > 1) {
    for (let i = 0; i < num; ++i) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue()
    console.log(`${eliminated}在击鼓传花中被淘汰`)
  }
  return queue.dequeue()
}
let names = 'John,Jack,Camila,Ingrid,Carl'.split(',')
let winner = hotPotato(names, 7)
console.log(`胜利者是${winner}`)
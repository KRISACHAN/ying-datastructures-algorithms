/**
 * @utils: 工具文件
 */
const utils = {}
utils.BalanceFactor = { // AVL平衡系数
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}
utils.Compare = { // 对比系数
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}
utils.defaultCompare = (a, b) => { // 数字大小对比
  if (a === b) {
    return utils.Compare.EQUALS
  }
  return a < b ? utils.Compare.LESS_THAN : utils.Compare.BIGGER_THAN
}
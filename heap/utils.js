/**
 * @utils: 工具文件
 */
const utils = {}
utils.compare = utils.defaultCompare
utils.defaultCompare = (a, b) => {
  if (a === b) {
    return 0
  }
  return a < b ? -1 : 1
}
utils.equal = (a, b) => {
  return utils.defaultCompare(a, b) === 0
}
utils.lessThan = (a, b) => {
  return utils.defaultCompare(a, b) < 0
}
utils.greaterThan = (a, b) => {
  return utils.defaultCompare(a, b) > 0
}
utils.lessThanOrEqual = (a, b) => {
  return utils.lessThan(a, b) || utils.equal(a, b)
}
utils.greaterThanOrEqual = (a, b) => {
  return utils.greaterThan(a, b) || utils.equal(a, b)
}
utils.reverse = (a, b) => {
  const compareOriginal = utils.compare
  utils.compare = (a, b) => compareOriginal(b, a)
}


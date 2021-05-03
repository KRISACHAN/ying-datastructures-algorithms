import BlockSearch from 'core/algorithms/search/blockSearch'
const LIST = [50, 17, 72, 12, 13, 54, 76, 9, 14, 19, 67, 50]
const DEPTH = 3
const bs: BlockSearch = new BlockSearch(LIST, DEPTH)
console.log(bs.toString())

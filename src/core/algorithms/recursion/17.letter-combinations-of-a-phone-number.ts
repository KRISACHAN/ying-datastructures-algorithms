/**
 * @url https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @title 电话号码的字母组合
 * @desc 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * @example1
 * @input digits = "23"
 * @output ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * @example2
 * @input digits = ""
 * @output []
 *
 * @example3
 * @input digits = "2"
 * @output ["a","b","c"]
 */
import { eq, gte } from 'core/utils2'
interface DigitsMapType {
    [propName: string]: string[]
}

export const letterCombinations = (digits: string): string[] => {
    const res: string[] = []

    // 边界处理
    if (eq(digits.length, 0)) {
        return res
    }

    const digitsMap: DigitsMapType = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    // 深度遍历（回溯），各个组合都尝试一遍，把符合的结果保存起来，不符合的剪枝剪掉
    const coreRecursiver = (curLetter = '', curDigit = 0): void => {
        if (gte(curDigit, digits.length)) {
            res.push(curLetter)
            return
        }

        const letterGroup = digitsMap[digits[curDigit]]

        letterGroup.forEach(letter => {
            coreRecursiver(curLetter + letter, curDigit + 1)
        })
    }

    coreRecursiver('', 0)

    return res
}

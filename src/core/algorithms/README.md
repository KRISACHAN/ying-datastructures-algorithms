# 算法与数据结构 - TS 描述

> -   作者：陈大鱼头
>
> -   GitHub：https://github.com/KRISACHAN
>
> -   说明：本库是以 **`TypeScript`** 为描述语言的算法与数据结构入门仓库的算法部分

## 算法是什么？

**算法（Algorithm）** 已经是一个老生常谈的概念了，最早来自于数学领域。

**算法（Algorithm）** 代表着用系统的方法描述解决问题的策略机制，可以通过一定规范的 **输入**，在有限时间内获得所需要的 **输出**。

**如下图示便是算法：**

<img src="https://fish-pond-1253945200.cos.ap-guangzhou.myqcloud.com/img/cs/sorting/a.png" style="display: block; margin: 10px auto;">

### 算法的好坏

一个算法的好坏是通过 **时间复杂度** 与 **空间复杂度** 来衡量的。

举个 🌰：

<img src="https://fish-pond-1253945200.cos.ap-guangzhou.myqcloud.com/img/cs/sorting/lizi.png" style="display: block; margin: 10px auto;">

鱼头跟方勤一起去同一家公司面试，面试官让他们实现同一个功能，巴拉巴拉大半天，两个人终于交付了代码。

面试官一运行，发现：

方勤的代码运行一次要花 **100ms** ，占用内存 **5MB** 。

而鱼头的代码运行一次要花 **100s** ，占用内存 **500MB** 。

好了，鱼头面试又失败了！

<img src="https://fish-pond-1253945200.cos.ap-guangzhou.myqcloud.com/img/cs/sorting/mianshi.jpg" style="display: block; margin: 10px auto; width: 50%;">

以上所花的 **时间** 与 **占用内存** 便是衡量一个 算法好坏的标准。

简单来说，**时间复杂度** 就是执行算法的 **时间成本** ，**空间复杂度** 则是执行算法的 **空间成本** 。

### 复杂度

**时间复杂度** 与 **空间复杂度** 都是用 **“大 O”** 来表示，写作 **O(\*)**。有一点值得注意的是，我们谈论复杂度，一般谈论的都是时间复杂度。

常见时间复杂度的 **“大 O 表示法”** 描述有以下几种：

| 时间复杂度       | 非正式术语 |
| :--------------- | :--------- |
| O(1)             | 常数阶     |
| O(n)             | 线性阶     |
| O(n<sup>2</sup>) | 平方阶     |
| O(log n)         | 对数阶     |
| O(n log n)       | 线性对数阶 |
| O(n<sup>3</sup>) | 立方阶     |
| O(2<sup>n</sup>) | 指数阶     |

一个算法在 N 规模下所消耗的时间消耗从大到小如下：

**O(1) < O(log n) < O(n) < O(n log n) < O(n<sup>2</sup>) < O(n<sup>3</sup>) < O(2<sup>n</sup>)**

上面括号的数据是啥意思？别问，问就让你回去看数学书。

**以下便为不同时间复杂度的资源消耗增长图示：**

<img src="https://fish-pond-1253945200.cos.ap-guangzhou.myqcloud.com/img/cs/sorting/oo.png" style="display: block; margin: 10px auto;">

**常见概念：**

1. **最好时间复杂度：** 在最理想情况下执行代码的时间复杂度，它花的时间最短；
2. **最坏时间复杂度：** 最糟糕情况下执行代码的时间复杂度，它花的时间最长；
3. **平均时间复杂度：** 执行代码时间的平均水平，这个值就是概率论中的加权平均值，也叫期望值。
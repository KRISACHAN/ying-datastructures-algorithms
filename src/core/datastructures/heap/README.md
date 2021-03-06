# 堆

> 维基百科：
>
> 堆（英语：Heap）：堆是树状结构，给定堆中任意节点 P 和 C，若 P 是 C 的母节点，那么 P 的值会小于等于（或大于等于）C 的值。
>
> 最小堆（min heap）：若母节点的值恒小于等于子节点的值，此堆称为最小堆（min heap）；
>
> 最大堆（max heap：反之，若母节点的值恒大于等于子节点的值，此堆称为最大堆（max heap）。
>
> 根节点（root node）：在堆中最顶端的那一个节点，称作根节点（root node），根节点本身没有母节点（parent node）。

### 性质

-   任意节点小于（或大于）它的所有后裔，最小元（或最大元）在堆的根上（**堆序性**）。
-   堆总是一棵[完全树](https://zh.wikipedia.org/wiki/%E5%AE%8C%E5%85%A8%E4%BA%8C%E5%8F%89%E6%A0%91)。即除了最底层，其他层的节点都被元素填满，且最底层尽可能地从左到右填入。
-   将根节点最大的堆叫做**最大堆**或**大根堆**，根节点最小的堆叫做**最小堆**或**小根堆**。

### 核心方法

|        操作        |         描述         |
| :----------------: | :------------------: |
| insert(element(s)) | 向堆中插入一个新元素 |
|  find(element(s))  |  在堆中寻找指定元素  |
| remove(element(s)) |  在堆中删除指定元素  |
|       peek()       |       查看堆顶       |
|       poll()       |    将堆尾换到堆头    |

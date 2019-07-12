# 前端进阶必备 — 手撕排序算法

>* 作者：陈大鱼头
>
>* github：<https://github.com/KRISACHAN>

## 算法是什么？

**算法（Algorithm）** 已经是一个老生常谈的概念了，最早来自于数学领域。

 **算法（Algorithm）** 代表着用系统的方法描述解决问题的策略机制，可以通过一定规范的 **输入**，在有限时间内获得所需要的 **输出**。

**如下图示便是算法：**

<img src="https://krissarea.gitee.io/blog/img/cs/fe/a.png" style="display: block; margin: 10px auto;">

### 算法的好坏

一个算法的好坏是通过 **时间复杂度** 与 **空间复杂度** 来衡量的。

举个🌰：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/lizi.png" style="display: block; margin: 10px auto;">

鱼头跟方勤一起去同一家公司面试，面试官让他们实现同一个功能，巴拉巴拉大半天，两个人终于交付了代码。

面试官一运行，发现：

方勤的代码运行一次要花 **100ms** ，占用内存 **5MB** 。

而鱼头的代码运行一次要花 **100s** ，占用内存 **500MB** 。

好了，鱼头面试又失败了！

<img src="https://krissarea.gitee.io/blog/img/cs/fe/mianshi.jpg" style="display: block; margin: 10px auto; width: 50%;">

以上所花的 **时间** 与 **占用内存** 便是衡量一个 算法好坏的标准。

简单来说，**时间复杂度** 就是执行算法的 **时间成本** ，**空间复杂度** 则是执行算法的 **空间成本** 。

### 复杂度

**时间复杂度** 与 **空间复杂度** 都是用 **“大O”** 来表示，写作 **O(*)**。有一点值得注意的是，我们谈论复杂度，一般谈论的都是时间复杂度。

常见时间复杂度的 **“大O表示法”** 描述有以下几种：

| 时间复杂度       | 非正式术语 |
| :--------------- | :--------- |
| O(1)             | 常数阶     |
| O(n)             | 线性阶     |
| O(n<sup>2</sup>) | 平方阶     |
| O(log n)         | 对数阶     |
| O(n log n)       | 线性对数阶 |
| O(n<sup>3</sup>) | 立方阶     |
| O(2<sup>n</sup>) | 指数阶     |

一个算法在N规模下所消耗的时间消耗从大到小如下：

**O(1) < O(log n) < O(n) < O(n log n) < O(n<sup>2</sup>) < O(n<sup>3</sup>) < O(2<sup>n</sup>)**

上面括号的数据是啥意思？别问，问就让你回去看数学书。

**以下便为不同时间复杂度的资源消耗增长图示：**

<img src="https://krissarea.gitee.io/blog/img/cs/fe/oo.png" style="display: block; margin: 10px auto;">

**常见概念：**

1. **最好时间复杂度：** 在最理想情况下执行代码的时间复杂度，它花的时间最短；
2. **最坏时间复杂度：** 最糟糕情况下执行代码的时间复杂度，它花的时间最长；
3. **平均时间复杂度：** 执行代码时间的平均水平，这个值就是概率论中的加权平均值，也叫期望值。

## 常见的排序算法

> 在生活中，我们离不开排序。例如体育课上按身高排的队；又如考试过后按成绩排的名次。
>
> 在编程中也是如此，例如当开发一个学生管理系统，需要按照学好从小到大进行排序；开发一个平台，需要把同类商品按价格从高到低排序。（当然，一般前端不负责处理业务逻辑。）
>
> 有此可见，排序无处不在。
>
> 排序看似简单，但是背后却隐藏了多种多样的算法与思想。

### 概述

根据时间复杂度的不同，常见的算法可以分为3大类。

1. **O(n²)** 的排序算法
   * 冒泡排序
   * 选择排序
   * 插入排序
   * 希尔排序

2. **O(n log n)** 的排序算法

   * 并归排序

   * 快速排序
   * 堆排序

3. 线性的排序算法
   * 计数排序
   * 桶排序
   * 基数排序

各种排序的具体信息

<img src="https://krissarea.gitee.io/blog/img/cs/fe/sort.png" style="display: block; margin: 10px auto; width: 80%;">

**图片解释：**

- 均按从小到大排列
- k代表数值中的"数字"个数
- n代表数据规模
- m代表数据的最大值减最小值

### **冒泡排序（Bubble Sort）**

**冒泡排序（Bubble Sort）** 是一种基础的 **交换排序**。

冒泡排序之所以叫冒泡排序，是因为它每一种元素都像小气泡一样根据自身大小一点一点往数组的一侧移动。

算法步骤如下：

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个；
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数；
3. 针对所有的元素重复以上的步骤，除了最后一个；
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/BubbleSort.gif" style="display: block; margin: 10px auto;">

具体实现如下：

```javascript
const bubbleSort = arr => {
    const len = arr.length - 1
    for (let i = 0; i < len; ++i) { /* 外循环为排序趟数，len个数进行len-1趟 */
        for (let j = 0; j < len - i; ++j) { /* 内循环为每趟比较的次数，第i趟比较len-i次 */
            if (arr[j] > arr[j + 1]) { /* 相邻元素比较，若逆序则交换（升序为左大于右，逆序反之） */
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
```

### **选择排序（Selection Sort）**

**选择排序（Selection sort）** 是一种简单直观的排序算法。

选择排序的主要优点与数据移动有关。

如果某个元素位于正确的最终位置上，则它不会被移动。

选择排序每次交换一对元素，它们当中至少有一个将被移到其最终位置上，因此对 **n** 个元素的表进行排序总共进行至多 **n - 1** 次交换。在所有的完全依靠交换去移动元素的排序方法中，选择排序属于非常好的一种。

选择排序的算法步骤如下：

1. 在未排序序列中找到最小（大）元素，存放到排序序列的起始位置；
2. 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾；
3. 以此类推，直到所有元素均排序完毕。

图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/SelectionSort.gif" style="display: block; margin: 10px auto;">

具体实现如下：

```javascript
const selectionSort = arr => {
    const len = arr.length
    let min
    for (let i = 0; i < len - 1; ++i) {
        min = i /* 初始化未排序序列中最小数据数组下标 */
        for (let j = i + 1; j < len; ++j) { /* 访问未排序的元素 */
            if (arr[j] < arr[min]) { /* 找到目前最小值 */
                min = j /* 记录最小值 */
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]] /* 交换位置 */
    }
    return arr
}
```

### **插入排序（Insertion Sort）**

**插入排序（Insertion sort）** 是一种简单直观的排序算法。

它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

插入排序的算法步骤如下：

1. 从第一个元素开始，该元素可以认为已经被排序；
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
5. 将新元素插入到该位置后；
6. 重复步骤2~5。

图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/InsertionSort.gif" style="display: block; margin: 10px auto;">

具体实现如下：

```javascript
const insertionSort = arr => {
    const len = arr.length
    let j, temp
    for (let i = 0; i < len; ++i) {
        j = i - 1
        temp = arr[i]
        while (j >= 0 && arr[j] > temp) {
          arr[j + 1] = arr[j]
          j--
        }
        arr[j + 1] = temp
    }
    return arr
}
```

### **希尔排序（Shell Sort）**

**希尔排序**，也称 **递减增量排序算法**，是 **插入排序** 的一种更高效的改进版本。希尔排序是非稳定排序算法。

希尔排序是基于插入排序的以下两点性质而提出改进方法的：

1. 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到 **线性排序** 的效率；
2. 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位。

步长的选择是希尔排序的重要部分。

只要最终步长为1任何步长序列都可以工作。

算法最开始以一定的步长进行排序。

然后会继续以一定步长进行排序，最终算法以步长为1进行排序。

当步长为1时，算法变为普通插入排序，这就保证了数据一定会被排序。

插入排序的算法步骤如下：

1. 定义一个用来分割的步长；
2. 按步长的长度K，对数组进行K趟排序；
3. 不断重复上述步骤。

图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/ShellSort.gif" style="display: block; margin: 10px auto;">

具体实现如下：

```javascript
const shellSort = arr => {
    let gaps = [5, 3, 1] // 定义步长以及分割次数
    let len = arr.length
    for (let g = 0, gLen = gaps.length; g < gaps.length; ++g) {
        for (let i = gaps[g]; i < len; ++i) {
            let temp = arr[i], j
            for (j = i; j >= gaps[g] && arr[j - gaps[g]] > arr[i]; j -= gaps[g]) {
                arr[j] = arr[j - gaps[g]]
            }
            arr[j] = temp
        }
    }
    return arr
}
```

### **快速排序（Quick Sort）**

**快速排序（Quicksort）**，又称 **划分交换排序（partition-exchange sort）** 。

**快速排序（Quicksort）** 在平均状况下，排序 **n** 个项目要 **O(n log n)** 次比较。在最坏状况下则需要 **O(n<sup>2</sup>)** 次比较，但这种状况并不常见。事实上，快速排序 **O(n log n)** 通常明显比其他算法更快，因为它的 **内部循环（inner loop）** 可以在大部分的架构上很有效率地达成。

快速排序使用 **分治法（Divide and conquer）** 策略来把一个序列分为较小和较大的2个子序列，然后递归地排序两个子序列。

快速排序的算法步骤如下：

1. 挑选基准值：从数列中挑出一个元素，称为 **“基准”（pivot）** ；
2. 分割：重新排序序列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（与基准值相等的数可以到任何一边）。在这个分割结束之后，对基准值的排序就已经完成；
3. 递归排序子序列：递归地将小于基准值元素的子序列和大于基准值元素的子序列排序。

递归到最底部的判断条件是序列的大小是零或一，此时该数列显然已经有序。

选取基准值有数种具体方法，此选取方法对排序的时间性能有决定性影响。

图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/QuickSort.gif" style="display: block; margin: 10px auto;">

具体实现如下：

```javascript
const quickSort = arr => {
    const len = arr.length
    if (len < 2) {
        return arr
    }
    const pivot = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < len; ++i) {
        if (arr[i] >= pivot) {
            right.push(arr[i])
        }
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
```

除了常规的快速排序之外，还有一个快速排序的优化版本，叫 **三路快排**。

当面对一个有大量重复的数据的序列时，选取 **pivot** 的快速排序有可能会退化成一个 **O(n²)** 的算法

<img src="https://krissarea.gitee.io/blog/img/cs/fe/nouse.jpg" style="display: block; margin: 10px auto;">

基于这种情况，就有了 **三路快排（3 Ways Quick Sort）**

三路快排就是将序列分为三部分：小于**pivot**，等于 **pivot** 和大于 **pivot**，之后递归的对小于v和大于v部分进行排序。

<img src="https://krissarea.gitee.io/blog/img/cs/fe/QuickSort3.png" style="display: block; margin: 10px auto; width: 100%;">

具体实现如下：

```javascript
const quickSort = arr => {
    const len = arr.length
    if (len < 2) {
        return arr
    }
    let left = []
    let center = []
    let right = []
    let pivot = arr[0]
    for (let i = 0; i < len; ++i) {      
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else if (arr[i] === pivot) {
            center.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), ...center, ...quickSort(right)]
}
```

辛苦你们看到这里了，如果累了可以收藏起来下次再看，不过收藏起来就没下次了吧？所以继续看完吧！加油鸭~

<img src="" style="display: block; margin: 10px auto; max-width: 200px; width: 100%;">

### **并归排序（Merge Sort）**

**归并排序（Merge sort）** ，是创建在归并操作上的一种有效的排序算法，时间复杂度为 **O(n log n)** 。1945年由约翰·冯·诺伊曼首次提出。该算法是采用 **分治法（Divide and Conquer）** 的一个非常典型的应用，且各层分治递归可以同时进行。

其实说白了就是将两个已经排序的序列合并成一个序列的操作。

并归排序有两种实现方式

第一种是 **自上而下的递归** ，算法步骤如下：

1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
4. 重复步骤3直到某一指针到达序列尾；
5. 将另一序列剩下的所有元素直接复制到合并序列尾。

具体实现如下：

```javascript
const merge = (left, right) => {
    let resArr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            resArr.push(left.shift())
        } else {
            resArr.push(right.shift())
        }
    }
    return resArr.concat(left, right)
}

const mergeSort = arr => {
    if (arr.length <= 1) {
        return arr
    }
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}
```

第二种是 **自下而上的迭代** ，由于 **分治法** 的具体算法基本都能用 **递归** 跟 **迭代** 来实现，所有才有这种写法，其主要步骤如下：

1. 将序列每相邻两个数字进行 **归并操作** ，形成 **ceil(n / 2)** 个序列，排序后每个序列包含两/一个元素；
2. 若此时序列数不是1个则将上述序列再次归并，形成 **ceil(n / 4)**  个序列，每个序列包含四/三个元素；
3. 重复步骤2，直到所有元素排序完毕，即序列数为1。

具体实现如下：

```javascript
const merge = (arr, startLeft, stopLeft, startRight, stopRight) => {
    /* 建立左右子序列 */
    let rightArr = new Array(stopRight - startRight + 1)
    let leftArr = new Array(stopLeft - startLeft + 1)
    /* 给左右序列排序 */
    let k = startRight
    for (let i = 0, len = rightArr.length; i < len - 1; ++i) {
        rightArr[i] = arr[k]
        ++k
    }
    k = startLeft
    for (let i = 0, len = leftArr.length; i < len - 1; ++i) {
        leftArr[i] = arr[k]
        ++k
    }
    //设置哨兵值，当左子列或右子列读取到最后一位时，即Infinity，可以让另一个剩下的列中的值直接插入到数组中
    rightArr[rightArr.length - 1] = Infinity
    leftArr[leftArr.length - 1] = Infinity
    let m = 0
    let n = 0
    // 比较左子列和右子列第一个值的大小，小的先填入数组，接着再进行比较
    for (let c = startLeft; c < stopRight; ++c) {
        if (leftArr[m] <= rightArr[n]) {
            arr[c] = leftArr[m]
            m++
        } else {
            arr[c] = rightArr[n]
            n++
        }
    }
}
const mergeSort = arr => {
    if (arr.length <= 1) {
        return arr
    }
    //设置子序列的大小
    let step = 1
    let left
    let right
    while (step < arr.length) {
        left = 0
        right = step
        while (right + step <= arr.length) {
            merge(arr, left, left + step, right, right + step)
            left = right + step
            right = left + step
        }
        if (right < arr.length) {
            merge(arr, left, left + step, right, arr.length)
        }
        step *= 2
    }
    return arr
}
```

**鱼头注：迭代比起递归还是安全很多，太深的递归容易导致堆栈溢出。**

图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/MergeSort.gif" style="display: block; margin: 10px auto;">

### **堆排序（Heap Sort）**

**堆排序（Heapsort）** 是指利用 **二叉堆** 这种数据结构所设计的一种排序算法。堆是一个近似 **完全二叉树** 的结构，并同时满足 **堆积的性质** ：即子节点的键值或索引总是小于（或者大于）它的父节点。

**二叉堆是什么？**

二叉堆分以下两个类型：

**鱼头注：以下图片来自于：[漫画：什么是二叉堆？（修正版）](https://mp.weixin.qq.com/s/cq2EhVtOTzTVpNpLDXfeJg)**

1. 最大堆： 最大堆任何一个父节点的值，都**大于等于**它左右孩子节点的值。

   * 图示如下：

     <img src="https://krissarea.gitee.io/blog/img/cs/fe/BinaryHeapB.png" style="display: block; margin: 10px auto; max-width: 300px; width: 100%;" />

   * 数组表示如下： 

     `[10, 8, 9, 7, 5, 4, 6, 3, 2]`

2. 最小堆：最小堆任何一个父节点的值，都**小于等于**它左右孩子节点的值。

   * 图示如下：

     <img src="https://krissarea.gitee.io/blog/img/cs/fe/BinaryHeapS.png" style="display: block; margin: 10px auto; max-width: 300px; width: 100%;" />

   * 数组表示如下： 

     `[1, 3, 2, 6, 5, 7, 8, 9, 10]`

堆排序的算法步骤如下：

1. 把无序数列构建成二叉堆；
2. 循环删除堆顶元素，替换到二叉堆的末尾，调整堆产生新的堆顶。

具体实现如下：

```javascript
/* 堆下沉调整 */
const adjustHeap = (arr, parentIndex, length) => {
    let temp = arr[parentIndex] /* temp保存父节点值，用于最后赋值 */
    let childIndex = 2 * parentIndex + 1 /* 保存子节点位置 */
    while (childIndex < length) {
        /* 如果有右子节点，且右子节点大于左子节点的值，则定位到右子节点 */
        if (childIndex + 1 < length && arr[childIndex + 1] > arr[childIndex]) {
            childIndex++
        }
        /* 如果父节点小于任何一个子节点的值，直接退出循环 */
        if (temp >= arr[childIndex]) {
            break;
        }
        /* 无序交换，单向赋值即可 */
        arr[parentIndex] = arr[childIndex]
        parentIndex = childIndex
        childIndex = 2 * childIndex + 1
    }
    arr[parentIndex] = temp
}
const heapSort = arr => {
    /* 把无序数列构建成最大堆 */
    for (let i = Math.floor(arr.length / 2); i >= 0; --i) {
        adjustHeap(arr, i, arr.length - 1)
    }
    for (let i = arr.length - 1; i > 0; --i) {
        /* 交换最后一个元素与第一个元素 */
        [arr[i], arr[0]] = [arr[0], arr[i]]
        /* 调整最大堆 */
        adjustHeap(arr, 0, i)
    }
	return arr
}
```

图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/HeapSort.gif" style="display: block; margin: 10px auto;">



### **计数排序（Counting Sort）**

**计数排序（Counting sort）** 是一种稳定的线性时间排序算法。该算法于1954年由 Harold H. Seward 提出。计数排序使用一个额外的数组来存储输入的元素，计数排序要求输入的数据必须是有确定范围的整数。

当输入的元素是 **n** 个 **0** 到 **k** 之间的整数时，它的运行时间是 **O(n + k)** 。计数排序不是比较排序，排序的速度快于任何比较排序算法。

计数排序的算法步骤如下：

1. 找出待排序的数组中最大和最小的元素；
2. 统计数组中每个值为 **i** 的元素出现的次数，存入数组 **C** 的第 **i** 项；
3. 对所有的计数累加（从数组 **C** 中的第一个元素开始，每一项和前一项相加）；
4. 反向填充目标数组：将每个元素 **i** 放在新数组的第 **C[i]** 项，每放一个元素就将 C[i] 减去1。

具体实现如下：

```javascript
const countSort = arr => {
    const C = []
    for (let i = 0, iLen = arr.length; i < iLen; ++i) {
        const j = arr[i]
        if (C[j] >= 1) {
            C[j]++
        } else {
            C[j] = 1
        }
    }
    const D = []
    for (let j = 0, jLen = C.length; j < jLen; ++j) {
        if (C[j]) {
            while (C[j] > 0) {
                D.push(j)
                C[j]--
            }
        }
    }
    return D
}
```

图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/CountSort.gif" style="display: block; margin: 10px auto;">

### **桶排序（Bucket Sort）**

**桶排序（Bucket Sort）** 跟 **计数排序（Counting sort）** 一样是一种稳定的线性时间排序算法，不过这次需要的辅助不是计数，而是桶。

工作的原理是将数列分到有限数量的桶里。每个桶再个别排序。当要被排序的数组内的数值是均匀分配的时候，桶排序使用线性时间 **O(n)**。

桶排序的算法步骤如下：

1. 设置一个定量的数组当作空桶子；
2. 寻访序列，并且把项目一个一个放到对应的桶子去；
3. 对每个不是空的桶子进行排序；
4. 从不是空的桶子里把项目再放回原来的序列中。

具体实现如下：

```javascript
const bucketSort = arr => {
    let bucketsCount = 10 /* 默认桶的数量 */
    const max = Math.max(...arr) /* 序列最大数字 */
    const min = Math.min(...arr) /* 数列最小数字 */
    const bucketsSize = Math.floor((max - min) / bucketsCount) + 1 /* 桶的深度 */
    const __buckets = [] /* 空桶 */
    for (let i = 0, len = arr.length; i < len; ++i) {
        const index = ~~(arr[i] / bucketsSize) /* 骚操作，取数列中最大或最小的序列 */
        if (!__buckets[index]) {
            __buckets[index] = [] /* 创建子桶 */
        }
        __buckets[index].push(arr[i])
        let bLen = __buckets[index].length
        while (bLen > 0) { /* 子桶排序 */
            if (__buckets[index][bLen] < __buckets[index][bLen - 1]) {
                [__buckets[index][bLen], __buckets[index][bLen - 1]] = [__buckets[index][bLen - 1], __buckets[index][bLen]]
            }
            bLen--
        }
    }
    let buckets = [] /* 真实序列 */
    for (let i = 0, len = __buckets.length; i < len; ++i) {
        if (__buckets[i]) {
            buckets.push(...__buckets[i])
        }
    }
    return buckets
}
```

图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/BucketSort.gif" style="display: block; margin: 10px auto;">

### **基数排序（Radix Sort）**

**基数排序（Radix sort）** 是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。

工作原理是将所有待比较数值（正整数）统一为同样的数字长度，数字较短的数前面补零。然后，从最低位开始，依次进行一次排序。这样从最低位排序一直到最高位排序完成以后，数列就变成一个有序序列。

基数排序的方式可以采用 **LSD（Least significant digital）** 或 **MSD（Most significant digital）** 。

**LSD** 的排序方式由键值的 **最右边（最小位）** 开始，而 **MSD** 则相反，由键值的 **最左边（最大位）** 开始。

**MSD** 方式适用于位数多的序列。

**LSD** 方式适用于位数少的序列。

**基数排序** 、 **桶排序** 、 **计数排序** 原理都差不多，都借助了 **“桶”** 的概念，但是使用方式有明显的差异，其差异如下：

* 基数排序：根据键值的每位数字来分配桶；
* 桶排序：每个桶存储一定范围的数值；
* 计数排序：每个桶只存储单一键值。

**LSD** 图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/RadixSort.gif" style="display: block; margin: 10px auto;">

**LSD** 实现如下：

```javascript
const LSDRadixSort = arr => {
    const max = Math.max(...arr) /* 获取最大值 */
    let digit = `${max}`.length /* 获取最大值位数 */
    let start = 1 /* 桶编号 */
    let buckets = [] /* 空桶 */
    while (digit > 0) {
        start *= 10
        /* 入桶 */
        for (let i = 0, len = arr.length; i < len; ++i) {
            const index = (arr[i] % start)
            if (!buckets[index]) {
                buckets[index] = []
            }
            buckets[index].push(arr[i]) /* 往不同桶里添加数据 */
        }
        arr = []
        /* 出桶 */
        for(let i = 0; i < buckets.length; i++) {
            if (buckets[i]) {
                arr = arr.concat(buckets[i])
            }
        }
        buckets = []
        digit --
    }
    return arr
}
```

### **特别的冒泡排序——鸡尾酒排序（Cocktail Sort）**

**鸡尾酒排序**，是 **冒泡排序** 的一种变形。此算法与 **冒泡排序** 不同的地方在于从低到高然后从高到低，而 **冒泡排序** 则仅从低到高去比较序列里的每个元素。它可以得到比 **冒泡排序** 稍微好一点的性能，原因是 **冒泡排序** 只从一个方向进行比对（由低到高），每次循环只移动一个项目。

算法步骤如下：

1. 步骤跟冒泡算法差不多，区别在于从起点到终点遍历完之后会进行一次终点到起点的遍历。

图示如下：

<img src="https://krissarea.gitee.io/blog/img/cs/fe/CocktailSort.gif" style="display: block; margin: 10px auto;">

具体实现如下：

```javascript
const cocktailSort = arr => {
    let i
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        for (i = left; i < right; ++i)
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            }
        right--
        for (i = right; i > left; --i)
            if (arr[i - 1] > arr[i]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
            }
        left++
    }
    return arr
}
```

### **不正经的排序——睡眠排序（Sleep Sort）**

这种排序算法是基于定时器来实现的，时间复杂度Mmmmmmmmmmm，空间复杂度Mmmmmmmmm，没有图示，具体实现如下：

```javascript
const list = [3, 4, 5, 8, 9, 7, 1, 3, 4, 3, 6]
const newList = []
list.forEach(item => {
    setTimeout(function () {
        newList.push(item)
	}, item * 100)
})
```

实用性为0，纯属娱乐，哈哈哈哈~



<img src="https://krissarea.gitee.io/blog/img/cs/fe/end.gif" style="display: block; margin: 10px auto;">

## 后记

其实排序算法不只有以上几种，如果全部列出就不是一篇文章可以写得完的，具体的还需要各位自己去学习，探索。

算法的重要性是不言而喻的，虽然我们在日常生活中不一定会用得上怎样深奥的算法，但是或多或少都会接触到有，而且对于一些复杂的业务，算法思维往往能给我们不一样的灵感，更重要一点就是现在如果我们出去面试，算法也是一个绕不开的考点。

本篇内容只是算法这个话题的入门知识点，更多的欢迎大家深入探索，有兴趣的也可以加鱼头的微信 **“krisChans95”** 一起探讨。

<br />
<br />
如果你、喜欢探讨技术，或者对本文有任何的意见或建议，你可以扫描下方二维码，关注微信公众号“<b>鱼头的Web海洋</b>”，随时与鱼头互动。欢迎！衷心希望可以遇见你。
<br />
<br />
<img style="margin: 24px auto;display: block; font-size: 0; vertical-align: middle;" src="https://krissarea.gitee.io/blog/img/qrcode-base.png" />
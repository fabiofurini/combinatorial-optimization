---
title: "DP for the coin change problem"
---

# DP for the coin change problem

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 27** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Coin change (CCP)](../exercises/dp-coin-change.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«DP for the unbounded knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-unbounded-knapsack/): unlimited supply of every item type, and the reconstruction of a solution.

    - From this module, the chapter [«Principles of dynamic programming»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-principles/): optimal substructure, overlapping subproblems, base cases.

    - From the module <em>Algorithms</em>: [pseudocode conventions (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/) and [the size of the input (Chapter 11)](https://fabiofurini.github.io/algorithms/analysis/11-input-size/).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - explain why the CCP asks for an exact amount and why an instance can be infeasible;

    - write the recurrence $v(k)$ with the value $+\infty$ for the amounts that cannot be returned;

    - run the DP algorithm by hand, following the comparisons with the running best value $m$;

    - reconstruct an optimal solution as the vector $(x_1,\dots,x_n)$ when the instance is feasible;

    - count the steps of the DP algorithm.

The problem of this chapter is the [coin change problem (CCP)](https://fabiofurini.github.io/combinatorial-optimization/catalogue/coin-change-problem/): its definition is on its page.

## 27.1 Instances and feasible solutions

<a id="box-1-texccpex1"></a>

!!! esempio "Example 27.1: CCP instance"

    We consider an amount of change $c=10$ to return, and $n=3$ denominations:

    $$
    w = (2,3,5).
    $$

    We refer to this CCP instance as <span style="color:#1971c2">[Example 27.1](#box-1-texccpex1)</span>.

!!! chiave ""

    Unlike the 0/1 knapsack problem (KP), where the total weight of the selected items must not exceed the capacity, the CCP requires the total value of the selected coins to be <em>exactly equal</em> to $c$. Moreover, since every denomination is available in unlimited supply, the number of coins of a given denomination used in a solution is not bounded a priori.

### 27.1.1 Encoding of feasible solutions

!!! chiave ""

    A <em>feasible solution</em> of the CCP is a choice of the number of coins of each denomination whose total value is exactly equal to the amount of change $c$.

- A CCP feasible solution can be described by the integer vector

    $$
    (x_1,x_2,\dots,x_n)
    $$

    where each component has the following meaning:

    $$
    x_j = \text{number of coins of denomination } j \text{ used}, \qquad \forall j \in \{1,2,\dots,n\}, \quad x_j \in \Z_{\ge 0}.
    $$

    Since the solution is feasible, the total value of the selected coins must be exactly equal to $c$:

    $$
    \sum_{j=1}^{n} w_j x_j = c.
    $$

    The total number of coins of a feasible solution is

    $$
    \sum_{j=1}^{n} x_j.
    $$

- Since $\sum_{j=1}^{n} w_j x_j = c$, every component $x_j$ of a feasible solution satisfies $x_j \le \lfloor c/w_j \rfloor$. Therefore, the number of feasible solutions is finite, but it grows quickly with $c$ and $n$, and enumerating all of them to find the one using the fewest coins quickly becomes impractical.

## 27.2 A DP algorithm

- <u>Step 1</u>: computation of the optimal value

    !!! formula ""

        For any $k \in \{0,1,\dots,c\}$, let $v(k)$ be the optimal value of the CCP subinstance given by:

        1. an integer amount of change $k$ to return,

        2. the same set $\{1,2,\dots,n\}$ of denominations, each available in unlimited supply.

        The recursive formula to compute $v(k)$ reads as follows:

        \begin{equation*}
        \label{eq:ccp}
        v(k)= \left\{ \begin{array}{ll}
        0                                                                 & \textrm{if $k=0$,}                                              \\[2ex]
        +\infty                                                          & \textrm{if $k\ge 1$ and $w_j>k$ for every $j\in\{1,2,\dots,n\}$,} \\[2ex]
        \displaystyle \min_{j \,:\, w_j \,\le\, k} \big\{ 1 + v(k-w_j) \big\} & \textrm{if $k\ge 1$ and $w_j\le k$ for some $j\in\{1,2,\dots,n\}$.}
        \end{array} \right. \tag{27.1}
        \end{equation*}

    - The recursive decomposition process of formula $\eqref{eq:ccp}$ generates at most $n$ <strong>independent subproblems</strong>, corresponding to the possible choices of a denomination $j$, with $w_j\le k$, used as one of the coins returning the amount of change $k$.

    - The base case is $v(0)=0$ since no coin is needed to return a null amount of change, and $v(k)=+\infty$ if no denomination is small enough to be used, since in this case the amount of change $k$ cannot be returned at all.

    - The optimal value $v(k)$ is obtained by trying every denomination $j$ with $w_j\le k$ and selecting the one that minimizes the sum $1+v(k-w_j)$ of the single coin of denomination $j$ and the optimal value of the residual subproblem, returning the remaining amount of change $k-w_j$.

    - Hence, an optimal solution for the subinstance with amount of change $k$ is built by combining the chosen coin of denomination $j$ with an optimal solution of the corresponding residual subproblem, returning the amount of change $k-w_j$.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different choices of the denomination used as the first coin, possibly made for different values of $k$, can lead to the same residual amount of change, and therefore the same value $v(k)$ may need to be computed several times during the recursive evaluation of formula $\eqref{eq:ccp}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - A <strong>first method</strong> to compute the optimal value $v(c)$ of the CCP instance is the <strong>top-down approach</strong>. The method starts from the call with $k=c$ and evaluates formula $\eqref{eq:ccp}$ recursively: each call tries every denomination $j$ with $w_j\le k$, until the amount of change is equal to $0$ or no denomination is small enough to be used.

    - The <strong>recursion tree</strong> of the function $v$ has one node for each recursive call, labeled with the function call it represents. The root represents the initial call. The children of a node represent the recursive calls made by that call. The leaf nodes represent the base cases.

        <a id="box-2-texccptree"></a>

        !!! esempio "Example 27.2: Recursion tree"

            We consider the CCP instance of <span style="color:#1971c2">[Example 27.1](#box-1-texccpex1)</span>. This is the recursion tree of the top-down approach to compute $v(10)$:

            ![Figure 1](../img/dp-coin-change/fig01.svg){ .fig loading=lazy  }

            The function $v$ is called $42$ times, and the same subproblems are solved multiple times: $v(0)$ is called $14$ times, $v(1)$ is called $8$ times, $v(2)$ is called $6$ times, $v(3)$ is called $5$ times, $v(4)$ is called $2$ times, and $v(5)$ is called $3$ times. All the other calls are made only once.

    - The value $v(k)$ can be computed once the values $v(k')$, for every smaller amount of change $k'<k$, are known. Therefore, all values $v(k)$ can be computed by considering the amount of change $k$ in increasing order.

        <a id="box-3-texccpvalues"></a>

        !!! esempio "Example 27.3: Computing the values of the $v$ function"

            We consider the CCP instance of <span style="color:#1971c2">[Example 27.1](#box-1-texccpex1)</span>, with amount of change $c=10$ to return and denominations $w=(2,3,5)$.

            The values of the function $v$ are computed as follows:

            - The base case gives $v(0)=0$.

            - Once we have computed $v(0)$, we can compute $v(1)$: since no denomination satisfies $w_j\le 1$, we obtain

                $$
                v(1) = +\infty.
                $$

            - Once we have computed $v(0)$, we can compute $v(2)$:

                $$
                v(2) = 1+v(0) = 1+0 = 1.
                $$

            - Once we have computed $v(0)$ and $v(1)$, we can compute $v(3)$:

                $$
                v(3) = \min\{1+v(1),\,1+v(0)\} = \min\{1+\infty,\,1+0\} = 1.
                $$

            - Once we have computed $v(1)$ and $v(2)$, we can compute $v(4)$, trying every denomination $j$ with $w_j\le 4$:

                $$
                v(4) = \min\{1+v(2),\,1+v(1)\} = \min\{1+1,\,1+\infty\} = 2.
                $$

            - Once we have computed $v(0)$, $v(2)$, and $v(3)$, we can compute $v(5)$:

                $$
                v(5) = \min\{1+v(3),\,1+v(2),\,1+v(0)\} = \min\{1+1,\,1+1,\,1+0\} = 1.
                $$

            - Once we have computed $v(1)$, $v(3)$, and $v(4)$, we can compute $v(6)$:

                $$
                v(6) = \min\{1+v(4),\,1+v(3),\,1+v(1)\} = \min\{1+2,\,1+1,\,1+\infty\} = 2.
                $$

            - Once we have computed $v(2)$, $v(4)$, and $v(5)$, we can compute $v(7)$, trying every denomination $j$ with $w_j\le 7$:

                $$
                v(7) = \min\{1+v(5),\,1+v(4),\,1+v(2)\} = \min\{1+1,\,1+2,\,1+1\} = 2.
                $$

                Here, the denominations $w_1=2$ and $w_3=5$ are tied: both give value $2$. Since the bottom-up algorithm only updates the optimal value when a strictly smaller value is found, the first denomination achieving the minimum, $w_1=2$, is the one recorded.

            - Once we have computed $v(3)$, $v(5)$, and $v(6)$, we can compute $v(8)$:

                $$
                v(8) = \min\{1+v(6),\,1+v(5),\,1+v(3)\} = \min\{1+2,\,1+1,\,1+1\} = 2.
                $$

            - Finally, once we have computed $v(5)$, $v(7)$, and $v(8)$, we can compute $v(10)$, trying every denomination $j$ with $w_j\le 10$:

                $$
                v(10) = \min\{1+v(8),\,1+v(7),\,1+v(5)\} = \min\{1+2,\,1+2,\,1+1\} = 2.
                $$

    - We can avoid solving the same subproblems repeatedly by storing the value of each subproblem as soon as it is computed. The values are stored in a <strong>lookup table</strong>.

    - Since solving any particular subproblem depends only on subproblems with a smaller amount of change, we can solve the subproblems in increasing order of $k$, starting from the base case $v(0)=0$ and building up to $v(c)$.

    - This observation naturally leads to a <strong>much more efficient method</strong> to compute the optimal value $v(c)$ of the CCP instance.

    - A <strong>second method</strong> to compute the optimal value $v(c)$ of the CCP instance is the <strong>bottom-up approach</strong>. The method starts from the base case and evaluates formula $\eqref{eq:ccp}$ for increasing values of $k \in \{1,2,\dots,c\}$: each value $v(k)$ is computed using already-computed values, until the value $v(c)$ of the CCP instance is obtained.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>:

        !!! algoritmo "Algorithm: CCP\_DP"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A CCP instance given by <span class="arithmatex">\(n\)</span>, the array <span class="arithmatex">\(w[1..n]\)</span> of denominations, and the amount of change <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> CCP_DP(<span class="arithmatex">\(n,w,c\)</span>)</div><div class="pc" style="--liv:1" id="box-4-ccpbu-a"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..c]\)</span></div><div class="pc" style="--liv:1" id="box-5-ccpbu-b"><span class="pc-n">3</span><span class="arithmatex">\(v[0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1" id="box-6-ccpbu-c"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-7-ccpbu-d"><span class="pc-n">5</span><span class="arithmatex">\(m := +\infty\)</span></div><div class="pc" style="--liv:2" id="box-8-ccpbu-e"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-9-ccpbu-f"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(w[j]\le k\)</span>  and <span class="arithmatex">\(1+v[k-w[j]] < m\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-10-ccpbu-g"><span class="pc-n">8</span><span class="arithmatex">\(m \leftarrow 1+v[k-w[j]]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:2" id="box-11-ccpbu-h"><span class="pc-n">11</span><span class="arithmatex">\(v[k] \leftarrow m\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-12-ccpbu-i"><span class="pc-n">13</span><strong>return</strong> <span class="arithmatex">\(v[c]\)</span></div></div>

        - The array $v[0..c]$ is the <strong>lookup table</strong>: it stores the optimal values of all subproblems.

        - The instruction $v[0] \leftarrow 0$ initializes the base case, corresponding to a null amount of change.

        - The outer loop, over $k \in \{1,2,\dots,c\}$, computes the entries of the array in increasing order of amount of change.

        - The inner loop, over $j \in \{1,2,\dots,n\}$, tries every denomination and keeps in $m$ the smallest value found so far; $m$ is initialized to $+\infty$, so that $v[k]$ remains $+\infty$ if no denomination $j$ with $w[j]\le k$ is found.

        - At the end of the inner loop, $v[k] \leftarrow m$ stores the optimal value $v[k]$.

        - Finally, the optimal value of the CCP instance is returned as $v[c]$.

        <a id="box-13-texccpbu"></a>

        !!! esempio "Example 27.4: Execution of the DP algorithm"

            We consider the CCP instance of <span style="color:#1971c2">[Example 27.1](#box-1-texccpex1)</span>, with amount of change $c=10$ to return and denominations $w=(2,3,5)$.

            For each step of the DP algorithm, the table shows the values of $k$ and $j$, the cell $v[k]$, the current value of $m$, and the comparison performed. The cell of $m$ is highlighted in <mark>red</mark> when updated; the cell of $v[k]$ is highlighted in <mark>blue</mark> when assigned.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(v[k]\)</span></th>
            <th><span class="arithmatex">\(m\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">0</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(v[0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(m := +\infty\)</span></td>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[1]=2>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[2]=3>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[3]=5>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu"><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(v[1]\leftarrow m=+\infty\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(m := +\infty\)</span></td>
            </tr>
            <tr>
            <td>2</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1{+}v[0]=1<m\)</span>: <span class="arithmatex">\(m\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(w[2]=3>2\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(w[3]=5>2\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu"><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(v[2]\leftarrow m=1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(m := +\infty\)</span></td>
            </tr>
            <tr>
            <td>3</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(1{+}v[1]=+\infty\not<m=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1{+}v[0]=1<m\)</span>: <span class="arithmatex">\(m\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(w[3]=5>3\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu"><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(v[3]\leftarrow m=1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(m := +\infty\)</span></td>
            </tr>
            <tr>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[2]=2<m\)</span>: <span class="arithmatex">\(m\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[1]=+\infty\not<m=2\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(w[3]=5>4\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(v[4]\leftarrow m=2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(m := +\infty\)</span></td>
            </tr>
            <tr>
            <td>5</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[3]=2<m\)</span>: <span class="arithmatex">\(m\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[2]=2\not<m=2\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1{+}v[0]=1<m\)</span>: <span class="arithmatex">\(m\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu"><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(v[5]\leftarrow m=1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(m := +\infty\)</span></td>
            </tr>
            <tr>
            <td>6</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1{+}v[4]=3<m\)</span>: <span class="arithmatex">\(m\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[3]=2<m\)</span>: <span class="arithmatex">\(m\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[1]=+\infty\not<m=2\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(v[6]\leftarrow m=2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(m := +\infty\)</span></td>
            </tr>
            <tr>
            <td>7</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[5]=2<m\)</span>: <span class="arithmatex">\(m\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[4]=3\not<m=2\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[2]=2\not<m=2\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(v[7]\leftarrow m=2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(m := +\infty\)</span></td>
            </tr>
            <tr>
            <td>8</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1{+}v[6]=3<m\)</span>: <span class="arithmatex">\(m\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[5]=2<m\)</span>: <span class="arithmatex">\(m\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[3]=2\not<m=2\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(v[8]\leftarrow m=2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(m := +\infty\)</span></td>
            </tr>
            <tr>
            <td>9</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1{+}v[7]=3<m\)</span>: <span class="arithmatex">\(m\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1{+}v[6]=3\not<m=3\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1{+}v[4]=3\not<m=3\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu"><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(v[9]\leftarrow m=3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(m := +\infty\)</span></td>
            </tr>
            <tr>
            <td>10</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1{+}v[8]=3<m\)</span>: <span class="arithmatex">\(m\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1{+}v[7]=3\not<m=3\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1{+}v[5]=2<m\)</span>: <span class="arithmatex">\(m\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu"><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(v[10]\leftarrow m=2\)</span></td>
            </tr>
            </table></div>

            This is the array $v$ after the execution of the DP algorithm:

            $$
            \begin{array}{l|rrrrrrrrrrr}
            \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\
            \hline {v[k]} & 0 & {+\infty} & 1 & 1 & 2 & 1 & 2 & 2 & 2 & 3 & 2 \\
            \hline
            \end{array}
            $$

    - After the execution of the DP algorithm, the array $v$ contains the optimal value $v[k]$ for every amount of change $k \in \{0,1,\dots,c\}$, where $v[c]$ is the minimum number of coins needed to return the amount of change $c$.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, i.e., the integer vector $(x_1,x_2,\dots,x_n)$, it is necessary to store some additional information.

    - For each amount of change $k$, in addition to the optimal value $v[k]$, we store $s[k]$, the index of the denomination of the coin used to obtain the optimal value $v[k]$ in formula $\eqref{eq:ccp}$.

    - More precisely, $s[k]$ is equal to the index $j$ of the denomination $w_j$ that minimizes the right-hand side of formula $\eqref{eq:ccp}$ when computing $v[k]$.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong> with the storing of the information necessary to construct an optimal solution:

        !!! algoritmo "Algorithm: CCP\_DP\_InfoSol"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A CCP instance given by <span class="arithmatex">\(n\)</span>, the array <span class="arithmatex">\(w[1..n]\)</span> of denominations, and the amount of change <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value and the array <span class="arithmatex">\(s[0..c]\)</span> of the indices of the denominations used</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> CCP_DP_InfoSol(<span class="arithmatex">\(n,w,c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..c]\)</span>; <span class="arithmatex">\(s := \textnormal{new array}[0..c]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(v[0] \leftarrow 0\)</span>; <span class="arithmatex">\(s[0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(m := +\infty\)</span>; <span class="arithmatex">\(t := 0\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(w[j]\le k\)</span>  and <span class="arithmatex">\(1+v[k-w[j]] < m\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">8</span><span class="arithmatex">\(m \leftarrow 1+v[k-w[j]]\)</span>; <span class="arithmatex">\(t \leftarrow j\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><span class="arithmatex">\(v[k] \leftarrow m\)</span>; <span class="arithmatex">\(s[k] \leftarrow t\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>return</strong> <span class="arithmatex">\(v[c], s\)</span></div></div>

        - The DP algorithm uses the additional temporary variable $t$ to keep track of the decision made when $m$ is updated. If the denomination $w[j]$ is used, $t \leftarrow j$ stores its index. At the end of the inner loop, $s[k]\leftarrow t$ stores the index of the denomination of the coin used, together with the optimal value $v[k]\leftarrow m$.

        <a id="box-14-texccpinfo"></a>

        !!! esempio "Example 27.5: Computation of the additional information"

            We consider the CCP instance of <span style="color:#1971c2">[Example 27.1](#box-1-texccpex1)</span>, with amount of change $c=10$ to return and denominations $w=(2,3,5)$.

            This is the array $s$ after the execution of the DP algorithm:

            $$
            \begin{array}{l|rrrrrrrrrrr}
            \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\
            \hline {s[k]} & 0 & 0 & 1 & 2 & 1 & 3 & 2 & 1 & 2 & 1 & 3 \\
            \hline
            \end{array}
            $$

            For example, $s[5]=3$ since formula $\eqref{eq:ccp}$ selects the denomination $w_3=5$ when computing $v[5]=1$, and $s[10]=3$ since the denomination $w_3=5$ is also selected when computing $v[10]=2$. The entry $s[1]$ is left undefined ($0$, by convention), since $v[1]=+\infty$ is infeasible.

    - Once the array $s$ has been computed, and provided that $v[c]<+\infty$, an optimal solution can be reconstructed by repeatedly using one coin of denomination $s[k]$ and moving to the residual amount of change $k-w_{s[k]}$, starting from $k=c$ and $x_j=0$ for all $j \in \{1,2,\dots,n\}$, until $k=0$:

        $$
        x_{s[k]} \leftarrow x_{s[k]}+1, \qquad k \leftarrow k - w_{s[k]}.
        $$

        This yields the vector $(x_1,x_2,\dots,x_n)$, where each entry $x_j$ is the number of coins of denomination $j$ in an optimal solution.

    - The condition $v[c]<+\infty$ is necessary: if $v[c]=+\infty$ the instance is infeasible, $s[c]=0$ and there is no solution to reconstruct. If $v[c]<+\infty$, then $s[k]\ge 1$ for every amount of change $k$ visited by the procedure.

        !!! algoritmo "Algorithm: CCP\_Reconstruct"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(n\)</span> of denominations, the array <span class="arithmatex">\(w[1..n]\)</span>, the amount of change <span class="arithmatex">\(c\)</span> with <span class="arithmatex">\(v[c]<+\infty\)</span>, and the array <span class="arithmatex">\(s[0..c]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> CCP_Reconstruct(<span class="arithmatex">\(n,w,c,s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(x[j] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><span class="arithmatex">\(k := c\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>while</strong> <span class="arithmatex">\(k>0\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(x[s[k]] \leftarrow x[s[k]]+1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><span class="arithmatex">\(k \leftarrow k-w[s[k]]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-15-texccpsolvector"></a>

        !!! esempio "Example 27.6: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">[Example 27.1](#box-1-texccpex1)</span>, we have the following array $s$:

            $$
            \begin{array}{l|rrrrrrrrrrr}
            \hline {k} & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\
            \hline {s[k]} & 0 & 0 & 1 & 2 & 1 & 3 & 2 & 1 & 2 & 1 & 3 \\
            \hline
            \end{array}
            $$

            We can reconstruct an optimal solution by starting from $k=10$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(s[k]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(k \leftarrow k-w_{s[k]}\)</span></th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(k=10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(k=10-5=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">2</td>
            <td><span class="arithmatex">\(k=5-5=0\)</span></td>
            </tr>
            </table></div>

            Thus, the vector

            $$
            (0,0,2)
            $$

            is an optimal solution: it uses two coins of denomination $w_3=5$. The corresponding total value is $2\cdot5=10=c$. The corresponding optimal value is $v(10)=2$.

### 27.2.1 Number of steps

- Let $S(n,c)$ denote the number of steps executed by <code>CCP\_DP</code> in the worst case, where $n$ is the number of denominations and $c$ is the amount of change. We compute $S(n,c)$ by counting how many times the lines of the pseudo-code of <code>CCP\_DP</code> are executed.

- In the worst case, the condition at line [7](#box-9-ccpbu-f) is true at every iteration of the inner loop, and therefore line [8](#box-10-ccpbu-g) is executed as often as line [7](#box-9-ccpbu-f). The number of executions of the relevant lines is:

    - <span style="color:#e03131">Line</span> [2](#box-4-ccpbu-a) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [3](#box-5-ccpbu-b) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [4](#box-6-ccpbu-c) is executed $c$ times.

    - <span style="color:#e03131">Line</span> [5](#box-7-ccpbu-d) is executed $c$ times.

    - <span style="color:#e03131">Line</span> [6](#box-8-ccpbu-e) is executed $cn$ times.

    - <span style="color:#e03131">Line</span> [7](#box-9-ccpbu-f) is executed $cn$ times.

    - <span style="color:#e03131">Line</span> [8](#box-10-ccpbu-g) is executed $cn$ times.

    - <span style="color:#e03131">Line</span> [11](#box-11-ccpbu-h) is executed $c$ times.

    - <span style="color:#e03131">Line</span> [13](#box-12-ccpbu-i) is executed $1$ time.

    Therefore, the total number of steps in the worst case is

    $$
    1+1+c+c+cn+cn+cn+c+1.
    $$

    Thus,

    $$
    S(n,c)=3+3c+3cn.
    $$

    Hence,

    $$
    S(n,c)=\Theta(nc).
    $$

    Indeed,

    $$
    \lim_{n,c\to\infty}
    \frac{3cn+3c+3}{nc}
    =
    \lim_{n,c\to\infty}
    \left(3+\frac{3}{n}+\frac{3}{nc}\right)
    =
    3\in\mathbb{R}_{>0}.
    $$

    !!! chiave ""

        The DP algorithm executes

        $$
        S(n,c)=\Theta(nc)
        $$

        steps in the worst case.

- The version <code>CCP\_DP\_InfoSol</code> stores the additional array $s$ and performs only a constant number of extra operations inside the same loops. Therefore, its number of steps remains $\Theta(nc)$.

## 27.3 Typical mistakes

!!! attenzione "Warning"

    - <strong>Using $0$ instead of $+\infty$.</strong> An amount that cannot be returned has $v(k)=+\infty$; with the value $0$ the DP algorithm would claim that no coin is needed.

    - <strong>Reconstructing an infeasible instance.</strong> If $v[c]=+\infty$ then $s[c]=0$, and the reconstruction would read $x[0]$ and $w[0]$, outside the arrays: it must first check that $v[c]<+\infty$.

    - <strong>Storing the value of the coin instead of its index.</strong> The vector $x$ is indexed by the denominations: $s[k]$ stores the index $j$, and the coin value is $w_{s[k]}$.

    - <strong>Confusing the CCP with the UKP.</strong> The CCP asks for exactly $c$ and minimizes the number of coins; the UKP asks for at most $c$ and maximizes the profit.

## 27.4 In summary

!!! chiave "In summary"

    - The CCP asks for the minimum number of coins whose total value is exactly $c$; the instance is infeasible when $v(c)=+\infty$.

    - The recurrence $v(k)=\min_{j:\,w_j\le k}\{1+v(k-w_j)\}$ is computed bottom-up in $\Theta(nc)$ steps, which is pseudo-polynomial.

    - An optimal solution is read backwards from $s[c]$, the index of the denomination of the first coin chosen for the amount $c$, and only if $v[c]<+\infty$.

    <strong>Dashboard of the CCP example.</strong> [Example 27.1](#box-1-texccpex1) ($c=10$, $w=(2,3,5)$):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Method</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td>DP algorithm</td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td><span class="arithmatex">\(2\)</span></td>
    <td>minimum number of coins, solution <span class="arithmatex">\((0,0,2)\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Coin change (CCP)](../exercises/dp-coin-change.md)

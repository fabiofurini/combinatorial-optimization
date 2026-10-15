---
title: "DP for the bounded knapsack problem"
---

# DP for the bounded knapsack problem

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 19** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-presentation: Slides](../pdf/slides-dp-bounded-knapsack.pdf) · [:material-pencil: Exercises: Bounded knapsack (BKP)](../exercises/dp-bounded-knapsack.md) · [:material-gesture-tap: App: DP tables for the knapsack problems](../lab/dp-knapsack-table.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapters [«DP for the 0/1 knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack/) and [«DP for the unbounded knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-unbounded-knapsack/): the recurrence $v(j,k)$ of the 0/1 knapsack problem (KP) and of the unbounded knapsack problem (UKP) over items and capacities, and the reconstruction of a solution.

    - From this module, the chapter [«Principles of dynamic programming»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-principles/): optimal substructure, overlapping subproblems, base cases.

    - From the module <em>Algorithms</em>: [pseudocode conventions (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/) and [the size of the input (Chapter 11)](https://fabiofurini.github.io/algorithms/analysis/11-input-size/).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - say why the KP ($b_j=1$) and the UKP ($b_j\ge\lfloor c/w_j\rfloor$) are special cases of the BKP, and write its recurrence;

    - run the DP algorithm by hand, trying every feasible number $d$ of copies of each item type;

    - fill the matrix $s$ of the numbers of copies and reconstruct an optimal solution from it;

    - count the steps of the DP algorithm and say when $\Theta(nc\,b_{\max})$ is tight.

The problem of this chapter is the [bounded knapsack problem (BKP)](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-bounded-knapsack-problem/): its definition and its assumptions are on its page.

## 19.1 Instances and feasible solutions

<a id="box-1-texbkpex1"></a>

!!! esempio "Example 19.1: BKP instance"

    We consider a knapsack of capacity $c=10$ and $3$ item types, with the following profits, weights, and bounds:

    $$
    \begin{array}{l|rrr}
    \hline  & {j=1} & {j=2} & {j=3} \\
    \hline {p_j} & 6 & 10 & 12 \\
    {w_j} & 2 & 3 & 5 \\
    {b_j} & 2 & 2 & 1 \\
    \hline
    \end{array}
    $$

    We refer to this BKP instance as <span style="color:#1971c2">[Example 19.1](#box-1-texbkpex1)</span>.

!!! chiave ""

    The main difference with the 0/1 knapsack problem (KP) is that each item type may be selected more than once: variable $x_j$ is no longer binary, but it is bounded by $b_j$. The BKP reduces to the KP when $b_j=1$ for every item type $j$, and to the unbounded knapsack problem (UKP) when every bound $b_j$ is large enough not to be binding.

- The number of possible vectors $(x_1,x_2,\dots,x_n)$, with $x_j \in \{0,1,\dots,b_j\}$ for every item type $j$, is

    $$
    \prod_{j=1}^{n}(b_j+1).
    $$

    Some of these vectors may not respect the knapsack capacity. Therefore, the number of feasible solutions is at most $\prod_{j=1}^{n}(b_j+1)$, a quantity that grows exponentially with $n$. Enumerating all possible solutions quickly becomes impractical as $n$ increases.

### 19.1.1 Encoding of feasible solutions

!!! chiave ""

    A <em>feasible solution</em> of the BKP is a choice of the number of copies of each item type, respecting both the bounds $b_j$ and the knapsack capacity $c$.

- A BKP feasible solution can be described by the integer vector

    $$
    (x_1,x_2,\dots,x_n)
    $$

    where each component has the following meaning:

    $$
    x_j = \text{number of copies of item type } j \text{ selected}, \qquad \forall j \in \{1,2,\dots,n\}, \quad 0 \le x_j \le b_j.
    $$

    Since the solution is feasible, the total weight of the selected items must not exceed the knapsack capacity:

    $$
    \sum_{j=1}^{n} w_j x_j \le c.
    $$

    The total profit of a feasible solution is

    $$
    \sum_{j=1}^{n} p_j x_j.
    $$

## 19.2 A DP algorithm

- <u>Step 1</u>: computation of the optimal value

    !!! formula ""

        For any $j \in \{0,1,\dots,n\}$ and $k \in \{0,1,\dots,c\}$, let $v(j,k)$ be the optimal value of the BKP subinstance given by:

        1. a knapsack of capacity $k$,

        2. a set $\{1,2,\dots,j\}$ of available item types,

        3. for each item type $h \in \{1,2,\dots,j\}$, a profit $p_h$, a weight $w_h$, and a bound $b_h$.

        The recursive formula to compute $v(j,k)$ reads as follows:

        \begin{equation*}
        \label{eq:bkp}
        v(j,k)= \left\{ \begin{array}{ll}
        0 & \textrm{if $j=0$ or $k=0$,}                                                                                            \\[2ex]
        \displaystyle \max_{d \,\in\, \{0,1,\dots,\min\{b_j,\lfloor k/w_j\rfloor\}\}} \bigg\{ d\,p_j + v(j-1,k-d\,w_j) \bigg\} & \begin{array}[t]{@{}l@{}}\textrm{if $1\le j \le n$}\\ \textrm{and $1 \le k \le c$.}\end{array}
        \end{array} \right. \tag{19.1}
        \end{equation*}

    - The recursive decomposition process of formula $\eqref{eq:bkp}$ generates at most $b_j+1$ <strong>independent subproblems</strong>, corresponding to the possible numbers $d \in \{0,1,\dots,\min\{b_j,\lfloor k/w_j\rfloor\}\}$ of copies of item type $j$ inserted into a knapsack of capacity $k$, using only item types $1,2,\dots,j$.

    - The base cases are $v(0,k)=0$ since no item type is available, and $v(j,0)=0$ since no capacity is available.

    - The optimal value $v(j,k)$ is obtained by trying every feasible number $d$ of copies of item type $j$ and selecting the one that maximizes the sum $d\,p_j+v(j-1,k-d\,w_j)$ of the profit of the $d$ copies and the optimal value of the residual subproblem, restricted to item types $1,2,\dots,j-1$.

    - Hence, an optimal solution for the subinstance with capacity $k$ and available item types $\{1,2,\dots,j\}$ is built by combining the chosen number $d$ of copies of item type $j$ with an optimal solution of the corresponding residual subproblem.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different choices of the number of copies of an item type, possibly made for different values of $j$ and $k$, can lead to the same subproblem, and therefore the same value $v(j,k)$ may need to be computed several times during the recursive evaluation of formula $\eqref{eq:bkp}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - A <strong>first method</strong> to compute the optimal value $v(n,c)$ of the BKP instance is the <strong>top-down approach</strong>. The method starts from the call with $j=n$ and $k=c$ and evaluates formula $\eqref{eq:bkp}$ recursively: each call considers item type $j$ and tries every feasible number $d$ of copies of it, until no item type is left or the residual capacity is equal to $0$.

    - The <strong>recursion tree</strong> of the function $v$ has one node for each recursive call, labeled with the function call it represents. The root represents the initial call. The children of a node represent the recursive calls made by that call. The leaf nodes represent the base cases.

        <a id="box-2-texbkptree"></a>

        !!! esempio "Example 19.2: Recursion tree"

            We consider the BKP instance of <span style="color:#1971c2">[Example 19.1](#box-1-texbkpex1)</span>. This is the recursion tree of the top-down approach to compute $v(3,10)$:

            ![Figure 1](../img/dp-bounded-knapsack/fig01.svg){ .fig loading=lazy  }

            The function $v$ is called $22$ times, and the same subproblems are solved multiple times: $v(0,5)$ is called $2$ times, $v(0,3)$ is called $2$ times, $v(0,2)$ is called $2$ times, and $v(0,0)$ is called $2$ times. All the other calls are made only once.

    - The value $v(j,k)$ can be computed once the values $v(j-1,k')$, for every residual capacity $k'\le k$, are known. Therefore, for a fixed value of $j$, all values $v(j,k)$ can be computed by considering the capacity values $k$ in increasing order.

        <a id="box-3-texbkpvalues"></a>

        !!! esempio "Example 19.3: Computing the values of the $v$ function"

            We consider the BKP instance of <span style="color:#1971c2">[Example 19.1](#box-1-texbkpex1)</span> with a knapsack of capacity $c=10$ and the following profits, weights, and bounds:

            $$
            \begin{array}{l|rrr}
            \hline  & {j=1} & {j=2} & {j=3} \\
            \hline {p_j} & 6 & 10 & 12 \\
            {w_j} & 2 & 3 & 5 \\
            {b_j} & 2 & 2 & 1 \\
            \hline
            \end{array}
            $$

            The values of the function $v$ are computed as follows:

            - The base cases give $v(0,k)=0$ for all $k \ge 0$.

            - Once we have computed the base cases, we can compute $v(1,4)$, trying $d=0,1,2$ copies of item type $1$ (since $b_1=2$ and $\lfloor 4/2 \rfloor=2$):

                $$
                v(1,4) = \max\{v(0,4),\; p_1+v(0,2),\; 2p_1+v(0,0)\} = \max\{0,\,6,\,12\} = 12
                $$

            - We can also compute $v(1,10)$, trying $d=0,1,2$ copies (since $b_1=2$ caps the number of copies even though $\lfloor 10/2 \rfloor=5$):

                $$
                v(1,10) = \max\{v(0,10),\; p_1+v(0,8),\; 2p_1+v(0,6)\} = \max\{0,\,6,\,12\} = 12
                $$

            - In the same way we compute $v(1,7)$, $v(1,5)$ and $v(1,2)$:

                $$
                v(1,7) = \max\{v(0,7),\; p_1+v(0,5),\; 2p_1+v(0,3)\} = \max\{0,\,6,\,12\} = 12
                $$

                $$
                v(1,5) = \max\{v(0,5),\; p_1+v(0,3),\; 2p_1+v(0,1)\} = \max\{0,\,6,\,12\} = 12
                $$

                $$
                v(1,2) = \max\{v(0,2),\; p_1+v(0,0)\} = \max\{0,\,6\} = 6
                $$

            - Once we have computed $v(1,5)$ and $v(1,2)$, we can compute $v(2,5)$, trying $d=0,1$ copies of item type $2$ (since $b_2=2$ but $\lfloor 5/3 \rfloor=1$):

                $$
                v(2,5) = \max\{v(1,5),\; p_2+v(1,2)\} = \max\{12,\,10+6\} = 16
                $$

            - Once we have computed $v(1,10)$, $v(1,7)$ and $v(1,4)$, we can compute $v(2,10)$, trying $d=0,1,2$ copies of item type $2$:

                \begin{align*}
                v(2,10) &= \max\{v(1,10),\; p_2+v(1,7),\; 2p_2+v(1,4)\}\\ &= \max\{12,\,10+12,\,20+12\} = 32
                \end{align*}

            - Finally, once we have computed $v(2,10)$ and $v(2,5)$, we can compute $v(3,10)$, trying $d=0,1$ copies of item type $3$ (since $b_3=1$):

                $$
                v(3,10) = \max\{v(2,10),\; p_3+v(2,5)\} = \max\{32,\,12+16\} = 32
                $$

    - We can avoid solving the same subproblems repeatedly by storing the value of each subproblem as soon as it is computed. The values are stored in a <strong>lookup table</strong>.

    - Since solving any particular subproblem depends only on subproblems with a smaller value of $j$, we can solve the subproblems in increasing order of $j$ and, for each fixed value of $j$, in increasing order of capacity, starting from the base cases $v(0,k)=0$ and $v(j,0)=0$ and building up to $v(n,c)$: this observation naturally leads to a <strong>much more efficient method</strong> to compute the optimal value $v(n,c)$ of the BKP instance.

    - A <strong>second method</strong> to compute the optimal value $v(n,c)$ of the BKP instance is the <strong>bottom-up approach</strong>. The method starts from the base cases and evaluates formula $\eqref{eq:bkp}$ for increasing values of $j \in \{1,2,\dots,n\}$ and $k \in \{0,1,\dots,c\}$: each value $v(j,k)$ is computed using already-computed values, until the value $v(n,c)$ of the BKP instance is obtained.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>:

        !!! algoritmo "Algorithm: BKP\_DP"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A BKP instance given by <span class="arithmatex">\(n\)</span>, arrays <span class="arithmatex">\(p[1..n]\)</span>, <span class="arithmatex">\(w[1..n]\)</span>, <span class="arithmatex">\(b[1..n]\)</span>, and capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the BKP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> BKP_DP(<span class="arithmatex">\(n,p,w,b,c\)</span>)</div><div class="pc" style="--liv:1" id="box-4-bkpbu-a"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..n][0..c]\)</span></div><div class="pc" style="--liv:1" id="box-5-bkpbu-b"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-6-bkpbu-c"><span class="pc-n">4</span><span class="arithmatex">\(v[0][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-7-bkpbu-d"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-8-bkpbu-e"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-9-bkpbu-f"><span class="pc-n">8</span><span class="arithmatex">\(m := 0\)</span></div><div class="pc" style="--liv:3" id="box-10-bkpbu-g"><span class="pc-n">9</span><strong>for</strong> <span class="arithmatex">\(d := 0\)</span> <strong>to</strong> <span class="arithmatex">\(\min\{b[j],\lfloor k/w[j]\rfloor\}\)</span>  <strong>do</strong></div><div class="pc" style="--liv:4" id="box-11-bkpbu-h"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\(d\,p[j]+v[j-1][k-d\,w[j]] > m\)</span>  <strong>then</strong></div><div class="pc" style="--liv:5" id="box-12-bkpbu-i"><span class="pc-n">11</span><span class="arithmatex">\(m \leftarrow d\,p[j]+v[j-1][k-d\,w[j]]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:3" id="box-13-bkpbu-j"><span class="pc-n">14</span><span class="arithmatex">\(v[j][k] \leftarrow m\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-14-bkpbu-k"><span class="pc-n">17</span><strong>return</strong> <span class="arithmatex">\(v[n][c]\)</span></div></div>

        - The matrix $v[0..n][0..c]$ is the <strong>lookup table</strong>: it stores the optimal values of all subproblems.

        - The first loop initializes the values $v[0][k]=0$ for all capacities $k \in \{0,1,\dots,c\}$, corresponding to the case in which no item type is available.

        - The outer loop, over $j \in \{1,2,\dots,n\}$, computes the rows of the matrix in increasing order of item type.

        - The inner loop, over $k \in \{0,1,\dots,c\}$, computes the optimal value $v[j][k]$ for each capacity $k$.

        - The innermost loop, over $d \in \{0,1,\dots,\min\{b[j],\lfloor k/w[j]\rfloor\}\}$, tries every feasible number of copies of item type $j$ and keeps in $m$ the largest value found so far.

        - At the end of the innermost loop, $v[j][k] \leftarrow m$ stores the optimal value $v[j][k]$.

        - Finally, the optimal value of the BKP instance is returned as $v[n][c]$.

        <a id="box-15-texbkpbu"></a>

        !!! esempio "Example 19.4: Execution of the DP algorithm"

            We consider the BKP instance of <span style="color:#1971c2">[Example 19.1](#box-1-texbkpex1)</span> with a knapsack of capacity $c=10$ and the following profits, weights, and bounds:

            $$
            \begin{array}{l|rrr}
            \hline  & {j=1} & {j=2} & {j=3} \\
            \hline {p_j} & 6 & 10 & 12 \\
            {w_j} & 2 & 3 & 5 \\
            {b_j} & 2 & 2 & 1 \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $j$ and $k$, the cell $v[j][k]$, and the operation performed.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(v[j][k]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][8]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][9]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(v[0][10]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][0]\}=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][1]\}=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][2],\,p[1]{+}v[0][0]\}=\max\{0,6{+}0\}=6\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][3],\,p[1]{+}v[0][1]\}=\max\{0,6{+}0\}=6\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(12\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][4],\,p[1]{+}v[0][2],\,2p[1]{+}v[0][0]\}=\max\{0,6,12\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(12\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][5],\,p[1]{+}v[0][3],\,2p[1]{+}v[0][1]\}=\max\{0,6,12\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(12\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][6],\,p[1]{+}v[0][4],\,2p[1]{+}v[0][2]\}=\max\{0,6,12\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(12\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][7],\,p[1]{+}v[0][5],\,2p[1]{+}v[0][3]\}=\max\{0,6,12\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(12\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][8],\,p[1]{+}v[0][6],\,2p[1]{+}v[0][4]\}=\max\{0,6,12\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(12\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][9],\,p[1]{+}v[0][7],\,2p[1]{+}v[0][5]\}=\max\{0,6,12\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(12\)</span></td>
            <td><span class="arithmatex">\(\max\{v[0][10],\,p[1]{+}v[0][8],\,2p[1]{+}v[0][6]\}=\max\{0,6,12\}=12\)</span></td>
            </tr>
            </table></div>

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(v[j][k]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][0]\}=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][1]\}=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][2]\}=6\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][3],\,p[2]{+}v[1][0]\}=\max\{6,10{+}0\}=10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(12\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][4],\,p[2]{+}v[1][1]\}=\max\{12,10{+}0\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(16\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][5],\,p[2]{+}v[1][2]\}=\max\{12,10{+}6\}=16\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(20\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][6],\,p[2]{+}v[1][3],\,2p[2]{+}v[1][0]\}=\max\{12,16,20\}=20\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(22\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][7],\,p[2]{+}v[1][4],\,2p[2]{+}v[1][1]\}=\max\{12,22,20\}=22\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(26\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][8],\,p[2]{+}v[1][5],\,2p[2]{+}v[1][2]\}=\max\{12,22,26\}=26\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(26\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][9],\,p[2]{+}v[1][6],\,2p[2]{+}v[1][3]\}=\max\{12,22,26\}=26\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(32\)</span></td>
            <td><span class="arithmatex">\(\max\{v[1][10],\,p[2]{+}v[1][7],\,2p[2]{+}v[1][4]\}=\max\{12,22,32\}=32\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][0]\}=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][1]\}=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][2]\}=6\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][3]\}=10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(12\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][4]\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(16\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][5],\,p[3]{+}v[2][0]\}=\max\{16,12{+}0\}=16\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(20\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][6],\,p[3]{+}v[2][1]\}=\max\{20,12{+}0\}=20\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(22\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][7],\,p[3]{+}v[2][2]\}=\max\{22,12{+}6\}=22\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(26\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][8],\,p[3]{+}v[2][3]\}=\max\{26,12{+}10\}=26\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(26\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][9],\,p[3]{+}v[2][4]\}=\max\{26,12{+}12\}=26\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(32\)</span></td>
            <td><span class="arithmatex">\(\max\{v[2][10],\,p[3]{+}v[2][5]\}=\max\{32,12{+}16\}=32\)</span></td>
            </tr>
            </table></div>

            This is the matrix $v$ after the execution of the DP algorithm:

            $$
            \begin{array}{l|rrrrrrrrrrr}
            \hline {v[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} & {k=10} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 0 & 6 & 6 & 12 & 12 & 12 & 12 & 12 & 12 & 12 \\
            {j=2} & 0 & 0 & 6 & 10 & 12 & 16 & 20 & 22 & 26 & 26 & 32 \\
            {j=3} & 0 & 0 & 6 & 10 & 12 & 16 & 20 & 22 & 26 & 26 & 32 \\
            \hline
            \end{array}
            $$

    - After the execution of the DP algorithm, the matrix $v$ contains the optimal value $v[j][k]$ for every item type $j \in \{0,1,\dots,n\}$ and every capacity value $k \in \{0,1,\dots,c\}$.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, i.e., the integer vector $(x_1,x_2,\dots,x_n)$, it is necessary to store some additional information.

    - For each item type $j$ and capacity value $k$, in addition to the optimal value $v[j][k]$, we store $s[j][k]$, the number of copies of item type $j$ selected in an optimal solution for the subproblem restricted to item types $\{1,2,\dots,j\}$ and capacity $k$.

    - More precisely, $s[j][k]$ is equal to the value $d$ that maximizes the right-hand side of formula $\eqref{eq:bkp}$ when computing $v[j][k]$.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong> with the storing of the information necessary to construct an optimal solution:

        !!! algoritmo "Algorithm: BKP\_DP\_InfoSol"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A BKP instance given by <span class="arithmatex">\(n\)</span>, arrays <span class="arithmatex">\(p[1..n]\)</span>, <span class="arithmatex">\(w[1..n]\)</span>, <span class="arithmatex">\(b[1..n]\)</span>, and capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the BKP instance and the matrix of copy counts <span class="arithmatex">\(s[0..n][0..c]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> BKP_DP_InfoSol(<span class="arithmatex">\(n,p,w,b,c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..n][0..c]\)</span>; <span class="arithmatex">\(s := \textnormal{new array}[0..n][0..c]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(v[0][k] \leftarrow 0\)</span>; <span class="arithmatex">\(s[0][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">8</span><span class="arithmatex">\(m := 0\)</span>; <span class="arithmatex">\(t := 0\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><strong>for</strong> <span class="arithmatex">\(d := 0\)</span> <strong>to</strong> <span class="arithmatex">\(\min\{b[j],\lfloor k/w[j]\rfloor\}\)</span> <strong>do</strong></div><div class="pc" style="--liv:4"><span class="pc-n">10</span><strong>if</strong> <span class="arithmatex">\(d\,p[j]+v[j-1][k-d\,w[j]] > m\)</span> <strong>then</strong></div><div class="pc" style="--liv:5"><span class="pc-n">11</span><span class="arithmatex">\(m \leftarrow d\,p[j]+v[j-1][k-d\,w[j]]\)</span>; <span class="arithmatex">\(t \leftarrow d\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">14</span><span class="arithmatex">\(v[j][k] \leftarrow m\)</span>; <span class="arithmatex">\(s[j][k] \leftarrow t\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><strong>return</strong> <span class="arithmatex">\(v[n][c], s\)</span></div></div>

        - The DP algorithm uses the additional temporary variable $t$ to keep track of the decision made when $m$ is updated. If $d$ copies of item type $j$ are selected, $t \leftarrow d$ stores this decision. At the end of the innermost loop, $s[j][k]\leftarrow t$ stores the number of copies of item type $j$ used, together with the optimal value $v[j][k]\leftarrow m$.

        <a id="box-16-texbkpinfo"></a>

        !!! esempio "Example 19.5: Computation of the additional information"

            We consider the BKP instance of <span style="color:#1971c2">[Example 19.1](#box-1-texbkpex1)</span> with a knapsack of capacity $c=10$ and the following profits, weights, and bounds:

            $$
            \begin{array}{l|rrr}
            \hline  & {j=1} & {j=2} & {j=3} \\
            \hline {p_j} & 6 & 10 & 12 \\
            {w_j} & 2 & 3 & 5 \\
            {b_j} & 2 & 2 & 1 \\
            \hline
            \end{array}
            $$

            For each cell with $j\ge 1$ the table shows the values $d\,p[j]+v[j-1][k-d\,w[j]]$ for $d=0,1,\dots,\min\{b[j],\lfloor k/w[j]\rfloor\}$, in this order, and the number $t$ of copies stored in $s[j][k]$. In case of ties the smallest $d$ is kept, because $m$ is updated only when the value is strictly larger. The row $j=0$ is $s[0][k]=0$ for every $k$.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(s[j][k]\)</span></th>
            <th>Values for <span class="arithmatex">\(d=0,1,\dots\)</span></th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0,\,6\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0,\,6\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0,\,6,\,12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0,\,6,\,12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0,\,6,\,12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0,\,6,\,12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0,\,6,\,12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0,\,6,\,12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0,\,6,\,12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(6,\,10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(12,\,10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(12,\,16\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(12,\,16,\,20\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(12,\,22,\,20\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(12,\,22,\,26\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(12,\,22,\,26\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(12,\,22,\,32\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(16,\,12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(20,\,12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(22,\,18\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(26,\,22\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(26,\,24\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(32,\,28\)</span></td>
            </tr>
            </table></div>

            This is the matrix $s$ after the execution of the DP algorithm:

            $$
            \begin{array}{l|rrrrrrrrrrr}
            \hline {s[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} & {k=10} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 0 & 1 & 1 & 2 & 2 & 2 & 2 & 2 & 2 & 2 \\
            {j=2} & 0 & 0 & 0 & 1 & 0 & 1 & 2 & 1 & 2 & 2 & 2 \\
            {j=3} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            \hline
            \end{array}
            $$

            For example, $s[1][4]=2$ since formula $\eqref{eq:bkp}$ selects $d=2$ copies of item type $1$ when computing $v[1][4]=12$, and $s[2][10]=2$ since $d=2$ copies of item type $2$ are selected when computing $v[2][10]=32$. Since $s[3][10]=0$, no copy of item type $3$ is used in the optimal solution for the original instance.

    - Once the matrix $s$ has been computed, an optimal solution can be reconstructed by scanning the item types from $j=n$ down to $j=1$, starting from capacity $k=c$ and $x_j=0$ for all $j \in \{1,2,\dots,n\}$:

        $$
        x_j \leftarrow s[j][k], \qquad k \leftarrow k - s[j][k]\,w_j.
        $$

        This yields the vector $(x_1,x_2,\dots,x_n)$, where each entry $x_j$ is the number of copies of item type $j$ in an optimal solution.

        !!! algoritmo "Algorithm: BKP\_Reconstruct"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(n\)</span> of item types, the knapsack capacity <span class="arithmatex">\(c\)</span>, the array <span class="arithmatex">\(w[1..n]\)</span> of weights, and the matrix <span class="arithmatex">\(s[0..n][0..c]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the BKP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> BKP_Reconstruct(<span class="arithmatex">\(n,c,w,s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(k := c\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(j := n\)</span> <strong>downto</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(x[j] \leftarrow s[j][k]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><span class="arithmatex">\(k \leftarrow k-x[j]\,w[j]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-17-texbkpsolvector"></a>

        !!! esempio "Example 19.6: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">[Example 19.1](#box-1-texbkpex1)</span>, we have the following matrix $s$:

            $$
            \begin{array}{l|rrrrrrrrrrr}
            \hline {s[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} & {k=8} & {k=9} & {k=10} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 0 & 1 & 1 & 2 & 2 & 2 & 2 & 2 & 2 & 2 \\
            {j=2} & 0 & 0 & 0 & 1 & 0 & 1 & 2 & 1 & 2 & 2 & 2 \\
            {j=3} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            \hline
            \end{array}
            $$

            We can reconstruct an optimal solution by starting from $j=3$ and $k=10$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(s[j][k]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
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
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">0</td>
            <td><span class="arithmatex">\(x[3]\leftarrow 0\)</span>, <span class="arithmatex">\(k=10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td class="cella-blu">2</td>
            <td>0</td>
            <td><span class="arithmatex">\(x[2]\leftarrow 2\)</span>, <span class="arithmatex">\(k\leftarrow 10-2\cdot3=4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td class="cella-blu">2</td>
            <td>2</td>
            <td>0</td>
            <td><span class="arithmatex">\(x[1]\leftarrow 2\)</span>, <span class="arithmatex">\(k\leftarrow 4-2\cdot2=0\)</span></td>
            </tr>
            </table></div>

            Thus, the vector

            $$
            (2,2,0)
            $$

            is an optimal solution. The corresponding total weight is $2\cdot2+2\cdot3=4+6=10=c$. The corresponding optimal value is $v(3,10)=32$.

### 19.2.1 Number of steps

- Let $b_{\max}=\max\{b[j]: j \in \{1,\dots,n\}\}$, and let $S(n,c,b_{\max})$ denote the number of steps executed by <code>BKP\_DP</code> in the worst case, where $n$ is the number of item types and $c$ is the knapsack capacity. We compute $S(n,c,b_{\max})$ by counting how many times the lines of the pseudo-code of <code>BKP\_DP</code> are executed.

- For each pair $(j,k)$ the innermost loop over $d$ executes $\min\{b_j,\lfloor k/w_j\rfloor\}+1$ iterations, which is at most $b_{\max}+1$. We count $b_{\max}+1$ iterations for every pair $(j,k)$ and we assume that the condition at line [10](#box-11-bkpbu-h) is true at every iteration, so that $S(n,c,b_{\max})$ is an upper bound on the number of steps. The number of executions of the relevant lines is, at most:

    - <span style="color:#e03131">Line</span> [2](#box-4-bkpbu-a) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [3](#box-5-bkpbu-b) is executed $c+1$ times.

    - <span style="color:#e03131">Line</span> [4](#box-6-bkpbu-c) is executed $c+1$ times.

    - <span style="color:#e03131">Line</span> [6](#box-7-bkpbu-d) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [7](#box-8-bkpbu-e) is executed $n(c+1)$ times.

    - <span style="color:#e03131">Line</span> [8](#box-9-bkpbu-f) is executed $n(c+1)$ times.

    - <span style="color:#e03131">Line</span> [9](#box-10-bkpbu-g) is executed at most $n(c+1)(b_{\max}+1)$ times.

    - <span style="color:#e03131">Line</span> [10](#box-11-bkpbu-h) is executed at most $n(c+1)(b_{\max}+1)$ times.

    - <span style="color:#e03131">Line</span> [11](#box-12-bkpbu-i) is executed at most $n(c+1)(b_{\max}+1)$ times.

    - <span style="color:#e03131">Line</span> [14](#box-13-bkpbu-j) is executed $n(c+1)$ times.

    - <span style="color:#e03131">Line</span> [17](#box-14-bkpbu-k) is executed $1$ time.

    Therefore, the total number of steps in the worst case is

    $$
    1+(c+1)+(c+1)+n+n(c+1)+n(c+1)+3n(c+1)(b_{\max}+1)+n(c+1)+1.
    $$

    Thus,

    $$
    S(n,c,b_{\max})=3n(c+1)(b_{\max}+1)+3n(c+1)+n+2c+4.
    $$

    Hence,

    $$
    S(n,c,b_{\max})=\Theta(nc\,b_{\max}).
    $$

    Indeed,

    $$
    \begin{split}
    &\lim_{n,c,b_{\max}\to\infty}
    \frac{3n(c+1)(b_{\max}+1)+3n(c+1)+n+2c+4}{nc\,b_{\max}}\\
    &=\lim_{n,c,b_{\max}\to\infty}
    \left(
    \frac{3(c+1)(b_{\max}+1)}{c\,b_{\max}}
    +\frac{3(c+1)}{c\,b_{\max}}
    +\frac{1}{c\,b_{\max}}
    +\frac{2}{n\,b_{\max}}
    +\frac{4}{nc\,b_{\max}}
    \right)\\
    &=3\in\mathbb{R}_{>0}.
    \end{split}
    $$

    !!! chiave ""

        The DP algorithm executes

        $$
        S(n,c,b_{\max})=\Theta(nc\,b_{\max})
        $$

        steps in the worst case.

- The version <code>BKP\_DP\_InfoSol</code> stores the additional matrix $s$ and performs only a constant number of extra operations inside the same loops. Therefore, its number of steps remains $\Theta(nc\,b_{\max})$.

- Replacing every bound $b_j$ by $\min\{b_j,\lfloor c/w_j\rfloor\}$ does not change the problem, so we can assume $b_{\max}\le c$. Under this assumption the bound $\Theta(nc\,b_{\max})$ is tight: it is attained by the instances in which all the weights are equal to $1$ and all the bounds are equal to $b_{\max}$. Indeed, the innermost loop then performs $\sum_{k=0}^{c}(\min\{b_{\max},k\}+1)\ge (c+1)\,b_{\max}/2$ iterations for each item type.

## 19.3 Typical mistakes

!!! attenzione "Warning"

    - <strong>Trying more than $b_j$ copies.</strong> The number of copies of item type $j$ ranges in $\{0,1,\dots,\min\{b_j,\lfloor k/w_j\rfloor\}\}$: the bound and the capacity both matter.

    - <strong>Reconstructing with the wrong update.</strong> After reading $s[j][k]$ the capacity decreases by $s[j][k]\,w_j$, not by $w_j$, and the item type index always decreases by one.

    - <strong>Counting the steps with $b_{\max}$ for every cell.</strong> The innermost loop has $\min\{b_j,\lfloor k/w_j\rfloor\}+1$ iterations, so $b_{\max}+1$ is only an upper bound.

    - <strong>Breaking ties inconsistently.</strong> The DP algorithm updates $m$ only on a strictly larger value, so $s[j][k]$ keeps the smallest number of copies that attains the maximum.

## 19.4 In summary

!!! chiave "In summary"

    - The BKP generalizes both the KP ($b_j=1$) and the UKP ($b_j=\lfloor c/w_j\rfloor$); the recurrence tries every number $d$ of copies of item type $j$.

    - The matrix $v(j,k)$ is filled in $\Theta(nc\,b_{\max})$ steps, which is pseudo-polynomial.

    - The matrix $s$ stores the number of copies of each item type, and an optimal solution is read backwards from $(n,c)$.

    - Replacing $b_j$ by $\min\{b_j,\lfloor c/w_j\rfloor\}$ keeps the problem unchanged and gives $b_{\max}\le c$.

    <strong>Dashboard of the BKP example.</strong> [Example 19.1](#box-1-texbkpex1) ($c=10$, three item types):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Method</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td>DP algorithm</td>
    <td><span class="arithmatex">\(32\)</span></td>
    <td><span class="arithmatex">\(32\)</span></td>
    <td>optimal value, solution <span class="arithmatex">\((2,2,0)\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Bounded knapsack (BKP)](../exercises/dp-bounded-knapsack.md)

<!-- laboratorio-interattivo: sezione generata da interattivi.py -->

:material-flask-outline: **In the interactive lab:** [DP tables for the knapsack problems](../lab/dp-knapsack-table.md#voce=bkp).
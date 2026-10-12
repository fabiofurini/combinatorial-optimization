---
title: "A second DP algorithm"
---

# 17.3 A second DP algorithm

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 17** · [:material-book-open-variant: Chapter 17: 0/1 knapsack (KP)](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: 0/1 knapsack (KP)](../../exercises/dp-knapsack.md) · [:material-gesture-tap: App: DP tables for the knapsack problems](../../lab/dp-knapsack-table.md)

</div>

- <u>Step 1</u>: computation of the optimal value

    - In the DP algorithm of the previous section, a subproblem is identified by a capacity value, and its optimal value is the maximum total profit that can be obtained without exceeding that capacity.

    - In the DP algorithm of this section, the roles of the profits and of the weights are exchanged: a subproblem is identified by a profit value, and its optimal value is the minimum total weight needed to obtain exactly that profit.

    - Since each profit $p_j$ is a positive integer and each item can be selected at most once, the total profit of a feasible solution is an integer between $0$ and the total profit of all the items

        $$
        P=\sum_{j=1}^{n} p_j.
        $$

    - Therefore, it is enough to consider the profit values $q \in \{0,1,\dots,P\}$.

    - The number of subproblems of this DP algorithm grows with the total profit $P$. To keep the number of subproblems small, the DP algorithm is illustrated on the following KP instance, which has the same item weights and the same knapsack capacity as the KP instance of <span style="color:#1971c2">[Example 17.1](index.md#box-1-texexpbox1)</span>, and smaller item profits.

    <a id="box-54-texkp2instance"></a>

    !!! esempio "Example 17.13: KP instance"

        We consider a knapsack of capacity $c = 5$ and a set $\{1,2,3\}$ of $3$ items ($n = 3$), with the following profits and weights:

        $$
        \begin{array}{l|rrr}
        \hline  & {j = 1} & {j = 2} & {j = 3} \\
        \hline {p_j} & {3} & {3} & {4} \\
        {w_j} & {2} & {3} & {3} \\
        \hline
        \end{array}
        $$

        We refer to this KP instance as <span style="color:#1971c2">[Example 17.13](#box-54-texkp2instance)</span>.

    !!! formula ""

        For any $j \in \{0,1,\dots,n\}$ and $q \in \{0,1,\dots,P\}$, let $u(j,q)$ be the optimal value of the minimum-weight subinstance given by:

        1. a target profit $q$,

        2. a set $\{1,2,\dots,j\}$ of available items,

        3. for each item $h \in \{1,2,\dots,j\}$, a profit $p_h$ and a weight $w_h$,

        which asks to select a subset of the available items whose total profit is equal to $q$, so that the total weight of the selected items is minimized.

        The recursive formula to compute $u(j,q)$ reads as follows:

        \begin{equation*}
        \label{eq:2}
        u(j,q)= \left\{ \begin{array}{ll}
        0 & \textrm{if $q=0$,}\\[2ex]
        +\infty & \textrm{if $j=0$ and $1\le q \le P$,}\\[2ex]
        u(j-1,q) & \textrm{if $1\le j \le n$, $1\le q \le P$, and $p_j>q$,}\\[2ex]
        \begin{array}[t]{@{}l@{}}\displaystyle \min \bigg\{ u(j-1,q),\\ \qquad w_j+u(j-1,q-p_j) \bigg\}\end{array} & \begin{array}[t]{@{}l@{}}\textrm{if $1\le j \le n$,}\\ \textrm{$1\le q \le P$, $p_j\le q$.}\end{array}
        \end{array} \right. \tag{17.4}
        \end{equation*}

    - The recursive decomposition process of formula $\eqref{eq:2}$ generates at most $2$ <strong>independent subproblems</strong>, corresponding to whether or not to select item $j$ to reach the target profit $q$. If $p_j>q$, selecting item $j$ would exceed the target profit, and therefore the only feasible option is not to select it.

    - Here, $u(j,0)=0$ since the empty subset has total profit $0$ and total weight $0$. Moreover, $u(0,q)=+\infty$ for $q\ge 1$: in this case no item is available, so no subset has total profit equal to $q$. The value $+\infty$ is used to rule out this infeasible case.

    - If $p_j\le q$, the optimal value $u(j,q)$ is obtained by trying the two possible options, selecting or not selecting item $j$, and selecting the one that minimizes the total weight. The corresponding values are $w_j+u(j-1,q-p_j)$ and $u(j-1,q)$, respectively. If $p_j>q$, item $j$ cannot be selected, and therefore $u(j,q)=u(j-1,q)$.

    - Hence, a minimum-weight subset with total profit $q$ and available items $\{1,2,\dots,j\}$ is built by combining the chosen decision on item $j$ with a minimum-weight subset of the corresponding residual subproblem.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different sequences of decisions on the items, possibly made for different values of $j$ and $q$, can lead to the same subproblem, and therefore the same value $u(j,q)$ may need to be computed several times during the recursive evaluation of formula $\eqref{eq:2}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - The values $u(n,q)$ do not give the optimal value of the KP instance directly: they give, for each target profit $q$, the minimum total weight needed to obtain it. A subset with total profit $q$ fits into the knapsack if and only if its minimum total weight does not exceed the capacity, that is, if and only if $u(n,q)\le c$.

        !!! chiave ""

            The optimal value of the KP instance is

            \begin{equation*}
            \label{eq:3}
            \max \bigg\{ q \in \{0,1,\dots,P\} \;:\; u(n,q)\le c \bigg\}. \tag{17.5}
            \end{equation*}

        - The set in formula $\eqref{eq:3}$ is never empty, since $u(n,0)=0\le c$, and therefore the maximum is always well defined.

    - A <strong>first method</strong> to compute the optimal value of the KP instance is the <strong>top-down approach</strong>.

    - The method evaluates formula $\eqref{eq:2}$ recursively, starting from the call with $j=n$, for each target profit $q \in \{0,1,\dots,P\}$: each call considers item $j$ and either does not select it, or also considers selecting it when its profit does not exceed the target profit. The recursion stops when no items are left or when the target profit is equal to $0$. Finally, formula $\eqref{eq:3}$ is applied to the computed values.

    - The <strong>recursion tree</strong> of the function $u$ has one node for each recursive call, labeled with the function call it represents. The root represents the initial call. The children of a node represent the recursive calls made by that call. The leaf nodes represent the base cases.

        <a id="box-55-texkp2tree"></a>

        !!! esempio "Example 17.14: Recursion tree"

            We consider the KP instance of <span style="color:#1971c2">[Example 17.13](#box-54-texkp2instance)</span>. This is the recursion tree of the top-down approach to compute $u(3,7)$:

            ![Figure 5](../../img/dp-knapsack/fig05.svg){ .fig loading=lazy  }

            The function is called $13$ times, and the same subproblem is solved more than once: $u(0,4)$ is called $2$ times (shown with a red border). Moreover, the top-down approach must be applied to every target profit $q \in \{0,1,\dots,10\}$, and the same subproblem is generated by different initial calls: for instance, the initial call $u(3,3)$ generates the calls $u(2,3)$, $u(1,3)$, $u(1,0)$, $u(0,3)$, and $u(0,0)$, which are already generated by the initial call $u(3,7)$ shown above.

    - The value $u(j,q)$ can be computed once the values required by the right-hand side of formula $\eqref{eq:2}$ are known. In particular, $u(j-1,q)$ is needed when item $j$ is not selected and, if $p_j\le q$, $u(j-1,q-p_j)$ is needed when item $j$ is selected.

    - Therefore, for a fixed value of $j$, all values $u(j,q)$ can be computed by considering the profit values $q$ in increasing order.

        <a id="box-56-texkp2smallervalues"></a>

        !!! esempio "Example 17.15: Computing the values of the $u$ function"

            We consider the KP instance of <span style="color:#1971c2">[Example 17.13](#box-54-texkp2instance)</span> with a knapsack of capacity $c=5$ and the following profits and weights:

            $$
            \begin{array}{l|rrr}
            \hline  & {j = 1} & {j = 2} & {j = 3} \\
            \hline {p_j} & {3} & {3} & {4} \\
            {w_j} & {2} & {3} & {3} \\
            \hline
            \end{array}
            $$

            The total profit of all the items is $P=3+3+4=10$. The values of the function $u$ are computed as follows:

            - The base cases give $u(0,0)=0$ and $u(0,q)=+\infty$ for all $q \ge 1$.

            - The first case of formula $\eqref{eq:2}$ ($q=0$) gives the base case:

                $$
                u(1,0) = 0
                $$

            - Once we have computed the base cases, we can compute $u(1,3)$:

                $$
                u(1,3) = \min\{u(0,3),\, w_1+u(0,0)\} = \min\{+\infty,\, 2+0\} = 2
                $$

            - We can also compute $u(1,4)$ and $u(1,7)$:

                $$
                u(1,4) = \min\{u(0,4),\, w_1+u(0,1)\} = \min\{+\infty,\, +\infty\} = +\infty
                $$

                $$
                u(1,7) = \min\{u(0,7),\, w_1+u(0,4)\} = \min\{+\infty,\, +\infty\} = +\infty
                $$

            - Once we have computed $u(1,3)$ and $u(1,0)$, we can compute $u(2,3)$:

                $$
                u(2,3) = \min\{u(1,3),\, w_2+u(1,0)\} = \min\{2,\, 3+0\} = 2
                $$

            - Once we have computed $u(1,7)$ and $u(1,4)$, we can compute $u(2,7)$:

                $$
                u(2,7) = \min\{u(1,7),\, w_2+u(1,4)\} = \min\{+\infty,\, +\infty\} = +\infty
                $$

            - Once we have computed $u(2,7)$ and $u(2,3)$, we can compute $u(3,7)$:

                $$
                u(3,7) = \min\{u(2,7),\, w_3+u(2,3)\} = \min\{+\infty,\, 3+2\} = 5
                $$

            - Therefore, a total profit of $7$ can be obtained with a total weight of $5$, which does not exceed the knapsack capacity $c=5$.

    - We can avoid solving the same subproblems repeatedly by storing the value of each subproblem as soon as it is computed. The values are stored in a <strong>lookup table</strong>.

    - Since solving any particular subproblem depends only on subproblems with a smaller value of $j$, we can solve the subproblems in increasing order of $j$ and, for each fixed value of $j$, in increasing order of target profit, starting from the base cases $u(0,0)=0$, $u(0,q)=+\infty$ for all $q \in \{1,2,\dots,P\}$, and $u(j,0)=0$, and building up to the values $u(n,q)$ for all $q \in \{0,1,\dots,P\}$.

    - This observation naturally leads to a <strong>much more efficient method</strong> to compute the optimal value of the KP instance.

    - A <strong>second method</strong> to compute the optimal value of the KP instance is the <strong>bottom-up approach</strong>.

    - The method starts from the base cases and evaluates formula $\eqref{eq:2}$ for increasing values of $j \in \{1,2,\dots,n\}$ and $q \in \{0,1,\dots,P\}$: each value $u(j,q)$ is computed using already-computed values, until all the values $u(n,q)$ are obtained. The optimal value of the KP instance is then obtained by applying formula $\eqref{eq:3}$.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>:

        !!! algoritmo "Algorithm: DP2"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A KP instance given by the number <span class="arithmatex">\(n\)</span> of items, arrays <span class="arithmatex">\(p[1..n]\)</span> and <span class="arithmatex">\(w[1..n]\)</span> of item profits and weights, and the knapsack capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the KP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP2(<span class="arithmatex">\(n,p,w,c\)</span>)</div><div class="pc" style="--liv:1" id="box-57-kpbu2-a"><span class="pc-n">2</span><span class="arithmatex">\(P := 0\)</span></div><div class="pc" style="--liv:1" id="box-58-kpbu2-b"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-59-kpbu2-c"><span class="pc-n">4</span><span class="arithmatex">\(P \leftarrow P + p[j]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-60-kpbu2-d"><span class="pc-n">6</span><span class="arithmatex">\({u} := \textnormal{new array}[0..n][0..P]\)</span></div><div class="pc" style="--liv:1" id="box-61-kpbu2-e"><span class="pc-n">7</span><span class="arithmatex">\({u}[0][0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1" id="box-62-kpbu2-f"><span class="pc-n">8</span><strong>for</strong> <span class="arithmatex">\(q := 1\)</span> <strong>to</strong> <span class="arithmatex">\(P\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-63-kpbu2-g"><span class="pc-n">9</span><span class="arithmatex">\({u}[0][q] \leftarrow +\infty\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-64-kpbu2-h"><span class="pc-n">11</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-65-kpbu2-i"><span class="pc-n">12</span><strong>for</strong> <span class="arithmatex">\(q := 0\)</span> <strong>to</strong> <span class="arithmatex">\(P\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-66-kpbu2-j"><span class="pc-n">13</span><strong>if</strong> <span class="arithmatex">\(q < p[j]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-67-kpbu2-k"><span class="pc-n">14</span><span class="arithmatex">\({u}[j][q] \leftarrow {u}[j-1][q]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">15</span><strong>else</strong></div><div class="pc" style="--liv:4" id="box-68-kpbu2-l"><span class="pc-n">16</span><strong>if</strong> <span class="arithmatex">\(w[j] + {u}[j-1][q-p[j]] < {u}[j-1][q]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:5" id="box-69-kpbu2-m"><span class="pc-n">17</span><span class="arithmatex">\({u}[j][q] \leftarrow w[j] + {u}[j-1][q-p[j]]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">18</span><strong>else</strong></div><div class="pc" style="--liv:5" id="box-70-kpbu2-n"><span class="pc-n">19</span><span class="arithmatex">\({u}[j][q] \leftarrow {u}[j-1][q]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">20</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">21</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">22</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">23</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-71-kpbu2-o"><span class="pc-n">24</span><span class="arithmatex">\(z := 0\)</span></div><div class="pc" style="--liv:1" id="box-72-kpbu2-p"><span class="pc-n">25</span><strong>for</strong> <span class="arithmatex">\(q := 0\)</span> <strong>to</strong> <span class="arithmatex">\(P\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-73-kpbu2-q"><span class="pc-n">26</span><strong>if</strong> <span class="arithmatex">\({u}[n][q] \le c\)</span>  <strong>then</strong></div><div class="pc" style="--liv:3" id="box-74-kpbu2-r"><span class="pc-n">27</span><span class="arithmatex">\(z \leftarrow q\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">28</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">29</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-75-kpbu2-s"><span class="pc-n">30</span><strong>return</strong> <span class="arithmatex">\(z\)</span></div></div>

        - The first loop computes the total profit $P$ of all the items, which is the largest target profit that has to be considered.

        - The matrix ${u}[0..n][0..P]$ is the <strong>lookup table</strong>: it stores the optimal values of all subproblems.

        - The second loop initializes the values ${u}[0][0]=0$ and ${u}[0][q]=+\infty$ for all target profits $q \in \{1,2,\dots,P\}$, corresponding to the case in which no item is available.

        - The outer loop, over items $j \in \{1,2,\dots,n\}$, computes the rows of the matrix in increasing order of $j$.

        - The inner loop, over $q \in \{0,1,\dots,P\}$, computes the optimal value ${u}[j][q]$ for each target profit $q$.

        - If the profit of item $j$ exceeds the target profit, then ${u}[j][q] \leftarrow {u}[j-1][q]$.

        - Otherwise, the DP algorithm compares the value obtained by not selecting item $j$, namely ${u}[j-1][q]$, with the value obtained by selecting item $j$, namely $w[j]+{u}[j-1][q-p[j]]$.

        - The auxiliary variable $z$ stores the largest target profit whose minimum total weight does not exceed the knapsack capacity. It is initialized to $0$, which is always a feasible target profit since ${u}[n][0]=0\le c$.

        - The last loop scans the target profits in increasing order and updates $z$ whenever ${u}[n][q]\le c$, so that at the end $z$ is the maximum of formula $\eqref{eq:3}$.

        - Finally, the optimal value of the KP instance is returned as $z$.

        <a id="box-76-texkp2bu"></a>

        !!! esempio "Example 17.16: Execution of the DP algorithm"

            We consider the KP instance of <span style="color:#1971c2">[Example 17.13](#box-54-texkp2instance)</span> with a knapsack of capacity $c=5$ and the following profits and weights:

            $$
            \begin{array}{l|rrr}
            \hline  & {j = 1} & {j = 2} & {j = 3} \\
            \hline {p_j} & {3} & {3} & {4} \\
            {w_j} & {2} & {3} & {3} \\
            \hline
            \end{array}
            $$

            The total profit of all the items is $P=3+3+4=10$. For each step of the DP algorithm, the table shows the values of $j$ and $q$, the cell ${u}[j][q]$, and the operation performed.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(q\)</span></th>
            <th><span class="arithmatex">\({u}[j][q]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({u}[0][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[0][1]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[0][2]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[0][3]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[0][4]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[0][5]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[0][6]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[0][7]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[0][8]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[0][9]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[0][10]\leftarrow +\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({u}[1][0]\leftarrow {u}[0][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[1][1]\leftarrow {u}[0][1]=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[1][2]\leftarrow {u}[0][2]=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[0][3],w[1]+{u}[0][0]\}=\min\{+\infty,2+0\}=2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[0][4],w[1]+{u}[0][1]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[0][5],w[1]+{u}[0][2]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[0][6],w[1]+{u}[0][3]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[0][7],w[1]+{u}[0][4]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[0][8],w[1]+{u}[0][5]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[0][9],w[1]+{u}[0][6]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[0][10],w[1]+{u}[0][7]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({u}[2][0]\leftarrow {u}[1][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[2][1]\leftarrow {u}[1][1]=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[2][2]\leftarrow {u}[1][2]=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[1][3],w[2]+{u}[1][0]\}=\min\{2,3+0\}=2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[1][4],w[2]+{u}[1][1]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[1][5],w[2]+{u}[1][2]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[1][6],w[2]+{u}[1][3]\}=\min\{+\infty,3+2\}=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[1][7],w[2]+{u}[1][4]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[1][8],w[2]+{u}[1][5]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[1][9],w[2]+{u}[1][6]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[1][10],w[2]+{u}[1][7]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({u}[3][0]\leftarrow {u}[2][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[3][1]\leftarrow {u}[2][1]=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[3][2]\leftarrow {u}[2][2]=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\({u}[3][3]\leftarrow {u}[2][3]=2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[2][4],w[3]+{u}[2][0]\}=\min\{+\infty,3+0\}=3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[2][5],w[3]+{u}[2][1]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[2][6],w[3]+{u}[2][2]\}=\min\{5,+\infty\}=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[2][7],w[3]+{u}[2][3]\}=\min\{+\infty,3+2\}=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[2][8],w[3]+{u}[2][4]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[2][9],w[3]+{u}[2][5]\}=\min\{+\infty,+\infty\}=+\infty\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(\min\{{u}[2][10],w[3]+{u}[2][6]\}=\min\{+\infty,3+5\}=8\)</span></td>
            </tr>
            </table></div>

            After the execution of the two nested loops of the DP algorithm, this is the matrix ${u}$:

            $$
            \begin{array}{l|rrrrrrrrrrr}
            \hline {{u}[j][q]} & {0} & {1} & {2} & {3} & {4} & {5} & {6} & {7} & {8} & {9} & {10} \\
            \hline {j=0} & 0 & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} \\
            {j=1} & 0 & {+\infty} & {+\infty} & 2 & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} & {+\infty} \\
            {j=2} & 0 & {+\infty} & {+\infty} & 2 & {+\infty} & {+\infty} & 5 & {+\infty} & {+\infty} & {+\infty} & {+\infty} \\
            {j=3} & 0 & {+\infty} & {+\infty} & 2 & 3 & {+\infty} & 5 & 5 & {+\infty} & {+\infty} & 8 \\
            \hline
            \end{array}
            $$

            The last loop of the DP algorithm scans the last row of the matrix ${u}$ and keeps the largest target profit whose minimum total weight does not exceed the knapsack capacity $c=5$:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(q\)</span></th>
            <th><span class="arithmatex">\({u}[3][q]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({u}[3][0]=0\le 5\)</span>: <span class="arithmatex">\(z\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[3][1]=+\infty> 5\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[3][2]=+\infty> 5\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\({u}[3][3]=2\le 5\)</span>: <span class="arithmatex">\(z\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\({u}[3][4]=3\le 5\)</span>: <span class="arithmatex">\(z\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[3][5]=+\infty> 5\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\({u}[3][6]=5\le 5\)</span>: <span class="arithmatex">\(z\leftarrow 6\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\({u}[3][7]=5\le 5\)</span>: <span class="arithmatex">\(z\leftarrow 7\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[3][8]=+\infty> 5\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\({u}[3][9]=+\infty> 5\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\({u}[3][10]=8> 5\)</span>: no update</td>
            </tr>
            </table></div>

            Thus, the optimal value of the KP instance is $z=7$.

    - After the execution of the DP algorithm, the matrix ${u}$ contains the optimal value ${u}[j][q]=u(j,q)$ for every item $j \in \{0,1,\dots,n\}$ and every target profit $q \in \{0,1,\dots,P\}$.

    - The DP algorithm computes the row $j$ of the matrix ${u}$ using only the row $j-1$. Therefore, when only the optimal value of the KP instance is required, it is not necessary to store the whole matrix: a single vector ${u}[0..P]$ is sufficient, which uses $P+1$ cells instead of the $(n+1)(P+1)$ cells of the matrix.

    - The vector is initialized with the base cases ${u}[0]=0$ and ${u}[q]=+\infty$ for all $q \in \{1,2,\dots,P\}$, which correspond to the row $j=0$ of the matrix. Then, for each item $j \in \{1,2,\dots,n\}$, the vector is updated so that it contains the row $j$ of the matrix.

    - The order in which the cells are updated is essential. When the cell ${u}[q]$ is updated for item $j$, the value ${u}[q-p_j]$ must still be the one of the row $j-1$, that is $u(j-1,q-p_j)$.

    - Since $q-p_j<q$, this is guaranteed if the target profits are considered in <strong>decreasing</strong> order $q=P,P-1,\dots,p_j$: when the cell $q$ is updated, the cell $q-p_j$ has not been updated yet during the current pass.

    - If the target profits were considered in increasing order, the value ${u}[q-p_j]$ would already be the one of the row $j$, that is $u(j,q-p_j)$, and item $j$ could be selected more than once, which is not allowed in the KP.

    - For every target profit $q<p_j$, the profit of item $j$ exceeds the target profit and therefore ${u}[q]$ must keep the value $u(j-1,q)$: no update is performed, and the inner loop can stop at $q=p_j$.

        This is the pseudo-code of the <strong>DP algorithm using a single vector</strong>:

        !!! algoritmo "Algorithm: DP2\_Vector"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A KP instance given by the number <span class="arithmatex">\(n\)</span> of items, arrays <span class="arithmatex">\(p[1..n]\)</span> and <span class="arithmatex">\(w[1..n]\)</span> of item profits and weights, and the knapsack capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the KP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP2_Vector(<span class="arithmatex">\(n,p,w,c\)</span>)</div><div class="pc" style="--liv:1" id="box-77-kpvec2-a"><span class="pc-n">2</span><span class="arithmatex">\(P := 0\)</span></div><div class="pc" style="--liv:1" id="box-78-kpvec2-b"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-79-kpvec2-c"><span class="pc-n">4</span><span class="arithmatex">\(P \leftarrow P + p[j]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-80-kpvec2-d"><span class="pc-n">6</span><span class="arithmatex">\({u} := \textnormal{new array}[0..P]\)</span></div><div class="pc" style="--liv:1" id="box-81-kpvec2-e"><span class="pc-n">7</span><span class="arithmatex">\({u}[0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1" id="box-82-kpvec2-f"><span class="pc-n">8</span><strong>for</strong> <span class="arithmatex">\(q := 1\)</span> <strong>to</strong> <span class="arithmatex">\(P\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-83-kpvec2-g"><span class="pc-n">9</span><span class="arithmatex">\({u}[q] \leftarrow +\infty\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-84-kpvec2-h"><span class="pc-n">11</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-85-kpvec2-i"><span class="pc-n">12</span><strong>for</strong> <span class="arithmatex">\(q := P\)</span> <strong>to</strong> <span class="arithmatex">\(p[j]\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-86-kpvec2-j"><span class="pc-n">13</span><strong>if</strong> <span class="arithmatex">\(w[j] + {u}[q-p[j]] < {u}[q]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-87-kpvec2-k"><span class="pc-n">14</span><span class="arithmatex">\({u}[q] \leftarrow w[j] + {u}[q-p[j]]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">17</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-88-kpvec2-l"><span class="pc-n">18</span><span class="arithmatex">\(z := 0\)</span></div><div class="pc" style="--liv:1" id="box-89-kpvec2-m"><span class="pc-n">19</span><strong>for</strong> <span class="arithmatex">\(q := 0\)</span> <strong>to</strong> <span class="arithmatex">\(P\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-90-kpvec2-n"><span class="pc-n">20</span><strong>if</strong> <span class="arithmatex">\({u}[q] \le c\)</span>  <strong>then</strong></div><div class="pc" style="--liv:3" id="box-91-kpvec2-o"><span class="pc-n">21</span><span class="arithmatex">\(z \leftarrow q\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">22</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">23</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-92-kpvec2-p"><span class="pc-n">24</span><strong>return</strong> <span class="arithmatex">\(z\)</span></div></div>

        - The vector ${u}[0..P]$ is the <strong>lookup table</strong>: at the end of the pass for item $j$, it stores the row $j$ of the matrix ${u}$ of the DP algorithm.

        - The second loop initializes the values ${u}[0]=0$ and ${u}[q]=+\infty$ for all target profits $q \in \{1,2,\dots,P\}$, corresponding to the case in which no item is available.

        - The outer loop, over items $j \in \{1,2,\dots,n\}$, performs one pass of the vector for each item.

        - The inner loop, over $q \in \{p[j],p[j]+1,\dots,P\}$, considers the target profits in decreasing order, so that the cells that are still needed with their previous value are not yet modified.

        - The condition compares the value obtained by not selecting item $j$, namely the current value ${u}[q]$, with the value obtained by selecting item $j$, namely $w[j]+{u}[q-p[j]]$. The cell is updated only when selecting item $j$ is strictly better.

        - The last loop scans the vector and returns the largest target profit whose minimum total weight does not exceed the knapsack capacity, as in formula $\eqref{eq:3}$.

        <a id="box-93-texkp2vec"></a>

        !!! esempio "Example 17.17: Execution of the DP algorithm using a single vector"

            We consider the KP instance of <span style="color:#1971c2">[Example 17.13](#box-54-texkp2instance)</span> with a knapsack of capacity $c=5$ and the following profits and weights:

            $$
            \begin{array}{l|rrr}
            \hline  & {j = 1} & {j = 2} & {j = 3} \\
            \hline {p_j} & {3} & {3} & {4} \\
            {w_j} & {2} & {3} & {3} \\
            \hline
            \end{array}
            $$

            The total profit of all the items is $P=3+3+4=10$ and the second loop initializes ${u}[0]=0$ and ${u}[q]=+\infty$ for all $q \in \{1,2,\dots,10\}$. For each step of the two nested loops, the table shows the values of $j$ and $q$, the cell ${u}[q]$ after the step, and the operation performed.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(q\)</span></th>
            <th><span class="arithmatex">\({u}[q]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[7]=+\infty\ge {u}[10]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[6]=+\infty\ge {u}[9]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[5]=+\infty\ge {u}[8]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[4]=+\infty\ge {u}[7]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[3]=+\infty\ge {u}[6]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[2]=+\infty\ge {u}[5]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[1]=+\infty\ge {u}[4]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[0]=2<{u}[3]=+\infty\)</span>: <span class="arithmatex">\({u}[3]\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[7]=+\infty\ge {u}[10]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[6]=+\infty\ge {u}[9]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[5]=+\infty\ge {u}[8]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[4]=+\infty\ge {u}[7]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[3]=5<{u}[6]=+\infty\)</span>: <span class="arithmatex">\({u}[6]\leftarrow 5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[2]=+\infty\ge {u}[5]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[1]=+\infty\ge {u}[4]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[0]=3\ge {u}[3]=2\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[6]=8<{u}[10]=+\infty\)</span>: <span class="arithmatex">\({u}[10]\leftarrow 8\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[5]=+\infty\ge {u}[9]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[4]=+\infty\ge {u}[8]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[3]=5<{u}[7]=+\infty\)</span>: <span class="arithmatex">\({u}[7]\leftarrow 5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[2]=+\infty\ge {u}[6]=5\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[1]=+\infty\ge {u}[5]=+\infty\)</span>: no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[0]=3<{u}[4]=+\infty\)</span>: <span class="arithmatex">\({u}[4]\leftarrow 3\)</span></td>
            </tr>
            </table></div>

            This is the content of the vector ${u}$ after the initialization and after each pass of the outer loop:

            <div class="tabella" markdown="0"><table>
            <tr>
            <td><span class="arithmatex">\({u}[q]\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            </tr>
            <tr>
            <td>initialization</td>
            <td>0</td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            </tr>
            <tr>
            <td>pass <span class="arithmatex">\(j=1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>2</td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            </tr>
            <tr>
            <td>pass <span class="arithmatex">\(j=2\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>2</td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>5</td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            </tr>
            <tr>
            <td>pass <span class="arithmatex">\(j=3\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>2</td>
            <td>3</td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>5</td>
            <td>5</td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td><span class="arithmatex">\(+\infty\)</span></td>
            <td>8</td>
            </tr>
            </table></div>

            Each pass transforms the vector ${u}$ from the row $j-1$ into the row $j$ of the matrix ${u}$ reported in <span style="color:#1971c2">[Example 17.16](#box-76-texkp2bu)</span>. The last loop then scans the vector and gives the optimal value $z=7$ of the KP instance, as in <span style="color:#1971c2">[Example 17.16](#box-76-texkp2bu)</span>.

    - The vector version computes only the optimal value of the KP instance. The information needed to construct an optimal solution, which is described in Step 2, records the decision taken for every item $j$ and every target profit $q$, and therefore cannot be stored in a single vector.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, i.e., the binary vector $(x_1,x_2,\dots,x_n)$, it is necessary to store some additional information.

    - For each item $j$ and target profit $q$, in addition to the optimal value ${u}[j][q]$, we store ${s}[j][q]$, which tells whether item $j$ is selected in a minimum-weight subset of the items $\{1,2,\dots,j\}$ with total profit equal to $q$.

    - More precisely, ${s}[j][q]$ is equal to $1$ if item $j$ is selected when computing the value ${u}[j][q]$, and it is equal to $0$ otherwise.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong> with the storing of the information necessary to construct an optimal solution:

        !!! algoritmo "Algorithm: DP2\_InfoSol"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A KP instance given by the number <span class="arithmatex">\(n\)</span> of items, arrays <span class="arithmatex">\(p[1..n]\)</span> and <span class="arithmatex">\(w[1..n]\)</span> of item profits and weights, and the knapsack capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the KP instance and the matrix of binary information <span class="arithmatex">\({s}[0..n][0..P]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP2_InfoSol(<span class="arithmatex">\(n,p,w,c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(P := 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(P \leftarrow P + p[j]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><span class="arithmatex">\({u} := \textnormal{new array}[0..n][0..P]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><span class="arithmatex">\({s} := \textnormal{new array}[0..n][0..P]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><span class="arithmatex">\({u}[0][0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">9</span><span class="arithmatex">\({s}[0][0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>for</strong> <span class="arithmatex">\(q := 1\)</span> <strong>to</strong> <span class="arithmatex">\(P\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><span class="arithmatex">\({u}[0][q] \leftarrow +\infty\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">12</span><span class="arithmatex">\({s}[0][q] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">14</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">15</span><strong>for</strong> <span class="arithmatex">\(q := 0\)</span> <strong>to</strong> <span class="arithmatex">\(P\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">16</span><strong>if</strong> <span class="arithmatex">\(q < p[j]\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">17</span><span class="arithmatex">\({u}[j][q] \leftarrow {u}[j-1][q]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">18</span><span class="arithmatex">\({s}[j][q] \leftarrow 0\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">19</span><strong>else</strong></div><div class="pc" style="--liv:4"><span class="pc-n">20</span><strong>if</strong> <span class="arithmatex">\(w[j] + {u}[j-1][q-p[j]] < {u}[j-1][q]\)</span> <strong>then</strong></div><div class="pc" style="--liv:5"><span class="pc-n">21</span><span class="arithmatex">\({u}[j][q] \leftarrow w[j] + {u}[j-1][q-p[j]]\)</span></div><div class="pc" style="--liv:5"><span class="pc-n">22</span><span class="arithmatex">\({s}[j][q] \leftarrow 1\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">23</span><strong>else</strong></div><div class="pc" style="--liv:5"><span class="pc-n">24</span><span class="arithmatex">\({u}[j][q] \leftarrow {u}[j-1][q]\)</span></div><div class="pc" style="--liv:5"><span class="pc-n">25</span><span class="arithmatex">\({s}[j][q] \leftarrow 0\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">26</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">27</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">28</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">29</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">30</span><span class="arithmatex">\(z := 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">31</span><strong>for</strong> <span class="arithmatex">\(q := 0\)</span> <strong>to</strong> <span class="arithmatex">\(P\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">32</span><strong>if</strong> <span class="arithmatex">\({u}[n][q] \le c\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">33</span><span class="arithmatex">\(z \leftarrow q\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">34</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">35</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">36</span><strong>return</strong> <span class="arithmatex">\(z, {s}\)</span></div></div>

        - The DP algorithm uses the additional matrix ${s}$, which keeps track of the decision made when ${u}[j][q]$ is computed. If item $j$ is selected, ${s}[j][q]\leftarrow 1$ stores this decision; otherwise, ${s}[j][q]\leftarrow 0$ stores that item $j$ is not selected.

        <a id="box-94-texkp2smatrix"></a>

        !!! esempio "Example 17.18: Computation of the additional information"

            We consider the KP instance of <span style="color:#1971c2">[Example 17.13](#box-54-texkp2instance)</span> with a knapsack of capacity $c=5$ and the following profits and weights:

            $$
            \begin{array}{l|rrr}
            \hline  & {j = 1} & {j = 2} & {j = 3} \\
            \hline {p_j} & {3} & {3} & {4} \\
            {w_j} & {2} & {3} & {3} \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $j$ and $q$, the cell ${s}[j][q]$, and the operation performed.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(q\)</span></th>
            <th><span class="arithmatex">\({s}[j][q]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][5]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][7]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][8]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][9]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\({s}[0][10]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0<3\)</span>: <span class="arithmatex">\({s}[1][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1<3\)</span>: <span class="arithmatex">\({s}[1][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2<3\)</span>: <span class="arithmatex">\({s}[1][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[0][0]=2+0 < {u}[0][3]=+\infty\)</span>: <span class="arithmatex">\({s}[1][3]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[0][1]=+\infty \ge {u}[0][4]=+\infty\)</span>: <span class="arithmatex">\({s}[1][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[0][2]=+\infty \ge {u}[0][5]=+\infty\)</span>: <span class="arithmatex">\({s}[1][5]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[0][3]=+\infty \ge {u}[0][6]=+\infty\)</span>: <span class="arithmatex">\({s}[1][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[0][4]=+\infty \ge {u}[0][7]=+\infty\)</span>: <span class="arithmatex">\({s}[1][7]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[0][5]=+\infty \ge {u}[0][8]=+\infty\)</span>: <span class="arithmatex">\({s}[1][8]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[0][6]=+\infty \ge {u}[0][9]=+\infty\)</span>: <span class="arithmatex">\({s}[1][9]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[1]+{u}[0][7]=+\infty \ge {u}[0][10]=+\infty\)</span>: <span class="arithmatex">\({s}[1][10]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0<3\)</span>: <span class="arithmatex">\({s}[2][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1<3\)</span>: <span class="arithmatex">\({s}[2][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2<3\)</span>: <span class="arithmatex">\({s}[2][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[1][0]=3+0 \ge {u}[1][3]=2\)</span>: <span class="arithmatex">\({s}[2][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[1][1]=+\infty \ge {u}[1][4]=+\infty\)</span>: <span class="arithmatex">\({s}[2][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[1][2]=+\infty \ge {u}[1][5]=+\infty\)</span>: <span class="arithmatex">\({s}[2][5]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[1][3]=3+2 < {u}[1][6]=+\infty\)</span>: <span class="arithmatex">\({s}[2][6]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[1][4]=+\infty \ge {u}[1][7]=+\infty\)</span>: <span class="arithmatex">\({s}[2][7]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[1][5]=+\infty \ge {u}[1][8]=+\infty\)</span>: <span class="arithmatex">\({s}[2][8]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[1][6]=+\infty \ge {u}[1][9]=+\infty\)</span>: <span class="arithmatex">\({s}[2][9]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[2]+{u}[1][7]=+\infty \ge {u}[1][10]=+\infty\)</span>: <span class="arithmatex">\({s}[2][10]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0<4\)</span>: <span class="arithmatex">\({s}[3][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1<4\)</span>: <span class="arithmatex">\({s}[3][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2<4\)</span>: <span class="arithmatex">\({s}[3][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3<4\)</span>: <span class="arithmatex">\({s}[3][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[2][0]=3+0 < {u}[2][4]=+\infty\)</span>: <span class="arithmatex">\({s}[3][4]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[2][1]=+\infty \ge {u}[2][5]=+\infty\)</span>: <span class="arithmatex">\({s}[3][5]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[2][2]=+\infty \ge {u}[2][6]=5\)</span>: <span class="arithmatex">\({s}[3][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[2][3]=3+2 < {u}[2][7]=+\infty\)</span>: <span class="arithmatex">\({s}[3][7]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(8\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[2][4]=+\infty \ge {u}[2][8]=+\infty\)</span>: <span class="arithmatex">\({s}[3][8]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(9\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[2][5]=+\infty \ge {u}[2][9]=+\infty\)</span>: <span class="arithmatex">\({s}[3][9]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(10\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(w[3]+{u}[2][6]=3+5 < {u}[2][10]=+\infty\)</span>: <span class="arithmatex">\({s}[3][10]\leftarrow 1\)</span></td>
            </tr>
            </table></div>

            This is the matrix ${s}$ after the execution of the DP algorithm:

            $$
            \begin{array}{l|rrrrrrrrrrr}
            \hline {{s}[j][q]} & {0} & {1} & {2} & {3} & {4} & {5} & {6} & {7} & {8} & {9} & {10} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            {j=2} & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
            {j=3} & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 1 \\
            \hline
            \end{array}
            $$

    - Once the matrix ${s}$ has been computed, an optimal solution can be reconstructed by scanning the items from $j=n$ down to $j=1$, starting from the target profit $q=z$ returned by the DP algorithm and $x_j=0$ for all $j \in \{1,2,\dots,n\}$:

        $$
        \begin{array}{ll}
        x_j \leftarrow 1,\quad q \leftarrow q-p_j & \textrm{if ${s}[j][q]=1$,}\\[1ex]
        x_j \leftarrow 0 & \textrm{if ${s}[j][q]=0$.}
        \end{array}
        $$

    - This yields the vector $(x_1,x_2,\dots,x_n)$, where $x_j$ is equal to $1$ if item $j$ is selected in an optimal solution, and $0$ otherwise.

        !!! algoritmo "Algorithm: DP2\_Reconstruct"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(n\)</span> of items, the optimal value <span class="arithmatex">\(z\)</span> of the KP instance, the array <span class="arithmatex">\(p[1..n]\)</span> of item profits, and the matrix <span class="arithmatex">\({s}[0..n][0..P]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the KP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> DP2_Reconstruct(<span class="arithmatex">\(n,z,p,s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(x[j] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><span class="arithmatex">\(q := z\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(j := n\)</span> <strong>to</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><strong>if</strong> <span class="arithmatex">\({s}[j][q] = 1\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">9</span><span class="arithmatex">\(x[j] \leftarrow 1\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><span class="arithmatex">\(q \leftarrow q-p[j]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-95-texkp2solvector"></a>

        !!! esempio "Example 17.19: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">[Example 17.13](#box-54-texkp2instance)</span>, the optimal value is $z=7$ and we have the following matrix ${s}$:

            $$
            \begin{array}{l|rrrrrrrrrrr}
            \hline {{s}[j][q]} & {0} & {1} & {2} & {3} & {4} & {5} & {6} & {7} & {8} & {9} & {10} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            {j=2} & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
            {j=3} & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 1 & 0 & 0 & 1 \\
            \hline
            \end{array}
            $$

            We can reconstruct an optimal solution by starting from $j=3$ and $q=z=7$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(q\)</span></th>
            <th><span class="arithmatex">\({s}[j][q]\)</span></th>
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
            <td><span class="arithmatex">\(q=7\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(q\leftarrow 7-4=3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>no update</td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td>1</td>
            <td><span class="arithmatex">\(q\leftarrow 3-3=0\)</span></td>
            </tr>
            </table></div>

            Thus, the vector

            $$
            (1,0,1)
            $$

            is an optimal solution. The corresponding optimal value is $3+4=7$.

## 17.3.1 Number of steps

- Let $S(n,P)$ denote the number of steps executed by <code>DP2</code> in the worst case, where $n$ is the number of items and $P=\sum_{j=1}^{n}p_j$ is the total profit of all the items. We compute $S(n,P)$ by counting how many times the lines of the pseudo-code of <code>DP2</code> are executed.

- The condition at line [16](#box-68-kpbu2-l) is checked only when $q\ge p[j]$, that is for $P+1-p_j$ target profits for each item $j$, and therefore $n(P+1)-P$ times in total. The number of executions of the relevant lines is:

    - <span style="color:#e03131">Line</span> [2](#box-57-kpbu2-a) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [3](#box-58-kpbu2-b) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [4](#box-59-kpbu2-c) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [6](#box-60-kpbu2-d) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [7](#box-61-kpbu2-e) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [8](#box-62-kpbu2-f) is executed $P$ times.

    - <span style="color:#e03131">Line</span> [9](#box-63-kpbu2-g) is executed $P$ times.

    - <span style="color:#e03131">Line</span> [11](#box-64-kpbu2-h) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [12](#box-65-kpbu2-i) is executed $n(P+1)$ times.

    - <span style="color:#e03131">Line</span> [13](#box-66-kpbu2-j) is executed $n(P+1)$ times.

    - <span style="color:#e03131">Line</span> [16](#box-68-kpbu2-l) is executed $n(P+1)-P$ times.

    - one among <span style="color:#e03131">Line</span> [14](#box-67-kpbu2-k), <span style="color:#e03131">Line</span> [17](#box-69-kpbu2-m), and <span style="color:#e03131">Line</span> [19](#box-70-kpbu2-n) is executed for each pair $(j,q)$, and therefore these assignment lines are executed $n(P+1)$ times in total.

    - <span style="color:#e03131">Line</span> [24](#box-71-kpbu2-o) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [25](#box-72-kpbu2-p) is executed $P+1$ times.

    - <span style="color:#e03131">Line</span> [26](#box-73-kpbu2-q) is executed $P+1$ times.

    - <span style="color:#e03131">Line</span> [27](#box-74-kpbu2-r) is executed at most $P+1$ times.

    - <span style="color:#e03131">Line</span> [30](#box-75-kpbu2-s) is executed $1$ time.

    Therefore, the total number of steps in the worst case is

    $$
    \begin{split}&1+n+n+1+1+P+P+n+n(P+1)+n(P+1)\\&{}+\big(n(P+1)-P\big)+n(P+1)+1+(P+1)+(P+1)+(P+1)+1.\end{split}
    $$

    Thus,

    $$
    S(n,P)=4nP+7n+4P+8.
    $$

    Hence,

    $$
    S(n,P)=\Theta(nP).
    $$

    Indeed,

    $$
    \lim_{n,P\to\infty}
    \frac{4nP+7n+4P+8}{nP}
    =
    \lim_{n,P\to\infty}
    \left(4+\frac{7}{P}+\frac{4}{n}+\frac{8}{nP}\right)
    =
    4\in\mathbb{R}_{>0}.
    $$

    !!! chiave ""

        The DP algorithm executes

        $$
        S(n,P)=\Theta(nP)
        $$

        steps in the worst case, where $P=\sum_{j=1}^{n}p_j$.

- The version <code>DP2\_InfoSol</code> stores the additional matrix ${s}$ and performs only a constant number of extra operations inside the same loops. Therefore, its number of steps remains $\Theta(nP)$.

- The version <code>DP2\_Vector</code> uses a single vector instead of the matrix and executes the same two nested loops, whose inner loop performs at most $P+1$ iterations for each item. Therefore, its number of steps remains $\Theta(nP)$, while the number of cells of the lookup table decreases from $(n+1)(P+1)$ to $P+1$.

---

**Next:** [17.3.2 A second DP algorithm: An implementation with lists](a-second-dp-algorithm-an-implementation-with-lists.md)

---
title: "A second DP algorithm"
---

# 18.3 A second DP algorithm

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 18** · [:material-book-open-variant: Chapter 18: UKP](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: UKP](../../exercises/dp-unbounded-knapsack.md)

</div>

- <u>Step 1</u>: computation of the optimal value

    !!! chiave ""

        For any $j \in \{0,1,\dots,n\}$ and $k \in \{0,1,\dots,c\}$, let $v(j,k)$ be the optimal value of the UKP subinstance given by:

        1. a knapsack of capacity $k$,

        2. the set $\{1,2,\dots,j\}$ of $j$ item types,

        3. for each item type $h \in \{1,2,\dots,j\}$, a profit $p_h$ and a weight $w_h$.

        The recursive formula to compute $v(j,k)$ reads as follows:

        \begin{equation*}
        \label{eq:ukp2}
        v(j,k)= \left\{ \begin{array}{ll}
        0, & \textrm{if $j=0$,}\\[1ex]
        v(j-1,k), & \textrm{if $j\ge 1$ and $k<w_j$,}\\[1ex]
        \max\{v(j-1,k),\ p_j+v(j,k-w_j)\}, & \textrm{if $j\ge 1$ and $k\ge w_j$.}
        \end{array} \right. \tag{18.2}
        \end{equation*}

    - The recursive decomposition process of formula $\eqref{eq:ukp2}$ generates at most $2$ <strong>independent subproblems</strong>, corresponding to whether or not to insert one copy of item type $j$ into a knapsack of capacity $k$, using only item types $1,2,\dots,j$. If $w_j>k$, item type $j$ cannot be inserted, and therefore the only feasible option is not to use it.

    - The base case is $v(0,k)=0$ for every $k$, since with no item type available the only feasible choice is to insert no item, which always has profit $0$.

    - If $j\ge 1$ and $k\ge w_j$, the optimal value $v(j,k)$ is obtained by trying the two possible options, not inserting item type $j$ or inserting one further copy of it, and selecting the one that maximizes the profit. The corresponding values are $v(j-1,k)$ and $p_j+v(j,k-w_j)$, respectively. If $j\ge 1$ and $k<w_j$, item type $j$ cannot be used, and therefore $v(j,k)=v(j-1,k)$.

    - The term $p_j+v(j,k-w_j)$ refers to the same row $j$, because after inserting one copy of item type $j$, additional copies of the same item type are still available.

    - Hence, an optimal solution for a knapsack of capacity $k$ using only item types $1,2,\dots,j$ is built by combining the chosen decision on item type $j$ with an optimal solution of the corresponding residual subproblem.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different sequences of decisions on the item types, possibly made for different values of $j$ and $k$, can lead to the same subproblem, and therefore the same value $v(j,k)$ may need to be computed several times during the recursive evaluation of formula $\eqref{eq:ukp2}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - A <strong>first method</strong> to compute the optimal value $v(n,c)$ of the UKP instance is the <strong>top-down approach</strong>. The method starts from the call with $(j,k)=(n,c)$ and evaluates formula $\eqref{eq:ukp2}$ recursively: each call for capacity $k$ using only item types $1,2,\dots,j$ triggers further calls corresponding to the feasible decisions on item type $j$, until one of the base cases $v(0,k)$ is reached.

    - The <strong>recursion tree</strong> of the function $v$ has one node for each recursive call, labeled with the function call it represents. The root represents the initial call. The children of a node represent the recursive calls made by that call. The leaf nodes represent the base cases.

        <a id="box-18-texukpalttree"></a>

        !!! esempio "Example 18.7: Recursion tree"

            We consider the UKP instance of <span style="color:#1971c2">Example 1</span>, with capacity $c=7$ and item types with weights $w_1=2$, $w_2=3$, $w_3=5$, $w_4=6$. This is the recursion tree of the top-down approach to compute $v(4,7)$:

            ![Figure 2](../../img/dp-unbounded-knapsack/fig02.svg){ .fig loading=lazy  }

            The function $v$ is called $32$ times, and the same subproblems are solved multiple times: $v(1,1)$ is called $3$ times, $v(0,1)$ is called $3$ times, $v(1,2)$ is called $2$ times, $v(0,2)$ is called $2$ times, $v(1,0)$ is called $2$ times, $v(0,0)$ is called $2$ times, and $v(2,1)$ is called $2$ times. All the other calls are made only once.

    - The value $v(j,k)$ can be computed once $v(j-1,k)$ is known and, when $k\ge w_j$, $v(j,k-w_j)$ is also known. Therefore, for a fixed value of $j$, all values $v(j,k)$ can be computed by considering the values of $k$ in increasing order. Starting from the base case $v(0,k)=0$ for every $k$, the values of the function $v$ can be computed row by row, moving to the next value of $j$ only after all values $v(j,k)$ for the current value of $j$ have been computed.

        <a id="box-19-texukpaltvalues"></a>

        !!! esempio "Example 18.8: Computing the values of the $v$ function"

            We consider the UKP instance of <span style="color:#1971c2">Example 1</span> with a knapsack of capacity $c=7$ and the following profits and weights:

            $$
            \begin{array}{l|rrrr}
            \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
            \hline {p_j} & 4 & 5 & 10 & 11 \\
            {w_j} & 2 & 3 & 5 & 6 \\
            \hline
            \end{array}
            $$

            The values of the function $v$ are computed as follows:

            - For $j=1$, only item type $1$ ($w_1=2$) is available. Therefore:

                $$
                v(1,0)=0,\qquad v(1,1)=v(0,1)=0,
                $$

                $$
                v(1,2)=\max\{v(0,2),p_1+v(1,0)\}=\max\{0,4+0\}=4,
                $$

                $$
                v(1,3)=\max\{v(0,3),p_1+v(1,1)\}=\max\{0,4+0\}=4,
                $$

                $$
                v(1,4)=\max\{v(0,4),p_1+v(1,2)\}=\max\{0,4+4\}=8,
                $$

                $$
                v(1,5)=\max\{v(0,5),p_1+v(1,3)\}=\max\{0,4+4\}=8,
                $$

                $$
                v(1,6)=\max\{v(0,6),p_1+v(1,4)\}=\max\{0,4+8\}=12,
                $$

                $$
                v(1,7)=\max\{v(0,7),p_1+v(1,5)\}=\max\{0,4+8\}=12.
                $$

            - For $j=2$, item types $1$ and $2$ are available. We obtain:

                $$
                v(2,0)=0,\qquad v(2,1)=v(1,1)=0,\qquad v(2,2)=v(1,2)=4,
                $$

                $$
                v(2,3)=\max\{v(1,3),p_2+v(2,0)\}=\max\{4,5+0\}=5,
                $$

                $$
                v(2,4)=\max\{v(1,4),p_2+v(2,1)\}=\max\{8,5+0\}=8,
                $$

                $$
                v(2,5)=\max\{v(1,5),p_2+v(2,2)\}=\max\{8,5+4\}=9,
                $$

                $$
                v(2,6)=\max\{v(1,6),p_2+v(2,3)\}=\max\{12,5+5\}=12,
                $$

                $$
                v(2,7)=\max\{v(1,7),p_2+v(2,4)\}=\max\{12,5+8\}=13.
                $$

            - For $j=3$, item types $1$, $2$ and $3$ are available. We obtain:

                $$
                v(3,0)=0,\qquad v(3,1)=v(2,1)=0,\qquad v(3,2)=v(2,2)=4,
                $$

                $$
                v(3,3)=v(2,3)=5,\qquad v(3,4)=v(2,4)=8,
                $$

                $$
                v(3,5)=\max\{v(2,5),p_3+v(3,0)\}=\max\{9,10+0\}=10,
                $$

                $$
                v(3,6)=\max\{v(2,6),p_3+v(3,1)\}=\max\{12,10+0\}=12,
                $$

                $$
                v(3,7)=\max\{v(2,7),p_3+v(3,2)\}=\max\{13,10+4\}=14.
                $$

            - For $j=4$, all item types are available. We obtain:

                $$
                v(4,0)=0,\quad v(4,1)=v(3,1)=0,\quad v(4,2)=v(3,2)=4,
                $$

                $$
                v(4,3)=v(3,3)=5,\quad v(4,4)=v(3,4)=8,\quad v(4,5)=v(3,5)=10,
                $$

                $$
                v(4,6)=\max\{v(3,6),p_4+v(4,0)\}=\max\{12,11+0\}=12,
                $$

                $$
                v(4,7)=\max\{v(3,7),p_4+v(4,1)\}=\max\{14,11+0\}=14.
                $$

    - We can avoid solving the same subproblems repeatedly by storing the value of each subproblem as soon as it is computed. The values are stored in a <strong>lookup table</strong>.

    - Since solving any particular subproblem depends only on subproblems with a smaller value of $j$, or with the same value of $j$ and a smaller capacity, we can solve the subproblems in increasing order of $j$ and, for each fixed value of $j$, in increasing order of capacity, starting from the base cases $v(0,k)=0$ for every $k \in \{0,1,\dots,c\}$ and building up to $v(n,c)$: this observation naturally leads to a <strong>much more efficient method</strong> to compute the optimal value $v(n,c)$ of the UKP instance.

    - A <strong>second method</strong> to compute the optimal value $v(n,c)$ of the UKP instance is the <strong>bottom-up approach</strong>. The method starts from the base cases $v(0,k)=0$ for every $k \in \{0,1,\dots,c\}$ and evaluates formula $\eqref{eq:ukp2}$ for increasing values of $j \in \{1,2,\dots,n\}$ and $k \in \{0,1,\dots,c\}$: each value $v(j,k)$ is computed using already-computed values, until the value $v(n,c)$ of the UKP instance is obtained.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>:

        !!! algoritmo "Algorithm: UKP\_DP2"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A UKP instance given by <span class="arithmatex">\(n\)</span>, arrays <span class="arithmatex">\(p[1..n]\)</span>, <span class="arithmatex">\(w[1..n]\)</span>, and capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the UKP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> UKP_DP2(<span class="arithmatex">\(n,p,w,c\)</span>)</div><div class="pc" style="--liv:1" id="box-20-ukpbu2-a"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..n][0..c]\)</span></div><div class="pc" style="--liv:1" id="box-21-ukpbu2-b"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-22-ukpbu2-c"><span class="pc-n">4</span><span class="arithmatex">\(v[0][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-23-ukpbu2-d"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-24-ukpbu2-e"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-25-ukpbu2-f"><span class="pc-n">8</span><strong>if</strong> <span class="arithmatex">\(k < w[j]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-26-ukpbu2-g"><span class="pc-n">9</span><span class="arithmatex">\(v[j][k] \leftarrow v[j-1][k]\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><strong>else</strong></div><div class="pc" style="--liv:4" id="box-27-ukpbu2-h"><span class="pc-n">11</span><strong>if</strong> <span class="arithmatex">\(p[j]+v[j][k-w[j]] > v[j-1][k]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:5" id="box-28-ukpbu2-i"><span class="pc-n">12</span><span class="arithmatex">\(v[j][k] \leftarrow p[j]+v[j][k-w[j]]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">13</span><strong>else</strong></div><div class="pc" style="--liv:5" id="box-29-ukpbu2-j"><span class="pc-n">14</span><span class="arithmatex">\(v[j][k] \leftarrow v[j-1][k]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">17</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">18</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-30-ukpbu2-k"><span class="pc-n">19</span><strong>return</strong> <span class="arithmatex">\(v[n][c]\)</span></div></div>

        - The matrix $v[0..n][0..c]$ is the <strong>lookup table</strong>: it stores the optimal values of all subproblems.

        - The initialization sets $v[0][k]=0$ for every capacity $k \in \{0,1,\dots,c\}$, since selecting no item is always feasible with profit $0$.

        - The outer loop, over $j \in \{1,2,\dots,n\}$, considers the available item types in increasing order.

        - The inner loop, over $k \in \{0,1,\dots,c\}$, computes the best value for each capacity using only item types $1,2,\dots,j$.

        - If $k<w[j]$, item type $j$ cannot be used, and therefore $v[j][k] \leftarrow v[j-1][k]$.

        - Otherwise, the DP algorithm compares the value obtained by not using item type $j$, namely $v[j-1][k]$, with the value obtained by inserting one further copy of item type $j$, namely $p[j]+v[j][k-w[j]]$.

        - Finally, the optimal value of the UKP instance is returned as $v[n][c]$.

        <a id="box-31-texukpaltbu"></a>

        !!! esempio "Example 18.9: Execution of the DP algorithm"

            We consider the UKP instance of <span style="color:#1971c2">Example 1</span> with a knapsack of capacity $c=7$ and the following profits and weights:

            $$
            \begin{array}{l|rrrr}
            \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
            \hline {p_j} & 4 & 5 & 10 & 11 \\
            {w_j} & 2 & 3 & 5 & 6 \\
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
            <td>0</td>
            <td><span class="arithmatex">\(v[0][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(v[0][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(v[0][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(v[0][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(v[0][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(v[0][5]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(v[0][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(v[0][7]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k=0<w[1]=2\)</span>: <span class="arithmatex">\(v[1][0]\leftarrow v[0][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k=1<w[1]=2\)</span>: <span class="arithmatex">\(v[1][1]\leftarrow v[0][1]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>4</td>
            <td><span class="arithmatex">\(\max\{v[0][2],p[1]+v[1][0]\}=\max\{0,4+0\}=4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>4</td>
            <td><span class="arithmatex">\(\max\{v[0][3],p[1]+v[1][1]\}=\max\{0,4+0\}=4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>8</td>
            <td><span class="arithmatex">\(\max\{v[0][4],p[1]+v[1][2]\}=\max\{0,4+4\}=8\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>8</td>
            <td><span class="arithmatex">\(\max\{v[0][5],p[1]+v[1][3]\}=\max\{0,4+4\}=8\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>12</td>
            <td><span class="arithmatex">\(\max\{v[0][6],p[1]+v[1][4]\}=\max\{0,4+8\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>12</td>
            <td><span class="arithmatex">\(\max\{v[0][7],p[1]+v[1][5]\}=\max\{0,4+8\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k=0<w[2]=3\)</span>: <span class="arithmatex">\(v[2][0]\leftarrow v[1][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k=1<w[2]=3\)</span>: <span class="arithmatex">\(v[2][1]\leftarrow v[1][1]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>4</td>
            <td><span class="arithmatex">\(k=2<w[2]=3\)</span>: <span class="arithmatex">\(v[2][2]\leftarrow v[1][2]=4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>5</td>
            <td><span class="arithmatex">\(\max\{v[1][3],p[2]+v[2][0]\}=\max\{4,5+0\}=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>8</td>
            <td><span class="arithmatex">\(\max\{v[1][4],p[2]+v[2][1]\}=\max\{8,5+0\}=8\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>9</td>
            <td><span class="arithmatex">\(\max\{v[1][5],p[2]+v[2][2]\}=\max\{8,5+4\}=9\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>12</td>
            <td><span class="arithmatex">\(\max\{v[1][6],p[2]+v[2][3]\}=\max\{12,5+5\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>13</td>
            <td><span class="arithmatex">\(\max\{v[1][7],p[2]+v[2][4]\}=\max\{12,5+8\}=13\)</span></td>
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
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k=0<w[3]=5\)</span>: <span class="arithmatex">\(v[3][0]\leftarrow v[2][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k=1<w[3]=5\)</span>: <span class="arithmatex">\(v[3][1]\leftarrow v[2][1]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>4</td>
            <td><span class="arithmatex">\(k=2<w[3]=5\)</span>: <span class="arithmatex">\(v[3][2]\leftarrow v[2][2]=4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>5</td>
            <td><span class="arithmatex">\(k=3<w[3]=5\)</span>: <span class="arithmatex">\(v[3][3]\leftarrow v[2][3]=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>8</td>
            <td><span class="arithmatex">\(k=4<w[3]=5\)</span>: <span class="arithmatex">\(v[3][4]\leftarrow v[2][4]=8\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>10</td>
            <td><span class="arithmatex">\(\max\{v[2][5],p[3]+v[3][0]\}=\max\{9,10+0\}=10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>12</td>
            <td><span class="arithmatex">\(\max\{v[2][6],p[3]+v[3][1]\}=\max\{12,10+0\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>14</td>
            <td><span class="arithmatex">\(\max\{v[2][7],p[3]+v[3][2]\}=\max\{13,10+4\}=14\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k=0<w[4]=6\)</span>: <span class="arithmatex">\(v[4][0]\leftarrow v[3][0]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k=1<w[4]=6\)</span>: <span class="arithmatex">\(v[4][1]\leftarrow v[3][1]=0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>4</td>
            <td><span class="arithmatex">\(k=2<w[4]=6\)</span>: <span class="arithmatex">\(v[4][2]\leftarrow v[3][2]=4\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>5</td>
            <td><span class="arithmatex">\(k=3<w[4]=6\)</span>: <span class="arithmatex">\(v[4][3]\leftarrow v[3][3]=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>8</td>
            <td><span class="arithmatex">\(k=4<w[4]=6\)</span>: <span class="arithmatex">\(v[4][4]\leftarrow v[3][4]=8\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>10</td>
            <td><span class="arithmatex">\(k=5<w[4]=6\)</span>: <span class="arithmatex">\(v[4][5]\leftarrow v[3][5]=10\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>12</td>
            <td><span class="arithmatex">\(\max\{v[3][6],p[4]+v[4][0]\}=\max\{12,11+0\}=12\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>14</td>
            <td><span class="arithmatex">\(\max\{v[3][7],p[4]+v[4][1]\}=\max\{14,11+0\}=14\)</span></td>
            </tr>
            </table></div>

            This is the matrix $v$ after the execution of the DP algorithm:

            $$
            \begin{array}{l|rrrrrrrr}
            \hline {v[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 0 & 4 & 4 & 8 & 8 & 12 & 12 \\
            {j=2} & 0 & 0 & 4 & 5 & 8 & 9 & 12 & 13 \\
            {j=3} & 0 & 0 & 4 & 5 & 8 & 10 & 12 & 14 \\
            {j=4} & 0 & 0 & 4 & 5 & 8 & 10 & 12 & 14 \\
            \hline
            \end{array}
            $$

    - After the execution of the DP algorithm, the matrix $v$ contains the optimal value $v[j][k]$ for every subproblem $(j,k)$.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, it is necessary to store some additional information.

    - For each item type $j$ and each capacity $k$, in addition to the optimal value $v[j][k]$, we store $s[j][k]$, which is equal to $1$ if one copy of item type $j$ is used when computing $v[j][k]$, and to $0$ otherwise.

    - Starting from $j=n$ and $k=c$, if $s[j][k]=0$, then item type $j$ is not used and $j$ is decreased by $1$. If $s[j][k]=1$, then one copy of item type $j$ is used and the residual capacity becomes $k-w_j$. The procedure stops when the residual capacity reaches $0$ or when $j=0$, in which case the residual capacity is left unused.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong> with the storing of the information necessary to compute an optimal solution:

        !!! algoritmo "Algorithm: UKP\_DP2\_InfoSol"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A UKP instance given by <span class="arithmatex">\(n\)</span>, arrays <span class="arithmatex">\(p[1..n]\)</span>, <span class="arithmatex">\(w[1..n]\)</span>, and capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the UKP instance and the matrix of binary information <span class="arithmatex">\(s[0..n][0..c]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> UKP_DP2_InfoSol(<span class="arithmatex">\(n,p,w,c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..n][0..c]\)</span>; <span class="arithmatex">\(s := \textnormal{new array}[0..n][0..c]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(v[0][k] \leftarrow 0\)</span>; <span class="arithmatex">\(s[0][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">7</span><strong>for</strong> <span class="arithmatex">\(k := 0\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">8</span><strong>if</strong> <span class="arithmatex">\(k < w[j]\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">9</span><span class="arithmatex">\(v[j][k] \leftarrow v[j-1][k]\)</span>; <span class="arithmatex">\(s[j][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><strong>else</strong></div><div class="pc" style="--liv:4"><span class="pc-n">11</span><strong>if</strong> <span class="arithmatex">\(p[j]+v[j][k-w[j]] > v[j-1][k]\)</span> <strong>then</strong></div><div class="pc" style="--liv:5"><span class="pc-n">12</span><span class="arithmatex">\(v[j][k] \leftarrow p[j]+v[j][k-w[j]]\)</span>; <span class="arithmatex">\(s[j][k] \leftarrow 1\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">13</span><strong>else</strong></div><div class="pc" style="--liv:5"><span class="pc-n">14</span><span class="arithmatex">\(v[j][k] \leftarrow v[j-1][k]\)</span>; <span class="arithmatex">\(s[j][k] \leftarrow 0\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">16</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">17</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">18</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">19</span><strong>return</strong> <span class="arithmatex">\(v[n][c],s\)</span></div></div>

        - The DP algorithm uses the additional matrix $s$, which keeps track of the decision made when $v[j][k]$ is computed. If one copy of item type $j$ is selected, $s[j][k]\leftarrow 1$ stores this decision; otherwise, $s[j][k]\leftarrow 0$ stores that item type $j$ is not used.

        <a id="box-32-texukpaltbuinfo"></a>

        !!! esempio "Example 18.10: Computation of the additional information"

            We consider the UKP instance of <span style="color:#1971c2">Example 1</span> with a knapsack of capacity $c=7$ and the following profits and weights:

            $$
            \begin{array}{l|rrrr}
            \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
            \hline {p_j} & 4 & 5 & 10 & 11 \\
            {w_j} & 2 & 3 & 5 & 6 \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $j$ and $k$, the cell $s[j][k]$, and the operation performed.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(s[j][k]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(s[0][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(s[0][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(s[0][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(s[0][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(s[0][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(s[0][5]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(s[0][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(0\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(s[0][7]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(s[1][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[1]\)</span>: <span class="arithmatex">\(s[1][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[1]+v[1][0]=4+0>v[0][2]=0\)</span>: <span class="arithmatex">\(s[1][2]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[1]+v[1][1]=4+0>v[0][3]=0\)</span>: <span class="arithmatex">\(s[1][3]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[1]+v[1][2]=4+4>v[0][4]=0\)</span>: <span class="arithmatex">\(s[1][4]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[1]+v[1][3]=4+4>v[0][5]=0\)</span>: <span class="arithmatex">\(s[1][5]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[1]+v[1][4]=4+8>v[0][6]=0\)</span>: <span class="arithmatex">\(s[1][6]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[1]+v[1][5]=4+8>v[0][7]=0\)</span>: <span class="arithmatex">\(s[1][7]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(s[2][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(s[2][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[2]\)</span>: <span class="arithmatex">\(s[2][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[2]+v[2][0]=5+0>v[1][3]=4\)</span>: <span class="arithmatex">\(s[2][3]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(p[2]+v[2][1]=5+0\le v[1][4]=8\)</span>: <span class="arithmatex">\(s[2][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[2]+v[2][2]=5+4>v[1][5]=8\)</span>: <span class="arithmatex">\(s[2][5]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(p[2]+v[2][3]=5+5\le v[1][6]=12\)</span>: <span class="arithmatex">\(s[2][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[2]+v[2][4]=5+8>v[1][7]=12\)</span>: <span class="arithmatex">\(s[2][7]\leftarrow 1\)</span></td>
            </tr>
            </table></div>

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(s[j][k]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(s[3][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(s[3][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(s[3][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(s[3][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[3]\)</span>: <span class="arithmatex">\(s[3][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[3]+v[3][0]=10+0>v[2][5]=9\)</span>: <span class="arithmatex">\(s[3][5]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(p[3]+v[3][1]=10+0\le v[2][6]=12\)</span>: <span class="arithmatex">\(s[3][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>1</td>
            <td><span class="arithmatex">\(p[3]+v[3][2]=10+4>v[2][7]=13\)</span>: <span class="arithmatex">\(s[3][7]\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(s[4][0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(s[4][1]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(s[4][2]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(s[4][3]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(s[4][4]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(k<w[4]\)</span>: <span class="arithmatex">\(s[4][5]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(6\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(p[4]+v[4][0]=11+0\le v[3][6]=12\)</span>: <span class="arithmatex">\(s[4][6]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(p[4]+v[4][1]=11+0\le v[3][7]=14\)</span>: <span class="arithmatex">\(s[4][7]\leftarrow 0\)</span></td>
            </tr>
            </table></div>

            This is the matrix $s$ after the execution of the DP algorithm:

            $$
            \begin{array}{l|rrrrrrrr}
            \hline {s[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
            {j=2} & 0 & 0 & 0 & 1 & 0 & 1 & 0 & 1 \\
            {j=3} & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 1 \\
            {j=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            \hline
            \end{array}
            $$

    - Once the matrix $s$ has been computed, an optimal solution for a knapsack of capacity $c$ can be computed by repeatedly applying the following rule, starting from $(j,k)=(n,c)$ and $x_h=0$ for all $h \in \{1,2,\dots,n\}$:

        $$
        \begin{array}{ll}
        j \leftarrow j-1 & \textrm{if $s[j][k]=0$,}\\[1ex]
        x_j \leftarrow x_j+1,\quad k \leftarrow k-w_j & \textrm{if $s[j][k]=1$.}
        \end{array}
        $$

        The procedure stops when $k=0$ or $j=0$; the second case occurs when the residual capacity is left unused. This yields the vector $(x_1,x_2,\dots,x_n)$, where each entry $x_h$ is the number of copies of item type $h$ in an optimal solution.

    - The following pseudo-code implements the computation of an optimal solution, given the matrix $s$.

        !!! algoritmo "Algorithm: UKP\_DP2\_SolComputation"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number of item types <span class="arithmatex">\(n\)</span>, the array <span class="arithmatex">\(w[1..n]\)</span>, the capacity <span class="arithmatex">\(c\)</span>, and the matrix <span class="arithmatex">\(s[0..n][0..c]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the UKP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> UKP_DP2_SolComputation(<span class="arithmatex">\(n,w,c,s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(h := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(x[h] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><span class="arithmatex">\(j := n\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><span class="arithmatex">\(k := c\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>while</strong> <span class="arithmatex">\(k > 0\)</span> <strong>and</strong> <span class="arithmatex">\(j > 0\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><strong>if</strong> <span class="arithmatex">\(s[j][k] = 0\)</span> <strong>then</strong></div><div class="pc" style="--liv:3"><span class="pc-n">10</span><span class="arithmatex">\(j \leftarrow j-1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">11</span><strong>else</strong></div><div class="pc" style="--liv:3"><span class="pc-n">12</span><span class="arithmatex">\(x[j] \leftarrow x[j]+1\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">13</span><span class="arithmatex">\(k \leftarrow k-w[j]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">15</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">16</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-33-texukpaltsolvector"></a>

        !!! esempio "Example 18.11: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">Example 1</span>, we have the following matrix $s$:

            $$
            \begin{array}{l|rrrrrrrr}
            \hline {s[j][k]} & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
            \hline {j=0} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            {j=1} & 0 & 0 & 1 & 1 & 1 & 1 & 1 & 1 \\
            {j=2} & 0 & 0 & 0 & 1 & 0 & 1 & 0 & 1 \\
            {j=3} & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 1 \\
            {j=4} & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            \hline
            \end{array}
            $$

            We can compute an optimal solution for a knapsack of capacity $c=7$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(s[j][k]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(x[4]\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(j\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td>0</td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td><span class="arithmatex">\(x[3]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 7-5=2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td><span class="arithmatex">\(j\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(4\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(0\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td><span class="arithmatex">\(j\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(k\leftarrow 2-2=0\)</span></td>
            </tr>
            </table></div>

            An optimal solution is the vector:

            $$
            (1,0,1,0)
            $$

            Its total weight is $w_1+w_3=2+5=7=c$, and its total profit is $p_1+p_3=4+10=14$, which matches the optimal value $v(4,7)=14$.

## 18.3.1 Number of steps

- Let $S(n,c)$ denote the number of steps executed by <code>UKP\_DP2</code> in the worst case, where $n$ is the number of item types and $c$ is the knapsack capacity. We compute $S(n,c)$ by counting how many times the lines of the pseudo-code of <code>UKP\_DP2</code> are executed.

- In the worst case, line [11](#box-27-ukpbu2-h) is checked whenever the item type fits. Since the item weights are positive integers, this happens at most $nc$ times. The number of executions of the relevant lines is:

    - <span style="color:#e03131">Line</span> [2](#box-20-ukpbu2-a) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [3](#box-21-ukpbu2-b) is executed $c+1$ times.

    - <span style="color:#e03131">Line</span> [4](#box-22-ukpbu2-c) is executed $c+1$ times.

    - <span style="color:#e03131">Line</span> [6](#box-23-ukpbu2-d) is executed $n$ times.

    - <span style="color:#e03131">Line</span> [7](#box-24-ukpbu2-e) is executed $n(c+1)$ times.

    - <span style="color:#e03131">Line</span> [8](#box-25-ukpbu2-f) is executed $n(c+1)$ times.

    - <span style="color:#e03131">Line</span> [11](#box-27-ukpbu2-h) is executed at most $nc$ times.

    - one among <span style="color:#e03131">Line</span> [9](#box-26-ukpbu2-g), <span style="color:#e03131">Line</span> [12](#box-28-ukpbu2-i), and <span style="color:#e03131">Line</span> [14](#box-29-ukpbu2-j) is executed for each pair $(j,k)$, and therefore these assignment lines are executed $n(c+1)$ times in total.

    - <span style="color:#e03131">Line</span> [19](#box-30-ukpbu2-k) is executed $1$ time.

    Therefore, the total number of steps in the worst case is

    $$
    1+(c+1)+(c+1)+n+n(c+1)+n(c+1)+nc+n(c+1)+1.
    $$

    Thus,

    $$
    S(n,c)=4nc+4n+2c+4.
    $$

    Hence,

    $$
    S(n,c)=\Theta(nc).
    $$

    Indeed,

    $$
    \lim_{n,c\to\infty}
    \frac{4nc+4n+2c+4}{nc}
    =
    \lim_{n,c\to\infty}
    \left(4+\frac{4}{c}+\frac{2}{n}+\frac{4}{nc}\right)
    =
    4\in\mathbb{R}_{>0}.
    $$

    !!! chiave ""

        The DP algorithm executes

        $$
        S(n,c)=\Theta(nc)
        $$

        steps in the worst case.

- The version <code>UKP\_DP2\_InfoSol</code> stores the additional matrix $s$ and performs only a constant number of extra operations inside the same loops. Therefore, its number of steps remains $\Theta(nc)$.

---

**Next:** [Typical mistakes · In summary](typical-mistakes.md)

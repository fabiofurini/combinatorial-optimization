---
title: "A first DP algorithm"
---

# 18.2 A first DP algorithm

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 18** · [:material-book-open-variant: Chapter 18: Unbounded knapsack (UKP)](index.md) · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-pencil: Exercises: Unbounded knapsack (UKP)](../../exercises/dp-unbounded-knapsack.md)

</div>

- <u>Step 1</u>: computation of the optimal value

    !!! chiave ""

        For any $k \in \{0,1,\dots,c\}$, let $v(k)$ be the optimal value of the UKP subinstance given by:

        1. a knapsack of capacity $k$,

        2. the set $\{1,2,\dots,n\}$ of $n$ item types,

        3. for each item type $j \in \{1,2,\dots,n\}$, a profit $p_j$ and a weight $w_j$.

        The recursive formula to compute $v(k)$ reads as follows:

        \begin{equation*}
        \label{eq:ukp1}
        v(k)=
        \left\{
        \begin{array}{ll}
        0, & \textrm{if $k=0$,}\\[1ex]
        \displaystyle \max_{j \,:\, w_j\le k}\{p_j+v(k-w_j)\}, & \textrm{if $k\ge 1$ and $w_j\le k$ for some $j$,}\\[2ex]
        0, & \textrm{if $k\ge 1$ and $w_j> k$ for every $j$.}
        \end{array}
        \right. \tag{18.1}
        \end{equation*}

    - The recursive decomposition process of formula $\eqref{eq:ukp1}$ generates at most $n$ <strong>independent subproblems</strong>, each corresponding to a possible choice of an item type $j$, among those with $w_j\le k$, to be inserted as one of the items of the knapsack of capacity $k$.

    - The base case is $v(0)=0$, since a knapsack of capacity $0$ cannot contain any item and has profit $0$. Moreover, if $w_j>k$ for every item type $j$, no item fits into the knapsack: the only feasible choice is to insert no item, and therefore $v(k)=0$.

    - The optimal value $v(k)$ is obtained by trying every item type $j$ with $w_j\le k$ and selecting the one that maximizes the sum $p_j+v(k-w_j)$ of the profit of the chosen item type and the optimal value of the residual subproblem. Since item type $j$ is available in infinitely many copies, it may also be chosen again while solving the residual subproblem of capacity $k-w_j$.

    - Hence, an optimal solution for a knapsack of capacity $k$ is built by combining the chosen item type $j$ with an optimal solution of the residual subproblem of capacity $k-w_j$.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different choices of the first item type, possibly made for different values of $k$, can lead to the same residual capacity, and therefore the same value $v(k)$ may need to be computed several times during the recursive evaluation of formula $\eqref{eq:ukp1}$.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - A <strong>first method</strong> to compute the optimal value $v(c)$ of the UKP instance is the <strong>top-down approach</strong>. The method starts from the call with $k=c$ and evaluates formula $\eqref{eq:ukp1}$ recursively: each call for a knapsack of capacity $k$ triggers further calls for capacity $k-w_j$, for every item type $j$ with $w_j\le k$, until the base case $v(0)$ is reached or no item type fits into the residual capacity.

    - The <strong>recursion tree</strong> of the function $v$ has one node for each recursive call, labeled with the function call it represents. The root represents the initial call. The children of a node represent the recursive calls made by that call. The leaf nodes represent the base cases.

        <a id="box-3-texukptree"></a>

        !!! esempio "Example 18.2: Recursion tree"

            We consider the UKP instance of <span style="color:#1971c2">Example 1</span>, with capacity $c=7$ and item types with weights $w_1=2$, $w_2=3$, $w_3=5$, $w_4=6$. This is the recursion tree of the top-down approach to compute $v(7)$:

            ![Figure 1](../../img/dp-unbounded-knapsack/fig01.svg){ .fig loading=lazy  }

            The function $v$ is called $15$ times, and the same subproblems are solved multiple times: $v(2)$ is called $3$ times, $v(1)$ is called $3$ times, and $v(0)$ is called $5$ times. All the other calls are made only once.

    - The value $v(k)$, for a generic capacity $k$, can be computed once the values $v(k')$ are known for all smaller capacities $k'<k$.

        <a id="box-4-texukpsmallervalues"></a>

        !!! esempio "Example 18.3: Computing the values of the $v$ function"

            We consider the UKP instance of <span style="color:#1971c2">Example 1</span> with a knapsack of capacity $c=7$ and the following profits and weights:

            $$
            \begin{array}{l|rrrr}
            \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
            \hline {p_j} & 4 & 5 & 10 & 11 \\
            {w_j} & 2 & 3 & 5 & 6 \\
            \hline
            \end{array}
            $$

            The value of the function $v$ can be computed by starting from the base case $v(0)=0$ and then computing the values of $v(1),v(2),\dots,v(7)$ in order, as follows:

            - Since no item type has $w_j\le 1$, we have:

                $$
                v(1)=0.
                $$

            - Once we have computed $v(0)$, we can compute $v(2)$, as follows:

                $$
                v(2)=p_1+v(0)=4+0=4.
                $$

            - Once we have computed $v(1)$ and $v(0)$, we can compute $v(3)$, as follows:

                $$
                v(3)=\max\{p_1+v(1),p_2+v(0)\}=\max\{4+0,5+0\}=5.
                $$

            - Once we have computed $v(2)$ and $v(1)$, we can compute $v(4)$, as follows:

                $$
                v(4)=\max\{p_1+v(2),p_2+v(1)\}=\max\{4+4,5+0\}=8.
                $$

            - Once we have computed $v(3)$, $v(2)$ and $v(0)$, we can compute $v(5)$, as follows:

                $$
                v(5)=\max\{p_1+v(3),p_2+v(2),p_3+v(0)\}=\max\{4+5,5+4,10+0\}=10.
                $$

            - Once we have computed $v(4)$, $v(3)$, $v(1)$ and $v(0)$, we can compute $v(6)$, as follows:

                \begin{align*}
                v(6)&=\max\{p_1+v(4),p_2+v(3),p_3+v(1),p_4+v(0)\}\\ &=\max\{4+8,5+5,10+0,11+0\}=12.
                \end{align*}

            - Once we have computed $v(5)$, $v(4)$, $v(2)$ and $v(1)$, we can compute $v(7)$, as follows:

                \begin{align*}
                v(7)&=\max\{p_1+v(5),p_2+v(4),p_3+v(2),p_4+v(1)\}\\ &=\max\{4+10,5+8,10+4,11+0\}=14.
                \end{align*}

    - We can avoid solving the same subproblems repeatedly by storing the value of each subproblem as soon as it is computed. The values are stored in a <strong>lookup table</strong>.

    - Since solving a subproblem with value $v(k)$ depends only on subproblems with values $v(k')$, with $k'<k$, we can solve the subproblems for increasing values of $k$, starting from the base case $v(0)=0$ and building up to $v(c)$: this observation naturally leads to a <strong>much more efficient method</strong> to compute the optimal value $v(c)$ of the UKP instance.

    - A <strong>second method</strong> to compute the optimal value $v(c)$ of the UKP instance is the <strong>bottom-up approach</strong>. The method starts from the base case $v(0)=0$ and evaluates formula $\eqref{eq:ukp1}$ for increasing capacities $k \in \{1,2,\dots,c\}$: each value $v(k)$ is computed using the already-computed values $v(0),v(1),\dots,v(k-1)$, until the value $v(c)$ of the UKP instance is obtained.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>:

        !!! algoritmo "Algorithm: UKP\_DP1"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A UKP instance given by <span class="arithmatex">\(n\)</span>, arrays <span class="arithmatex">\(p[1..n]\)</span>, <span class="arithmatex">\(w[1..n]\)</span>, and capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the UKP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> UKP_DP1(<span class="arithmatex">\(n,p,w,c\)</span>)</div><div class="pc" style="--liv:1" id="box-5-ukpbu1-a"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..c]\)</span></div><div class="pc" style="--liv:1" id="box-6-ukpbu1-b"><span class="pc-n">3</span><span class="arithmatex">\(v[0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1" id="box-7-ukpbu1-c"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-8-ukpbu1-d"><span class="pc-n">5</span><span class="arithmatex">\(m := 0\)</span></div><div class="pc" style="--liv:2" id="box-9-ukpbu1-e"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-10-ukpbu1-f"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(w[j] \le k\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-11-ukpbu1-g"><span class="pc-n">8</span><strong>if</strong> <span class="arithmatex">\(p[j]+v[k-w[j]] > m\)</span>  <strong>then</strong></div><div class="pc" style="--liv:5" id="box-12-ukpbu1-h"><span class="pc-n">9</span><span class="arithmatex">\(m \leftarrow p[j]+v[k-w[j]]\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:2" id="box-13-ukpbu1-i"><span class="pc-n">13</span><span class="arithmatex">\(v[k] \leftarrow m\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-14-ukpbu1-j"><span class="pc-n">15</span><strong>return</strong> <span class="arithmatex">\(v[c]\)</span></div></div>

        - The vector $v[0..c]$ is the <strong>lookup table</strong>: it stores the optimal values of all subproblems, with the base case $v[0]=0$.

        - The outer loop, over $k \in \{1,2,\dots,c\}$, computes $v[k]$ in increasing order of capacity.

        - The inner loop, over $j \in \{1,2,\dots,n\}$, examines every item type; the condition $w[j]\le k$ checks whether item type $j$ fits into capacity $k$, and keeps in $m$ the largest value $p[j]+v[k-w[j]]$ found so far. If no item type fits, $m$ remains equal to its initial value $0$.

        - At the end of the inner loop, $v[k] \leftarrow m$ stores the optimal value $v[k]$.

        - Finally, the optimal value $v[c]$ of the UKP instance is returned.

        <a id="box-15-texukpbu"></a>

        !!! esempio "Example 18.4: Execution of the DP algorithm"

            We consider the UKP instance of <span style="color:#1971c2">Example 1</span> with a knapsack of capacity $c=7$ and the following profits and weights:

            $$
            \begin{array}{l|rrrr}
            \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
            \hline {p_j} & 4 & 5 & 10 & 11 \\
            {w_j} & 2 & 3 & 5 & 6 \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $k$ and $j$, the current value of $m$, and the cell $v[k]$. The cell of $m$ is highlighted in <mark>red</mark> when updated; the cell of $v[k]$ is highlighted in <mark>blue</mark> when assigned.

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
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span></td>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(w[1]=2>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(w[2]=3>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(w[3]=5>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(w[4]=6>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">0</td>
            <td>0</td>
            <td><span class="arithmatex">\(v[1]\leftarrow m=0\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span></td>
            </tr>
            <tr>
            <td>2</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">4</td>
            <td><span class="arithmatex">\(p[1]{+}v[0]=4{+}0=4>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>4</td>
            <td><span class="arithmatex">\(w[2]=3>2\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>4</td>
            <td><span class="arithmatex">\(w[3]=5>2\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>4</td>
            <td><span class="arithmatex">\(w[4]=6>2\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">4</td>
            <td>4</td>
            <td><span class="arithmatex">\(v[2]\leftarrow m=4\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span></td>
            </tr>
            <tr>
            <td>3</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">4</td>
            <td><span class="arithmatex">\(p[1]{+}v[1]=4{+}0=4>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 4\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">5</td>
            <td><span class="arithmatex">\(p[2]{+}v[0]=5{+}0=5>m=4\)</span>: <span class="arithmatex">\(m\leftarrow 5\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>5</td>
            <td><span class="arithmatex">\(w[3]=5>3\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>5</td>
            <td><span class="arithmatex">\(w[4]=6>3\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">5</td>
            <td>5</td>
            <td><span class="arithmatex">\(v[3]\leftarrow m=5\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span></td>
            </tr>
            <tr>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">8</td>
            <td><span class="arithmatex">\(p[1]{+}v[2]=4{+}4=8>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 8\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>8</td>
            <td><span class="arithmatex">\(p[2]{+}v[1]=5{+}0=5\le m=8\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>8</td>
            <td><span class="arithmatex">\(w[3]=5>4\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>8</td>
            <td><span class="arithmatex">\(w[4]=6>4\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">8</td>
            <td>8</td>
            <td><span class="arithmatex">\(v[4]\leftarrow m=8\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span></td>
            </tr>
            <tr>
            <td>5</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">9</td>
            <td><span class="arithmatex">\(p[1]{+}v[3]=4{+}5=9>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 9\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>9</td>
            <td><span class="arithmatex">\(p[2]{+}v[2]=5{+}4=9=m\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">10</td>
            <td><span class="arithmatex">\(p[3]{+}v[0]=10{+}0=10>m=9\)</span>: <span class="arithmatex">\(m\leftarrow 10\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>10</td>
            <td><span class="arithmatex">\(w[4]=6>5\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">10</td>
            <td>10</td>
            <td><span class="arithmatex">\(v[5]\leftarrow m=10\)</span></td>
            </tr>
            </table></div>

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(v[k]\)</span></th>
            <th><span class="arithmatex">\(m\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span></td>
            </tr>
            <tr>
            <td>6</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">12</td>
            <td><span class="arithmatex">\(p[1]{+}v[4]=4{+}8=12>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 12\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>12</td>
            <td><span class="arithmatex">\(p[2]{+}v[3]=5{+}5=10\le m=12\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>12</td>
            <td><span class="arithmatex">\(p[3]{+}v[1]=10{+}0=10\le m=12\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>12</td>
            <td><span class="arithmatex">\(p[4]{+}v[0]=11{+}0=11\le m=12\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">12</td>
            <td>12</td>
            <td><span class="arithmatex">\(v[6]\leftarrow m=12\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span></td>
            </tr>
            <tr>
            <td>7</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">14</td>
            <td><span class="arithmatex">\(p[1]{+}v[5]=4{+}10=14>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 14\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>14</td>
            <td><span class="arithmatex">\(p[2]{+}v[4]=5{+}8=13\le m=14\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>14</td>
            <td><span class="arithmatex">\(p[3]{+}v[2]=10{+}4=14=m\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>14</td>
            <td><span class="arithmatex">\(p[4]{+}v[1]=11{+}0=11\le m=14\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">14</td>
            <td>14</td>
            <td><span class="arithmatex">\(v[7]\leftarrow m=14\)</span></td>
            </tr>
            </table></div>

            This is the vector $v$ after the execution of the DP algorithm:

            $$
            \begin{array}{c|cccccccc}
            \hline  & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
            \hline {v[k]} & 0 & 0 & 4 & 5 & 8 & 10 & 12 & 14 \\
            \hline
            \end{array}
            $$

    - After the execution of the DP algorithm, the vector $v$ contains the optimal value $v[k]$ for every capacity.

- <u>Step 2</u>: computation of an optimal solution

    - To compute an optimal solution, it is necessary to store some additional information.

    - For each capacity $k$, in addition to the optimal value $v[k]$, we store $s[k]$, the item type selected as first item in an optimal solution for a knapsack of capacity $k$; if no item type fits into capacity $k$, we set $s[k]=0$.

    - Starting from $k=c$, the value $s[k]$ gives the item type of the first selected item; the residual capacity becomes $k-w_{s[k]}$, and the same rule can be applied again, and so on, until the residual capacity reaches $0$ or no item type fits into it ($s[k]=0$), in which case the residual capacity is left unused.

        This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong> with the storing of the information necessary to compute an optimal solution:

        !!! algoritmo "Algorithm: UKP\_DP1\_InfoSol"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> A UKP instance given by <span class="arithmatex">\(n\)</span>, arrays <span class="arithmatex">\(p[1..n]\)</span>, <span class="arithmatex">\(w[1..n]\)</span>, and capacity <span class="arithmatex">\(c\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the UKP instance and the information vector <span class="arithmatex">\(s[0..c]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> UKP_DP1_InfoSol(<span class="arithmatex">\(n,p,w,c\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..c]\)</span>; <span class="arithmatex">\(s := \textnormal{new array}[0..c]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(v[0] \leftarrow 0\)</span>; <span class="arithmatex">\(s[0] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(k := 1\)</span> <strong>to</strong> <span class="arithmatex">\(c\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(m := 0\)</span>; <span class="arithmatex">\(t := 0\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:3"><span class="pc-n">7</span><strong>if</strong> <span class="arithmatex">\(w[j] \le k\)</span> <strong>then</strong></div><div class="pc" style="--liv:4"><span class="pc-n">8</span><strong>if</strong> <span class="arithmatex">\(p[j]+v[k-w[j]] > m\)</span> <strong>then</strong></div><div class="pc" style="--liv:5"><span class="pc-n">9</span><span class="arithmatex">\(m \leftarrow p[j]+v[k-w[j]]\)</span>; <span class="arithmatex">\(t \leftarrow j\)</span></div><div class="pc" style="--liv:4"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:3"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">13</span><span class="arithmatex">\(v[k] \leftarrow m\)</span>; <span class="arithmatex">\(s[k] \leftarrow t\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">14</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">15</span><strong>return</strong> <span class="arithmatex">\(v[c],s\)</span></div></div>

        - The DP algorithm uses the additional temporary variable $t$ to keep track of the decision made when $m$ is updated. If item type $j$ is selected, $t\leftarrow j$ stores this decision; if no item type fits into capacity $k$, $t$ keeps its initial value $0$. At the end of the inner loop, $s[k]\leftarrow t$ stores the selected item type, together with the optimal value $v[k]\leftarrow m$.

        <a id="box-16-texukpbuinfo"></a>

        !!! esempio "Example 18.5: Computation of the additional information"

            We consider the UKP instance of <span style="color:#1971c2">Example 1</span> with a knapsack of capacity $c=7$ and the following profits and weights:

            $$
            \begin{array}{l|rrrr}
            \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
            \hline {p_j} & 4 & 5 & 10 & 11 \\
            {w_j} & 2 & 3 & 5 & 6 \\
            \hline
            \end{array}
            $$

            For each step of the DP algorithm, the table shows the values of $k$ and $j$, the cell $s[k]$, the current value of $m$, and the current value of $t$. The cell of $m$ is highlighted in <mark>red</mark> when updated; the cell of $t$ and the cell of $s[k]$ are highlighted in <mark>blue</mark> when updated.

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(s[k]\)</span></th>
            <th><span class="arithmatex">\(m\)</span></th>
            <th><span class="arithmatex">\(t\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>Initial state: <span class="arithmatex">\(v[0]\leftarrow 0\)</span>, <span class="arithmatex">\(s[0]\leftarrow 0\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span>, <span class="arithmatex">\(t := 0\)</span></td>
            </tr>
            <tr>
            <td>1</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(w[1]=2>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(w[2]=3>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(w[3]=5>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(w[4]=6>1\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(v[1]\leftarrow m=0\)</span>, <span class="arithmatex">\(s[1]\leftarrow t=0\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span>, <span class="arithmatex">\(t := 0\)</span></td>
            </tr>
            <tr>
            <td>2</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">4</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(4{+}0=4>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 4\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(w[2]=3>2\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(w[3]=5>2\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(w[4]=6>2\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">1</td>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(v[2]\leftarrow m=4\)</span>, <span class="arithmatex">\(s[2]\leftarrow t=1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span>, <span class="arithmatex">\(t := 0\)</span></td>
            </tr>
            <tr>
            <td>3</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">4</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(4{+}0=4>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 4\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">5</td>
            <td class="cella-blu">2</td>
            <td><span class="arithmatex">\(5{+}0=5>m=4\)</span>: <span class="arithmatex">\(m\leftarrow 5\)</span>, <span class="arithmatex">\(t\leftarrow 2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>5</td>
            <td>2</td>
            <td><span class="arithmatex">\(w[3]=5>3\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>5</td>
            <td>2</td>
            <td><span class="arithmatex">\(w[4]=6>3\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">2</td>
            <td>5</td>
            <td>2</td>
            <td><span class="arithmatex">\(v[3]\leftarrow m=5\)</span>, <span class="arithmatex">\(s[3]\leftarrow t=2\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span>, <span class="arithmatex">\(t := 0\)</span></td>
            </tr>
            <tr>
            <td>4</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">8</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(4{+}4=8>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 8\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>8</td>
            <td>1</td>
            <td><span class="arithmatex">\(5{+}0=5\le m=8\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>8</td>
            <td>1</td>
            <td><span class="arithmatex">\(w[3]=5>4\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>8</td>
            <td>1</td>
            <td><span class="arithmatex">\(w[4]=6>4\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">1</td>
            <td>8</td>
            <td>1</td>
            <td><span class="arithmatex">\(v[4]\leftarrow m=8\)</span>, <span class="arithmatex">\(s[4]\leftarrow t=1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span>, <span class="arithmatex">\(t := 0\)</span></td>
            </tr>
            <tr>
            <td>5</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">9</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(4{+}5=9>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 9\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>9</td>
            <td>1</td>
            <td><span class="arithmatex">\(5{+}4=9=m\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">10</td>
            <td class="cella-blu">3</td>
            <td><span class="arithmatex">\(10{+}0=10>m=9\)</span>: <span class="arithmatex">\(m\leftarrow 10\)</span>, <span class="arithmatex">\(t\leftarrow 3\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>10</td>
            <td>3</td>
            <td><span class="arithmatex">\(w[4]=6>5\)</span>: skip</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">3</td>
            <td>10</td>
            <td>3</td>
            <td><span class="arithmatex">\(v[5]\leftarrow m=10\)</span>, <span class="arithmatex">\(s[5]\leftarrow t=3\)</span></td>
            </tr>
            </table></div>

            <div class="tabella" markdown="0"><table>
            <tr>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(j\)</span></th>
            <th><span class="arithmatex">\(s[k]\)</span></th>
            <th><span class="arithmatex">\(m\)</span></th>
            <th><span class="arithmatex">\(t\)</span></th>
            <th>Action</th>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span>, <span class="arithmatex">\(t := 0\)</span></td>
            </tr>
            <tr>
            <td>6</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">12</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(4{+}8=12>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 12\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>12</td>
            <td>1</td>
            <td><span class="arithmatex">\(5{+}5=10\le m=12\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>12</td>
            <td>1</td>
            <td><span class="arithmatex">\(10{+}0=10\le m=12\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>12</td>
            <td>1</td>
            <td><span class="arithmatex">\(11{+}0=11\le m=12\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">1</td>
            <td>12</td>
            <td>1</td>
            <td><span class="arithmatex">\(v[6]\leftarrow m=12\)</span>, <span class="arithmatex">\(s[6]\leftarrow t=1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(m := 0\)</span>, <span class="arithmatex">\(t := 0\)</span></td>
            </tr>
            <tr>
            <td>7</td>
            <td>1</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-rossa">14</td>
            <td class="cella-blu">1</td>
            <td><span class="arithmatex">\(4{+}10=14>m=0\)</span>: <span class="arithmatex">\(m\leftarrow 14\)</span>, <span class="arithmatex">\(t\leftarrow 1\)</span></td>
            </tr>
            <tr>
            <td></td>
            <td>2</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>14</td>
            <td>1</td>
            <td><span class="arithmatex">\(5{+}8=13\le m=14\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>3</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>14</td>
            <td>1</td>
            <td><span class="arithmatex">\(10{+}4=14=m\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td>4</td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>14</td>
            <td>1</td>
            <td><span class="arithmatex">\(11{+}0=11\le m=14\)</span>: no update</td>
            </tr>
            <tr>
            <td></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td class="cella-blu">1</td>
            <td>14</td>
            <td>1</td>
            <td><span class="arithmatex">\(v[7]\leftarrow m=14\)</span>, <span class="arithmatex">\(s[7]\leftarrow t=1\)</span></td>
            </tr>
            </table></div>

            This is the vector $s$ after the execution of the DP algorithm:

            $$
            \begin{array}{c|cccccccc}
            \hline  & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
            \hline {s[k]} & 0 & 0 & 1 & 2 & 1 & 3 & 1 & 1 \\
            \hline
            \end{array}
            $$

    - Once the vector $s$ has been computed, an optimal solution of the UKP instance can be computed by repeatedly applying the following rule, starting from $k=c$ and $x_j=0$ for all $j \in \{1,2,\dots,n\}$:

        $$
        x_{s[k]} \leftarrow x_{s[k]}+1,
        \qquad
        k \leftarrow k-w_{s[k]},
        $$

        until $k=0$ or $s[k]=0$. The second case occurs when no item type fits into the residual capacity $k$, which is then left unused. This yields the vector $(x_1,x_2,\dots,x_n)$, where each entry $x_j$ is the number of copies of item type $j$ in an optimal solution.

    - The following pseudo-code implements the computation of an optimal solution, given the vector $s$.

        !!! algoritmo "Algorithm: UKP\_DP1\_SolComputation"

            <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(n\)</span> of item types, the capacity <span class="arithmatex">\(c\)</span>, the array <span class="arithmatex">\(w[1..n]\)</span>, and the vector <span class="arithmatex">\(s[0..c]\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the UKP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> UKP_DP1_SolComputation(<span class="arithmatex">\(n,w,c,s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">4</span><span class="arithmatex">\(x[j] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">6</span><span class="arithmatex">\(k := c\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>while</strong> <span class="arithmatex">\(k > 0\)</span> <strong>and</strong> <span class="arithmatex">\(s[k] > 0\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">8</span><span class="arithmatex">\(x[s[k]] \leftarrow x[s[k]]+1\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">9</span><span class="arithmatex">\(k \leftarrow k - w[s[k]]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">10</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">11</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

        <a id="box-17-texukpsolvector"></a>

        !!! esempio "Example 18.6: Computing an optimal solution"

            After the execution of the DP algorithm on the instance of <span style="color:#1971c2">Example 1</span>, we have the following vector $s$:

            $$
            \begin{array}{c|cccccccc}
            \hline  & {k=0} & {k=1} & {k=2} & {k=3} & {k=4} & {k=5} & {k=6} & {k=7} \\
            \hline {s[k]} & 0 & 0 & 1 & 2 & 1 & 3 & 1 & 1 \\
            \hline
            \end{array}
            $$

            We can compute an optimal solution for a knapsack of capacity $c=7$ as follows:

            <div class="tabella" markdown="0"><table>
            <tr>
            <th>Iteration</th>
            <th><span class="arithmatex">\(k\)</span></th>
            <th><span class="arithmatex">\(s[k]\)</span></th>
            <th><span class="arithmatex">\(x[1]\)</span></th>
            <th><span class="arithmatex">\(x[2]\)</span></th>
            <th><span class="arithmatex">\(x[3]\)</span></th>
            <th><span class="arithmatex">\(x[4]\)</span></th>
            <th><span class="arithmatex">\(k \leftarrow k-w_{s[k]}\)</span></th>
            </tr>
            <tr>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td><span class="arithmatex">\(-\)</span></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(k=7\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(1\)</span></td>
            <td><span class="arithmatex">\(7\)</span></td>
            <td><span class="arithmatex">\(1\)</span></td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><span class="arithmatex">\(k=7-2=5\)</span></td>
            </tr>
            <tr>
            <td><span class="arithmatex">\(2\)</span></td>
            <td><span class="arithmatex">\(5\)</span></td>
            <td><span class="arithmatex">\(3\)</span></td>
            <td>1</td>
            <td>0</td>
            <td class="cella-blu">1</td>
            <td>0</td>
            <td><span class="arithmatex">\(k=5-5=0\)</span></td>
            </tr>
            </table></div>

            An optimal solution is the vector:

            $$
            (1,0,1,0)
            $$

            Its total weight is $w_1+w_3=2+5=7=c$, and its total profit is $p_1+p_3=4+10=14$, which matches the optimal value $v(7)=14$.

## 18.2.1 Number of steps

- Let $S(n,c)$ denote the number of steps executed by <code>UKP\_DP1</code> in the worst case, where $n$ is the number of item types and $c$ is the knapsack capacity. We compute $S(n,c)$ by counting how many times the lines of the pseudo-code of <code>UKP\_DP1</code> are executed.

- In the worst case, the conditions at lines [7](#box-10-ukpbu1-f) and [8](#box-11-ukpbu1-g) are true at every iteration of the inner loop, and therefore line [9](#box-12-ukpbu1-h) is executed as often as line [8](#box-11-ukpbu1-g). The number of executions of the relevant lines is:

    - <span style="color:#e03131">Line</span> [2](#box-5-ukpbu1-a) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [3](#box-6-ukpbu1-b) is executed $1$ time.

    - <span style="color:#e03131">Line</span> [4](#box-7-ukpbu1-c) is executed $c$ times.

    - <span style="color:#e03131">Line</span> [5](#box-8-ukpbu1-d) is executed $c$ times.

    - <span style="color:#e03131">Line</span> [6](#box-9-ukpbu1-e) is executed $cn$ times.

    - <span style="color:#e03131">Line</span> [7](#box-10-ukpbu1-f) is executed $cn$ times.

    - <span style="color:#e03131">Line</span> [8](#box-11-ukpbu1-g) is executed $cn$ times.

    - <span style="color:#e03131">Line</span> [9](#box-12-ukpbu1-h) is executed $cn$ times.

    - <span style="color:#e03131">Line</span> [13](#box-13-ukpbu1-i) is executed $c$ times.

    - <span style="color:#e03131">Line</span> [15](#box-14-ukpbu1-j) is executed $1$ time.

    Therefore, the total number of steps in the worst case is

    $$
    1+1+c+c+cn+cn+cn+cn+c+1.
    $$

    Thus,

    $$
    S(n,c)=3+3c+4cn.
    $$

    Hence,

    $$
    S(n,c)=\Theta(nc).
    $$

    Indeed,

    $$
    \lim_{n,c\to\infty}
    \frac{4cn+3c+3}{nc}
    =
    \lim_{n,c\to\infty}
    \left(4+\frac{3}{n}+\frac{3}{nc}\right)
    =
    4\in\mathbb{R}_{>0}.
    $$

    !!! chiave ""

        The DP algorithm executes

        $$
        S(n,c)=\Theta(nc)
        $$

        steps in the worst case.

- The version <code>UKP\_DP1\_InfoSol</code> stores the additional vector $s$ and performs only a constant number of extra operations inside the same loops. Therefore, its number of steps remains $\Theta(nc)$.

---

**Next:** [18.3 A second DP algorithm](a-second-dp-algorithm.md)

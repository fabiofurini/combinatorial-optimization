---
title: "DP for the multidimensional knapsack problem"
---

# DP for the multidimensional knapsack problem

<div class="info-capitolo" markdown>

**Part 3 · Dynamic programming · Chapter 22** · [:material-file-pdf-box: Lecture notes, volume 3 (PDF)](../pdf/lecture-notes-3-dynamic-programming.pdf) · [:material-presentation: Slides](../pdf/slides-dp-multidimensional-knapsack.pdf) · [:material-pencil: Exercises: Multidimensional knapsack (MDKP)](../exercises/dp-multidimensional-knapsack.md)

</div>

!!! nota "Prerequisites"

    - From this module, the chapter [«DP for the 0/1 knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-knapsack/): the recurrence $v(j,k)$ of the 0/1 knapsack problem (KP) over items and capacities, the matrix $s$ of the decisions and the reconstruction of a solution.

    - From this module, the chapter [«Knapsack problems»](https://fabiofurini.github.io/combinatorial-optimization/combinatorial-optimization-problems/knapsack/the-multidimensional-knapsack-problem/): the multidimensional knapsack problem, with one capacity $c_d$ and one weight $w_{dj}$ for every dimension $d$.

    - From the module <em>Algorithms</em>: [pseudocode conventions (Chapter 2)](https://fabiofurini.github.io/algorithms/basic-algorithms/02-pseudo-code/) and [the size of the input (Chapter 11)](https://fabiofurini.github.io/algorithms/analysis/11-input-size/).

!!! chiave "Objectives"

    At the end of this chapter you will be able to:

    - write the recurrence $v(j,k_1,\dots,k_m)$ over the items and the vector of the capacities;

    - run the DP algorithm by hand on an instance with $m=2$ dimensions, one matrix for each item;

    - reconstruct an optimal solution from the tables $s$;

    - count the $\Theta(m\,n\prod_{d=1}^{m} (c_d+1))$ steps and explain why the number of states grows exponentially with $m$.

The problem of this chapter is the [multidimensional knapsack problem (MDKP)](https://fabiofurini.github.io/combinatorial-optimization/catalogue/multidimensional-knapsack-problem/): its definition and its assumptions are on its page.

## 22.1 A DP algorithm

- We write $m$ for the number of dimensions, so $\mathscr{D}=\{1,2,\dots,m\}$, because in the DP chapters the letter $k$ denotes a capacity. Item $j$ has the <strong>weight vector</strong> $\vet{w}_j=(w_{1j},w_{2j},\dots,w_{mj})$, and the knapsack has the capacity vector $\vet{c}=(c_1,c_2,\dots,c_m)$.

- For two vectors, $\vet{w}_j\le\vet{k}$ means $w_{dj}\le k_d$ for every dimension $d\in\mathscr{D}$.

- A solution is described by the binary vector $(x_1,x_2,\dots,x_n)$, where $x_j=1$ if item $j$ is selected; it is feasible if $\sum_{j=1}^{n} w_{dj}x_j\le c_d$ for every $d\in\mathscr{D}$.

<a id="box-1-texmdkpex1"></a>

!!! esempio "Example 22.1: MDKP instance"

    We consider a knapsack with $m=2$ dimensions and capacities $c_1=5$ and $c_2=4$, and a set $\mathscr{I}=\{1,2,3,4\}$ of $4$ items ($n=4$), with the following profits and weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {p_j} & 9 & 8 & 3 & 9 \\
    {w_{1j}} & 1 & 4 & 2 & 3 \\
    {w_{2j}} & 2 & 1 & 1 & 4 \\
    \hline
    \end{array}
    $$

    We refer to this MDKP instance as <span style="color:#1971c2">[Example 22.1](#box-1-texmdkpex1)</span>.

- <u>Step 1</u>: computation of the optimal value

    !!! formula ""

        For any $j \in \{0,1,\dots,n\}$ and any vector $\vet{k}=(k_1,k_2,\dots,k_m)$ with $k_d \in \{0,1,\dots,c_d\}$ for every $d\in\mathscr{D}$, let $v(j,\vet{k})=v(j,k_1,\dots,k_m)$ be the optimal value of the MDKP subinstance given by:

        1. a knapsack with capacity $k_d$ in each dimension $d\in\mathscr{D}$,

        2. a set $\{1,2,\dots,j\}$ of available items,

        3. for each item $h \in \{1,2,\dots,j\}$, a profit $p_h$ and a weight vector $\vet{w}_h$.

        The recursive formula to compute $v(j,\vet{k})$ reads as follows:

        \begin{equation*}
        \label{eq:mdkp}
        v(j,\vet{k})= \left\{ \begin{array}{ll}
        0 & \textrm{if $j=0$,}\\[2ex]
        v(j-1,\vet{k}) & \begin{array}[t]{@{}l@{}}\textrm{if $j\ge 1$ and}\\ \textrm{$w_{dj}>k_d$ for some $d$,}\end{array}\\[4ex]
        \begin{array}[t]{@{}l@{}}\displaystyle \max \bigg\{ v(j-1,\vet{k}),\\ \qquad p_j+v(j-1,\vet{k}-\vet{w}_j) \bigg\}\end{array} & \textrm{if $j\ge 1$ and $\vet{w}_j\le\vet{k}$.}
        \end{array} \right. \tag{22.1}
        \end{equation*}

    - With $m=1$ the formula $\eqref{eq:mdkp}$ is the recurrence of the KP: the only change is that the capacity $k$ becomes the vector $\vet{k}$, and «item $j$ fits» means $\vet{w}_j\le\vet{k}$.

    - The base cases are $v(0,\vet{k})=0$ for every vector $\vet{k}$, since no item is available.

    - The formula generates at most $2$ <strong>independent subproblems</strong>: item $j$ is not selected, and the residual subproblem has the same vector $\vet{k}$, or it is selected, and the residual subproblem has the vector $\vet{k}-\vet{w}_j$.

        $\rightsquigarrow$ <strong>Optimal Substructure verified!</strong>

    - Different decisions on the items $j+1,\dots,n$ can leave the same vector of residual capacities, and therefore the same value $v(j,\vet{k})$ may be needed several times.

        $\rightsquigarrow$ <strong>Overlapping Subproblems verified!</strong>

    - The value $v(j,\vet{k})$ depends only on values of row $j-1$. Therefore, the <strong>bottom-up approach</strong> computes the rows $j=0,1,\dots,n$ in this order, and in each row all the vectors $\vet{k}$ in any order.

    - The <strong>state</strong> of the DP algorithm is the pair $(j,\vet{k})$: for every $j$ the table has one cell for each vector $\vet{k}$, that is, $\prod_{d=1}^{m}(c_d+1)$ cells. With $m=2$ the row $j$ is a matrix, with one row for each $k_1$ and one column for each $k_2$.

- <u>Step 2</u>: computation of an optimal solution

    - For each item $j$ and vector $\vet{k}$ we store $s[j][\vet{k}]=1$ if item $j$ is selected in the optimal solution found for $(j,\vet{k})$, and $s[j][\vet{k}]=0$ otherwise.

    - The set of all the vectors $\vet{k}$ is $\mathscr{C}=\{0,1,\dots,c_1\}\times\{0,1,\dots,c_2\}\times\dots\times\{0,1,\dots,c_m\}$.

    This is the pseudo-code of the <strong>DP algorithm using the bottom-up approach</strong>, which stores the tables $s$ together with the tables $v$:

    !!! algoritmo "Algorithm: MDKP\_DP"

        <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> An MDKP instance given by <span class="arithmatex">\(n\)</span>, <span class="arithmatex">\(m\)</span>, the array <span class="arithmatex">\(p[1..n]\)</span>, the weight vectors <span class="arithmatex">\(\vet{w}_1,\dots,\vet{w}_n\)</span>, and the capacity vector <span class="arithmatex">\(\vet{c}\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> The optimal value of the MDKP instance and the tables <span class="arithmatex">\(s[j][\vet{k}]\)</span></div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> MDKP_DP(<span class="arithmatex">\(n,m,p,\vet{w},\vet{c}\)</span>)</div><div class="pc" style="--liv:1" id="box-2-mdkpbu-a"><span class="pc-n">2</span><span class="arithmatex">\(v := \textnormal{new array}[0..n][0..c_1]\cdots[0..c_m]\)</span>; <span class="arithmatex">\(s := \textnormal{new array}[0..n][0..c_1]\cdots[0..c_m]\)</span></div><div class="pc" style="--liv:1" id="box-3-mdkpbu-b"><span class="pc-n">3</span><strong>for each</strong> <span class="arithmatex">\(\vet{k} \in \mathscr{C}\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-4-mdkpbu-c"><span class="pc-n">4</span><span class="arithmatex">\(v[0][\vet{k}] \leftarrow 0\)</span>; <span class="arithmatex">\(s[0][\vet{k}] \leftarrow 0\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">5</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-5-mdkpbu-d"><span class="pc-n">6</span><strong>for</strong> <span class="arithmatex">\(j := 1\)</span> <strong>to</strong> <span class="arithmatex">\(n\)</span>  <strong>do</strong></div><div class="pc" style="--liv:2" id="box-6-mdkpbu-e"><span class="pc-n">7</span><strong>for each</strong> <span class="arithmatex">\(\vet{k} \in \mathscr{C}\)</span>  <strong>do</strong></div><div class="pc" style="--liv:3" id="box-7-mdkpbu-f"><span class="pc-n">8</span><span class="arithmatex">\(v[j][\vet{k}] \leftarrow v[j-1][\vet{k}]\)</span>; <span class="arithmatex">\(s[j][\vet{k}] \leftarrow 0\)</span></div><div class="pc" style="--liv:3" id="box-8-mdkpbu-g"><span class="pc-n">9</span><strong>if</strong> <span class="arithmatex">\(\vet{w}_j\le\vet{k}\)</span> and <span class="arithmatex">\(p[j]+v[j-1][\vet{k}-\vet{w}_j] > v[j][\vet{k}]\)</span>  <strong>then</strong></div><div class="pc" style="--liv:4" id="box-9-mdkpbu-h"><span class="pc-n">10</span><span class="arithmatex">\(v[j][\vet{k}] \leftarrow p[j]+v[j-1][\vet{k}-\vet{w}_j]\)</span>; <span class="arithmatex">\(s[j][\vet{k}] \leftarrow 1\)</span></div><div class="pc" style="--liv:3"><span class="pc-n">11</span><strong>end</strong></div><div class="pc" style="--liv:2"><span class="pc-n">12</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">13</span><strong>end</strong></div><div class="pc" style="--liv:1" id="box-10-mdkpbu-i"><span class="pc-n">14</span><strong>return</strong> <span class="arithmatex">\(v[n][\vet{c}], s\)</span></div></div>

    - The structure is the one of the DP algorithm of the KP; the loop over the capacities becomes a loop over all the vectors $\vet{k}\in\mathscr{C}$.

    - The test $\vet{w}_j\le\vet{k}$ compares $m$ pairs of numbers, and the vector $\vet{k}-\vet{w}_j$ needs $m$ subtractions.

    - In case of ties item $j$ is not selected, because the value is updated only when it is strictly larger.

    <a id="box-11-texmdkpbu"></a>

    !!! esempio "Example 22.2: Execution of the DP algorithm"

        We consider the MDKP instance of <span style="color:#1971c2">[Example 22.1](#box-1-texmdkpex1)</span>, with capacities $c_1=5$ and $c_2=4$. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. For each item $j$ we compute the matrix $v[j][k_1][k_2]$, with one row for each $k_1\in\{0,1,\dots,5\}$ and one column for each $k_2\in\{0,1,\dots,4\}$.

        These are the computations of the cell $\vet{k}=\vet{c}=(5,4)$ for each item, and of the cells used by the reconstruction:

        - $v[1][(5,4)]=\max\{v[0][(5,4)],\,p_1+v[0][(4,2)]\}=\max\{0,\,9+0\}=9$

        - $v[1][(1,3)]=\max\{v[0][(1,3)],\,p_1+v[0][(0,1)]\}=\max\{0,\,9+0\}=9$

        - $v[2][(5,4)]=\max\{v[1][(5,4)],\,p_2+v[1][(1,3)]\}=\max\{9,\,8+9\}=17$

        - $v[3][(5,4)]=\max\{v[2][(5,4)],\,p_3+v[2][(3,3)]\}=\max\{17,\,3+9\}=17$

        - $v[4][(5,4)]=\max\{v[3][(5,4)],\,p_4+v[3][(2,0)]\}=\max\{17,\,9+0\}=17$

        Item $j=1$, with $p_1=9$ and $\vet{w}_1=(1,2)$:

        $$
        \begin{array}{l|rrrrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {9} & {9} & {9} \\
        {k_1=2} & {0} & {0} & {9} & {9} & {9} \\
        {k_1=3} & {0} & {0} & {9} & {9} & {9} \\
        {k_1=4} & {0} & {0} & {9} & {9} & {9} \\
        {k_1=5} & {0} & {0} & {9} & {9} & {9} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=8$ and $\vet{w}_2=(4,1)$:

        $$
        \begin{array}{l|rrrrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {9} & {9} & {9} \\
        {k_1=2} & {0} & {0} & {9} & {9} & {9} \\
        {k_1=3} & {0} & {0} & {9} & {9} & {9} \\
        {k_1=4} & {0} & {8} & {9} & {9} & {9} \\
        {k_1=5} & {0} & {8} & {9} & {17} & {17} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=3$ and $\vet{w}_3=(2,1)$:

        $$
        \begin{array}{l|rrrrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {9} & {9} & {9} \\
        {k_1=2} & {0} & {3} & {9} & {9} & {9} \\
        {k_1=3} & {0} & {3} & {9} & {12} & {12} \\
        {k_1=4} & {0} & {8} & {9} & {12} & {12} \\
        {k_1=5} & {0} & {8} & {9} & {17} & {17} \\
        \hline
        \end{array}
        $$

        Item $j=4$, with $p_4=9$ and $\vet{w}_4=(3,4)$:

        $$
        \begin{array}{l|rrrrr}
        \hline {v[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {9} & {9} & {9} \\
        {k_1=2} & {0} & {3} & {9} & {9} & {9} \\
        {k_1=3} & {0} & {3} & {9} & {12} & {12} \\
        {k_1=4} & {0} & {8} & {9} & {12} & {12} \\
        {k_1=5} & {0} & {8} & {9} & {17} & {17} \\
        \hline
        \end{array}
        $$

    <a id="box-12-texmdkpinfo"></a>

    !!! esempio "Example 22.3: The tables $s$"

        For the instance of <span style="color:#1971c2">[Example 22.1](#box-1-texmdkpex1)</span>, these are the matrices $s[j][k_1][k_2]$ computed by the DP algorithm; a $1$ means that item $j$ is selected in the optimal solution found for $(j,k_1,k_2)$.

        Item $j=1$, with $p_1=9$ and $\vet{w}_1=(1,2)$:

        $$
        \begin{array}{l|rrrrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {1} & {1} & {1} \\
        {k_1=2} & {0} & {0} & {1} & {1} & {1} \\
        {k_1=3} & {0} & {0} & {1} & {1} & {1} \\
        {k_1=4} & {0} & {0} & {1} & {1} & {1} \\
        {k_1=5} & {0} & {0} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=8$ and $\vet{w}_2=(4,1)$:

        $$
        \begin{array}{l|rrrrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {0} & {1} & {0} & {0} & {0} \\
        {k_1=5} & {0} & {1} & {0} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=3$ and $\vet{w}_3=(2,1)$:

        $$
        \begin{array}{l|rrrrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {1} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {1} & {0} & {1} & {1} \\
        {k_1=4} & {0} & {0} & {0} & {1} & {1} \\
        {k_1=5} & {0} & {0} & {0} & {0} & {0} \\
        \hline
        \end{array}
        $$

        Item $j=4$, with $p_4=9$ and $\vet{w}_4=(3,4)$:

        $$
        \begin{array}{l|rrrrr}
        \hline {s[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} & {k_2=4} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {0} & {0} & {0} & {0} & {0} \\
        {k_1=5} & {0} & {0} & {0} & {0} & {0} \\
        \hline
        \end{array}
        $$

    - Once the tables $s$ have been computed, an optimal solution is reconstructed by scanning the items from $j=n$ down to $j=1$, starting from $\vet{k}=\vet{c}$ and $x_j=0$ for every item $j$:

        $$
        x_j \leftarrow s[j][\vet{k}], \qquad \vet{k} \leftarrow \vet{k} - s[j][\vet{k}]\,\vet{w}_j.
        $$

    !!! algoritmo "Algorithm: MDKP\_Reconstruct"

        <div class="pseudocodice" markdown="0"><div class="pc" style="--liv:0"><strong>Input:</strong> The number <span class="arithmatex">\(n\)</span> of items, the capacity vector <span class="arithmatex">\(\vet{c}\)</span>, the weight vectors <span class="arithmatex">\(\vet{w}_1,\dots,\vet{w}_n\)</span>, and the tables <span class="arithmatex">\(s\)</span></div><div class="pc" style="--liv:0"><strong>Output:</strong> An optimal solution of the MDKP instance</div><div class="pc" style="--liv:0"><span class="pc-n">1</span><strong>Function</strong> MDKP_Reconstruct(<span class="arithmatex">\(n,\vet{c},\vet{w},s\)</span>)</div><div class="pc" style="--liv:1"><span class="pc-n">2</span><span class="arithmatex">\(x := \textnormal{new array}[1..n]\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">3</span><span class="arithmatex">\(\vet{k} := \vet{c}\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">4</span><strong>for</strong> <span class="arithmatex">\(j := n\)</span> <strong>to</strong> <span class="arithmatex">\(1\)</span> <strong>do</strong></div><div class="pc" style="--liv:2"><span class="pc-n">5</span><span class="arithmatex">\(x[j] \leftarrow s[j][\vet{k}]\)</span></div><div class="pc" style="--liv:2"><span class="pc-n">6</span><span class="arithmatex">\(\vet{k} \leftarrow \vet{k}-x[j]\,\vet{w}_j\)</span></div><div class="pc" style="--liv:1"><span class="pc-n">7</span><strong>end</strong></div><div class="pc" style="--liv:1"><span class="pc-n">8</span><strong>return</strong> <span class="arithmatex">\(x\)</span></div></div>

    <a id="box-13-texmdkpsol"></a>

    !!! esempio "Example 22.4: Computing an optimal solution"

        After the execution of the DP algorithm on the instance of <span style="color:#1971c2">[Example 22.1](#box-1-texmdkpex1)</span>, we start from $j=4$ and $\vet{k}=(5,4)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
        <th><span class="arithmatex">\(x[1]\)</span></th>
        <th><span class="arithmatex">\(x[2]\)</span></th>
        <th><span class="arithmatex">\(x[3]\)</span></th>
        <th><span class="arithmatex">\(x[4]\)</span></th>
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
        <td>0</td>
        <td><span class="arithmatex">\(\vet{k}=(5,4)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((5,4)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(x[4]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(5,4)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((5,4)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[3]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(5,4)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((5,4)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[2]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (5,4)-(4,1)=(1,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((1,3)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td><span class="arithmatex">\(x[1]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (1,3)-(1,2)=(0,1)\)</span></td>
        </tr>
        </table></div>

        !!! chiave ""

            The vector $x=(1,1,0,0)$ is an optimal solution of the MDKP instance of <span style="color:#1971c2">[Example 22.1](#box-1-texmdkpex1)</span>. Its weights are $1+4=5\le c_1$ and $2+1=3\le c_2$, and its optimal value is $v(4,5,4)=17$.

        With the first dimension alone, the KP with capacity $c_1=5$ has optimal value $18$, attained by the items $\{1,4\}$; their total weight in the second dimension is $2+4=6>c_2$. Both dimensions must be checked at the same time, as the formula $\eqref{eq:mdkp}$ does.

### 22.1.1 Number of steps

- Let $N=|\mathscr{C}|=\prod_{d=1}^{m}(c_d+1)$ be the number of vectors $\vet{k}$, and let $S(n,m,\vet{c})$ denote the number of steps executed by <code>MDKP\_DP</code> in the worst case. Lines [9](#box-8-mdkpbu-g) and [10](#box-9-mdkpbu-h) work on vectors of $m$ components, so we count $m$ steps for each of their executions:

    - <span style="color:#e03131">Lines</span> [2](#box-2-mdkpbu-a) and [14](#box-10-mdkpbu-i) are executed $1$ time each.

    - <span style="color:#e03131">Lines</span> [3](#box-3-mdkpbu-b) and [4](#box-4-mdkpbu-c) are executed $N$ times each.

    - <span style="color:#e03131">Line</span> [6](#box-5-mdkpbu-d) is executed $n$ times.

    - <span style="color:#e03131">Lines</span> [7](#box-6-mdkpbu-e) and [8](#box-7-mdkpbu-f) are executed $nN$ times each.

    - <span style="color:#e03131">Lines</span> [9](#box-8-mdkpbu-g) and [10](#box-9-mdkpbu-h) are executed at most $nN$ times each, with $m$ steps each.

- Therefore, the total number of steps in the worst case is

    $$
    S(n,m,\vet{c})=2m\,nN+2nN+2N+n+2,
    $$

    and, since $2m\,nN\le S(n,m,\vet{c})\le 9m\,nN$,

    $$
    S(n,m,\vet{c})=\Theta\Big(m\,n\prod_{d=1}^{m}(c_d+1)\Big).
    $$

    !!! chiave ""

        The DP algorithm for the MDKP executes $\Theta(m\,n\prod_{d=1}^{m}(c_d+1))$ steps in the worst case. For a fixed number $m$ of dimensions this is $\Theta(n\prod_{d=1}^{m}c_d)$, a pseudo-polynomial number of steps.

- The reconstruction executes $\Theta(m\,n)$ steps.

### 22.1.2 The curse of dimensionality

- Each new dimension multiplies the number of states by $c_d+1$. If all the capacities are equal to $c$, the table has $(n+1)(c+1)^m$ cells: the number of states grows <strong>exponentially</strong> with $m$.

- The size of the input grows only linearly with $m$: one more dimension adds $n+1$ numbers, the weights $w_{dj}$ and the capacity $c_d$.

- This explosion of the number of states when the state becomes a vector is called the <strong>curse of dimensionality</strong>.

<div class="tabella" markdown="0"><table>
<tr>
<th><span class="arithmatex">\(m\)</span></th>
<th>cells <span class="arithmatex">\((n+1)(c+1)^m\)</span>, with <span class="arithmatex">\(n=50\)</span> and <span class="arithmatex">\(c=100\)</span></th>
</tr>
<tr>
<td><span class="arithmatex">\(1\)</span></td>
<td><span class="arithmatex">\(5\,151\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(2\)</span></td>
<td><span class="arithmatex">\(520\,251\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(3\)</span></td>
<td><span class="arithmatex">\(52\,545\,351\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(4\)</span></td>
<td><span class="arithmatex">\(5\,307\,080\,451\)</span></td>
</tr>
<tr>
<td><span class="arithmatex">\(5\)</span></td>
<td><span class="arithmatex">\(536\,015\,125\,551\)</span></td>
</tr>
</table></div>

- With $m=1$ the table has a few thousand cells; with $m=5$ it has more than $5\cdot 10^{11}$, too many to be stored. The DP algorithm is therefore useful for the MDKP only when $m$ and the capacities are small.

## 22.2 Typical mistakes

!!! attenzione "Warning"

    - <strong>Checking only one dimension.</strong> Item $j$ fits in $\vet{k}$ only if $w_{dj}\le k_d$ for <em>every</em> dimension $d$; one dimension is not enough.

    - <strong>Updating only one capacity.</strong> When item $j$ is selected, all the components of $\vet{k}$ decrease, by $\vet{w}_j$.

    - <strong>Solving one KP per dimension.</strong> The KP with the capacity $c_d$ alone gives an upper bound, but its optimal solution may violate another dimension.

    - <strong>Calling the DP algorithm polynomial.</strong> Its number of steps contains the product of the capacities, which is exponential in $m$ and in the size of the capacities.

## 22.3 In summary

!!! chiave "In summary"

    - The recurrence of the KP extends to the MDKP by replacing the capacity $k$ with the vector $\vet{k}=(k_1,\dots,k_m)$: $v(j,\vet{k})=\max\{v(j-1,\vet{k}),\,p_j+v(j-1,\vet{k}-\vet{w}_j)\}$ when $\vet{w}_j\le\vet{k}$.

    - The table has $(n+1)\prod_{d=1}^{m}(c_d+1)$ cells and the DP algorithm executes $\Theta(m\,n\prod_{d=1}^{m}(c_d+1))$ steps, that is, $\Theta(n\prod_{d=1}^{m}c_d)$ for a fixed $m$.

    - The number of states grows exponentially with $m$: the curse of dimensionality.

    - The tables $s$ give an optimal solution, read backwards from $(n,\vet{c})$.

    <strong>Dashboard of the MDKP example.</strong> [Example 22.1](#box-1-texmdkpex1) ($\vet{c}=(5,4)$, four items):

    <div class="tabella" markdown="0"><table>
    <tr>
    <th>Method</th>
    <th>Lower bound</th>
    <th>Upper bound</th>
    <th>Origin</th>
    </tr>
    <tr>
    <td>DP algorithm</td>
    <td><span class="arithmatex">\(17\)</span></td>
    <td><span class="arithmatex">\(17\)</span></td>
    <td>optimal value, solution <span class="arithmatex">\(x=(1,1,0,0)\)</span></td>
    </tr>
    </table></div>

---

**Exercises on this chapter:** [:material-pencil: Multidimensional knapsack (MDKP)](../exercises/dp-multidimensional-knapsack.md)

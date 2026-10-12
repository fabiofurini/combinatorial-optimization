---
title: "Exercises · DP for the multiple knapsack problem"
---

# Exercises · DP for the multiple knapsack problem

<div class="info-capitolo" markdown>

**Exercises · Chapter 24** · each solution opens with a click · [:material-book-open-variant: Chapter 24: Multiple knapsack (MKP)](../dynamic-programming/dp-multiple-knapsack.md) · [:material-file-pdf-box: Exercises, volume 3 (PDF)](../pdf/exercises-3-dynamic-programming.pdf)

</div>

!!! formula "Recurrence used in these exercises"

    The DP algorithm of the chapter [«DP for the multiple knapsack problem»](https://fabiofurini.github.io/combinatorial-optimization/dynamic-programming/dp-multiple-knapsack/), with $m$ knapsacks, the vector $\vet{k}=(k_1,\dots,k_m)$ of their residual capacities and the unit vectors $\vet{e}_i$:

    $$
    v(j,\vet{k})= \left\{ \begin{array}{ll}
    0 & \textrm{if $j=0$,}\\[2ex]
    v(j-1,\vet{k}) & \begin{array}[t]{@{}l@{}}\textrm{if $j\ge 1$ and}\\ \textrm{$w_j>k_i$ for all $i$,}\end{array}\\[4ex]
    \begin{array}[t]{@{}l@{}}\displaystyle \max \big\{ v(j-1,\vet{k}),\\ \quad p_j+\displaystyle\max_{i:\,w_j\le k_i} v(j-1,\vet{k}-w_j\vet{e}_i) \big\}\end{array} & \begin{array}[t]{@{}l@{}}\textrm{if $j\ge 1$ and}\\ \textrm{$w_j\le k_i$ for some $i$.}\end{array}
    \end{array} \right.
    $$

    The optimal value is $v(n,\vet{c})$. The tables $s$ store $s[j][\vet{k}]=i$ if item $j$ is inserted into knapsack $i$, and $0$ if it is left out; an optimal solution is reconstructed from $j=n$ and $\vet{k}=\vet{c}$ with $a_j\leftarrow s[j][\vet{k}]$ and, if $a_j=i\ge 1$, $\vet{k}\leftarrow\vet{k}-w_j\vet{e}_i$.

<a id="esercizio-24-1"></a>

!!! esercizio "Exercise 24.1: Exercise 1: Multiple Knapsack Problem"

    Consider the following MKP instance, with $m=2$ knapsacks of capacities $c_1=3$ and $c_2=2$, and $3$ items with profits and weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j=1} & {j=2} & {j=3} \\
    \hline {p_j} & 8 & 7 & 6 \\
    {w_j} & 2 & 3 & 3 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm: for each item $j$, write the matrices $v[j][k_1][k_2]$ and $s[j][k_1][k_2]$, and show the computation of the cell $\vet{k}=\vet{c}$.

    2. Using the tables $s$, reconstruct an optimal solution as the vector $(a_1,a_2,a_3)$ of the knapsacks, and report the optimal value.

    3. Solve by enumeration the KP with the same items and capacity $c_1+c_2=5$, and compare its optimal value with the optimal value of the MKP.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. In each matrix there is one row for each $k_1$ and one column for each $k_2$; in $s$, $0$ means that item $j$ is left out, and $1$ or $2$ the knapsack into which it is inserted. In case of ties the first option is kept: item $j$ left out, then knapsack $1$.

        Item $j=1$, with $p_1=8$ and $w_1=2$: $v[1][(3,2)]=\max\{v[0][(3,2)],\,p_1+v[0][(1,2)],\,p_1+v[0][(3,0)]\}=\max\{0,\,8+0,\,8+0\}=8$; $v[1][(0,2)]=\max\{v[0][(0,2)],\,p_1+v[0][(0,0)]\}=\max\{0,\,8+0\}=8$.

        $$
        \begin{array}{l|rrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {8} \\
        {k_1=1} & {0} & {0} & {8} \\
        {k_1=2} & {8} & {8} & {8} \\
        {k_1=3} & {8} & {8} & {8} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {2} \\
        {k_1=1} & {0} & {0} & {2} \\
        {k_1=2} & {1} & {1} & {1} \\
        {k_1=3} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=7$ and $w_2=3$: $v[2][(3,2)]=\max\{v[1][(3,2)],\,p_2+v[1][(0,2)]\}=\max\{8,\,7+8\}=15$.

        $$
        \begin{array}{l|rrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {8} \\
        {k_1=1} & {0} & {0} & {8} \\
        {k_1=2} & {8} & {8} & {8} \\
        {k_1=3} & {8} & {8} & {15} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=6$ and $w_3=3$: $v[3][(3,2)]=\max\{v[2][(3,2)],\,p_3+v[2][(0,2)]\}=\max\{15,\,6+8\}=15$.

        $$
        \begin{array}{l|rrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {8} \\
        {k_1=1} & {0} & {0} & {8} \\
        {k_1=2} & {8} & {8} & {8} \\
        {k_1=3} & {8} & {8} & {15} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} \\
        \hline
        \end{array}
        $$

    2. Starting from $j=3$ and $\vet{k}=(3,2)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
        <th><span class="arithmatex">\(a[1]\)</span></th>
        <th><span class="arithmatex">\(a[2]\)</span></th>
        <th><span class="arithmatex">\(a[3]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(3,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((3,2)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(a[3]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(3,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((3,2)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td><span class="arithmatex">\(a[2]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (0,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,2)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu">2</td>
        <td>1</td>
        <td>0</td>
        <td><span class="arithmatex">\(a[1]\leftarrow 2\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (0,0)\)</span></td>
        </tr>
        </table></div>

        The vector $(2,1,0)$ is an optimal solution: knapsack $1$ contains the items $\{2\}$, of total weight $3=3\le c_1$, and knapsack $2$ the items $\{1\}$, of total weight $2=2\le c_2$. The optimal value is $v[3][(3,2)]=7+8=15$.

    3. The KP with capacity $5$ has optimal value $15$, equal to the optimal value of the MKP: here the upper bound given by the total capacity is tight.

<a id="esercizio-24-2"></a>

!!! esercizio "Exercise 24.2: Exercise 2: Multiple Knapsack Problem"

    Consider the following MKP instance, with $m=2$ knapsacks of capacities $c_1=4$ and $c_2=3$, and $3$ items with profits and weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j=1} & {j=2} & {j=3} \\
    \hline {p_j} & 7 & 3 & 8 \\
    {w_j} & 4 & 3 & 3 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm: for each item $j$, write the matrices $v[j][k_1][k_2]$ and $s[j][k_1][k_2]$, and show the computation of the cell $\vet{k}=\vet{c}$.

    2. Using the tables $s$, reconstruct an optimal solution as the vector $(a_1,a_2,a_3)$ of the knapsacks, and report the optimal value.

    3. Solve by enumeration the KP with the same items and capacity $c_1+c_2=7$, and compare its optimal value with the optimal value of the MKP.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. In each matrix there is one row for each $k_1$ and one column for each $k_2$; in $s$, $0$ means that item $j$ is left out, and $1$ or $2$ the knapsack into which it is inserted. In case of ties the first option is kept: item $j$ left out, then knapsack $1$.

        Item $j=1$, with $p_1=7$ and $w_1=4$: $v[1][(4,3)]=\max\{v[0][(4,3)],\,p_1+v[0][(0,3)]\}=\max\{0,\,7+0\}=7$; $v[1][(4,0)]=\max\{v[0][(4,0)],\,p_1+v[0][(0,0)]\}=\max\{0,\,7+0\}=7$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {7} & {7} & {7} & {7} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=3$ and $w_2=3$: $v[2][(4,3)]=\max\{v[1][(4,3)],\,p_2+v[1][(1,3)],\,p_2+v[1][(4,0)]\}=\max\{7,\,3+0,\,3+7\}=10$; $v[2][(4,0)]=\max\{v[1][(4,0)],\,p_2+v[1][(1,0)]\}=\max\{7,\,3+0\}=7$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {3} \\
        {k_1=1} & {0} & {0} & {0} & {3} \\
        {k_1=2} & {0} & {0} & {0} & {3} \\
        {k_1=3} & {3} & {3} & {3} & {3} \\
        {k_1=4} & {7} & {7} & {7} & {10} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {2} \\
        {k_1=1} & {0} & {0} & {0} & {2} \\
        {k_1=2} & {0} & {0} & {0} & {2} \\
        {k_1=3} & {1} & {1} & {1} & {1} \\
        {k_1=4} & {0} & {0} & {0} & {2} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=8$ and $w_3=3$: $v[3][(4,3)]=\max\{v[2][(4,3)],\,p_3+v[2][(1,3)],\,p_3+v[2][(4,0)]\}=\max\{10,\,8+3,\,8+7\}=15$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {8} \\
        {k_1=1} & {0} & {0} & {0} & {8} \\
        {k_1=2} & {0} & {0} & {0} & {8} \\
        {k_1=3} & {8} & {8} & {8} & {11} \\
        {k_1=4} & {8} & {8} & {8} & {15} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {2} \\
        {k_1=1} & {0} & {0} & {0} & {2} \\
        {k_1=2} & {0} & {0} & {0} & {2} \\
        {k_1=3} & {1} & {1} & {1} & {1} \\
        {k_1=4} & {1} & {1} & {1} & {2} \\
        \hline
        \end{array}
        $$

    2. Starting from $j=3$ and $\vet{k}=(4,3)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
        <th><span class="arithmatex">\(a[1]\)</span></th>
        <th><span class="arithmatex">\(a[2]\)</span></th>
        <th><span class="arithmatex">\(a[3]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(4,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((4,3)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td><span class="arithmatex">\(a[3]\leftarrow 2\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (4,0)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((4,0)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>2</td>
        <td><span class="arithmatex">\(a[2]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(4,0)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((4,0)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>2</td>
        <td><span class="arithmatex">\(a[1]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (0,0)\)</span></td>
        </tr>
        </table></div>

        The vector $(1,0,2)$ is an optimal solution: knapsack $1$ contains the items $\{1\}$, of total weight $4=4\le c_1$, and knapsack $2$ the items $\{3\}$, of total weight $3=3\le c_2$. The optimal value is $v[3][(4,3)]=7+8=15$.

    3. The KP with capacity $7$ has optimal value $15$, equal to the optimal value of the MKP: here the upper bound given by the total capacity is tight.

<a id="esercizio-24-3"></a>

!!! esercizio "Exercise 24.3: Exercise 3: Multiple Knapsack Problem"

    Consider the following MKP instance, with $m=2$ knapsacks of capacities $c_1=5$ and $c_2=2$, and $3$ items with profits and weights:

    $$
    \begin{array}{l|rrr}
    \hline  & {j=1} & {j=2} & {j=3} \\
    \hline {p_j} & 2 & 5 & 9 \\
    {w_j} & 2 & 3 & 4 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm: for each item $j$, write the matrices $v[j][k_1][k_2]$ and $s[j][k_1][k_2]$, and show the computation of the cell $\vet{k}=\vet{c}$.

    2. Using the tables $s$, reconstruct an optimal solution as the vector $(a_1,a_2,a_3)$ of the knapsacks, and report the optimal value.

    3. Solve by enumeration the KP with the same items and capacity $c_1+c_2=7$, and compare its optimal value with the optimal value of the MKP.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. In each matrix there is one row for each $k_1$ and one column for each $k_2$; in $s$, $0$ means that item $j$ is left out, and $1$ or $2$ the knapsack into which it is inserted. In case of ties the first option is kept: item $j$ left out, then knapsack $1$.

        Item $j=1$, with $p_1=2$ and $w_1=2$: $v[1][(5,2)]=\max\{v[0][(5,2)],\,p_1+v[0][(3,2)],\,p_1+v[0][(5,0)]\}=\max\{0,\,2+0,\,2+0\}=2$; $v[1][(1,2)]=\max\{v[0][(1,2)],\,p_1+v[0][(1,0)]\}=\max\{0,\,2+0\}=2$.

        $$
        \begin{array}{l|rrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {2} \\
        {k_1=1} & {0} & {0} & {2} \\
        {k_1=2} & {2} & {2} & {2} \\
        {k_1=3} & {2} & {2} & {2} \\
        {k_1=4} & {2} & {2} & {2} \\
        {k_1=5} & {2} & {2} & {2} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {2} \\
        {k_1=1} & {0} & {0} & {2} \\
        {k_1=2} & {1} & {1} & {1} \\
        {k_1=3} & {1} & {1} & {1} \\
        {k_1=4} & {1} & {1} & {1} \\
        {k_1=5} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=5$ and $w_2=3$: $v[2][(5,2)]=\max\{v[1][(5,2)],\,p_2+v[1][(2,2)]\}=\max\{2,\,5+2\}=7$; $w_2=3$ fits in no knapsack, so $v[2][(1,2)]=v[1][(1,2)]=2$.

        $$
        \begin{array}{l|rrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {2} \\
        {k_1=1} & {0} & {0} & {2} \\
        {k_1=2} & {2} & {2} & {2} \\
        {k_1=3} & {5} & {5} & {7} \\
        {k_1=4} & {5} & {5} & {7} \\
        {k_1=5} & {7} & {7} & {7} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} \\
        {k_1=3} & {1} & {1} & {1} \\
        {k_1=4} & {1} & {1} & {1} \\
        {k_1=5} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=9$ and $w_3=4$: $v[3][(5,2)]=\max\{v[2][(5,2)],\,p_3+v[2][(1,2)]\}=\max\{7,\,9+2\}=11$.

        $$
        \begin{array}{l|rrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {2} \\
        {k_1=1} & {0} & {0} & {2} \\
        {k_1=2} & {2} & {2} & {2} \\
        {k_1=3} & {5} & {5} & {7} \\
        {k_1=4} & {9} & {9} & {11} \\
        {k_1=5} & {9} & {9} & {11} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} \\
        \hline {k_1=0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} \\
        {k_1=4} & {1} & {1} & {1} \\
        {k_1=5} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

    2. Starting from $j=3$ and $\vet{k}=(5,2)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
        <th><span class="arithmatex">\(a[1]\)</span></th>
        <th><span class="arithmatex">\(a[2]\)</span></th>
        <th><span class="arithmatex">\(a[3]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(5,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((5,2)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(a[3]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (1,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((1,2)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>1</td>
        <td><span class="arithmatex">\(a[2]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(1,2)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((1,2)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td>1</td>
        <td><span class="arithmatex">\(a[1]\leftarrow 2\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (1,0)\)</span></td>
        </tr>
        </table></div>

        The vector $(2,0,1)$ is an optimal solution: knapsack $1$ contains the items $\{3\}$, of total weight $4=4\le c_1$, and knapsack $2$ the items $\{1\}$, of total weight $2=2\le c_2$. The optimal value is $v[3][(5,2)]=9+2=11$.

    3. The KP with capacity $7$ has optimal value $14>11$, with the items $\{2,3\}$ of total weight $7\le 7$. These items cannot be divided between the two knapsacks of capacities $5$ and $2$: the KP with the total capacity gives only an upper bound on the optimal value of the MKP.

<a id="esercizio-24-4"></a>

!!! esercizio "Exercise 24.4: Exercise 4: Multiple Knapsack Problem"

    Consider the following MKP instance, with $m=2$ knapsacks of capacities $c_1=4$ and $c_2=3$, and $4$ items with profits and weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {p_j} & 5 & 2 & 6 & 6 \\
    {w_j} & 2 & 1 & 2 & 4 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm: for each item $j$, write the matrices $v[j][k_1][k_2]$ and $s[j][k_1][k_2]$, and show the computation of the cell $\vet{k}=\vet{c}$.

    2. Using the tables $s$, reconstruct an optimal solution as the vector $(a_1,a_2,a_3,a_4)$ of the knapsacks, and report the optimal value.

    3. Solve by enumeration the KP with the same items and capacity $c_1+c_2=7$, and compare its optimal value with the optimal value of the MKP.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. In each matrix there is one row for each $k_1$ and one column for each $k_2$; in $s$, $0$ means that item $j$ is left out, and $1$ or $2$ the knapsack into which it is inserted. In case of ties the first option is kept: item $j$ left out, then knapsack $1$.

        Item $j=1$, with $p_1=5$ and $w_1=2$: $v[1][(4,3)]=\max\{v[0][(4,3)],\,p_1+v[0][(2,3)],\,p_1+v[0][(4,1)]\}=\max\{0,\,5+0,\,5+0\}=5$; $w_1=2$ fits in no knapsack, so $v[1][(0,0)]=v[0][(0,0)]=0$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {5} & {5} \\
        {k_1=1} & {0} & {0} & {5} & {5} \\
        {k_1=2} & {5} & {5} & {5} & {5} \\
        {k_1=3} & {5} & {5} & {5} & {5} \\
        {k_1=4} & {5} & {5} & {5} & {5} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {2} & {2} \\
        {k_1=1} & {0} & {0} & {2} & {2} \\
        {k_1=2} & {1} & {1} & {1} & {1} \\
        {k_1=3} & {1} & {1} & {1} & {1} \\
        {k_1=4} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=2$ and $w_2=1$: $v[2][(4,3)]=\max\{v[1][(4,3)],\,p_2+v[1][(3,3)],\,p_2+v[1][(4,2)]\}=\max\{5,\,2+5,\,2+5\}=7$; $v[2][(0,1)]=\max\{v[1][(0,1)],\,p_2+v[1][(0,0)]\}=\max\{0,\,2+0\}=2$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {2} & {5} & {7} \\
        {k_1=1} & {2} & {2} & {7} & {7} \\
        {k_1=2} & {5} & {7} & {7} & {7} \\
        {k_1=3} & {7} & {7} & {7} & {7} \\
        {k_1=4} & {7} & {7} & {7} & {7} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {2} & {0} & {2} \\
        {k_1=1} & {1} & {1} & {1} & {1} \\
        {k_1=2} & {0} & {2} & {1} & {1} \\
        {k_1=3} & {1} & {1} & {1} & {1} \\
        {k_1=4} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=6$ and $w_3=2$: $v[3][(4,3)]=\max\{v[2][(4,3)],\,p_3+v[2][(2,3)],\,p_3+v[2][(4,1)]\}=\max\{7,\,6+7,\,6+7\}=13$; $v[3][(0,3)]=\max\{v[2][(0,3)],\,p_3+v[2][(0,1)]\}=\max\{7,\,6+2\}=8$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {2} & {6} & {8} \\
        {k_1=1} & {2} & {2} & {8} & {8} \\
        {k_1=2} & {6} & {8} & {11} & {13} \\
        {k_1=3} & {8} & {8} & {13} & {13} \\
        {k_1=4} & {11} & {13} & {13} & {13} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {2} & {2} \\
        {k_1=1} & {0} & {0} & {2} & {2} \\
        {k_1=2} & {1} & {1} & {1} & {1} \\
        {k_1=3} & {1} & {1} & {1} & {1} \\
        {k_1=4} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=4$, with $p_4=6$ and $w_4=4$: $v[4][(4,3)]=\max\{v[3][(4,3)],\,p_4+v[3][(0,3)]\}=\max\{13,\,6+8\}=14$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {2} & {6} & {8} \\
        {k_1=1} & {2} & {2} & {8} & {8} \\
        {k_1=2} & {6} & {8} & {11} & {13} \\
        {k_1=3} & {8} & {8} & {13} & {13} \\
        {k_1=4} & {11} & {13} & {13} & {14} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {0} & {0} & {0} & {1} \\
        \hline
        \end{array}
        $$

    2. Starting from $j=4$ and $\vet{k}=(4,3)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
        <th><span class="arithmatex">\(a[1]\)</span></th>
        <th><span class="arithmatex">\(a[2]\)</span></th>
        <th><span class="arithmatex">\(a[3]\)</span></th>
        <th><span class="arithmatex">\(a[4]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(4,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((4,3)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">1</td>
        <td><span class="arithmatex">\(a[4]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (0,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((0,3)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>1</td>
        <td><span class="arithmatex">\(a[3]\leftarrow 2\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (0,1)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((0,1)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(a[2]\leftarrow 2\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (0,0)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((0,0)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td class="cella-blu">0</td>
        <td>2</td>
        <td>2</td>
        <td>1</td>
        <td><span class="arithmatex">\(a[1]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(0,0)\)</span></td>
        </tr>
        </table></div>

        The vector $(0,2,2,1)$ is an optimal solution: knapsack $1$ contains the items $\{4\}$, of total weight $4=4\le c_1$, and knapsack $2$ the items $\{2,3\}$, of total weight $1+2=3\le c_2$. The optimal value is $v[4][(4,3)]=6+2+6=14$.

    3. The KP with capacity $7$ has optimal value $14$, equal to the optimal value of the MKP: here the upper bound given by the total capacity is tight.

<a id="esercizio-24-5"></a>

!!! esercizio "Exercise 24.5: Exercise 5: Multiple Knapsack Problem"

    Consider the following MKP instance, with $m=2$ knapsacks of capacities $c_1=5$ and $c_2=3$, and $4$ items with profits and weights:

    $$
    \begin{array}{l|rrrr}
    \hline  & {j=1} & {j=2} & {j=3} & {j=4} \\
    \hline {p_j} & 5 & 3 & 7 & 2 \\
    {w_j} & 4 & 4 & 2 & 2 \\
    \hline
    \end{array}
    $$

    **Questions**

    1. Execute the bottom-up DP algorithm: for each item $j$, write the matrices $v[j][k_1][k_2]$ and $s[j][k_1][k_2]$, and show the computation of the cell $\vet{k}=\vet{c}$.

    2. Using the tables $s$, reconstruct an optimal solution as the vector $(a_1,a_2,a_3,a_4)$ of the knapsacks, and report the optimal value.

    3. Solve by enumeration the KP with the same items and capacity $c_1+c_2=8$, and compare its optimal value with the optimal value of the MKP.

??? soluzione "Solution"

    The recurrence and the conventions are those of the box at the beginning of these exercises.

    1. The row $j=0$ is $v[0][\vet{k}]=0$ for every $\vet{k}$. In each matrix there is one row for each $k_1$ and one column for each $k_2$; in $s$, $0$ means that item $j$ is left out, and $1$ or $2$ the knapsack into which it is inserted. In case of ties the first option is kept: item $j$ left out, then knapsack $1$.

        Item $j=1$, with $p_1=5$ and $w_1=4$: $v[1][(5,3)]=\max\{v[0][(5,3)],\,p_1+v[0][(1,3)]\}=\max\{0,\,5+0\}=5$; $v[1][(5,1)]=\max\{v[0][(5,1)],\,p_1+v[0][(1,1)]\}=\max\{0,\,5+0\}=5$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {5} & {5} & {5} & {5} \\
        {k_1=5} & {5} & {5} & {5} & {5} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[1][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {1} & {1} & {1} & {1} \\
        {k_1=5} & {1} & {1} & {1} & {1} \\
        \hline
        \end{array}
        $$

        Item $j=2$, with $p_2=3$ and $w_2=4$: $v[2][(5,3)]=\max\{v[1][(5,3)],\,p_2+v[1][(1,3)]\}=\max\{5,\,3+0\}=5$; $v[2][(5,1)]=\max\{v[1][(5,1)],\,p_2+v[1][(1,1)]\}=\max\{5,\,3+0\}=5$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {5} & {5} & {5} & {5} \\
        {k_1=5} & {5} & {5} & {5} & {5} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[2][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {0} & {0} \\
        {k_1=3} & {0} & {0} & {0} & {0} \\
        {k_1=4} & {0} & {0} & {0} & {0} \\
        {k_1=5} & {0} & {0} & {0} & {0} \\
        \hline
        \end{array}
        $$

        Item $j=3$, with $p_3=7$ and $w_3=2$: $v[3][(5,3)]=\max\{v[2][(5,3)],\,p_3+v[2][(3,3)],\,p_3+v[2][(5,1)]\}=\max\{5,\,7+0,\,7+5\}=12$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {7} & {7} \\
        {k_1=1} & {0} & {0} & {7} & {7} \\
        {k_1=2} & {7} & {7} & {7} & {7} \\
        {k_1=3} & {7} & {7} & {7} & {7} \\
        {k_1=4} & {7} & {7} & {12} & {12} \\
        {k_1=5} & {7} & {7} & {12} & {12} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[3][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {2} & {2} \\
        {k_1=1} & {0} & {0} & {2} & {2} \\
        {k_1=2} & {1} & {1} & {1} & {1} \\
        {k_1=3} & {1} & {1} & {1} & {1} \\
        {k_1=4} & {1} & {1} & {2} & {2} \\
        {k_1=5} & {1} & {1} & {2} & {2} \\
        \hline
        \end{array}
        $$

        Item $j=4$, with $p_4=2$ and $w_4=2$: $v[4][(5,3)]=\max\{v[3][(5,3)],\,p_4+v[3][(3,3)],\,p_4+v[3][(5,1)]\}=\max\{12,\,2+7,\,2+7\}=12$.

        $$
        \begin{array}{l|rrrr}
        \hline {v[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {7} & {7} \\
        {k_1=1} & {0} & {0} & {7} & {7} \\
        {k_1=2} & {7} & {7} & {9} & {9} \\
        {k_1=3} & {7} & {7} & {9} & {9} \\
        {k_1=4} & {9} & {9} & {12} & {12} \\
        {k_1=5} & {9} & {9} & {12} & {12} \\
        \hline
        \end{array}
        $$

        $$
        \begin{array}{l|rrrr}
        \hline {s[4][k_1][k_2]} & {k_2=0} & {k_2=1} & {k_2=2} & {k_2=3} \\
        \hline {k_1=0} & {0} & {0} & {0} & {0} \\
        {k_1=1} & {0} & {0} & {0} & {0} \\
        {k_1=2} & {0} & {0} & {1} & {1} \\
        {k_1=3} & {0} & {0} & {1} & {1} \\
        {k_1=4} & {1} & {1} & {0} & {0} \\
        {k_1=5} & {1} & {1} & {0} & {0} \\
        \hline
        \end{array}
        $$

    2. Starting from $j=4$ and $\vet{k}=(5,3)$:

        <div class="tabella" markdown="0"><table>
        <tr>
        <th>Iteration</th>
        <th><span class="arithmatex">\(j\)</span></th>
        <th><span class="arithmatex">\(\vet{k}\)</span></th>
        <th><span class="arithmatex">\(s[j][\vet{k}]\)</span></th>
        <th><span class="arithmatex">\(a[1]\)</span></th>
        <th><span class="arithmatex">\(a[2]\)</span></th>
        <th><span class="arithmatex">\(a[3]\)</span></th>
        <th><span class="arithmatex">\(a[4]\)</span></th>
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
        <td><span class="arithmatex">\(\vet{k}=(5,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\((5,3)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td><span class="arithmatex">\(a[4]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(5,3)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\((5,3)\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td>0</td>
        <td>0</td>
        <td class="cella-blu">2</td>
        <td>0</td>
        <td><span class="arithmatex">\(a[3]\leftarrow 2\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (5,1)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(3\)</span></td>
        <td><span class="arithmatex">\(2\)</span></td>
        <td><span class="arithmatex">\((5,1)\)</span></td>
        <td><span class="arithmatex">\(0\)</span></td>
        <td>0</td>
        <td class="cella-blu">0</td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(a[2]\leftarrow 0\)</span>, <span class="arithmatex">\(\vet{k}=(5,1)\)</span></td>
        </tr>
        <tr>
        <td><span class="arithmatex">\(4\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td><span class="arithmatex">\((5,1)\)</span></td>
        <td><span class="arithmatex">\(1\)</span></td>
        <td class="cella-blu">1</td>
        <td>0</td>
        <td>2</td>
        <td>0</td>
        <td><span class="arithmatex">\(a[1]\leftarrow 1\)</span>, <span class="arithmatex">\(\vet{k}\leftarrow (1,1)\)</span></td>
        </tr>
        </table></div>

        The vector $(1,0,2,0)$ is an optimal solution: knapsack $1$ contains the items $\{1\}$, of total weight $4=4\le c_1$, and knapsack $2$ the items $\{3\}$, of total weight $2=2\le c_2$. The optimal value is $v[4][(5,3)]=5+7=12$.

    3. The KP with capacity $8$ has optimal value $14>12$, with the items $\{1,3,4\}$ of total weight $8\le 8$. These items cannot be divided between the two knapsacks of capacities $5$ and $3$: the KP with the total capacity gives only an upper bound on the optimal value of the MKP.
